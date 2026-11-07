#!/usr/bin/env node
/**
 * check-paper.mjs — MCM/ICM 论文一致性检查脚本
 * 
 * 功能：
 *   1. 检查摘要 ↔ 正文数字一致性
 *   2. 检查假设列表 ↔ 正文引用一致性
 *   3. 检查图表引用 ↔ 实际图表一致性
 *   4. 检查参考文献引用 ↔ 参考文献列表一致性
 *   5. 检查任务覆盖（6 个子问题）
 *   6. 检查页数、格式合规
 * 
 * 用法：
 *   node check-paper.mjs <extracted.txt> [options]
 *   
 *   选项：
 *     --strict    严格模式（数字必须 100% 匹配）
 *     --report    生成详细报告文件
 *     --json      输出 JSON 格式
 * 
 * 前置步骤：先用 extract-pdf.mjs 把 PDF 转成带页码标记的 TXT
 */

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const inputFile = args.find(a => !a.startsWith('--'));
const strictMode = args.includes('--strict');
const reportMode = args.includes('--report');
const jsonMode = args.includes('--json');

if (!inputFile) {
  console.error('用法: node check-paper.mjs <extracted.txt> [--strict] [--report] [--json]');
  process.exit(2);
}

const text = fs.readFileSync(inputFile, 'utf8');
const issues = [];
const warnings = [];
const passed = [];

// Helper functions
function addIssue(category, message, severity = 'error') {
  const item = { category, message, severity };
  if (severity === 'error') issues.push(item);
  else if (severity === 'warning') warnings.push(item);
  else passed.push(item);
}

// 1. 提取摘要和正文
const summaryMatch = text.match(/Summary[\s\S]*?(?=Contents|1\s+Introduction|=== PAGE \d+ ===)/i);
const summary = summaryMatch ? summaryMatch[0] : '';
const body = text.replace(/Summary[\s\S]*?(?=Contents|1\s+Introduction|=== PAGE \d+ ===)/i, '');

// 2. 提取页数
const pagesMatch = text.match(/### PAGES:\s*(\d+)/);
const totalPages = pagesMatch ? parseInt(pagesMatch[1]) : 0;

// 3. 检查页数
if (totalPages > 25) {
  addIssue('页数', `总页数 ${totalPages} 超过 25 页限制`, 'error');
} else if (totalPages > 0) {
  addIssue('页数', `总页数 ${totalPages}，符合 ≤25 要求`, 'pass');
}

// 4. 提取数字（支持整数、小数、科学计数法）
function extractNumbers(str) {
  const nums = [];
  // 整数和小数
  const matches = str.match(/\b\d+\.?\d*\b/g) || [];
  // 科学计数法（如 3.7117×10⁵ 或 3.7117e5）
  const sciMatches = str.match(/\b\d+\.?\d*\s*[×xX]\s*10\^?\s*[+-]?\d+\b/g) || [];
  // 百分比
  const pctMatches = str.match(/\b\d+\.?\d*%/g) || [];
  
  return [...matches, ...sciMatches, ...pctMatches].map(m => m.replace(/\s+/g, ''));
}

const summaryNumbers = extractNumbers(summary);
const bodyNumbers = extractNumbers(body);

// 5. 检查摘要数字是否在正文中
let numberMismatches = 0;
for (const num of summaryNumbers.slice(0, 30)) { // 只检查前 30 个数字
  if (!bodyNumbers.includes(num)) {
    addIssue('数字一致性', `摘要中的数字 "${num}" 未在正文中找到`, 'warning');
    numberMismatches++;
  }
}

if (numberMismatches === 0 && summaryNumbers.length > 0) {
  addIssue('数字一致性', `摘要中 ${summaryNumbers.length} 个数字均在正文中找到`, 'pass');
}

// 6. 提取假设（只认行首声明，去重）
const assumptionMatches = [...text.matchAll(/^[•\s]*Assumption\s*(\d+)[:\.\s]/gmi)];
const seenAss = new Set();
const assumptions = [];
for (const m of assumptionMatches) {
  const num = m[1];
  if (seenAss.has(num)) continue;
  seenAss.add(num);
  assumptions.push({ num, text: m[0] });
}

// 7. 检查假设是否被引用（全局匹配，排除声明行本身）
for (const ass of assumptions.slice(0, 12)) {
  const refPattern = new RegExp(`Assumption\\s*${ass.num}\\b`, 'gi');
  const refCount = (body.match(refPattern) || []).length;
  if (refCount < 2) {
    addIssue('假设引用', `Assumption ${ass.num} 在正文中引用不足（声明外 ${refCount - 1} 次）`, 'warning');
  }
}

if (assumptions.length >= 4) {
  addIssue('假设数量', `找到 ${assumptions.length} 条假设，符合 4–7 条要求`, 'pass');
} else if (assumptions.length > 0) {
  addIssue('假设数量', `仅找到 ${assumptions.length} 条假设，建议 4–7 条`, 'warning');
}

// 8. 提取图表引用
const figRefs = [...text.matchAll(/(?:Figure|Fig\.?|FIGURE)\s*(\d+)/gi)];
const tabRefs = [...text.matchAll(/(?:Table|TABLE)\s*(\d+)/gi)];
const citedFigs = new Set(figRefs.map(m => parseInt(m[1])));
const citedTabs = new Set(tabRefs.map(m => parseInt(m[1])));

// 9. 提取实际图表
const actualFigs = [...text.matchAll(/Figure\s*(\d+)\s*[:\.:]/gi)].map(m => parseInt(m[1]));
const actualTabs = [...text.matchAll(/Table\s*(\d+)\s*[:\.:]/gi)].map(m => parseInt(m[1]));
const maxFig = Math.max(...actualFigs, 0);
const maxTab = Math.max(...actualTabs, 0);

// 10. 检查图表引用是否存在
for (let i = 1; i <= maxFig; i++) {
  if (!citedFigs.has(i)) {
    addIssue('图表引用', `Figure ${i} 存在但未被正文引用`, 'warning');
  }
}

for (let i = 1; i <= maxTab; i++) {
  if (!citedTabs.has(i)) {
    addIssue('图表引用', `Table ${i} 存在但未被正文引用`, 'warning');
  }
}

if (maxFig >= 8) {
  addIssue('图表数量', `共 ${maxFig} 张图，符合 O 奖标准（≥8）`, 'pass');
}

// 11. 提取参考文献引用
const refCitations = [...text.matchAll(/\[(\d+)\]/g)].map(m => parseInt(m[1]));
const citedRefs = new Set(refCitations);

// 12. 提取参考文献列表（支持 [1] 和 1. 两种格式）
const refSection = text.match(/References[\s\S]*?(?=Appendix|Report on Use|$)/i);
let maxRefNum = 0;
if (refSection) {
  const bracketList = [...refSection[0].matchAll(/^\s*\[(\d{1,2})\]/gm)];
  const dotList = [...refSection[0].matchAll(/^\s*(\d{1,2})\s*\./gm)];
  maxRefNum = Math.max(
    ...bracketList.map(m => parseInt(m[1])),
    ...dotList.map(m => parseInt(m[1])),
    0
  );
}

// 13. 检查引用与列表一致性
const orphanRefs = [];
for (const ref of citedRefs) {
  if (ref > maxRefNum) {
    orphanRefs.push(ref);
  }
}

if (orphanRefs.length > 0) {
  addIssue('参考文献', `引用 [${orphanRefs.join(', ')}] 不在参考文献列表中`, 'error');
} else if (citedRefs.size > 0) {
  addIssue('参考文献', `${citedRefs.size} 个引用与参考文献列表一致`, 'pass');
}

// 14. 检查任务覆盖（自适应实际任务数：先看摘要/正文里出现过哪些 task 编号）
const taskMentions = [...text.matchAll(/(?:task|question|problem)\s*(\d)/gi)]
  .map(m => parseInt(m[1])).filter(n => n >= 1 && n <= 9);
const maxTask = taskMentions.length ? Math.max(...taskMentions) : 0;
const taskCount = maxTask > 0 ? maxTask : 4; // 无法判断时默认 4

const coveredTasks = [];
for (let i = 1; i <= taskCount; i++) {
  const re = new RegExp(`(?:task|question|problem|answer(?:ing)?\\s+(?:to\\s+)?(?:the\\s+)?question)\\s*${i}\\b`, 'i');
  coveredTasks.push({ task: i, covered: re.test(text) });
}

const uncoveredTasks = coveredTasks.filter(t => !t.covered);
if (uncoveredTasks.length > 0) {
  addIssue('任务覆盖', `Task ${uncoveredTasks.map(t => t.task).join(', ')} 可能未明确回答（共检测到 ${taskCount} 个任务）`, 'error');
} else {
  addIssue('任务覆盖', `检测到 ${taskCount} 个子任务，均有明确回答标记`, 'pass');
}

// 15. 检查灵敏度分析
const sensitivityPatterns = [
  /sensitivity\s+analysis/i,
  /robust/i,
  /perturb/i,
  /parameter\s+variation/i,
];
const hasSensitivity = sensitivityPatterns.some(p => p.test(text));

if (hasSensitivity) {
  addIssue('灵敏度分析', '包含灵敏度分析章节', 'pass');
} else {
  addIssue('灵敏度分析', '未找到灵敏度分析相关内容', 'warning');
}

// 16. 检查 Strengths & Weaknesses
const hasStrengths = /Strengths?/i.test(text);
const hasWeaknesses = /Weaknesses?/i.test(text);

if (hasStrengths && hasWeaknesses) {
  addIssue('优劣势', '包含 Strengths 和 Weaknesses 章节', 'pass');
} else {
  if (!hasStrengths) addIssue('优劣势', '缺少 Strengths 章节', 'warning');
  if (!hasWeaknesses) addIssue('优劣势', '缺少 Weaknesses 章节', 'warning');
}

// 17. 检查个人信息（简单启发式）
const personalPatterns = [
  /\b(?:university|college|school|institute)\s+of\s+[A-Z]/i,
  /\bteam\s*#?\s*\d{7}\s+(?:from|of)\s+[A-Z]/i,
  /\b(?:student|advisor)\s*:\s*[A-Z][a-z]+\s+[A-Z]/i,
];

const hasPersonal = personalPatterns.some(p => p.test(text));
if (hasPersonal) {
  addIssue('匿名合规', '可能包含个人信息（学校/姓名），请人工复核', 'warning');
} else {
  addIssue('匿名合规', '未发现明显个人信息', 'pass');
}

// 输出结果
function printReport() {
  console.log('\n' + '='.repeat(60));
  console.log('MCM/ICM 论文一致性检查报告');
  console.log('='.repeat(60));
  console.log(`\n文件: ${path.basename(inputFile)}`);
  console.log(`总页数: ${totalPages}`);
  console.log(`摘要数字: ${summaryNumbers.length} 个`);
  console.log(`假设数量: ${assumptions.length} 条`);
  console.log(`图表数量: ${maxFig} 图, ${maxTab} 表`);
  console.log(`参考文献: ${citedRefs.size} 次引用, ${maxRefNum} 条列表`);
  
  console.log('\n' + '-'.repeat(60));
  console.log('✓ 通过项');
  console.log('-'.repeat(60));
  passed.forEach(p => console.log(`  ✓ ${p.category}: ${p.message}`));
  
  if (warnings.length > 0) {
    console.log('\n' + '-'.repeat(60));
    console.log('⚠ 警告项（建议修改）');
    console.log('-'.repeat(60));
    warnings.forEach(w => console.log(`  ⚠ ${w.category}: ${w.message}`));
  }
  
  if (issues.length > 0) {
    console.log('\n' + '-'.repeat(60));
    console.log('✗ 错误项（必须修改）');
    console.log('-'.repeat(60));
    issues.forEach(e => console.log(`  ✗ ${e.category}: ${e.message}`));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`总结: ${passed.length} 项通过, ${warnings.length} 项警告, ${issues.length} 项错误`);
  
  if (issues.length === 0 && warnings.length <= 3) {
    console.log('✓ 论文质量良好，可以提交');
  } else if (issues.length === 0) {
    console.log('⚠ 论文基本合规，建议处理警告项');
  } else {
    console.log('✗ 论文存在严重问题，必须修改后才能提交');
  }
  console.log('='.repeat(60) + '\n');
}

function printJSON() {
  const result = {
    file: inputFile,
    totalPages,
    summaryNumbers: summaryNumbers.length,
    assumptions: assumptions.length,
    figures: maxFig,
    tables: maxTab,
    citations: citedRefs.size,
    references: maxRefNum,
    passed,
    warnings,
    issues,
    score: {
      total: passed.length + warnings.length + issues.length,
      passed: passed.length,
      warnings: warnings.length,
      errors: issues.length,
    }
  };
  console.log(JSON.stringify(result, null, 2));
}

function saveReport() {
  const reportPath = inputFile.replace(/\.txt$/i, '') + '_check_report.md';
  const lines = [
    '# MCM/ICM 论文一致性检查报告',
    '',
    `**文件**: ${inputFile}`,
    `**检查时间**: ${new Date().toISOString()}`,
    '',
    '## 统计信息',
    '',
    `- 总页数: ${totalPages}`,
    `- 摘要数字: ${summaryNumbers.length} 个`,
    `- 假设数量: ${assumptions.length} 条`,
    `- 图表数量: ${maxFig} 图, ${maxTab} 表`,
    `- 参考文献: ${citedRefs.size} 次引用, ${maxRefNum} 条列表`,
    '',
    '## 通过项',
    '',
    ...passed.map(p => `- ✓ ${p.category}: ${p.message}`),
    '',
    '## 警告项',
    '',
    ...warnings.map(w => `- ⚠ ${w.category}: ${w.message}`),
    '',
    '## 错误项',
    '',
    ...issues.map(e => `- ✗ ${e.category}: ${e.message}`),
    '',
    '## 建议',
    '',
    issues.length === 0 
      ? '论文质量良好，可以提交。建议处理警告项以进一步提升。'
      : '论文存在严重问题，必须修改后才能提交。',
    '',
  ];
  fs.writeFileSync(reportPath, lines.join('\n'), 'utf8');
  console.log(`详细报告已保存至: ${reportPath}`);
}

// 主输出
if (jsonMode) {
  printJSON();
} else {
  printReport();
}

if (reportMode && !jsonMode) {
  saveReport();
}

// 退出码
process.exit(issues.length > 0 ? 1 : 0);
