#!/usr/bin/env node
/**
 * benchmark-paper.mjs — MCM/ICM 论文顶尖对标工具
 *
 * 用途：读取论文文本，计算关键指标，与 O 奖/顶尖 O 奖基准对比，
 *      给出"距离顶尖还差多少"的具体建议。
 *
 * 数据基准来自 502 篇真实语料（work/metrics.json）：
 *   - 普通 O 奖中位数：摘要 29 数字，8 图，2 表，2 公式
 *   - 顶尖 O 奖（前 10%）：摘要 93 数字，15 图，5 表，6 公式
 *
 * 用法：
 *   node benchmark-paper.mjs <paper.txt> [--top]
 *
 *   --top 模式：按顶尖 O 奖基准评估（默认按普通 O 奖）
 *
 * 输出：
 *   - 控制台：指标对比表 + 建议
 *   - 可选：--json 输出 JSON
 *
 * 依赖：无（纯 Node.js）
 */

import fs from 'node:fs';

const args = process.argv.slice(2);
const filePath = args.find(a => !a.startsWith('--'));
const topMode = args.includes('--top');
const jsonMode = args.includes('--json');

if (!filePath) {
  console.error('Usage: node benchmark-paper.mjs <paper.txt> [--top] [--json]');
  console.error('  --top  按顶尖 O 奖（前 10%）基准评估');
  console.error('  --json 输出 JSON');
  process.exit(1);
}

const text = fs.readFileSync(filePath, 'utf-8');

// ─── 基准数据（来自 502 篇真实语料分析）───
const benchmarks = {
  normal: {
    name: '普通 O 奖（中位数）',
    summaryDigits: 29,
    figs: 8,
    tabs: 2,
    eqs: 2,
    refs: 9,
    sens: 0.64,   // 64% 有灵敏度
    strength: 0.95,
  },
  top: {
    name: '顶尖 O 奖（前 10%）',
    summaryDigits: 93,
    figs: 15,
    tabs: 5,
    eqs: 6,
    refs: 12,
    sens: 1.0,    // 100% 有灵敏度
    strength: 1.0,
  },
};

const bm = topMode ? benchmarks.top : benchmarks.normal;

// ─── 提取指标 ───

// 1. 页数
const pages = (text.match(/=== PAGE \d+ ===/g) || []).length;

// 2. 摘要数字
const summaryMatch = text.match(/Summary[\s\S]*?(?=Contents|1\s+Introduction|=== PAGE \d+ ===)/i);
const summaryText = summaryMatch ? summaryMatch[0] : '';
const summaryDigits = summaryText.match(/\d+(?:\.\d+)?%?/g)?.length || 0;

// 3. 图表数（Figure N, Table N）
const figs = new Set(text.match(/\bFigure\s*\d+/gi)?.map(m => m.match(/\d+/)[0])).size;
const tabs = new Set(text.match(/\bTable\s*\d+/gi)?.map(m => m.match(/\d+/)[0])).size;

// 4. 公式数（编号方程）
const eqs = new Set(text.match(/\(\d+\)/g)?.map(m => m.match(/\d+/)[0])).size;

// 5. 参考文献
const refMatches = text.match(/\[\d+\]/g) || [];
const refs = new Set(refMatches).size;

// 6. 灵敏度章节
const sens = /\bsensitivity\b/i.test(text) ? 1 : 0;

// 7. 优劣势章节
const strength = /\bstrengths?\b/i.test(text) && /\bweaknesses?\b/i.test(text) ? 1 : 0;

// ─── 计算得分 ───
const metrics = {
  summaryDigits, figs, tabs, eqs, refs, sens, strength, pages,
};

const comparisons = [
  { key: 'summaryDigits', label: '摘要数字', user: summaryDigits, target: bm.summaryDigits },
  { key: 'figs', label: '图表数', user: figs, target: bm.figs },
  { key: 'tabs', label: '表格数', user: tabs, target: bm.tabs },
  { key: 'eqs', label: '公式数', user: eqs, target: bm.eqs },
  { key: 'refs', label: '参考文献', user: refs, target: bm.refs },
  { key: 'sens', label: '灵敏度分析', user: sens, target: bm.sens, isBool: true },
  { key: 'strength', label: '优劣势章节', user: strength, target: bm.strength, isBool: true },
];

// 评分：每项达标得 1 分，总分 7
let score = 0;
comparisons.forEach(c => {
  if (c.isBool) {
    if (c.user >= c.target) score++;
  } else {
    const ratio = c.user / c.target;
    if (ratio >= 1) score += 1;
    else if (ratio >= 0.8) score += 0.5;
    else if (ratio >= 0.5) score += 0.25;
  }
});

// ─── 建议 ───
const suggestions = [];

if (summaryDigits < bm.summaryDigits) {
  const gap = bm.summaryDigits - summaryDigits;
  suggestions.push(`摘要数字不足：当前 ${summaryDigits} 个，目标 ${bm.summaryDigits} 个（差 ${gap} 个）。每个 task 应给出 5+ 个具体数字（参数 + 结果 + 对比 + 改进率 + 区间）。`);
}

if (figs < bm.figs) {
  const gap = bm.figs - figs;
  suggestions.push(`图表数不足：当前 ${figs} 张，目标 ${bm.figs} 张（差 ${gap} 张）。每个 task 至少 3 张图（模型示意 + 结果 + 验证）。`);
}

if (tabs < bm.tabs) {
  suggestions.push(`表格数不足：当前 ${tabs} 个，目标 ${bm.tabs} 个。参数表、结果表、对比表是必备。`);
}

if (eqs < bm.eqs) {
  suggestions.push(`公式数不足：当前 ${eqs} 个，目标 ${bm.eqs} 个。每个模型至少 3-5 个编号方程。`);
}

if (refs < bm.refs) {
  suggestions.push(`参考文献不足：当前 ${refs} 篇，目标 ${bm.refs} 篇。至少 3 篇来自 5 年内。`);
}

if (!sens) {
  suggestions.push(`缺少灵敏度分析章节（致命缺陷）。70% 的 Meritorious 论文因此降级。至少 2 种方法（参数扫描 + 情景分析）。`);
}

if (!strength) {
  suggestions.push(`缺少优劣势章节。O 奖 95% 有此章节。Strengths 3 条 + Weaknesses 3 条（带解决方向）。`);
}

// ─── 输出 ───

if (jsonMode) {
  console.log(JSON.stringify({
    file: filePath,
    benchmark: bm.name,
    metrics,
    score: score.toFixed(2),
    maxScore: 7,
    comparisons,
    suggestions,
  }, null, 2));
} else {
  const line = '='.repeat(60);
  console.log(line);
  console.log(`MCM/ICM 论文顶尖对标报告（${bm.name}）`);
  console.log(line);
  console.log(`文件: ${filePath}`);
  console.log(`页数: ${pages}`);
  console.log('');
  console.log('指标对比:');
  console.log('');
  console.log('| 指标 | 当前 | 目标 | 状态 |');
  console.log('|---|---|---|---|');
  comparisons.forEach(c => {
    let status;
    if (c.isBool) {
      status = c.user >= c.target ? '✅ 达标' : '❌ 缺失';
    } else {
      const ratio = c.user / c.target;
      if (ratio >= 1) status = '✅ 超标';
      else if (ratio >= 0.8) status = '🟡 接近';
      else if (ratio >= 0.5) status = '🟠 不足';
      else status = '🔴 严重不足';
    }
    console.log(`| ${c.label} | ${c.user} | ${c.target} | ${status} |`);
  });
  console.log('');
  console.log(`评分: ${score.toFixed(2)} / 7.00`);
  console.log('');

  if (score >= 6) {
    console.log('🎯 达到顶尖 O 奖水平！');
  } else if (score >= 4) {
    console.log('✅ 达到普通 O 奖水平，仍有提升空间。');
  } else if (score >= 2) {
    console.log('🟡 接近 Meritorious 水平，需加强。');
  } else {
    console.log('🔴 建议大幅改进。');
  }

  console.log('');
  console.log('改进建议:');
  if (suggestions.length === 0) {
    console.log('  ✅ 所有指标均达标，无需改进。');
  } else {
    suggestions.forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
  }
  console.log(line);
}
