# Memo / Letter 写作指南（F 题 / Policy 题）

## 1. 语料库统计

| 指标 | 中位数 | O 奖偏好 |
|---|---|---|
| Memo/Letter 页数 | 0.5–1 | 0.5–1（必须独立成节） |
| 格式合规率 | 70% | 100%（按题目要求） |
| 含具体建议数 | 3–5 | 3–5（从模型结果推出） |
| 含数据支撑 | 40% | 80%+（引用正文结果） |

> **关键规则：** Memo/Letter 必须按题目要求的格式独立成节，不能混入正文。

## 2. Memo 标准格式

### 2.1 模板

```
MEMORANDUM

TO: [收件人，如 "Washington State Department of Agriculture"]
FROM: Team #[队号]
DATE: [日期]
RE: [主题，如 "Urgent Actions for Asian Giant Hornet Containment"]

Dear [收件人],

[1段背景] We are writing to bring your attention to [问题]. Based on our mathematical
modeling analysis, we have identified [关键发现]. This memorandum summarizes our findings
and provides actionable recommendations.

[1段严重性] The situation is [严重/urgent/critical]. Our model predicts that [具体预测，
带数字]. Without intervention, [后果].

[建议部分] We recommend the following actions:

1. [建议 1]: [具体行动]. Our model shows that [数据支撑].
2. [建议 2]: [具体行动]. Analysis indicates [数据支撑].
3. [建议 3]: [具体行动]. Simulation results demonstrate [数据支撑].

[结论段] We believe these measures, if implemented promptly, can [预期效果]. We are
available to discuss these recommendations further and provide additional analysis as needed.

Sincerely,
Team #[队号]
```

### 2.2 O 奖实例（2021 C — AGH 入侵）

```
MEMO

TO: Washington State Department of Agriculture
FROM: Team #2109298
DATE: February 2021
RE: Asian Giant Hornet Invasion: Urgent Actions and Report Processing Strategy

Dear Sir/Madam,

We are writing to address the critical issue of Asian Giant Hornet (AGH) invasion in
Washington State. Our mathematical modeling has provided key insights into AGH spread
dynamics and report classification, which we believe are crucial for effective containment.

KEY FINDINGS:

1. Spread Prediction: Our cellular automata model predicts that AGH colonies will primarily
   converge towards the Okanogan-Wenatchee National Forest region within 5 years. The Strait
   of Georgia will prevent westward spread to Vancouver Island.

2. Report Accuracy: Our image classification model achieves 90.2% testing accuracy and 94.4%
   AUROC score in distinguishing AGH from similar insects. This indicates that civilian reports
   with images can be reliably processed.

3. Priority Strategy: Based on our Bayesian analysis, reports from regions with high suitability
   index and frequent sightings should be prioritized for investigation.

RECOMMENDATIONS:

1. Focus surveillance efforts on the Okanogan-Wenatchee National Forest region, where our
   model predicts AGH colonies will concentrate.

2. Implement our image classification system to automatically filter civilian reports, reducing
   manual workload by approximately 80%.

3. Establish a tiered response system: high-priority reports (from high-suitability regions with
   images) should be investigated within 24 hours; low-priority reports can be processed in
   batches.

4. Continue monitoring for at least 2 years after the last positive sighting to confirm eradication.

We believe these measures, combined with continued public engagement, can effectively contain
and potentially eradicate AGH from Washington State.

Sincerely,
Team #2109298
```

**拆解：**
- 格式合规：TO/FROM/DATE/RE 完整
- 3 条 KEY FINDINGS，每条有数据支撑
- 4 条 RECOMMENDATIONS，每条具体可操作
- 结论段简洁有力
- 签名用 "Team #[队号]"，无个人信息

## 3. Letter 标准格式

### 3.1 模板

```
[日期]

[收件人姓名/职位]
[机构名称]
[地址]

Dear [收件人],

[1段背景] I am writing to [目的]. As a team of mathematical modelers, we have analyzed
[问题] and would like to share our findings and recommendations.

[1段发现] Our analysis reveals that [关键发现]. Specifically, [具体数据]. This suggests
that [含义].

[建议部分] Based on our results, we recommend the following actions:

First, [建议 1]. Our model shows that [数据支撑].

Second, [建议 2]. Analysis indicates [数据支撑].

Third, [建议 3]. Simulation results demonstrate [数据支撑].

[结论段] We hope these recommendations will be helpful in addressing [问题]. Please do
not hesitate to contact us if you require further analysis or clarification.

Sincerely,

Team #[队号]
```

## 4. 建议写作原则

### 4.1 建议必须从模型结果推出

**错误写法：**
```
We recommend reducing light pollution. (泛泛而谈，无数据支撑)
```

**正确写法：**
```
We recommend reducing light intensity in urban areas by 30%. Our I-ESE Model shows that
this strategy can decrease the risk level in Guangzhou from 0.5153 to 0.0309 within 20 years,
a 94% reduction. (具体行动 + 数据支撑 + 预期效果)
```

### 4.2 建议必须具体可操作

**错误写法：**
```
We recommend taking action to protect the environment. (太笼统)
```

**正确写法：**
```
We recommend delimiting dark night protection areas in Ordos and implementing lighting
restrictions during peak wildlife activity hours (10 PM - 4 AM). Our LPRA Model indicates
that this strategy can reduce the ecological risk level by 45% while maintaining 90% of
economic activity. (具体地点 + 具体时间 + 量化效果)
```

### 4.3 建议数量

- 至少 3 条建议
- 每条建议 1–2 句
- 每条建议有数据支撑

## 5. 避坑指南

| 坑 | 正确做法 |
|---|---|
| Memo/Letter 混入正文 | 独立成节，放在参考文献之后 |
| 无 TO/FROM/DATE/RE | 必须完整 |
| 建议无数据支撑 | 每条建议引用正文结果 |
| 建议太笼统 | 具体到地点/时间/行动/效果 |
| 签名用个人姓名 | 用 "Team #[队号]" |
| 超过 1 页 | 控制在 0.5–1 页 |

## 6. 检查清单

- [ ] Memo/Letter 独立成节（不在正文中）
- [ ] 格式完整（TO/FROM/DATE/RE 或 日期/收件人/地址）
- [ ] 建议数量 ≥ 3 条
- [ ] 每条建议有数据支撑（引用正文结果）
- [ ] 建议具体可操作（地点/时间/行动/效果）
- [ ] 签名用 "Team #[队号]"，无个人信息
- [ ] 页数 ≤ 1 页
- [ ] 语言正式但简洁（避免口语化）
