# 端到端案例：从题目到论文（2023 A 完整复盘）

## 0. 案例概述

**题目：** 2023 MCM Problem A — "The Warriors against Drought"

**核心问题：** 植物群落如何应对干旱？物种多样性是否有助于群落抵御干旱？

**6 个子任务：**
1. 建立模型预测植物群落在不规则干旱周期下的变化
2. 分析物种多样性对群落的好处
3. 探索物种类型对结果的影响
4. 研究干旱频率/强度变化时，物种数量的影响是否相同
5. 考虑栖息地减少、环境污染等其他因素
6. 提出确保群落长期生存的措施 + 群落对更大环境的影响

**最终成果：** 25 页论文，25 张图，3 个模型（GIID + 指标体系 + 情景分析）

---

## 1. 题目拆解（第 1 小时）

### 1.1 关键词提取

| 关键词 | 含义 | 建模方向 |
|---|---|---|
| plant community | 多物种群落 | 种群动力学模型 |
| drought | 干旱 | 环境因子（土壤水分） |
| irregular weather cycles | 不规则天气周期 | 随机过程 / 情景仿真 |
| species diversity | 物种多样性 | 多物种对比实验 |
| benefits | 好处 | 量化指标（生物量、稳定性） |

### 1.2 任务分解

| Task | 核心目标 | 建模方向 |
|---|---|---|
| 1 | 预测群落变化 | 微分方程模型（种群 + 环境耦合） |
| 2 | 分析多样性好处 | 多物种对比实验 + 量化指标 |
| 3 | 物种类型影响 | 不同组合对比实验 |
| 4 | 干旱频率/强度变化 | 情景分析（改变参数） |
| 5 | 其他因素 | 扩展模型（栖息地、污染） |
| 6 | 措施 + 影响 | 政策建议 + 生态影响分析 |

### 1.3 模型选择矩阵

| Task | 首选模型 | 辅助模型 | 验证方式 |
|---|---|---|---|
| 1 | Lotka-Volterra + 土壤水分耦合 | 数值仿真（差分方程） | 与单物种 Logistic 对比 |
| 2 | 多物种对比实验 | 指标体系（TB, CoV, S-W） | 不同物种数量对比 |
| 3 | 3 种典型组合对比 | 可视化（折线图） | 组合间对比 |
| 4 | 情景分析（改变干旱参数） | 多物种数量对比 | 情景间对比 |
| 5 | 扩展模型（环境容量递减） | 阶梯函数 | 单物种 vs 多物种 |
| 6 | 基于前 5 个 task 的结论 | 政策建议 | — |

---

## 2. 页预算规划（第 2 小时）

| 章节 | 页数 | 功能 | 必须含 |
|---|---|---|---|
| 摘要 + 目录 | 1.5 | 评委第一印象 | 数字结论、模型名（GIID） |
| 1. Introduction | 2 | 展示理解力 | 背景图、文献综述图、流程图 |
| 2. Model Preparation | 2 | 建模合法性 | 5 条假设 + 理由、参数表 |
| 3. Task 1: GIID Model | 4 | 核心模型 | 公式、算法、单物种 vs 多物种对比图 |
| 4. Task 2 & 3: 多样性效应 | 3 | 定量分析 | 指标定义、不同物种数量对比图 |
| 5. Task 4, 5, 6: 环境影响 | 4 | 情景分析 | 干旱频率/强度变化图、栖息地减少图 |
| 6. Sensitivity Analysis | 2 | 模型可信度 | 3 个参数 × 3 个值 |
| 7. Model Evaluation | 1.5 | 自我评估 | 3 条优势 + 3 条局限 |
| References | 1 | 引用合规 | 10+ 条文献 |
| **总计** | **21** | | |

**实际产出：** 25 页（比预算多 4 页，因为图表较多）

---

## 3. 模型设计（第 3–6 小时）

### 3.1 Task 1: GIID Model

**核心创新：** 将种群模型与环境模型耦合

```
传统 LV 模型：
  dx_i/dt = x_i * r_i * (1 - x_i/Env - α * Σ (c_j/c_i) * x_j)

本文创新：
  - Env_i 不再是常数，而是土壤水分 W 的函数：
    Env_i = Env × exp(-(W - bestW_i)² / MNW_i)
  - W 随时间变化，受植物吸水、蒸发、降水影响：
    dW/dt = -β * Σ x_i * W - γ * W + p(t)
  - p(t) 包含周期性降水 + 随机干旱
```

**为什么这样设计：**
- 植物影响环境（吸水）→ 环境反过来影响植物（生长）
- 形成双向反馈，比单向因果更真实

### 3.2 Task 2: 指标体系

**核心创新：** 构造 3 个量化指标

| 指标 | 公式 | 衡量什么 |
|---|---|---|
| Total Biomass (TB) | TB = (1/T_max) ∫ Σ x_i(t) dt | 群落繁荣度 |
| Coefficient of Variation (CoV) | CoV = std(TB) / TB | 稳定性（越小越稳定） |
| Shannon-Wiener Index (H) | H = -Σ (x_i/TB) * log(x_i/TB) | 物种均匀度 |

**为什么这样设计：**
- TB 衡量"好不好"（生物量越大越好）
- CoV 衡量"稳不稳"（波动越小越稳）
- H 衡量"均不均"（分布越均越好）
- 三个维度综合评价，比单一指标更全面

### 3.3 Task 3: 物种组合对比

**核心设计：** 选择 3 种典型组合

| 组合 | 物种 | 特点 |
|---|---|---|
| (a) | 2 种 drought-escape | 特性相似 |
| (b) | 1 drought-escape + 1 drought-avoiding | 特性中等差异 |
| (c) | 1 drought-escape + 1 drought-tolerant | 特性差异极大 |

**结论：** 组合 (b) 最优（TB = 250.3, CoV = 0.0632），因为特性互补

---

## 4. 摘要写作（第 7 小时）

**草稿（填空式）：**

```
As the severe drought increases since the global warming, many plant communities die
out for lack of water, while others can recover after drought. To explore this phenomenon,
we develop GIID model to describe the response of communities to drought and analyse
whether species diversity can help communities withstand drought.

Before all the models are established, we select five typical plant species and classifiy them
into three categories, according to their inherent growth rate and optimum soil moisture. In
addition, we estimate the parameters used in our models.

For Task 1: To simulate plant growth and interspecific competition, we first developed
the Lotka-Volterra competition model. Then, considering optimum soil moisture of each
species, we set the environmental capacity of them as a function of soil moisture. Finally, we
modeled the soil moisture variation to describe the interaction between plants and the en-
vironment. We consider the water absorption by plants, irregular rainfall, and other factors.
We summarize these analysis and devise our GIID model. Then, we verify the correctness of
model. The results are shown in Figure 7.

For Task 2: First, we do the qualitative analysis and find that the Five Species Community is
more stable in drought. To quantify how the community benefits from the species diversity,
we calculate total biomass, coefficient of variation of total biomass, and S-W index to evaluate
the vigor, stability, and evenness of the ecosystem respectively. The experimental results
show that as the number of species increases, the total biomass of the community increases
and then decreases, while the stability and evenness keep increasing. Besides, two species
are required for the community to benefit.

[... Task 3, 4, 5, 6 ...]

Finally, we change the plant competition intensity, water absorption rate and climate pat-
terns in order to perform sensitivity analysis on these parameters. We find that our model
is sensitive to all of them. We also analyze the strengths and weaknesses of the model and
discuss how to improve it.

Keywords: Lotka-Volterra Model, Biodiversity, Irregular Drought, Complementary Effect
```

**审查：**
- ✅ 每个 task 有 1–2 句
- ✅ 有模型命名（GIID）
- ✅ 有指标命名（TB, CoV, S-W）
- ⚠️ 具体数字较少（只有 "two species"）
- ⚠️ 应补充更多量化结果（如 "TB increased by X%"）

---

## 5. 图表规划（贯穿全程）

| 图号 | 类型 | 证明什么 | 位置 |
|---|---|---|---|
| Figure 1 | 地图 | 美国干旱分布 | Sec 1.1 |
| Figure 2 | 思维导图 | 文献综述 | Sec 1.3 |
| Figure 3 | 流程图 | 本文工作 | Sec 1.4 |
| Figure 4 | 散点图 | 植物分类（生长率 vs 最适湿度） | Sec 2.3 |
| Figure 5–6 | 折线图 | 单物种植物生物量变化 | Sec 3.4.1 |
| Figure 7 | 折线图 | 5 物种生物量变化 | Sec 3.4.2 |
| Figure 8–9 | 折线图 | 单物种 vs 5 物种对比 | Sec 4.1.1 |
| Figure 10–13 | 散点图 | TB/CoV/SW/Pielou vs 物种数 | Sec 4.1.2 |
| Figure 14–15 | 折线图 | 3 种组合对比 | Sec 4.2.1 |
| Figure 16–20 | 折线图 | 干旱频率/强度变化 | Sec 5.1 |
| Figure 21–22 | 折线图 | 栖息地减少 | Sec 5.2 |
| Figure 23–25 | 折线图 | 灵敏度分析 | Sec 6 |

**总计：** 25 张图（中位数 14 张，本文远超中位数）

---

## 6. 关键决策点

### 6.1 为什么选择 Lotka-Volterra？

**理由：**
- 经典种群竞争模型，文献丰富
- 可以扩展到多物种
- 可以耦合环境因子

**风险：**
- 太常见，缺乏创新
- **应对：** 耦合土壤水分，形成双向反馈

### 6.2 为什么构造 CoV 指标？

**理由：**
- 标准差受量纲影响，无法跨场景对比
- CoV = std/mean，无量纲，可跨场景对比

**效果：**
- 从"定性描述"（"更稳定"）升级为"定量证明"（"CoV 从 0.15 降到 0.06"）

### 6.3 为什么选择 3 种典型组合？

**理由：**
- 穷举所有 C(5,2) = 10 种组合计算量太大
- 选择 3 种极端情况（相似/中等/极异）可以覆盖主要模式

**效果：**
- 从"盲目穷举"升级为"有针对性的对比实验"

---

## 7. 评委可能挑的毛病

| 潜在问题 | 论文中的应对 |
|---|---|
| "自创降水函数，未用真实数据" | Weakness 中承认，建议未来用历史数据 |
| "忽略温度、日照等因素" | Weakness 中承认，假设土壤水分是主要因素 |
| "土壤水分描述太简单" | Weakness 中承认，建议进一步实验验证 |
| "参数估计可能有误差" | 灵敏度分析显示模型对参数敏感 |

**策略：** 主动承认局限，比被评委发现更好

---

## 8. 从这篇论文学到的

### 8.1 成功要素

1. **模型命名**：GIID（Growth, Interaction, Irregular Drought）好记
2. **指标构造**：TB + CoV + S-W 三维度综合评价
3. **对照组设计**：单物种 vs 多物种、不同组合对比
4. **详细解释**：每个结果都追溯原因（引用生物学理论）
5. **主动承认局限**：Weakness 中详细讨论

### 8.2 可改进之处

1. **摘要数字较少**：应补充更多量化结果
2. **灵敏度分析无具体数字**：应补充"参数变化 X%，结果变化 Y%"
3. **部分图表无详细解读**：应确保每张图都有 1 段解读

### 8.3 可迁移的写作战术

1. **双向耦合**：将两个独立模型耦合，形成反馈环
2. **指标命名**：为构造的指标命名（如 CoV、S-W Index）
3. **典型组合**：不穷举，选择 3 种极端情况对比
4. **详细解释**：每个结果都追问"为什么"，用理论解释

---

## 9. 如果你来做这道题

### 9.1 你会怎么做？

**模型选择：**
- Task 1: Lotka-Volterra + 环境耦合（与本文相同）
- Task 2: 相同指标体系（TB, CoV, S-W）
- Task 3: 相同对比实验设计
- Task 4–6: 相同情景分析

**创新点：**
- 增加时间延迟（植物生长有滞后效应）
- 增加空间维度（不同区域不同参数）
- 用真实气候数据替代自创降水函数

### 9.2 你能超过这篇吗？

**可能：**
- 用真实数据（如 NOAA 气候数据）
- 增加空间维度（GIS 分析）
- 用机器学习预测参数

**困难：**
- 25 页限制，难以容纳更多模型
- 计算复杂度增加，可能无法在 4 天内完成
- 真实数据可能引入更多不确定性

**结论：** 这篇论文已经是高质量的 O 奖水平，超越它需要更多时间和资源

---

## 10. 总结

这个案例展示了从题目到论文的完整流程：

1. **题目拆解**（1 小时）：提取关键词，分解任务
2. **页预算**（1 小时）：规划各章节页数
3. **模型设计**（4 小时）：选择模型，设计创新点
4. **摘要写作**（1 小时）：填空式模板，确保每个 task 有结论
5. **图表规划**（贯穿全程）：每张图都有明确目的
6. **关键决策**（贯穿全程）：每个选择都有理由
7. **自我审查**（1 小时）：主动承认局限

**总耗时：** 约 9 小时（不含编程和写作）

**关键教训：**
- 先规划，后执行
- 每个模型都要有创新点
- 每个结果都要有解释
- 主动承认局限，比被评委发现更好
