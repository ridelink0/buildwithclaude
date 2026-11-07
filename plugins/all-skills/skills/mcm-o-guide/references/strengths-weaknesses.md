# Strengths & Weaknesses 写作指南

## 1. 语料库统计

| 指标 | 中位数 | O 奖偏好 |
|---|---|---|
| Strengths 条数 | 3 | 3–5 |
| Weaknesses 条数 | 2 | 2–4 |
| 是否含改进方向 | 60% | 90%+ |
| 是否对应假设 | 40% | 80%+ |

> 评委原话（2009 A）：*"A clear discussion of the basic assumptions with some justification and discussion of the implications is necessary. Additionally, a focused discussion on stability and sensitivity is necessary for an entry to receive a higher score."*

## 2. Strengths 写作模板

### 2.1 结构

每条 Strength 用 **做法 + 效果 + 为什么有效** 三段式：

```
• [做法]: We [具体做了什么].
  [效果]: This makes the model more [realistic/accurate/convincing].
  [为什么有效]: Because [解释原因，可引用文献或逻辑].
```

### 2.2 常见 Strength 类型

| 类型 | 示例句式 | 适用场景 |
|---|---|---|
| 考虑了关键特征 | "We considered [特征], which makes the model more realistic" | 机理模型 |
| 多维度评估 | "We adopted [指标1], [指标2], [指标3] to evaluate comprehensively" | 评价类 |
| 参数来源可靠 | "Parameters were determined by [文献/估算], not arbitrary" | 通用 |
| 定性+定量结合 | "We not only used [定性方法], but also calculated [定量指标]" | 通用 |
| 结果解释详细 | "For each simulation, we not only described results but also traced reasons" | 仿真类 |
| 创新模型命名 | "We developed [模型名] which integrates [方法1] and [方法2]" | 有命名模型 |
| 有对照组 | "We compared with/without [机制], quantifying the improvement" | 有 baseline |

### 2.3 O 奖 Strengths 实例（2023 A）

```
• We described the mechanics of the interaction between plant and environment in detail.
  Instead of making the too crude assumption that plant growth rates are directly proportional
  to precipitation, we modeled the interaction by assuming different plants absorb water from
  the soil at different rates, causing the soil moisture to decrease. This makes our model more
  realistic and more convincing.

• Our analysis of plant communities is carried out at both qualitative and quantitative levels.
  We not only used the curves of biomass for a qualitative analysis, but also calculated various
  indicators, such as the total biomass and the CoV of the total biomass to quantitatively measure
  the stability. These analysis made us easier to explain why the communities benefit from diversity.

• Our interpretation of the experimental results is very detailed.
  For each of the simulations we carried out, we not only described the results, but also tried to
  trace the reasons behind the intuitive results. Besides, we use some biological theories to explain
  our conclusions.
```

**拆解：**
- 第 1 条：做法（详细建模交互）+ 效果（更真实）+ 对比（vs 粗糙假设）
- 第 2 条：做法（定性+定量）+ 效果（更容易解释）+ 具体指标名
- 第 3 条：做法（详细解释）+ 效果（追溯原因）+ 理论支撑

## 3. Weaknesses 写作模板

### 3.1 结构

每条 Weakness 用 **局限 + 影响 + 改进方向** 三段式：

```
• [局限]: We [简化/忽略了什么].
  [影响]: This may cause [什么偏差/不精确].
  [改进方向]: In future work, [如何改进].
```

### 3.2 常见 Weakness 类型

| 类型 | 示例句式 | 改进方向 |
|---|---|---|
| 简化假设 | "We assumed [X] is constant, but in reality it varies" | 引入时变参数 |
| 数据局限 | "We used [数据来源], which may not cover [场景]" | 扩展数据源 |
| 忽略因素 | "We ignored [因素], which may affect [结果]" | 纳入该因素 |
| 模型适用性 | "The model is designed for [场景], may not apply to [其他场景]" | 扩展模型 |
| 参数精度 | "Some parameters are estimated, may have uncertainty" | 更精确测量 |
| 计算复杂度 | "The model is computationally intensive for large-scale data" | 优化算法 |

### 3.3 O 奖 Weaknesses 实例（2023 A）

```
• Our description of changes in soil moisture is too simple.
  We assume that the absorption rate of plants is proportional to soil moisture and that the rate
  of evaporation of water is also proportional to soil moisture, and these assumptions may not be
  very reasonable. In practice, these relationships may need to be further discussed with more
  experiment or research results.

• We used a self-created precipitation function to simulate weather change and did not use real
  climate data.
  Our self-created precipitation function cannot simulate the full details of realistic weather changes,
  which may make our model biased. In the practical application of the model, historical precipitation
  data can be found directly.

• We ignored all factors other except precipitation.
  In reality, plant growth may also be affected by other factors such as temperature and sunshine,
  and we need to carefully consider variations in these factors if we wish to further improve the
  accuracy of our models.
```

**拆解：**
- 第 1 条：局限（土壤水分描述太简单）+ 影响（假设可能不合理）+ 改进（更多实验/文献）
- 第 2 条：局限（自创降水函数）+ 影响（可能偏差）+ 改进（使用历史数据）
- 第 3 条：局限（忽略其他因素）+ 影响（温度/日照也影响生长）+ 改进（纳入更多因素）

## 4. 避坑指南

| 坑 | 正确做法 |
|---|---|
| Strengths 泛泛而谈（"我们的模型很好"） | 具体到做法+效果+原因 |
| Weaknesses 写致命问题（"模型完全错误"） | 写可改进的局限，不是致命缺陷 |
| Weaknesses 无改进方向 | 每条 weakness 配 1 个改进方向 |
| Strengths 与假设列表矛盾 | 检查 Strengths 中提到的假设是否在列表中 |
| 只写 1 条 Strength / 1 条 Weakness | 至少 3 条 Strength + 2 条 Weakness |

## 5. 检查清单

- [ ] Strengths ≥ 3 条
- [ ] Weaknesses ≥ 2 条
- [ ] 每条 Strength 有 做法 + 效果 + 为什么有效
- [ ] 每条 Weakness 有 局限 + 影响 + 改进方向
- [ ] Strengths 中提到的假设与假设列表一致
- [ ] Weaknesses 不涉及致命缺陷（如"模型完全错误"）
- [ ] 90%+ 的 Weakness 有改进方向
