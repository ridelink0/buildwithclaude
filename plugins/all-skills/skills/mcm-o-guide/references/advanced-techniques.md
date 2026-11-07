# 高级技术手册：灵敏度、验证、可视化

> 比案例复盘更聚焦具体方法。每个技术给出：
> - **适用场景**（何时用）
> - **具体做法**（怎么实施）
> - **O 奖原文示例**（引用哪篇论文）
> - **产出物模板**（怎么写/画）

---

## 第一部分：灵敏度分析方法族

### 1.1 单参数扫描（One-at-a-Time, OAT）

**适用场景：** 参数少（≤5 个）、评委要求快速稳健性说明。
**难度：** ★☆☆
**O 奖频次：** 2021+ 覆盖率 82-93% 中的大部分。

**做法：**

```
1. 选定关键参数 α
2. 设基线值 α₀
3. 扰动：α = {0.5α₀, 0.8α₀, α₀, 1.2α₀, 1.5α₀}
4. 每次重跑模型
5. 记录输出指标 y
6. 画图：α vs y
7. 写结论句
```

**结论句模板：**

```
"The model is robust with respect to α: varying α within [0.5α₀, 1.5α₀]
changes the total biomass by less than X%, as shown in Figure N."
```

**O 奖示例：** 2023 A 干旱（Page 18）
```
"We set the probability of drought to 30% and the precipitation in a
drought year to 1/2 of a normal year. When the frequency of drought
increases, we adjust the probability of drought to 50%; when the
magnitude of drought increases, we change the precipitation in a
drought year to 1/3 of a normal year."
```
3 组参数 × 5 个物种 = 15 次仿真，一图说清。

**产出物：** 一张参数-输出曲线 + 1 段结论。

---

### 1.2 参数重要性排序（Rank-Oval Plot）

**适用场景：** 参数多（>5 个），需要说清"哪个参数最影响结果"。
**难度：** ★★☆

**做法：**

```
1. 所有参数扰动 ±50%
2. 记录每个参数扰动时的输出变化百分比
3. 按变化率排序
4. 画横向条形图（参数排序 + 变化率）
5. 结论：识别 Top-3 敏感参数
```

**产出物模板：**

| 参数 | 变化率(%) | 影响方向 |
|---|---|---|
| $\alpha$ | 32.4 | ↑ |
| $r$ | 18.7 | ↑ |
| $K$ | 12.1 | ↓ |
| $\beta$ | 5.3 | ↑ |
| $\gamma$ | 2.1 | ↓ |

**结论句：** "The top-3 sensitive parameters are α, r, and K. In practice,
these parameters must be measured with higher accuracy."

---

### 1.3 蒙特卡洛扰动（Monte Carlo）

**适用场景：** 参数不确定性大 + 需要构造置信区间。
**难度：** ★★★

**做法：**

```
1. 每个参数设为概率分布（如 α ~ Normal(α₀, σ)）
2. 采样 N=1000 组参数
3. 每组跑一次模型，收集输出 y
4. 计算 y 的 5%-95% 分位数
5. 画扇形图（置信带）
```

**O 奖示例：** 2021 C 大黄蜂（Page 22-23）
```
"We run 1000 Monte Carlo simulations with parameters drawn from
empirical distributions. The 95% confidence interval of AGH density
is shown as a shaded region in Figure N."
```

**产出物：** 一张扇形置信带图 + 1 段解释。

---

### 1.4 Sobol 敏感性指数

**适用场景：** 需要识别参数交互效应。
**难度：** ★★★★
**O 奖出现频次：** 极少（<5%），一旦出现就是显著创新点。

**做法：**

```
1. 计算一阶 Sobol 指数 S_i（参数 i 单独贡献）
2. 计算总阶指数 ST_i（含交互）
3. ST_i - S_i = 交互贡献
4. 画条形图对比
```

**结论句：** "The interaction effect between α and r is significant
(ST - S = 0.18), suggesting these parameters must be calibrated jointly."

---

### 1.5 初始条件扰动（Initial Condition Robustness）

**适用场景：** 空间/时序模型（CA、SEIR、仿真类）。
**难度：** ★★☆

**做法：**

```
1. 生成 K 组初始条件（不同空间分布）
2. 每组跑完整仿真
3. 在关键时刻 t 比较输出
4. 计算 KL 散度或欧氏距离
5. 构造置信区间
```

**O 奖示例：** 2021 C 大黄蜂（Page 22）
```
"We generate 9 different initial distributions. The KL divergence
between outputs at t=300, 600, 1800, 3600 days is calculated.
Result shows the model is robust against disturbance, and the
95% confidence interval tends to become even smaller as the
evolution continues."
```

**为什么高于平均：** 用 KL 散度量化分布差异（而非简单均值比较）。

---

### 1.6 情景分析（Scenario Analysis）

**适用场景：** F 题（政策）、E 题（环境）——多情景对比。
**难度：** ★★☆

**做法：**

```
1. 定义 3-5 个情景（乐观/中性/悲观）
2. 每个情景设不同的参数组合
3. 跑多个模型
4. 对比关键指标
5. 讨论"什么情况下政策有效"
```

**O 奖示例：** 2023 E 光污染
```
Scenario 1 (Baseline): RL = 0.5154
Scenario 2 (Strategy I+II): RL = 0.0309 after 20 years (-94%)
Scenario 3 (Strategy II+III): RL = 0.0885 after 20 years (-47%)
```

---

## 第二部分：模型验证技术

### 2.1 与真实数据对照（Backtesting）

**适用场景：** 有历史数据可用于验证。
**难度：** ★☆☆

**做法：**

```
1. 用 t=1 到 t=N 的数据训练模型
2. 用 t=N+1 到 t=M 的数据预测
3. 计算 RMSE / MAPE / R²
4. 画仿真 vs 实际对照图
```

**产出物：** 一张双线图（仿真线 + 实际点）+ 3 个误差指标。

---

### 2.2 与基线模型对比（Baseline Comparison）

**适用场景：** A/B/C 题——需要证明"我的模型更好"。
**难度：** ★★☆

**做法：**

```
1. 选 1-2 个基线模型（如 Logistic 对比 SIR）
2. 同一数据训练
3. 同一指标评估（准确率/误差）
4. 画对比图
5. 给出改进百分比
```

**O 奖示例：** 2021 C 大黄蜂
```
"VGG-11 + SVM achieves 90.2% accuracy, compared to 72.5% for
a single SVM baseline—a 24.4% improvement."
```

**产出物：** 一张对比柱状图 + 一行改进百分比。

---

### 2.3 与简单模型理论对比（Theoretical Validation）

**适用场景：** A 题连续模型——理论极限作为验证。
**难度：** ★★★

**做法：**

```
1. 从复杂模型简化出极限情况（如"无竞争"退化为 Logistic）
2. 用解析解验证数值解
3. 一致性证明
```

**评委原话佐证（2009 A）：** *"The best were able to develop multiple
models of different complexity and then verify their numerical models
with the theoretical results of the simpler models."*

---

### 2.4 双度量交叉验证（Metric Robustness）

**适用场景：** D 题网络科学——相似度度量选择可能影响结果。
**难度：** ★★☆

**做法：**

```
1. 选 2 个不同的度量（Minkowski + 余弦）
2. 分别计算相似度矩阵
3. 画两个热力图
4. 目视比较色块分布
5. 结论：结果对度量选择不敏感
```

**O 奖示例：** 2021 D 音乐（Page 9-10）
```
"We use Minkowski distance and cosine distance. The two similarity
heatmaps show similar color block distributions, indicating the
results are robust to metric choice."
```

---

### 2.5 子网络一致性（Subgroup Consistency）

**适用场景：** D 题网络——全网络结果可能受少数节点支配。
**难度：** ★☆☆

**做法：**

```
1. 选 1-2 个子网络
2. 分别跑算法
3. 对比全局排名 vs 子网排名
4. 一致性高 → 结果稳定
```

**O 奖示例：** 2021 D 音乐（Page 8）
```
"We apply our algorithm to the Pop/Rock subnetwork. The top 10
ranking matches the overall network, proving model stability."
```

---

### 2.6 残差分析（Residual Analysis）

**适用场景：** 回归/拟合类模型（B/C/E 题）。
**难度：** ★★☆

**做法：**

```
1. 计算残差 e_i = y_i - ŷ_i
2. 画残差 vs 预测值散点图
3. 检查：随机分布、无系统偏差、方差齐性
4. 正态概率图（Q-Q 图）
```

---

## 第三部分：可视化决策树

### 3.1 决策树：该画什么图？

```
结果类型？
├─ 时序数据 → 线图（折线）+ 阴影带（置信区间）
├─ 类别比较 → 条形图 / 分组柱状图
├─ 分布 → 直方图 / KDE
├─ 相关 → 散点图 + 回归线
├─ 排序 → 横向条形图
├─ 层级 → 树图 / 桑基图
├─ 二维空间 → 热力图 / 地理图
├─ 网络 → 力导向图（ Gephi）
├─ 多变量 → 雷达图 / 平行坐标
└─ 决策 → 甘特图 / 时间线
```

### 3.2 图表密度参考

| 题型 | O 奖中位数 | 目标 |
|---|---|---|
| A 连续 | 15-20 图 | ≥ 14 |
| B 离散 | 10-15 图 | ≥ 12 |
| C 数据 | 18-25 图 | ≥ 20 |
| D 网络 | 12-18 图 | ≥ 15 |
| E 环境 | 15-20 图 | ≥ 15 |
| F 政策 | 12-18 图 | ≥ 14 |

### 3.3 图表配色（评委偏好）

**避坑：**
- ❌ 纯红/纯绿（色盲不友好）
- ❌ 灰色 + 深灰（区分度低）
- ❌ 超过 7 种颜色

**推荐：**
- ✅ ColorBrewer 的 Set2 / Paired / Dark2 调色板
- ✅ Matplotlib `tab10`（默认，10 色区分度好）
- ✅ 学术论文：黑 + 蓝 + 红 + 橙（安全组合）

### 3.4 每张图必配 3 件事

1. **图注（caption）：** `Figure N: [What] vs [What] under [condition]`
2. **正文引用：** `From Figure N, we find that...`
3. **结论句：** 从图得出的 1-3 条 bullet 结论

---

## 第四部分：方程呈现规范

### 4.1 编号规则

- 关键方程编号 (1)(2)(3)...
- 后续引用："substituting (3) into (5) yields..."
- 附录方程不编号

### 4.2 参数分组

- 系统参数：$\alpha, \beta, \gamma$（希腊字母）
- 状态变量：$x, y, z$（拉丁字母）
- 常数：$K, r$（大写或斜体）
- 时刻：$t$（下划线）

### 4.3 单位标注

- 方程后括号标单位：`(m³/s)`
- 或参数表中统一列表

### 4.4 常见错误

| ❌ 错误 | ✅ 正确 |
|---|---|
| 方程内用文本 | 方程内用数学符号 |
| 上下标混乱 | 下标用 `_`，上标用 `^` |
| 括号不匹配 | 用 `\left( \right)` |
| 无单位 | 明确单位 |
| 无编号 | 关键方程编号 |

---

## 第五部分：不同题型的"技术组合拳"

### A 题（连续/机理）推荐组合

```
模型：ODE 系统 + 环境耦合
灵敏度：单参数扫描 + 情景分析
验证：与简单模型理论对比
可视化：多曲线线图 + 相图
指标：自构 2-3 个（TB, CoV, S-W）
```

### B 题（离散/优化）推荐组合

```
模型：多目标规划 + 0-1 规划
灵敏度：参数重要性排序
验证：与基线对比 + 分解实验
可视化：分阶段柱状图 + 决策矩阵
指标：TOPSIS 得分 / 熵权
```

### C 题（数据洞察）推荐组合

```
模型：CA + CNN + 贝叶斯（多模态）
灵敏度：初始条件扰动 + KL 散度
验证：与基线对比 + 残差分析
可视化：热力图 + 地理图 + 时序
指标：自构 3-4 个
```

### D 题（网络科学）推荐组合

```
模型：PageRank 改进 + 相似度
灵敏度：子网络一致性
验证：双度量交叉验证
可视化：网络图 + 热力图 + 排名表
指标：PR 值 + 继承度
```

### E 题（环境/评价）推荐组合

```
模型：AHP + K-means + 子系统风险分解
灵敏度：单参数三档扫描
验证：与真实数据对照
可视化：地理热力图 + 分类分级图
指标：ESE 得分 + 风险等级
```

### F 题（政策）推荐组合

```
模型：AHP + DEA-Malmquist + Markov 链
灵敏度：情景分析
验证：多国交叉对照
可视化：雷达图 + 时间线 + 政策甘特图
指标：OPG 健康分 + 效率指数
```

---

## 快速索引

| 需求 | 章节 |
|---|---|
| 灵敏度方法选择 | §1 |
| 模型验证方法 | §2 |
| 图表选型 | §3 |
| 方程规范 | §4 |
| 题型技术组合 | §5 |
