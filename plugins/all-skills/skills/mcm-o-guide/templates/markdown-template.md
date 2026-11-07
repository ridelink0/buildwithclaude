# MCM/ICM 论文 Markdown 骨架

> 本骨架可直接用 Typora / Obsidian / VS Code 编辑，然后通过 Pandoc 转为 DOCX 或 PDF。
> 结构完全对齐 [latex-template.tex](latex-template.tex) 和 6 篇 O 奖论文的通用结构。
> 页眉格式：`Team # XXXXXXX Page X of Y`（用页眉/页脚手动设置）。

---

## 使用说明

```bash
# Markdown → DOCX
pandoc your-paper.md -o your-paper.docx --reference-doc=reference.docx

# Markdown → PDF（需安装 XeLaTeX）
pandoc your-paper.md -o your-paper.pdf --pdf-engine=xelatex
```

---

## 论文模板正文

```markdown
# Problem Chosen: X  2024

# Team Control Number: XXXXXXX

# Your Paper Title Here

## Summary

[400-500 词摘要，必须包含：
- 模型命名（第 3 句，加粗）
- 每个 task 显式标记
- 数字密度 ≥ 9 个
- 灵敏度结论
- Strengths/Weaknesses 各 3 条]

While [background]. This paper develops the **[Model Name]** to [objective]. Our model
consists of four interconnected subsystems: [1], [2], [3], and [4].

For Task 1, we [action] by [method]. The key result is that [specific finding with numbers].

For Task 2, we [action] using [method]. Under [condition], [quantitative finding].

For Task 3, we develop the **[Self-Constructed Index Name]** to [measure what].
Compared to [baseline], our index [improvement].

For Task 4-5, sensitivity analysis shows that [parameter] is [sensitive/robust].

For Task 6, we propose [specific recommendation] which achieves [quantified effect].

The **strengths** of our model are: (1) [S1], (2) [S2], and (3) [S3].
The **weaknesses** are: (1) [W1], (2) [W2], and (3) [W3]—all addressable by [direction].

*Keywords:* [k1], [k2], [k3], [k4].

---

## Contents

1. Introduction
2. Assumptions and Notations
3. Task 1: [Question]
4. Task 2: [Question]
5. Task 3: [Question]
6. Sensitivity Analysis
7. Task 6: Recommendations
8. Strengths and Weaknesses
References
Appendix

---

## 1 Introduction

### 1.1 Background

[1-3 段背景，每段一个概念]

### 1.2 Significance

[为什么重要，用统计/经济数据支撑]

### 1.3 Paper Structure

- Section 2: Assumptions and Notation
- Section 3: Task 1
- Section 4: Task 2
- Section 5: Task 3
- Section 6: Sensitivity Analysis
- Section 7: Task 6 Recommendations
- Section 8: Strengths and Weaknesses

### 1.4 Data Description

[数据来源、时间范围、可信度]

### 1.5 References

[3-5 篇核心文献]

---

## 2 Assumptions and Notations

### 2.1 Assumptions

**Assumption 1.** [statement]
*Justification:* [source or reasoning]

**Assumption 2.** [statement]
*Justification:* [source or reasoning]

**Assumption 3.** [statement]
*Justification:* [source or reasoning]

[继续至 5-7 条]

### 2.2 Notations

| Symbol | Meaning | Unit |
|---|---|---|
| $N_i(t)$ | Population of species i | individuals |
| $B_i(t)$ | Biomass | kg/ha |
| ... | ... | ... |

---

## 3 Task 1: [Question Description]

### 3.1 Model Development

[用 "we develop" 而非 "we use"]

### 3.2 Governing Equations

[编号方程]

$$\frac{dB_i}{dt} = r_i B_i \left(1 - \frac{B_i}{K}\right) \quad (1)$$

### 3.3 Results and Discussion

[每张图必须有正文解读]

From Figure 1, we draw the following conclusions:
- [Conclusion 1 with number]
- [Conclusion 2 with mechanism]
- [Conclusion 3 with comparison]

![Figure 1: Description](figures/figure1.png)

---

## 4 Task 2: [Question Description]

[类似结构]

---

## 5 Task 3: [Question Description]

### 5.1 Self-Constructed Indices

**Total Biomass (TB):**
$$TB(t) = \sum_{i=1}^{n} B_i(t) \quad (X)$$

**[Index 2 Name]:**
$$\text{Index} = [formula] \quad (X)$$

[为什么这样定义]

### 5.2 Results

[表格 + 图 + 结论]

---

## 6 Sensitivity Analysis

### 6.1 Parameter Sensitivity

We vary [parameter] within [range]:
- Baseline: $\alpha = 0.5$
- Low: $\alpha = 0.1$
- High: $\alpha = 1.0$

**Conclusion:** The model is [robust/sensitive] with respect to $\alpha$.

### 6.2 Scenario Analysis

[多情景对比]

### 6.3 Initial Condition Robustness

[初始条件扰动 + 置信区间]

---

## 7 Task 6: Recommendations

### 7.1 Short-term
[specific action] → [quantified effect]

### 7.2 Medium-term
[specific action] targeting [metric]

### 7.3 Long-term
[specific action] with 20-year projection

### 7.4 Implementation Plan

[时间表]

---

## 8 Strengths and Weaknesses

### 8.1 Strengths

1. **[Name]:** [mechanism + quantified advantage]
2. **[Name]:** [methodological contribution]
3. **[Name]:** [generalization]

### 8.2 Weaknesses

1. [W1]. *Direction:* [how to fix]
2. [W2]. *Direction:* [how to fix]
3. [W3]. *Direction:* [how to fix]

---

## References

1. [Author]. [Title]. [Journal], [Year], [Vol], [Pages].
2. ...
[8-12 篇，至少 3 篇 5 年内]

---

## Appendix

### A. Derivation of Equation (X)

[详细推导]

### B. Additional Results

[备用图/表]

### C. Code Availability

[位置说明]
```

---

## 页数控制建议

| 章节 | 建议字数 | 页数 |
|---|---|---|
| 摘要 | 400-500 词 | 1 |
| Introduction | 500-700 词 | 2 |
| 假设 + 符号 | 200 词 | 1 |
| 4 个 Task | 各 800-1000 词 | 12-14 |
| 灵敏度 | 400 词 | 2 |
| Strengths/Weaknesses | 200 词 | 1 |
| 参考文献 | - | 1 |
| 附录 | 300-500 词 | 2-3 |
| **总计** | | **22-25** |

## 与 LaTeX 模板的选择

| 场景 | 推荐 |
|---|---|
| 追求专业排版 + 公式多 | LaTeX |
| 快速迭代 + 图多 | Markdown + Pandoc |
| 不熟悉 LaTeX | Markdown |
| 有校队模板 | 用校队模板 |

## 提交前检查

- [ ] 页数 ≤ 25
- [ ] 页眉每页显示 `Team # XXXXXXX Page X of Y`
- [ ] PDF < 17 MB
- [ ] 文件名 = 队号.pdf
- [ ] 无个人信息
- [ ] 摘要数字 ≥ 9
- [ ] 灵敏度独立章节
- [ ] 优劣势各 3 条

用 `scripts/check-paper.mjs` 自动化验证。
