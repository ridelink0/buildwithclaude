# 摘要模板与 O 奖摘要拆解

## 1. 摘要通用模板（填空式）

```
[1句背景] As [现象/趋势] [变化方向], [研究对象] faces [具体挑战].
[1句目标] To explore/evaluate/predict [核心问题], we develop [模型名] model.

[1-2句数据] Before modeling, we [数据预处理动作: classified N species into M categories /
estimated parameters from literature / collected data from X sources].

[Task 1: 2-3句] For Task 1, we established [模型名] based on [基础理论], incorporating
[关键创新点]. The results show that [量化结论, 含数字].

[Task 2: 2-3句] For Task 2, we calculated [指标1], [指标2], and [指标3] to evaluate
[维度1, 维度2, 维度3]. Results indicate that [趋势/数值结论].

[Task 3: 1-2句] For Task 3, we compared [N] scenarios/combinations and found that
[具体结论, 含数字].

[Task 4/N: 1-2句] We varied [参数] and the results show [具体趋势/数值].

[1句灵敏度] Sensitivity analysis on [参数名] confirms the model is [stable/robust/sensitive].

[1句优劣势+结论] We also discuss [模型优势] and acknowledge [主要局限], concluding that
[总体结论/建议].

Keywords: [模型名], [核心概念1], [核心概念2], [核心概念3]
```

## 2. O 奖摘要完整拆解：2023 A — "The Warriors against Drought"

**原文全文：**

> As the severe drought increases since the global warming, many plant communities die
> out for lack of water, while others can recover after drought. To explore this phenomenon,
> we develop GIID model to describe the response of communities to drought and analyse
> whether species diversity can help communities withstand drought.
>
> Before all the models are established, we select five typical plant species and classifiy them
> into three categories, according to their inherent growth rate and optimum soil moisture. In
> addition, we estimate the parameters used in our models.
>
> For Task 1: To simulate plant growth and interspecific competition, we first developed
> the Lotka-Volterra competition model. Then, considering optimum soil moisture of each
> species, we set the environmental capacity of them as a function of soil moisture. Finally, we
> modeled the soil moisture variation to describe the interaction between plants and the en-
> vironment. We consider the water absorption by plants, irregular rainfall, and other factors.
> We summarize these analysis and devise our GIID model. Then, we verify the correctness of
> model. The results are shown in Figure 7.
>
> For Task 2: First, we do the qualitative analysis and find that the Five Species Community is
> more stable in drought. To quantify how the community benefits from the species diversity,
> we calculate total biomass, coefficient of variation of total biomass, and S-W index to evaluate
> the vigor, stability, and evenness of the ecosystem respectively. The experimental results
> show that as the number of species increases, the total biomass of the community increases
> and then decreases, while the stability and evenness keep increasing. Besides, two species
> are required for the community to benefit.
>
> For Task 3: To explore the effect of species type, we choose three typical species com-
> binations and each combination is simulated separately. We find that combinations with
> moderate differences in optimum soil moisture increase the total biomass and stability of the
> community. And if the differences in optimum soil moisture of species are too small or too
> large, the community would not benefit.
>
> For task 4: We adjust the magnitude and frequency of droughts, and the experiment
> results show that: when droughts become stronger and more frequent, the complementary
> effect among species also becomes stronger. And the biomass of the community increases
> as the number of species increases. When droughts are less frequent, the competition among
> species is stronger, and the increase in the number of species lead to decrease in total biomass.
> The increase in the number of species always enhances community stability.
>
> For Tasks 5 and 6: We attributed the effects of habitat loss and environmental pollu-
> tion to the decrease in environmental capacity. So we set up a step function to simulate this
> process. We find that habitat loss and environmental pollution will lead to decrease in total
> community biomass, while multi species community will still have high stability in this pro-
> cess. Next, we illustrate the measures to ensure the long-term viability of the community. We
> also describe the impact of the community on the environment based on above findings.
>
> Finally, we change the plant competition intensity, water absorption rate and climate pat-
> terns in order to perform sensitivity analysis on these parameters. We find that our model
> is sensitive to all of them. We also analyze the strengths and weaknesses of the model and
> discuss how to improve it.
>
> Keywords: Lotka-Volterra Model, Biodiversity, Irregular Drought, Complementary Effect

### 结构拆解

| 段落 | 句数 | 修辞动作 | 数字密度 | 可改进点 |
|---|---|---|---|---|
| 背景 | 2 | 痛点 → 模型命名 (GIID) | 0 | 可加 1 个背景数据增强紧迫感 |
| 数据 | 2 | 分类 + 参数估计 | 5 species, 3 categories | 好 |
| Task 1 | 5 | 方法链 → 验证 | 0（只有 Figure 引用） | ⚠ 应加 1-2 个具体数字 |
| Task 2 | 4 | 定性 → 定量指标 → 趋势结论 | 2 (total biomass ↑↓, stability ↑, evenness ↑, "two species") | 好，有趋势无具体数值 |
| Task 3 | 3 | 对比实验 → 结论 | 3 combinations | 好 |
| Task 4 | 4 | 参数变化 → 结论 | 趋势描述，无具体数字 | ⚠ 应加具体改善百分比 |
| Task 5-6 | 4 | 归因 → 仿真 → 结论 → 建议 | 0 | ⚠ 可加数值 |
| 灵敏度 | 3 | 参数扫描 → 结论 + 优劣势 | 3 parameters | 好 |
| **合计** | **~27 句** | | | 数字密度约 15-20，达标 |

**优点：**
- 每个 task 有独立段落，评委一目了然
- "GIID" 模型命名好记
- 指标体系清晰（total biomass, CoV, S-W index）
- 关键词 4 个，精准

**可改进：**
- Task 1 和 Task 4 缺乏具体数值结论
- 没有 baseline 对比的量化结果

## 3. O 奖摘要完整拆解：2021 C — "Asian Giant Hornet"

**原文关键段：**

> We address the first problem by building a powerful cellular automata (CA) model with a set
> of self-defined update rules. We first divide Washington State and its surrounding area into 2925
> regions (or cells), each spanning an area of size 12km * 12km. [...] The simulation given by CA
> depicts the following invasion dynamics: 1) Strait of Georgia will prevent the spread of AGH
> colony to the west, specifically, to the Vancouver Island; 2) A proportion of AGH will first move
> toward the east, and then head south [...]

> For image data analysis, we construct a two-stage image classification model based on a
> pre-trained VGG-11 architecture followed by an SVM classifier. [...] obtaining a mean testing
> accuracy of 90.2% and AUROC score of 94.4%. The model also proves robust under adversarial
> attacks.

### 结构拆解

| 段落 | 修辞动作 | 数字密度 | 亮点 |
|---|---|---|---|
| CA 模型 | 方法链 + 空间离散化 | 2925 cells, 12km×12km | 参数透明 |
| CA 结果 | 3 条动态结论（编号列表） | 地理名称 | 结论可视化导向 |
| 图片分类 | 方法 + 指标 | 90.2%, 94.4% AUROC | 具体数值 + 鲁棒性 |
| 报告分类 | Naive Bayes + 区域可信度 | — | 创新指标 |
| Baum-Welch 更新 | 模型更新方法 | Monte Carlo | 高级方法加分 |
| 结论 + Memo | 消灭判定 + 政策建议 | — | 完整收尾 |

**优点：**
- 极高的数字密度：2925, 12km, 90.2%, 94.4%
- 方法命名：CA, Naive Bayes, Baum-Welch
- 涵盖多模态：空间仿真 + 图像分类 + 贝叶斯推理

**可改进：**
- 摘要较长（可能超过 1 页），需控制

## 4. O 奖摘要完整拆解：2024 A — "Adaptive Sex of Lamprey"

**原文关键段：**

> For task 2, we simulated the iteration with and without adaptive sex lamprey population
> respectively, and adjusted the environmental parameters downward and upward at the two time
> points for comparative analysis, and the results show that adaptive sex enhances the resilience
> stability of the population and reduces the resistance stability of the population...

> For Model II, we established a complete ecological system assessment model cover-
> ing Biomass, Diversity and Stability, in which Shannon-Wiener diversity index was
> introduced to measure the ecosystem's diversity, and a new variance-based measure of Stability,
> S, is introduced.

### 结构拆解

| 段落 | 修辞动作 | 亮点 |
|---|---|---|
| 双模型架构 | Model I (种群迭代) + Model II (BDS 评估) | 模型链清晰 |
| Task 2 | 有/无 adaptive sex 对比 | baseline + 本文 |
| Task 4 | 物种间关联矩阵 | 生态学视角 |
| 灵敏度 | k, b₀ 扰动 | 2 参数 × 3 值 |

**优点：**
- 双模型架构展示建模深度
- 有对照组设计（with/without adaptive sex）
- BDS 评估体系（Biomass, Diversity, Stability）

**可改进：**
- 摘要中具体数值较少，应补充关键百分比

## 6. 摘要字数与数字基准

| 指标 | 中位数 | 优秀线 | O 奖推荐 |
|---|---|---|---|
| 总词数 | 437 | 350–520 | 400–500 |
| 含数字的句子 | 6–8 | ≥5 | ≥8 |
| 具体数字个数 | 20–30 | ≥15 | 20–35 |
| 模型名称出现次数 | 2–4 | ≥2 | ≥3 |
| 关键词数量 | 4–5 | 3–6 | 4–5 |
| Task 覆盖率 | 100% | 100% | 100% + 每个 ≥1 数字 |

## 7. O 奖摘要完整拆解：2021 D — "Music Never Gets Old"

**原文关键段：**

> Music does not evolve isolately, but is always influenced by other artists, other
> music, or by society and events. To quantify the musical influence, we developed four
> models based on building networks.
>
> First, we established Influence Evaluation Model Based on PageRank Algorithm for
> problem 1. [...] Through this model, we sought for the nodes with high-influence, and
> got the top 20 influential artists as shown in the table 2.
>
> Second, we established Similarity Model Based on Distance of Vector for problem 2.
> We developed the music characteristic vector of the artist, which is positively correlated
> with vector distance. By calculating the distance and drawing heatmap, we got the
> similarity between artists at each node.
>
> Third, we established Hybrid Model of Influence and Similarity for question 3 and
> question 4. [...] we established Inheriting Degree Model of Music Characteristics,
> combining the connection of network nodes with similarity to develop the inheriting
> degree index.
>
> Fourth, we established Analysis Model of Music Evolution Process for questions 5, 6
> and 7. [...] Take the 1960's for example, we found that the Beatles were the
> revolutionaries of music, completing question 5.

### 结构拆解

| 段落 | 修辞动作 | 亮点 |
|---|---|---|
| 背景 | 1 句引入 → 模型命名 | 简洁 |
| 模型 1 | PageRank 改进 → top 20 结果 | 有具体输出（table 2） |
| 模型 2 | 特征向量 + 距离 → 热力图 | 方法清晰 |
| 模型 3 | 混合模型 + 继承度指标 | 创新指标命名 |
| 模型 4 | 演化分析 → Beatles 案例 | 具体案例（1960s） |
| 收尾 | 灵敏度 + 优劣势 + ICM Society | 完整 |

**优点：**
- 4 个模型清晰对应 7 个子问题
- 模型命名好记（Influence Evaluation Model、Similarity Model 等）
- 有具体案例（Beatles, 1960s）
- 有创新指标（Inheriting Degree）

**可改进：**
- 摘要中具体数字较少（只有 "top 20"）
- 应补充更多量化结果

## 8. O 奖摘要完整拆解：2023 E — "Turn off the lights, Turn on the stars!"

**原文关键段：**

> For LPRA Model(Model II), we use Analytic Hierarchy Process(AHP) based on Google
> search index to quantify the light pollution risk level(RL) of a certain region, then apply
> our model to 284 regions. After that, we use K-means algorithm to create a metric
> system for the risk levels and constructed four ranks: Slight(0.0443 ∼ 0.1678),
> Moderate(0.1705 ∼ 0.2542), Serious(0.2568 ∼ 0.3698), and Severe(0.3976 ∼ 0.6186).
> To apply our model to specific locations, we selected Ordos as protected land, Zhaotong
> as rural community, Qingyuan as suburban community, and Guangzhou as the urban
> community and obtained their RL scores: 0.1332, 0.1778, 0.2574 and 0.5154, while
> their risk levels are slight, moderate, serious and severe respectively.

> The risk level in Guangzhou decreased from 0.5153 to 0.0309 while Zhaotong
> decreased from 0.1678 to 0.0885 after 20 years of implementing the optimal strategy.

### 结构拆解

| 段落 | 修辞动作 | 数字密度 | 亮点 |
|---|---|---|---|
| 背景 | 引言 + 问题定义 | — | 文学引用开头 |
| Model I (ESE) | 3 子系统分解 | — | 结构清晰 |
| Model II (LPRA) | AHP + K-means → 4 级风险 | 4 个区间 + 4 个城市得分 | **极高数字密度** |
| Model III (I-ESE) | 3 种干预策略 | — | 策略具体 |
| 案例研究 | 广州 + 昭通 → 最优策略 | 0.5153→0.0309, 0.1678→0.0885 | **量化改善幅度** |
| 灵敏度 | 成本 ±50% | — | 稳健性验证 |

**优点：**
- 数字密度极高：4 个风险区间、4 个城市得分、2 个改善幅度
- 3 个模型层层递进（ESE → LPRA → I-ESE）
- 有具体案例（广州、昭通）
- 干预策略具体可操作

**可改进：**
- 摘要较长（可能超过 1 页）
- 灵敏度部分无具体数字

## 9. 摘要写作 SOP

1. **先写正文，后写摘要**（但摘要排在论文最前）
2. 用模板填空，确保每个 task 有 1–2 句 + 至少 1 个数字
3. 写完摘要后数：数字个数 ≥ 20？每个 task 都有结论？
4. 请编程手读摘要：能仅凭摘要复述论文做了什么吗？
5. 最终审查：摘要与正文数字 100% 一致？
