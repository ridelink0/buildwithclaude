#!/usr/bin/env node
/**
 * parameter-sweep.mjs — MCM/ICM 论文灵敏度分析生成器
 *
 * 用途：对给定的数学模型函数进行参数扫描，输出 CSV 结果表和敏感性排序。
 *      生成的 CSV 可直接导入 Excel/Python/Matlab 作图。
 *
 * 用法：
 *   node parameter-sweep.mjs --model=model.js --params=params.json --out=sweep.csv
 *
 * 或（内联模式，用于快速测试）：
 *   node parameter-sweep.mjs --inline "r=0.1:0.5:0.02;K=100:1000:100;alpha=0.1:1.0:0.1" --model=model.js --out=sweep.csv
 *
 * 模型文件（model.js）应导出一个函数：
 *   module.exports = function(params) {
 *     const { r, K, alpha } = params;
 *     // ... 返回关键输出指标 ...
 *     return { tb: 206.5, cov: 0.1526, s_w: 3.42 };
 *   };
 *
 * 参数配置文件（params.json）：
 *   {
 *     "r":     { "min": 0.1, "max": 0.5, "step": 0.02 },
 *     "K":     { "min": 100, "max": 1000, "step": 100 },
 *     "alpha": { "min": 0.1, "max": 1.0, "step": 0.1 }
 *   }
 *
 * 输出：
 *   sweep.csv      — 参数网格 + 输出指标
 *   sweep-report.md — 敏感性排序报告（Markdown 表格）
 *
 * 依赖：无（纯 Node.js，仅用内置 fs/path）
 */

import fs from 'node:fs';
import path from 'node:path';

// ─── 命令行参数解析（支持 --key=value 和 --key value 两种形式）───
const args = process.argv.slice(2);
const argMap = {};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (!a.startsWith('--')) continue;
  const eq = a.indexOf('=');
  if (eq > 0) {
    // --key=value
    argMap[a.slice(2, eq)] = a.slice(eq + 1);
  } else {
    // --key value
    const key = a.slice(2);
    if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
      argMap[key] = args[i + 1];
      i++;
    }
  }
}
const getArg = (name, dflt = null) => argMap[name] ?? dflt;

const modelPath = getArg('model');
const paramsPath = getArg('params');
const inlineParams = getArg('inline');
const outCsv = getArg('out', 'sweep.csv');
const outReport = getArg('report', 'sweep-report.md');

if (!modelPath) {
  console.error('Usage: node parameter-sweep.mjs --model=<model.js> --params=<params.json> --out=<sweep.csv> [--report=<sweep-report.md>]');
  console.error('      node parameter-sweep.mjs --model=<model.js> --inline="r=0.1:0.5:0.02;K=100:1000:100" --out=<sweep.csv>');
  process.exit(1);
}

// ─── 加载模型 ───
import { pathToFileURL } from 'node:url';

const modelFn = await (async () => {
  const m = await import(pathToFileURL(path.resolve(modelPath)).href);
  return m.default || m;
})();

// ─── 解析参数配置 ───
const parseInline = (s) => {
  const cfg = {};
  for (const tok of s.split(';').map(t => t.trim()).filter(Boolean)) {
    const [name, spec] = tok.split('=');
    const [min, max, step] = spec.split(':').map(Number);
    cfg[name.trim()] = { min, max, step };
  }
  return cfg;
};

const params = inlineParams
  ? parseInline(inlineParams)
  : JSON.parse(fs.readFileSync(paramsPath, 'utf-8'));

// ─── 生成参数网格 ───
const ranges = {};
for (const [name, { min, max, step }] of Object.entries(params)) {
  const vals = [];
  for (let v = min; v <= max + step * 0.001; v += step) {
    vals.push(Number(v.toFixed(10)));
  }
  ranges[name] = vals;
}

// ─── 计算网格 ───
const keys = Object.keys(params);
const combos = [];
const cartesian = (arrs, idx = 0, acc = []) => {
  if (idx === arrs.length) return acc.concat([[]]);
  const res = [];
  for (const v of arrs[idx]) {
    for (const rest of cartesian(arrs, idx + 1)) {
      res.push([v, ...rest]);
    }
  }
  return res;
};
const grid = cartesian(Object.values(ranges));

for (const combo of grid) {
  const p = {};
  keys.forEach((k, i) => { p[k] = combo[i]; });
  let outputs;
  try {
    outputs = modelFn(p);
  } catch (e) {
    outputs = {};
    outputs.__error = e.message;
  }
  combos.push({ ...p, ...outputs });
}

// ─── 写出 CSV ───
const outKeys = [...new Set([...keys, ...Object.keys(combos[0] || {})].filter(k => k !== '__error'))];
const csvHeader = outKeys.join(',');
const csvRows = combos.map(row =>
  outKeys.map(k => {
    const v = row[k];
    return typeof v === 'number' ? v.toPrecision(6) : String(v);
  }).join(',')
);
fs.writeFileSync(outCsv, csvHeader + '\n' + csvRows.join('\n'));
console.log(`✓ CSV 写出: ${outCsv}  (${combos.length} 行, ${outKeys.length} 列)`);

// ─── 敏感性排序（对每个输出指标做参数扰动分析，排除参数键本身）───
const paramSet = new Set(keys);
const numericOutputs = outKeys.filter(k => typeof combos[0]?.[k] === 'number' && k !== '__error' && !paramSet.has(k));
const errorCount = combos.filter(r => r.__error).length;

let report = `# 参数扫描报告\n\n`;
report += `- 模型: \`${modelPath}\`\n`;
report += `- 参数: ${keys.join(', ')}\n`;
report += `- 网格规模: ${combos.length}\n`;
if (errorCount > 0) {
  report += `- ⚠️ 模型执行错误: ${errorCount} 次\n`;
}
report += `- 输出指标: ${numericOutputs.join(', ')}\n\n`;

report += `## 敏感性排序（参数重要性）\n\n`;
report += `对每个输出指标，计算各参数在扫描范围内的相对变化率。\n\n`;

for (const outKey of numericOutputs) {
  const outVals = combos.filter(r => typeof r[outKey] === 'number').map(r => r[outKey]);
  if (outVals.length < 2) continue;

  const outMean = outVals.reduce((a, b) => a + b, 0) / outVals.length;
  const outRange = Math.max(...outVals) - Math.min(...outVals);
  const outRel = outRange / (Math.abs(outMean) + 1e-12);

  const paramSens = [];
  for (const pk of keys) {
    const fixed = {};
    for (const k of keys) fixed[k] = (params[k].min + params[k].max) / 2;
    const lo = { ...fixed, [pk]: params[pk].min };
    const hi = { ...fixed, [pk]: params[pk].max };
    let yLo, yHi;
    try {
      yLo = modelFn(lo)[outKey];
      yHi = modelFn(hi)[outKey];
    } catch {
      continue;
    }
    if (typeof yLo !== 'number' || typeof yHi !== 'number') continue;
    const yMean = (yLo + yHi) / 2;
    const rel = Math.abs(yHi - yLo) / (Math.abs(yMean) + 1e-12);
    paramSens.push({ param: pk, sensitivity: rel });
  }
  paramSens.sort((a, b) => b.sensitivity - a.sensitivity);

  report += `### ${outKey}\n\n`;
  report += `总变化率: ${(outRel * 100).toFixed(2)}%\n\n`;
  report += `| 排名 | 参数 | 敏感性 | 结论 |\n`;
  report += `|---|---|---|---|\n`;
  paramSens.forEach((p, i) => {
    const lvl = p.sensitivity > 0.3 ? '🔴 高度敏感' :
                p.sensitivity > 0.1 ? '🟡 中度敏感' :
                '🟢 稳健';
    report += `| ${i + 1} | \`${p.param}\` | ${(p.sensitivity * 100).toFixed(2)}% | ${lvl} |\n`;
  });
  report += '\n';
}

report += `---\n\n`;
report += `## 结论模板（复制到论文）\n\n`;
report += `> 参考 2023 A O 奖（干旱-植物群落）：灵敏度章节应至少给出 1 个敏感参数 +\n`;
report += `> 1 个稳健参数的明确结论，并给出"实际应用中如何处置"的建议。\n\n`;

if (numericOutputs.length > 0) {
  const firstKey = numericOutputs[0];
  const firstVals = combos.filter(r => typeof r[firstKey] === 'number').map(r => r[firstKey]);
  const firstMean = firstVals.reduce((a, b) => a + b, 0) / Math.max(firstVals.length, 1);
  const firstRange = Math.max(...firstVals) - Math.min(...firstVals);
  const firstRel = firstRange / (Math.abs(firstMean) + 1e-12);

  const isSensitive = firstRel > 0.1; // >10% 视为敏感
  const verb = isSensitive ? 'changes' : 'changes';
  const qualifier = isSensitive ? '' : 'less than ';
  const conclusion = isSensitive
    ? `is sensitive to parameter variations: ${firstKey} changes by ${(firstRel * 100).toFixed(1)}% across the parameter sweep. This parameter must be measured with high accuracy in practice.`
    : `is robust with respect to parameter variations: ${firstKey} changes by less than ${(firstRel * 100).toFixed(1)}% across the parameter sweep.`;

  report += `示例结论句（基于 \`${firstKey}\`，变化率 ${(firstRel * 100).toFixed(1)}%）：\n\n`;
  report += `> "Sensitivity analysis shows that the model ${conclusion}"\n`;
}

report += `\n---\n\n`;
report += `## 与论文的一致性\n\n`;
report += `- 灵敏度章节应独立成节（编号 6 或 7）\n`;
report += `- 至少覆盖 3 个参数\n`;
report += `- 结论句明确"稳健/敏感"二选一\n`;
report += `- 用 check-paper.mjs 验证章节存在性\n`;

fs.writeFileSync(outReport, report);
console.log(`✓ 报告写出: ${outReport}`);

// ─── 汇总 ───
console.log(`\n扫描完成:`);
console.log(`  组合数: ${combos.length}`);
console.log(`  数值输出: ${numericOutputs.length} 个`);
console.log(`  错误次数: ${errorCount}`);
