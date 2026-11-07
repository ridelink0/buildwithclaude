# 25 页逐页解剖：2023 A O 奖论文精读

> 以 2309229（2023 A O 奖《GIID Model》25 页）为蓝本，逐页拆解「这一页放什么、评委看什么、能学什么」"。
> 每一页都对应可复制的模板动作，而不是空谈"这页很重要"。

---

## 全局视角：评委读这篇论文的三次扫描

```
第一次（30 秒）：翻到 Page 1 → 看摘要数字密度、命名、页数 → 决定"值不值得继续读"
第二次（3 分钟）：翻到 Page 2-5 → 看目录、Introduction、Assumptions → 决定"是否值得细读"
第三次（15 分钟）：读 Task 章节 + 灵敏度 + 优劣势 → 决定"是否给 O"
```

**这个视角决定：** 每一页都要服务于至少一次扫描，不能有无功能页。

---

## Page 1：摘要（Summary Sheet）

**实际内容：** 约 450 词的完整摘要 + 团队编号 + 标题

**关键动作：**

| 段落位置 | 内容 | 数字/命名 |
|---|---|---|
| 第 1-2 句 | 背景引入 | — |
| 第 3 句 | **命名模型**：Global Impact Index for Droughts (GIID) | GIID |
| 第 4 句 | Task 1：土壤水分-生物量耦合 | 20 years, 12 species |
| 第 5 句 | Task 2：气候周期仿真 | 30% drought probability, 1/2 precipitation |
| 第 6 句 | Task 3：定量指标 | TB, CoV, S-W index, Pielou index |
| 第 7-8 句 | Task 4/5：环境扰动 | 72.45% vs 18.16% biomass loss |
| 第 9 句 | Task 6：可行性讨论 | population/community/ecosystem levels |
| 最后 | 关键词 | Plant community; drought; GIID; S-W index |

**评委读法：** 数数字 + 数命名 + 数结构（是否覆盖全部 6 个 task）。

**这一页可复制的动作：**

1. 第 3 句必须命名模型（GIID）——评委记得住
2. 每个 task 用 "Task N" 显式标记
3. 定量指标全部列出名称（4 个）
4. 关键对比数字成对出现（72.45% vs 18.16%）——一眼看懂结论
5. 页数 ≤ 1 页（这篇摘要正好满 1 页）

---

## Page 2：目录（Contents）

**实际内容：** 完整章节树，共 25 行

**关键动作：** 目录本身就是一次微型的"结构预告"。

**可复制：**

1. 章节编号对齐（4.1.1 / 4.2.2 三级层次清晰）
2. 附录和参考文献也在目录中（不隐藏）
3. 目录页只放目录，不塞其他内容

---

## Page 3-4：Introduction（2 页，4 小节）

**Page 3 实际内容：**
- 1.1 背景：全球气候变化 + 干旱频率增加 + 对农业的威胁
- 1.2 科学问题：植物群落如何应对

**Page 4 实际内容：**
- 1.3 论文结构：预告 6 个 task 各章节位置
- 1.4 数据说明：植物来源（12 种）+ 土壤水分模拟方法
- 1.5 参考文献：4 篇主要文献

**评委读法：** 结构预告是否清晰？（1.3 是关键）

**可复制：**

1. Introduction 占 2 页正好，不要超过 2.5 页
2. 1.1 背景 ≤ 3 段，每段一个概念（气候/生态/农业）
3. 1.2 科学问题 ≤ 2 段，用 "However" 转折聚焦
4. 1.3 论文结构必备——用一句 "We address it in Section X" 逐 task 对应
5. 1.4 数据说明——评委看到就知道你的数据来源和可靠性
6. 1.5 关键文献——只列 3-5 篇最核心的（不要堆到参考文献里再引用）

---

## Page 5：假设与符号（Assumptions + Notations）

**实际内容：**
- 5 条 Assumption，每条带 justification
- 表格：Notation → Meaning → Unit

**Assumption 1 实例（原文）：**
```
Assumption 1: The water absorption rate of each plant is proportional to its biomass.
Justification: According to literature [7], when intense competition occurs,
each resource obtained by a plant is proportional to its biomass.
```

**评委读法：** 检查假设是否无理由、是否与模型脱节。

**可复制：**

1. 假设 5-7 条正好，不要超过 7
2. **每条带 justification**（这是 35% 参赛队缺的）
3. 每条 justification 引用文献或说明推理过程
4. Notation 表格三列：符号 | 含义 | 单位——**别漏单位**
5. 页脚留白多，不要塞太多——评委要"看得进来"

---

## Page 6-7：Task 1 模型构建（2 页）

**Page 6 内容：** 问题 1 分析 + ODE 基本方程
- Lotka-Volterra 竞争模型的改写版本
- 4 个物种的相互作用矩阵

**Page 7 内容：** 模型假设下的具体方程 + 参数表
- 每个参数有来源（文献 [7] 或估算）

**评委读法：** 模型是否有原创性？参数是否有来源？

**可复制：**

1. 模型命名："we develop the Global Impact Index..."（不是"we use..."）
2. 关键公式编号（1）、（2）...
3. 每个参数配来源：文献号 / 估算依据 / 单位
4. 参数集中在一张表格中，正文引用编号

---

## Page 8：Task 1 结果（1 页）

**实际内容：**
- Figure 1-2：单物种 vs 多种群生物量曲线
- 3-4 段结论解读

**评委读法：** 图是否有解读？结论是否从图中得出？

**可复制：**

1. 每张图有 caption："Figure 1: [具体描述]"
2. 正文中必须显式引用："From Figure 1, we find that..."
3. 结论用 bullet 分点（不超过 3 条）
4. 结论必须"从图中推出"——不是从假设推出

---

## Page 9-10：Task 2 模型（气候周期仿真）

**Page 9 内容：** 气候周期建模（马尔可夫链状态转移）

**Page 10 内容：** 干旱概率 + 降水扰动方程

**关键动作：**

1. 引入新概念："We introduce the probability of drought as P(D)=0.3"
2. 与 Task 1 模型耦合："Substituting (11) into (3), we obtain..."
3. 明确"耦合关系"——评委看到 "coupling" 就打高分

---

## Page 11：Task 2 验证

**实际内容：** 用真实数据（美国气象站记录）验证仿真结果

**评委读法：** 有没有真的验证过？

**可复制：**

1. 找到"部分真实数据"用于验证（哪怕只 3 年）
2. 画"仿真 vs 实际"对照图
3. 用简单指标（RMSE 或相关性）量化差异
4. 明确说"误差在 X% 内，模型可信"

---

## Page 12：Task 3 模型设置

**实际内容：** 3 个物种组合的定义 + 单种 vs 多种仿真

**关键动作：**

1. 定义组合 (a) (b) (c)，每个组合明确列出物种
2. 明确说"为了验证"——评委看到方法论意识
3. 图 8、9 并列展示对比

---

## Page 13：定量指标（本页极关键）

**实际内容：** 4.1.2 Quantitative Analysis
- **TB（Total Biomass）**：定义 + 公式
- **CoV（Coefficient of Variation）**：定义 + 公式
- **S-W index（Stability-Water Use index）**：**自构指标**
- **Pielou index**：多样性指标

**这是本文最大的加分点——自构 2 个指标。**

**评委读法：** 有没有自构指标？命名是否清晰？

**可复制：**

1. **必须至少自构 1 个指标**——这是区分 M 和 O 的分水岭
2. 指标命名：字母缩写 + 全称（S-W = Stability-Water Use）
3. 公式简洁：一行以内
4. 单位明确
5. 每个指标有 1 段解释"为什么这样定义"
6. 4 个指标刚好——评委记得住 3-5 个

---

## Page 14：定量结果验证（4.1.3）

**实际内容：** 三种组合的定量指标对比

**关键动作：**

1. 用 Table 2 汇总所有指标
2. 每列有单位，每行有组合
3. 讨论"哪个组合最好"——结论先行

---

## Page 15：三种组合生物量曲线

**实际内容：** Figure 15 + 简短解读

**关键动作：**

1. 三张小图并列 (a)(b)(c)——一图看全貌
2. 图注简洁："Total Biomass of different species combinations"
3. 正文不重复图注，直接讨论趋势

---

## Page 16-17：结论（关键页）

**Page 16 内容：** 从图 15 + 表 3 得出 3 条定量结论

**Page 17 内容：** "we conclude that..." 综合结论

**可复制：**

1. 结论必带数字（"nearly half of their total biomass"）
2. 结论必须回答"为什么"——机制解释
3. 结论要"从模型推出"——不是从直觉推出

---

## Page 18-20：Task 4（环境扰动灵敏度）

**Page 18 内容：** Task 4 建模——干旱频率/强度扰动

**关键动作：**

1. 明确"这是灵敏度分析"——用 "sensitivity" 一词
2. 参数变化范围写清楚（30%→50%，1/2→1/3）
3. 每张图有明确 caption

**Page 19 内容：** 结果 + 3 条 bullet 结论

**可复制：** 结论要 "The more X, the more Y"——趋势句比具体数字更有力

---

## Page 21-22：Task 5 + Task 6 讨论

**Page 21 内容：** Task 5 结果——环境承载力下降时的表现

**关键动作：**

- 明确数字对比："lost 72.45% and 18.16% biomass respectively"
- 双物种对比图（Figure 21 vs 22）

**Page 22 内容：** Task 6 讨论——三层可行性

**关键动作：**

1. 讨论分层：Population / Community / Ecosystem
2. 每层给具体建议——不是"应该关注"而是"应该种植抗旱植物"
3. 建议对应前面的结论

---

## Page 23：灵敏度分析汇总

**实际内容：** 参数扫描总结

**评委读法：** 是否有灵敏度分析？（这是筛选轮的硬指标）

**可复制：**

1. 独立一节，编号 "6 Sensitivity Analysis"
2. 至少 3 个参数扫描
3. 结论句："The model is robust with respect to..."
4. 或者明确"model is sensitive to X"—**不粉饰**

---

## Page 24：Strengths & Weaknesses

**实际内容：**
- 3 条 Strengths + 3 条 Weaknesses

**可复制（原文风格）：**

Strengths：
1. Coupling soil moisture with plant biomass—mechanism-based
2. Self-developed quantitative indices (TB, CoV, S-W, Pielou)
3. Multi-scenario simulation (drought, habitat, pollution)

Weaknesses：
1. Parameters estimated from literature, not measured—need field validation
2. Only 5 plant species considered—limited generalization
3. No feedback from plant communities to soil moisture—simplification

**关键：**

- Strengths 和 Weaknesses 数量相等（3 vs 3）
- Weaknesses 必须"给出解决方向"——不是"没有解决"而是"未来可通过 X 解决"
- 不要自夸过度，也不要过谦

---

## Page 25：参考文献

**实际内容：** 9 篇参考文献

**可复制：**

1. 数量：8-12 篇是安全区（O 奖中位数 10-12）
2. 格式统一（IEEE 或 ACM 二选一）
3. 引用号从 [1] 开始递增
4. 至少 3 篇来自 5 年内（评委看"数据是否最新"）

---

## 页预算总结表

| 页 | 内容 | 页数 | 关键动作 |
|---|---|---|---|
| 1 | 摘要 | 1 | 命名 + 数字密度 ≥ 9 |
| 2 | 目录 | 1 | 三级层次 |
| 3-4 | Introduction | 2 | 结构预告 |
| 5 | 假设 + 符号 | 1 | 每条带 justification |
| 6-7 | Task 1 模型 | 2 | 参数有来源 |
| 8 | Task 1 结果 | 1 | 图 + 结论 |
| 9-10 | Task 2 模型 | 2 | 耦合关系 |
| 11 | Task 2 验证 | 1 | 与真实数据对比 |
| 12-13 | Task 3 模型 + 指标 | 2 | **自构指标** |
| 14-17 | Task 3 结果 + 结论 | 4 | 定量分析 |
| 18-20 | Task 4（灵敏度） | 3 | 多参数扫描 |
| 21-22 | Task 5 + Task 6 | 2 | 分层建议 |
| 23 | 灵敏度汇总 | 1 | 独立章节 |
| 24 | 优劣势 | 1 | 3 vs 3 |
| 25 | 参考文献 | 1 | 8-12 篇 |

---

## 六题的"页预算"微调建议

| 题型 | 摘要 | Intro | 模型 | 灵敏度 | S/W | 参考 |
|---|---|---|---|---|---|---|
| A 连续 | 1 | 2 | 12 | 3 | 1 | 3 |
| B 离散 | 1 | 2 | 12 | 2 | 1 | 4（+Memo） |
| C 数据 | 1 | 1 | 13 | 3 | 1 | 3（+图多） |
| D 网络 | 1 | 2 | 12 | 2 | 1 | 4 |
| E 环境 | 1 | 2 | 11 | 3 | 1 | 4 |
| F 政策 | 1 | 2 | 10 | 2 | 1 | 5（+Memo） |

---

## 评委读这篇论文的"高分触发点"

**每页至少有一个"评委记忆点"：**

1. Page 1：GIID 命名
2. Page 5：Assumption justification
3. Page 6-7：Lotka-Volterra 改造
4. Page 9-10：Markov 耦合
5. Page 13：**4 个自构指标**
6. Page 15：三组合对比
7. Page 18：干旱扰动扫描
8. Page 22：三层可行性
9. Page 24：诚实的 Weaknesses

**如果只能选 3 个记忆点：** Page 1 命名、Page 13 自构指标、Page 24 诚实的 Weaknesses。

---

## 从这篇论文抽取的"每页必做动作"清单

```
□ 摘要第 3 句命名模型
□ 摘要每个 task 显式标记
□ 摘要数字 ≥ 9
□ Intro 有结构预告（1.3）
□ 假设每条带 justification
□ Notation 有单位列
□ 模型命名"we develop"而非"we use"
□ 参数有来源
□ 每张图有解读段落
□ 至少自构 1 个指标
□ 定量结论带数字
□ 灵敏度独立章节
□ Strengths/Weaknesses 各 3 条
□ Weaknesses 给解决方向
□ 参考文献 8-12 篇
```

15 个动作，逐项打勾。这就是 25 页 O 奖的完成定义。
