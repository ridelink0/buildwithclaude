# 常见错误示例库（反面教材）

> 基于 502 篇语料分析 + 3 篇官方评委点评 + 各档论文对比提取。
> 每条错误标注：❌ 错误做法 vs ✅ 正确做法 + 淘汰轮次。

## 1 摘要类错误

### 1.1 摘要无数字结论（初筛淘汰，~40% 参赛队犯此错）

❌ **错误：**
```
In this paper, we study the problem of traffic flow. We use several models
to analyze the situation and obtain some good results. The results show that
our method is effective and can be applied to real-world scenarios.
```

✅ **正确（2021 C O 奖）：**
```
We first divide Washington State into 2925 regions, each 12km×12km.
The simulation depicts: 1) Strait of Georgia prevents westward spread;
2) AGH converges to Okanogan-Wenatchee National Forest. Image classification
achieves 90.2% accuracy and 94.4% AUROC.
```

**差异：** 错误版 0 个数字；正确版 5+ 个数字。评委 5 分钟内只看数字。

---

### 1.2 摘要复述题目（初筛淘汰）

❌ **错误：**
```
The problem asks us to develop a model for plant community response to
drought. Drought is a serious issue caused by global warming. We need to
consider the interaction between different plant species...
```

> 2009 B 评委原话：*"It must not merely restate the problem, but indicate how it was modeled and what conclusions were reached."*

✅ **正确：** 第一句引入背景，第二句立即给出模型名和目标。

---

### 1.3 摘要过长/过短

❌ **错误（过长）：** 摘要占 2 页，大量背景铺垫
❌ **错误（过短）：** 摘要仅 150 词，只有模型名无结论

✅ **正确：** 400–500 词，每个 task 1–2 句 + 数字

---

## 2 假设类错误

### 2.1 假设无理由（筛选扣分）

❌ **错误：**
```
Assumption 1: The temperature is constant.
Assumption 2: The population is stable.
Assumption 3: No external interference.
```

✅ **正确（2023 A O 奖）：**
```
Assumption 1: The water absorption rate of each plant is proportional to its biomass.
Justification: According to literature [7], when intense competition occurs, each resource
obtained by a plant is proportional to its biomass.
```

> 2009 B 评委原话：*"Assumptions must be clearly stated and justified where appropriate. Some teams overlook important factors and/or make unrealistic assumptions with no rationale."*

---

### 2.2 假设与模型脱节（终评扣分，~20%）

❌ **错误：** 假设列表中有 5 条假设，但正文中从未引用任何一条

✅ **正确：** 在模型推导中显式写 "According to Assumption 2, ..."

> 2009 B 评委原话：*"It should be made clear in the model precisely where those assumptions are used."*

---

### 2.3 假设自相矛盾

❌ **错误：** 假设 1 说"温度恒定"，假设 3 说"温度随季节变化"

✅ **正确：** 全局假设 vs 模型特定假设分开列出，不矛盾

---

## 3 模型类错误

### 3.1 "模型博物馆"——罗列模型但不验证（终评降级）

❌ **错误：**
```
We use Model A (Logistic), Model B (SIR), Model C (ARIMA), Model D (LSTM)...
[每个模型 1 段，无对比、无验证、无耦合]
```

> 2009 A 评委原话：*"The best were able to develop multiple models of different complexity and then verify their numerical models with the theoretical results of the simpler models."*

✅ **正确：** 1-2 个核心模型 + 基线对比 + 量化改进 + 模型间耦合

---

### 3.2 直接套用经典模型无改进

❌ **错误：** "We use the Lotka-Volterra model."（无改进、无理由）

✅ **正确（2023 A O 奖）：** "We developed the Lotka-Volterra competition model, then **modified** it by setting the environmental capacity as a function of soil moisture."

**差异：** "用" vs "改进"——后者体现思考深度。

---

### 3.3 参数凭空设定

❌ **错误：** "α = 0.5, β = 0.3, γ = 0.8"（无来源、无理由）

✅ **正确（2023 A O 奖）：**
```
γ = 0.12 day⁻¹
来源：文献 [7] 显示亚热带/温带地区蒸发率与土壤水分成正比
估算：基于草地蒸发率监测数据
```

---

## 4 图表类错误

### 4.1 图表无解读（筛选扣分，~30%）

❌ **错误：** "The results are shown in Figure 5."（仅此一句）

> 2009 A 评委原话：*"It is not uncommon to see entries in which figures and tables are included but have no detailed discussion associated with them."*

✅ **正确（2023 A O 奖）：**
```
From Figure 7, we draw the following conclusions:
• The biomass of both plants are influenced by periodic weather change...
• During recovery, the H.nepalensis recovers relatively quickly because...
```

---

### 4.2 图表无标签/单位

❌ **错误：** 坐标轴无标签、无单位、无图例

✅ **正确：** 每个轴有标签 + 单位，多曲线有图例

> 2009 B 评委原话：*"Graphs need labels and/or legends. They should provide information about what is referred to in the paper."*

---

### 4.3 图表孤立存在

❌ **错误：** 正文中从未引用 "Figure 5"，但 Figure 5 确实存在

✅ **正确：** 每张图在正文中至少被引用一次 + 1 段解读

---

## 5 灵敏度分析类错误

### 5.1 完全没有（筛选扣分，~35%）

❌ **错误：** 全文无 "sensitivity" 一词

> 2009 A 评委原话：*"Every year the judges explicitly discuss the issue of sensitivity and stability. The few teams that make a concerted effort to explore this aspect will almost always stand out."*

✅ **正确：** 至少 3 个参数 × 3 个值 + 结论句

---

### 5.2 灵敏度分析过于敷衍

❌ **错误：**
```
We changed parameter α from 0.1 to 0.5. The results did not change much.
Therefore, the model is stable.
```

✅ **正确：**
```
We varied β from 10⁻³ to 2×10⁻². As β increases, total biomass decreases by
approximately 32% (Figure 23). This is because higher β increases competition
for water. The model is sensitive to β, which must be measured accurately in
practice.
```

**差异：** 无数字 vs 有数字 + 原因 + 建议

---

## 6 一致性类错误

### 6.1 摘要与正文数字不符（终评降级）

❌ **错误：** 摘要写 "accuracy 92.5%"，正文写 "accuracy 90.2%"

✅ **正确：** 摘要和正文数字 100% 一致

> 2009 A 评委原话：*"Differences between the summary and the following pages can be immediately apparent and do not make a positive impression."*

---

### 6.2 假设列表与正文矛盾

❌ **错误：** 假设 3 说"忽略温度"，正文却说"考虑到温度变化的影响"

✅ **正确：** 假设-模型-结果-结论贯穿一致

---

### 6.3 参考文献引用孤儿

❌ **错误：** 正文引用 [7] 但参考文献列表只到 [5]；或参考文献 [3] 在正文从未被引用

✅ **正确：** 用 `check-paper.mjs` 脚本自动验证一一对应

---

## 7 格式类错误

### 7.1 超过 25 页

❌ **错误：** 论文 28 页（含附录）

✅ **正确：** ≤ 25 页（含摘要/目录/附录/参考文献）

> COMAP 官方：*"At no time should your solution be over 25 pages."*

---

### 7.2 出现个人信息

❌ **错误：** "Our team from XX University..." 或页眉出现队员姓名

✅ **正确：** 仅用队号，如 "Team # 2400996"

> COMAP 官方：*"The names of the student team members, advisor, or institution should NOT appear on any page."*

---

### 7.3 无页眉/页码

❌ **错误：** 无页眉或页眉无队号

✅ **正确：** 每页页眉 "Team # [队号] Page [页码] of [总页数]"

---

## 8 写作类错误

### 8.1 中式英语（语料中高频出现）

❌ **错误：**
- "isolately"（不存在，应为 "in isolation"）
- "classifiy" / "enviroments"（拼写错误）
- "the results are shown below"（应为 "as shown in Fig. 5"）
- "reflects the rationality of our assumption"（应为 "supports the validity"）
- "It can be easily concluded that"（删 easily）

✅ **正确：** 提交前过拼写检查 + 搜索 `isolately, classifiy, enviroment, rationality, easily concluded`

---

### 8.2 段落无主题句

❌ **错误：** 段落直接开始写数据，无结论先行

✅ **正确：** 先给结论（topic sentence），再给证据，再解释

---

## 9 任务覆盖类错误

### 9.1 遗漏子问题（筛选淘汰，~25%）

❌ **错误：** 题目有 6 个 task，论文只回答了 4 个

> 2009 B 评委原话：*"To receive an Outstanding or Meritorious designation, teams had to address issues raised in each of these Requirements."*

✅ **正确：** 每个 task 有独立章节 + 显式 "Answer to Task N" 标记

---

### 9.2 Memo/Letter 缺失或格式错

❌ **错误：** F 题要求写 Memo，但论文中无 Memo 或 Memo 混入正文

✅ **正确：** Memo 独立成节（参考文献之后），格式完整（TO/FROM/DATE/RE）

---

## 10 检查工具

用 `scripts/check-paper.mjs` 可自动检测以下错误：

| 错误 | 脚本能否检测 |
|---|---|
| 摘要数字未在正文出现 | ✅ |
| 假设未被正文引用 | ✅ |
| 图表存在但未被引用 | ✅ |
| 参考文献孤儿 | ✅ |
| 任务遗漏 | ✅（自适应任务数） |
| 页数超限 | ✅ |
| 缺少灵敏度/优劣势章节 | ✅ |
| 个人信息 | ⚠（启发式，需人工复核） |

```bash
# 使用方法
node scripts/extract-pdf.mjs your_paper.pdf your_paper.txt
node scripts/check-paper.mjs your_paper.txt --report
```

---

## 11 错误严重程度分级

| 级别 | 错误 | 后果 |
|---|---|---|
| 🔴 致命 | 超页/个人信息/遗漏子问题 | 直接淘汰或降档 |
| 🟡 严重 | 无数字摘要/无灵敏度/假设无理由 | 筛选轮淘汰 |
| 🟢 轻微 | 拼写错误/图表无标签/参考文献格式 | 终评小扣分 |

---

## 12 自检流程

```
1. 跑 check-paper.mjs → 修复所有 ERROR
2. 人工检查摘要数字 ≥ 20 个
3. 人工检查每个 task 有显式回答
4. 人工检查每张图有解读段落
5. 人工检查假设有 justification + 正文引用
6. 拼写检查（搜 isolately/classifiy/enviroment/rationality）
7. 确认 ≤ 25 页 + 无个人信息
```

---

*本文件错误示例基于 502 篇语料 + 3 篇评委点评提炼，频次为估算。
淘汰轮次标注参考评委点评原文。*
