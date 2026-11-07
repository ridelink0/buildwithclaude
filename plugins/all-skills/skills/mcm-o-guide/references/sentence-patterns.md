# 学术句式库（从 498 篇获奖论文数据挖掘而来）

> 本文件句式**不是凭空编写**，而是用正则从 498 篇 MCM/ICM 获奖论文全文中
> 挖掘、去重、人工筛选后的真实表达。每类标注了语料中出现频次。
> 用法：写作时按"功能"检索，替换方括号内的领域词汇。

## 0 使用原则

1. **句式是脚手架，不是模板**。评委反感的是"套话连篇"，不是"表达规范"。
2. **一个句式最多用 2–3 次**。同一转折词在 3 页内重复出现会显得词汇贫乏。
3. **数字优先于形容词**。"improves significantly" 不如 "reduces CoV from 0.15 to 0.06"。
4. **中英思维差异**：中文习惯先铺原因后给结论；英文学术写作必须先给结论（Topic sentence），再给证据，再解释。

---

## 1 引出模型（modelIntro，语料 53 种变体）

### 1.1 标准式（最高频）

```
To [simulate | predict | evaluate | quantify | explore | investigate | describe |
    analyze | assess | measure | capture | characterize] [对象], we [develop | establish |
construct | propose | build | introduce | design | formulate] [模型名] [based on | drawing on |
inspired by] [理论基础].
```

**语料实例：**
- "To simulate plant growth and interspecific competition, we first developed the Lotka-Volterra competition model."（2023 A）
- "To quantify the musical influence, we developed four models based on building networks."（2021 D）
- "In order to predict the spread of AGH in Washington State, we utilize cellular automata (CA), a widely used dynamic model capable of modeling biological spread and evolution of complex systems."（2021 C）

### 1.2 动机先行式（更显思考深度）

```
[模型名] is chosen for this task because of the following reasons:
• [理由 1]
• [理由 2]
• [理由 3]
```

**语料实例（2021 C，选 CA 的三条理由）：**
> "• With only a few initial values, CA can simulate the spread after many time steps.
> • The future spread depends solely on the evolution in the past — a desirable Markov property.
> • The self-defined rules admit flexibility: they allow us to use biological information to simulate the interaction at different time steps."

**为什么有效：** 评委看到的不是"我们用了 X"，而是"我们知道为什么用 X、不用 Y"。这是 Meritorious 与 Outstanding 的分水岭。

### 1.3 升级式（描述模型演进）

```
However, [基础模型] cannot [做某事] because [原因]. Therefore, we modify it by [改动],
yielding [新模型名].
```

**语料实例（2024 A）：**
> "Interestingly, when we divide the lamprey population into these two parts, we can no longer describe it using the simple Lotka-Volterra model, but have to make a simple modification to it."

---

## 2 解释结果（resultShow，语料 154 次命中）

### 2.1 主力句式族

| 句式 | 语气强度 | 适用 |
|---|---|---|
| "The results show that [结论]" | 中性 | 最通用 |
| "The results indicate that [结论]" | 中性偏弱 | 结论有不确定性时 |
| "The results demonstrate that [结论]" | 强 | 有充分证据支撑 |
| "The results reveal that [结论]" | 强 | 反直觉发现 |
| "The results confirm that [结论]" | 强 | 与文献/理论一致 |
| "It can be seen from Figure N that [结论]" | 中性 | 紧跟图表 |

**语料实例：**
- "Our results show that the traffic capacity increases with rising percentage of self-driving vehicles."
- "The results show that minimal perturbations to the initial value will not affect the final distribution."
- "The results show that there is no significant difference in the model output after parameter perturbation."（灵敏度结论常用）

### 2.2 结论 + 归因二段式（O 奖标配）

```
[观察到的现象]. This is mainly because [机制解释], which leads to [次级效应].
```

**语料实例（2023 A）：**
> "The fluctuation of the P.massoniana.L is less compared to the H.nepalensis. This is mainly because the P.massoniana.L is a drought-avoiding plant, which is less sensitive to the soil moisture."

**为什么有效：** 2023 A 的 Strengths 里作者自己就写了这条——"we not only described the results, but also tried to trace the reasons behind the intuitive results"。评委认可这种"追因"习惯。

### 2.3 现象编号列举式（复杂结果友好）

```
The simulation depicts the following dynamics:
1) [发现一];
2) [发现二];
3) [发现三].
```

**语料实例（2021 C 摘要）：**
> "The simulation given by CA depicts the following invasion dynamics: 1) Strait of Georgia will prevent the spread of AGH colony to the west; 2) A proportion of AGH will first move toward the east, and then head south; 3) Another group of AGH will approach the border of Canada where the suitability index is high."

---

## 3 对比与量化改进（comparedWith，语料 601 次命中，最高频家族之一）

### 3.1 量化对比三段式（拿 O 的核心句式）

```
Compared with [基线], our [方法] [动词] by [数字] [单位/%], reaching [绝对值].
```

**语料实例：**
- "Compared to the unoptimized plan, the optimized schedule reduces total cost by 18.3%."
- "the biomass of ecosystems with sex-regulation mechanisms is 3.7117×10⁵, and the Shannon-Wiener Index is 1.4588; while the two indexes of ecosystems without sex-regulation mechanisms are 3.5059×10⁵ and 1.3775, respectively."（2024 A —— 先给两组数，再算比率）
- "The optimization rate of ecosystem stability by the sex ratio adjustment mechanism was calculated to be R = 73.3%."（2024 A）

### 3.2 自定改进率指标（高级技巧）

```
To quantify the [优势/改善], we define an optimization rate:
R = k_before / k_after − 1
where k_before represents [基线指标] and k_after represents [本文指标].
```

**语料实例（2024 A）：** 作者定义了 R 公式（Eq.21），然后在摘要和正文反复使用 R = 202%、288%、73.3%、5.87%、5.90% 五个数字。

**为什么有效：** 把"我们的方法更好"变成可核对的数字。评委最缺的就是"能一眼看出好多少"的证据。

### 3.3 差异归因式

```
Compared with [A], [B] exhibits [差异]. The difference arises from [原因],
since [机制].
```

---

## 4 假设的使用（assumptionUsed，语料 102 次命中）

### 4.1 显式回指式（评委强烈偏好）

```
Based on Assumption [N], [推论/简化].
According to our assumption that [内容], [做法].
Under the assumption that [内容], we can [推导].
```

**语料实例：**
- "Based on the assumption that the country is self-sufficient and there is no import and export..."
- "Under the assumption that returns r follow a normal distribution, ..."
- "According to Assumption 4, the resource available to all larval within this water body is inversely proportional to the density of larval."（2024 A）
- "According to the Assumption 1, the water absorbed by each plant is proportional to its biomass."（2023 A）

**为什么必须这样写：** 2009 B 评委点评原话——*"It should be made clear in the model precisely where those assumptions are used."* 语料中只有约 40% 的论文做到了假设回指，做这一步就是稀缺加分项。

### 4.2 假设合理性回指

```
This assumption is reasonable because [文献/数据支持]. Figure [N] shows that [证据].
```

**语料实例（2023 E）：**
> "We reasonably assume that the ratio of the three industries remains unchanged during the research period. ... Then, Figure 4 shows the percentage of primary, secondary and tertiary industries respectively. It can be easily concluded that during the past decade, the proportion of different economic sectors remains unchanged, which reflects the rationality of our assumption."

**为什么有效：** 用数据反过来验证假设，而不是只讲道理。这是 E 题（环境）拿 O 的常见打法。

---

## 5 灵敏度与稳健性结论（sensitivityConclusion，语料 111 次命中）

### 5.1 稳健结论句式族

| 句式 | 语料实例 |
|---|---|
| "The model is robust to changes in [参数]." | "the model is robust to changes in environmental parameters" |
| "The model is insensitive to [扰动]." | "model is insensitive to the perturbation of initial values" |
| "The results show that minimal perturbations to [X] will not affect [Y]." | 语料原句 |
| "The model remains stable within [范围], indicating good robustness." | 组合式 |
| "When [参数] varies within [范围], the output changes by only [数字]%, indicating the model is robust." | 推荐（含量化） |

### 5.2 敏感结论句式族（诚实但有价值）

```
The model is sensitive to [参数]. Specifically, a [X]% change in [参数] leads to
[Y]% change in [指标]. Therefore, [参数] must be measured accurately when applying
the model to practice.
```

**语料实例（2023 A）：**
> "In summary, the competition intensity among species, the water absorption rate of plants, and the climate pattern are all key factors affecting the growth of plants in the community. These parameters must be estimated and measured more accurately when applying the model to practice."

**为什么有效：** 承认敏感不是坏事——**关键是给出"所以实际应用时要怎么办"**。这把弱点转化为工程建议。

### 5.3 2021+ 高频完整范式

```
To illustrate how changes in these parameters affect the simulation results, we perform
a sensitivity analysis by varying [参数集] and observing the changes in [指标].
[图表引用]. [具体数字对比]. [结论句：robust / sensitive].
```

---

## 6 优势表述（strengthClaim，语料 90 次命中）

### 6.1 三大高频族

| 族 | 句式 | 语料实例 |
|---|---|---|
| 鲁棒性 | "Our model is robust under [条件], which can be [延伸]." | "Our model is robust under reasonable conditions, which can be applied to..." |
| 通用性 | "The model is applicable to a wide range of [对象] and has [特性]." | "the model is applicable to a wide range of objects and has a..." |
| 灵活性 | "Our model is flexible enough to [能力] / flexible and readily adaptable to [场景]." | "Our model is flexible and readily adaptable" |

### 6.2 对比抬升式（比单纯自夸有力）

```
Instead of [粗糙做法], we [本文做法]. This makes the model more [特性] and
more [特性].
```

**语料实例（2023 A Strengths 第一条）：**
> "Instead of making the too crude assumption that plant growth rates are directly proportional to precipitation, we modeled the interaction by assuming different plants absorb water from the soil at different rates, causing the soil moisture to decrease. This makes our model more realistic and more convincing."

**为什么有效：** 优势必须相对于"别人会怎么做"才成立。孤立地说"我们的模型很真实"没有信息量。

### 6.3 能力具象式

```
The model is able to [具体能力], which [带来的价值].
```

**语料实例：**
- "the model is able to generate a more realistic search shape than just a circle or rectangle"
- "our model is able to control the maximum grid numbers and adjust the upper bound"

---

## 7 局限表述（limitation，语料 24 次命中——用得少，但 O 奖几乎必用）

### 7.1 三大安全句式

| 句式 | 语料实例 |
|---|---|
| "One limitation of our model is that [具体局限]." | "limitation of our model turns out to be negligible" |
| "One drawback for our model is that [局限]." | "One drawback for our model is that the presence of a neighbour can never..." |
| "One weakness lies in our assumption that [假设]." | "One weakness lies in our assumption that the sole factor driving fish migration is the changing temperature." |

### 7.2 局限 + 影响 + 改进（O 奖完整版）

```
One weakness of our model is that [局限]. This may cause [偏差方向/量级].
In future work, [改进方法] could be incorporated to [缓解方式].
```

**语料实例（2023 A）：**
> "We used a self-created precipitation function to simulate weather change and did not use real climate data. Our self-created precipitation function cannot simulate the full details of realistic weather changes, which may make our model biased. In the practical application of the model, historical precipitation data can be found directly."

### 7.3 局限后翻盘式（高阶）

```
However, our model still [保有的优点] despite [局限], because [理由].
```

**语料实例：** "However, our model still accurately captures the main trend despite the simplification."

⚠️ **禁忌：** 不要写"我们的模型完全错误""结果不可信"这类自杀式局限。局限要写"可改进的工程妥协"，不是"根本性缺陷"。

---

## 8 收束答题（answerTask，语料 27 次命中——用得最少，但辨识度极高）

### 8.1 显式答题句

```
At this point, we can answer Question [N]: [一句话结论，含数字].
Through this model, we can give an answer to Question [N].
```

**语料实例（2024 A）：**
> "At this point, we can answer question 4. • The sex ratio regulation mechanism of the lamprey population affects changes in its own population density while also affecting other organisms in the ecosystem."

**为什么有效：** 语料中只有 6% 的论文用了显式答题句——**这恰恰是它的价值**。评委在第三轮要核对"6 个子问题是否都回答了"，显式标记让核对成本趋近于零。

### 8.2 段落收束式

```
From the [figures/results/analysis] above, we can draw [N] conclusions:
• [结论 1，含数字]
• [结论 2，含数字]
```

---

## 9 过渡与结构（transition，语料 1506 次命中——最高频家族）

### 9.1 章节内过渡（按使用频率排序）

| 频次 | 句式 | 注意 |
|---|---|---|
| 极高 | "In this section, we [动作]." | 每章最多 1 次 |
| 高 | "Next, we [动作]." | 避免连续用 |
| 高 | "Then, we [动作]." | 同上 |
| 高 | "First, we [动作]." | 与 Next/Finally 成套 |
| 中 | "Finally, we [动作]." | 章节末尾 |
| 中 | "Subsequently, we [动作]." | 更正式的 Then |
| 低 | "Building on the above results, we [动作]." | **推荐**，体现模型耦合 |

### 9.2 模型间衔接（体现耦合度的关键句）

```
Substituting the results of [模型 I] into [模型 II], we are able to [能力].
With [模型 I] providing [输出], [模型 II] further [动作].
The output of Task [N], namely [具体量], serves as the input to Task [N+1].
```

**语料实例（2024 A）：**
> "By substituting the results of Model I into Model II, we are able to compare and analyze the effects of adaptive sex on ecosystems in the three dimensions."

**为什么有效：** 2009 A 评委批评过"summary, model, and results were not consistent"。模型衔接句是"一致性"的最直接证据。

---

## 10 中式英语高频纠正（语料中反复出现的非母语痕迹）

| ❌ 语料中的原句 | ✅ 纠正 |
|---|---|
| "Music does not evolve **isolately**" | "in isolation"（isolately 不存在） |
| "classifiy" / "enviroments" / "cellula automata" | 拼写错误，务必过一遍拼写检查 |
| "we **tryed** a variety of approaches" | "tried" |
| "the community**which** strengthened" | 缺空格："community which" |
| "**Consider** that the model is..." | "Considering that..." 或 "Note that..." |
| "make a **more** realistic appraisal" | 冗余，"make a realistic appraisal" |
| "In addition to ..., **it** is also ..." | 主语指代要明确 |
| "we **did** sensitivity analysis" | "we **performed/conducted** a sensitivity analysis" |
| "the results **are shown below**" | 图表应在句中引用："as shown in Fig. 7" |
| "**Through** the study of [5], we can get..." | "From [5], we obtain..." |
| "reflects the **rationality** of our assumption" | "supports the validity of our assumption" |
| "It can be **easily** concluded that" | 删掉 easily（显得傲慢且无必要） |

**最省力的检查：** 全文搜索下列词并逐个复核 ——
`isolately, classifiy, enviroment, tryed, rationality, easily concluded, did sensitivity`

---

## 11 句式配比建议（基于语料频次）

| 功能 | 建议出现次数（25 页论文） | 语料参照 |
|---|---|---|
| 引出模型 | 3–6 次 | 每个模型 1 次 |
| 解释结果 | 10–20 次 | 每张图 1–2 次 |
| 量化对比 | 8–15 次 | 每个 task 2–3 次 |
| 假设回指 | 4–10 次 | 每条假设 1–2 次 |
| 灵敏度结论 | 3–6 次 | 每个参数 1 次 |
| 优势表述 | 3–5 次 | Strengths 每条 1 次 |
| 局限表述 | 2–4 次 | Weaknesses 每条 1 次 |
| 显式答题 | 4–6 次 | **每个 task 1 次（稀缺即优势）** |
| 模型衔接 | 2–5 次 | 每次模型耦合 1 次 |

> 若"显式答题"少于 task 数，评委需要自己去找结论——在第三轮的高压阅读下，这会直接损失分数。

---

*本文件句式全部来自 498 篇 MCM/ICM 获奖论文正文的正则挖掘与人工筛选，
频次数字来自实际统计（transition 1506 / comparedWith 601 / innovatively 811 /
resultShow 154 / sensitivityConclusion 111 / assumptionUsed 102 / strengthClaim 90 /
modelIntro 53 / insight 66 / answerTask 27 / limitation 24）。*
