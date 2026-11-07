#!/usr/bin/env node
/**
 * extract-pdf.mjs — 把 MCM/ICM 论文 PDF 抽成带页码标记的纯文本，供 check-paper.mjs 分析。
 *
 * 用法:
 *   node extract-pdf.mjs <paper.pdf> [out.txt]
 *
 * 依赖: pdfjs-dist（一次性安装）
 *   npm install pdfjs-dist
 * 若安装在别处，用环境变量指定：PDFJS_PATH=<dir>/node_modules/pdfjs-dist/legacy/build/pdf.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const input = process.argv[2];
if (!input) { console.error('用法: node extract-pdf.mjs <paper.pdf> [out.txt]'); process.exit(2); }
const output = process.argv[3] || input.replace(/\.pdf$/i, '') + '.txt';

const require = createRequire(import.meta.url);

async function loadPdfjs() {
  // 1) 环境变量指定
  if (process.env.PDFJS_PATH) {
    return await import(pathToFileURL(process.env.PDFJS_PATH));
  }
  // 2) 从 cwd 向上查找 node_modules/pdfjs-dist
  let dir = process.cwd();
  while (dir.length > 3) {
    try {
      const p = require.resolve('pdfjs-dist/legacy/build/pdf.mjs', { paths: [dir] });
      return await import(pathToFileURL(p));
    } catch { dir = path.dirname(dir); }
  }
  console.error('未找到 pdfjs-dist。请先执行: npm install pdfjs-dist');
  console.error('或用环境变量指定: PDFJS_PATH=/path/to/pdfjs-dist/legacy/build/pdf.mjs');
  process.exit(2);
}
function pathToFileURL(p) { return new URL('file://' + path.resolve(p).replace(/\\/g, '/')); }

const pdfjs = await loadPdfjs();
const data = new Uint8Array(fs.readFileSync(input));
const doc = await pdfjs.getDocument({ data, verbosity: 0, useSystemFonts: true }).promise;

const chunks = [`### PAGES: ${doc.numPages}`];
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const tc = await page.getTextContent();
  let lastY = null, line = []; const lines = [];
  for (const it of tc.items) {
    if (it.str === undefined) continue;
    const y = it.transform[5];
    if (lastY !== null && Math.abs(y - lastY) > 3) { lines.push(line.join('').replace(/\s+/g, ' ').trim()); line = []; }
    line.push(it.str);
    if (it.hasEOL) { lines.push(line.join('').replace(/\s+/g, ' ').trim()); line = []; }
    lastY = y;
  }
  if (line.length) lines.push(line.join('').replace(/\s+/g, ' ').trim());
  chunks.push(`\n=== PAGE ${i} ===\n` + lines.filter(Boolean).join('\n'));
  page.cleanup();
}
fs.writeFileSync(output, chunks.join('\n'), 'utf8');
console.log(`已抽取 ${doc.numPages} 页 -> ${output}`);
