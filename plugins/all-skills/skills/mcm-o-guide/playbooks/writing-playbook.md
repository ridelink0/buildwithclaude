# 写作手能力强化手册

> 基于 6 篇 O 奖论文的写作结构分析，提炼写作能力的实战模板。
> 目标：摘要优先，学术英文，图表规范，排版专业。

---

## 1 摘要优先策略

### 1.1 为什么摘要优先？

**评委视角：** 初筛阶段（<5 分钟）只读摘要。如果摘要不好，论文直接淘汰。

**O 奖数据（502 篇语料）：**
- 普通 O 奖：摘要 29 个数字
- 顶尖 O 奖：摘要 93 个数字（3.2×）
- 2022 C 顶尖论文：摘要 117 个数字

### 1.2 摘要写作工作流

**Day 1（框架）：**
```
1. 背景（2 句）
2. 模型命名（1 句）
3. Task 1-6（每 task 1-2 句 + 数字）
4. 灵敏度（1 句）
5. 优劣势（3 vs 3）
6. 关键词
```

**Day 3（完善）：**
```
1. 检查数字密度（目标 50+）
2. 检查模型命名（"we develop"）
3. 检查任务标记（"For Task N..."）
4. 检查灵敏度结论（"robust/sensitive"）
5. 检查优劣势数量（3 vs 3）
```

**Day 4（最终）：**
```
1. 摘要 ≤ 1 页
2. 词数 400-500
3. 数字 50-100+
4. 无个人信息
5. 无图表（摘要页只放文字）
```

### 1.3 摘要模板（顶尖 O 奖版）

```markdown
While [background sentence]. This paper develops the **[Model Name]**
to [core objective]. Our model consists of four interconnected
subsystems: [1], [2], [3], and [4].

For Task 1, we [action] by [method]. The key result is that
[specific finding with 3-5 numbers, e.g., "the total biomass
decreases by 72.45% under severe drought versus only 18.16%
for multi-species community"].

For Task 2, we [action] using [method]. Under [condition],
[quantitative finding with 3-5 numbers].

For Task 3, we develop the **[Self-Constructed Index Name]**
to [measure what]. Compared to [baseline], our index
[improvement with numbers].

For Task 4-5, sensitivity analysis shows that [parameter] is
[sensitive/robust]: [specific number, e.g., "varying α within
[0.5α₀, 1.5α₀] changes the output by less than 5%"].

For Task 6, we propose [specific recommendation] which achieves
[quantified effect, e.g., "a 94% reduction in [metric] over
20 years"].

The **strengths** of our model are: (1) [S1], (2) [S2],
and (3) [S3]. The **weaknesses** are: (1) [W1], (2) [W2],
and (3) [W3]—all addressable by [direction].

*Keywords:* [k1], [k2], [k3], [k4].
```

---

## 2 美赛固定行文结构

### 2.1 标准结构（25 页）

| 页 | 内容 | 字数 |
|---|---|---|
| 1 | 摘要 | 400-500 词 |
| 2 | 目录 | - |
| 3-4 | Introduction | 500-700 词 |
| 5 | 假设 + 符号 | 200 词 |
| 6-7 | Task 1 模型 | 800-1000 词 |
| 8 | Task 1 结果 | 500 词 |
| 9-10 | Task 2 模型 | 800-1000 词 |
| 11 | Task 2 结果 | 500 词 |
| 12-13 | Task 3 模型 | 800-1000 词 |
| 14-15 | Task 3 结果 | 500 词 |
| 16-17 | Task 4-5 灵敏度 | 800 词 |
| 18 | Task 6 建议 | 500 词 |
| 19 | 优劣势 | 200 词 |
| 20 | 结论 | 200 词 |
| 21 | 参考文献 | - |
| 22-25 | 附录 | - |

### 2.2 各章节写作要点

**Introduction（2 页）：**
```
1.1 Background（2 段）：从全球/宏观问题 → 具体到题目场景
1.2 Significance（1 段）：为什么重要，用统计/经济数据支撑
1.3 Paper Structure（1 段）：结构预告（"Section X addresses Task Y"）
1.4 Data Description（1 段）：数据来源、时间范围、可信度
1.5 References（3-5 篇）：核心文献
```

**Assumptions + Notations（1 页）：**
```
假设 4-7 条，每条带 justification
Notation 表格：符号 | 含义 | 单位
```

**Task 章节（每 task 3-4 页）：**
```
N.1 Model Development（"we develop"）
N.2 Governing Equations（编号方程）
N.3 Results and Discussion（图 + 结论）
```

**Sensitivity Analysis（1-2 页）：**
```
独立章节，明确出现 "sensitivity" 一词
至少 3 个参数扫描
结论句："The model is robust/sensitive w.r.t. X"
```

**Strengths & Weaknesses（1 页）：**
```
3 条 Strengths（每条对应一个创新点）
3 条 Weaknesses（每条带解决方向）
```

---

## 3 学术英文写作规范

### 3.1 句式库（高频句式）

**模型描述：**
- "We develop a [model name] to [objective]."
- "The [model name] consists of [components]."
- "We improve the [classical model] by [modification]."

**结果描述：**
- "From Figure N, we find that..."
- "The results show that..."
- "As expected, [tendency]..."

**灵敏度分析：**
- "We examine the sensitivity of our model by varying [parameter]..."
- "The model is robust with respect to [parameter]."
- "The model is sensitive to [parameter]..."

**优劣势：**
- "The strengths of our model are..."
- "However, our model has some limitations..."
- "This weakness can be addressed by..."

**参考：** [sentence-patterns.md](../references/sentence-patterns.md)

### 3.2 中式英语避坑

| ❌ 错误 | ✅ 正确 |
|---|---|
| isolately | in isolation |
| classifiy | classify |
| enviroment | environment |
| the rationality | the validity |
| easily concluded | can be concluded |

**检查：** 提交前搜索 `isolately, classifiy, enviroment, rationality, easily`

### 3.3 段落结构

**问题：** 段落无主题句，直接开始写数据

**正确：**
```
[主题句] From Figure 1, we observe that the biomass decreases...
[证据] Specifically, the total biomass drops from 206.5 kg to...
[解释] This is because...
```

---

## 4 图表规范

### 4.1 图注（caption）规范

**模板：**
```
Figure N: [What] vs [What] under [condition]
```

**示例：**
- Figure 1: Total biomass vs time under drought conditions
- Figure 2: Sensitivity of output to parameter α
- Figure 3: Comparison of Model I vs Model II performance

### 4.2 正文引用规范

**问题：** "The results are shown in Figure 5."（无解读）

**正确：**
```
From Figure 5, we draw the following conclusions:
• The biomass of both plants are influenced by periodic weather change...
• During recovery, the H.nepalensis recovers relatively quickly...
```

### 4.3 图表检查清单

- [ ] 每张图有 caption（Figure N: ...）
- [ ] 每张图在正文中被引用（"From Figure N..."）
- [ ] 每张图有解读段落（结论句）
- [ ] 坐标轴有标签 + 单位
- [ ] 多曲线有图例
- [ ] 分辨率 300 dpi

---

## 5 LaTeX 排版规范

### 5.1 关键配置

```latex
\documentclass[12pt]{article}
\usepackage[margin=1in,a4paper]{geometry}
\usepackage{fancyhdr}
\usepackage{booktabs}
\usepackage{graphicx}
\usepackage{amsmath,amssymb}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}

% 页眉：Team # XXXXXXX Page X of 25
\fancyhead[C]{Team \# \textbf{XXXXXXX} \quad Page \thepage \ of \pageref{LastPage}}
```

**参考：** [latex-template.tex](../templates/latex-template.tex)

### 5.2 排版检查清单

- [ ] 编译无 warning
- [ ] 页数 ≤ 25（含附录和参考文献）
- [ ] 页眉显示 `Team # XXXXXXX Page X of Y`
- [ ] PDF < 17 MB
- [ ] 文件名 = 队号.pdf
- [ ] 无个人信息（姓名/学校/邮箱）
- [ ] 参考文献编号连续（[1][2][3]...）
- [ ] 所有图有 caption 和 label
- [ ] 所有图在正文中被引用过
- [ ] 摘要数字 ≥ 50
- [ ] 摘要显式标记每个 task
- [ ] Strengths 和 Weaknesses 各 3 条
- [ ] 灵敏度独立章节

---

## 6 Memo/Letter 写作规范（F 题）

### 6.1 格式

```
To: [recipient]
From: [your name/team name]
Date: [date]
Re: [subject]
```

### 6.2 内容结构

```
1. 问候（1 句）
2. 目的（1 句）
3. 模型简介（2-3 句）
4. 策略/建议（3-4 句）
5. 风险提示（2-3 句）
6. 名言/引用（可选）
7. 结尾（1 句）
8. 签名（姓名 + 日期）
```

**O 奖示例（2022 C）：** 引用 Warren Buffett 名言增加人文关怀

---

## 7 写作手工作流（4 天赛制）

### Day 1（框架 + 摘要）

| 时间 | 任务 |
|---|---|
| 0-2h | 读取题目 + 建模手框架 |
| 2-4h | 摘要框架（模板填充） |
| 4-8h | Introduction 起草 |
| 8-12h | 假设 + 符号 |
| 12-24h | 与编程手协作（图表编号） |

### Day 2（正文 + 图表）

| 时间 | 任务 |
|---|---|
| 0-8h | Task 1-2 模型章节 |
| 8-16h | Task 1-2 结果章节 |
| 16-24h | 图表引用 + 解读 |

### Day 3（灵敏度 + 优劣势）

| 时间 | 任务 |
|---|---|
| 0-8h | Task 3 模型 + 结果 |
| 8-16h | 灵敏度分析章节 |
| 16-24h | 优劣势 + 结论 |

### Day 4（排版 + 检查）

| 时间 | 任务 |
|---|---|
| 0-8h | LaTeX 排版 |
| 8-12h | 一致性检查（check-paper.mjs） |
| 12-16h | 最终校对 |
| 16-24h | 提交准备 |

---

## 8 写作手检查清单

### 8.1 摘要

- [ ] 词数 400-500
- [ ] 数字 50-100+
- [ ] 模型命名（"we develop"）
- [ ] 每个 task 显式标记
- [ ] 灵敏度结论
- [ ] 优劣势 3 vs 3
- [ ] 关键词

### 8.2 正文

- [ ] 段落有主题句
- [ ] 图表有解读
- [ ] 方程有编号
- [ ] 参数有来源
- [ ] 灵敏度独立章节
- [ ] 优劣势各 3 条

### 8.3 排版

- [ ] 编译无 warning
- [ ] 页数 ≤ 25
- [ ] 页眉正确
- [ ] PDF < 17 MB
- [ ] 无个人信息
- [ ] 参考文献连续

---

## 9 写作手与建模手/编程手的协作

### 9.1 与建模手

**建模手输出：**
- 模型描述（"we develop..."）
- 参数来源说明
- 结果解读要点

**写作手撰写：**
- 模型章节
- 结果章节
- 灵敏度章节

### 9.2 与编程手

**编程手输出：**
- 代码（附录）
- 图表（PDF/PNG）
- 结果数据（CSV/表格）

**写作手撰写：**
- 图表引用（"From Figure N..."）
- 代码说明（附录）
- 结果解读

---

## 10 常见写作错误

| 错误 | 后果 | 正确做法 |
|---|---|---|
| 摘要无数字 | 初筛淘汰 | 数字 50-100+ |
| 摘要复述题目 | 初筛淘汰 | 第一句引入背景，第二句给模型 |
| 假设无理由 | 筛选扣分 | 每条带 justification |
| 图表无解读 | 筛选扣分 | 每张图有结论句 |
| 灵敏度敷衍 | 降级风险 | 2+ 方法 + 结论句 |
| 中式英语 | 终评扣分 | 搜索常见错误词 |

**参考：** [common-errors.md](../references/common-errors.md)

---

## 快速索引

| 需求 | 章节 |
|---|---|
| 摘要优先 | §1 |
| 固定结构 | §2 |
| 学术英文 | §3 |
| 图表规范 | §4 |
| LaTeX 排版 | §5 |
| Memo 写作 | §6 |
| 工作流 | §7 |
| 检查清单 | §8 |
