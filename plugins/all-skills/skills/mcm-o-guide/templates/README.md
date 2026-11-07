# LaTeX 模板使用说明

## 快速开始

```bash
# 1. 复制模板
cp latex-template.tex your-paper.tex

# 2. 修改页眉队号（搜索 "XXXXXXX" 全部替换）
# 3. 修改标题、摘要、正文
# 4. 编译
pdflatex your-paper.tex
pdflatex your-paper.tex  # 第二遍用于目录

# 5. 转 PDF
# 6. 检查页数 ≤ 25，页眉正确，无个人信息
```

## 必备依赖包

```latex
geometry, fancyhdr, booktabs, multirow, array, longtable,
graphicx, caption, float, amsmath, amssymb, amscd,
enumitem, xcolor, hyperref, natbib, lastpage, mathptmx
```

## 关键设计点（与 2021 COMAP 规则对应）

| 规则 | 模板实现 |
|---|---|
| ≤ 25 页 | 无硬限制，需人工检查（用 `check-paper.mjs`） |
| 12 号字 | `\documentclass[12pt]` |
| 1 inch 边距 | `geometry[margin=1in]` |
| 页眉 `Team # XXX Page X of 25` | `fancyhdr` + `lastpage` |
| 匿名合规 | 页眉只用队号，不用姓名/机构 |
| PDF < 17 MB | 图片建议压缩到 300 dpi 以下 |
| 文件名 = 队号.pdf | 提交前手动重命名 |

## 目录结构建议

```
mcm-2024/
├── your-paper.tex      # 主文件（复制自模板）
├── figures/            # 所有图片
│   ├── figure1.png
│   └── ...
├── references.bib      # BibTeX 参考文献
└── code/               # 可选：代码
```

## 6 类题型的模板调整建议

### A 题（连续/机理）
- Section 3-5 用 `theorem`/`lemma` 环境写方程
- 大量使用 `equation` 环境编号
- 参数表用 `booktabs`

### B 题（离散/优化）
- Section 3 用表格列约束条件
- 决策变量用 `\begin{align*}` 多行公式
- 结果表用 `longtable`

### C 题（数据洞察）
- 图多，用 `[H]` 强制图片位置
- 数据表用 `\footnotesize` 缩小
- 机器学习部分可引用 sklearn 论文

### D 题（网络科学）
- 定义用 `definition` 环境
- 图用 `tikz` 或 `pgfplots`
- 算法伪代码用 `algorithm2e`

### E 题（环境/评价）
- AHP 判断矩阵用 `array` 加粗
- K-means 结果用热力图（Python seaborn）
- 情景对比用双图并列

### F 题（政策）
- 政策分级用三级 `itemize`
- 时间线用 `tikz` 绘制
- Memo 单独一节，格式见 `references/memo-letter.md`

## 常见编译问题

| 问题 | 原因 | 解决 |
|---|---|---|
| `! Extra }` | 数学环境括号不匹配 | 检查 `\left( \right)` 配对 |
| 目录页码乱 | 只编译了一遍 | 编译 2 遍 |
| 中文乱码 | 用了英文编译 | MCM 不需要中文 |
| 图片超界 | `width` 超过 `1\textwidth` | 改为 `0.9\textwidth` |
| 页眉重叠 | `headheight` 太小 | 已设为 14pt |

## 页数估算

- 摘要 + 目录：2 页
- Introduction：2 页
- 假设 + 符号：1 页
- 4 个 Task 章节：12-14 页
- 灵敏度：2 页
- Strengths/Weaknesses：1 页
- 参考文献 + 附录：3-4 页
- **总计：22-26 页**（严格控制模型章节在 12 页内）

## 提交前检查清单

- [ ] 编译无 warning
- [ ] 页数 ≤ 25（含附录和参考文献）
- [ ] 页眉显示 `Team # XXXXXXX Page X of Y`
- [ ] PDF < 17 MB
- [ ] 文件名 = 队号.pdf
- [ ] 无个人信息（姓名/学校/邮箱）
- [ ] 参考文献编号连续（[1][2][3]...）
- [ ] 所有图有 caption 和 label
- [ ] 所有图在正文中被引用过
- [ ] 摘要数字 ≥ 9 个
- [ ] 摘要显式标记每个 task
- [ ] Strengths 和 Weaknesses 各 3 条
- [ ] 灵敏度独立章节

## 与 check-paper.mjs 的配合

编译出 PDF 后：

```bash
node scripts/extract-pdf.mjs your-paper.pdf your-paper.txt
node scripts/check-paper.mjs your-paper.txt --report
```

脚本会检查：数字一致性、假设引用、参考文献孤儿、任务覆盖、灵敏度/优劣势章节存在性等。
