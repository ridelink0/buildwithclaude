# 全文一致性检查清单 + 提交前审查

## A. 全文一致性检查（提交前 6 小时完成）

### A1. 摘要 ↔ 正文一致性
- [ ] 摘要中每个模型名称，正文中都有对应章节
- [ ] 摘要中每个具体数字，正文结果部分完全一致
- [ ] 摘要中提到的指标（如 CoV、S-W Index），正文中都有定义
- [ ] 摘要的结论方向（↑↓/显著/不显著），正文结果支持
- [ ] 摘要中提到的图表编号，正文中实际存在

### A2. 假设一致性
- [ ] 假设列表中每条假设，在正文模型中使用至少一次
- [ ] 正文中使用的假设，在假设列表中全部列出
- [ ] "Assumption N" 的编号与假设列表中的编号一致
- [ ] Strengths/Weaknesses 中提到的假设局限，与假设列表不矛盾
- [ ] 没有"幽灵假设"（假设列表中有但正文从未使用）

### A3. 符号一致性
- [ ] 符号表中每个符号，在正文/公式中出现时使用一致的含义和单位
- [ ] 公式中使用的符号，在符号表中都有定义
- [ ] 同一符号不在不同章节表示不同含义
- [ ] 下标/上标含义一致

### A4. 图表一致性
- [ ] 图表编号连续（Figure 1, 2, 3... / Table 1, 2, 3...）
- [ ] 正文中引用的图表编号与实际编号一致
- [ ] 图表中的数值与正文引用的数值一致
- [ ] 图表有标题、坐标轴标签、单位
- [ ] 多图对比时，坐标轴范围/单位一致

### A5. 参考文献一致性
- [ ] 正文中每个 [N] 引用，在参考文献列表中有对应条目
- [ ] 参考文献列表中每个条目，在正文中至少被引用一次
- [ ] 引用格式统一（APA / IEEE / 自定义，全文一致）
- [ ] 引用的论文/数据确实与所支持的论点相关

### A6. 任务覆盖一致性
- [ ] 6 个子问题全部被回答（无遗漏！）
- [ ] 每个子问题有明确的"Answer"段落或结论句
- [ ] 如果有 Memo/Letter 要求，按题目格式独立成节
- [ ] 正文结论与题目要求的输出格式匹配

## B. 提交前审查清单（提交前 1 小时完成）

### B1. 格式合规
- [ ] 总页数 ≤ 25（含摘要、目录、附录、参考文献）
- [ ] 12 号字体或更大
- [ ] US Letter 或 A4 纸张
- [ ] 每页页眉：`Team # [队号]  Page [页码] of [总页数]`
- [ ] 正文英文（摘要也必须英文）

### B2. 匿名合规
- [ ] 全文无队员姓名
- [ ] 全文无学校名称
- [ ] 全文无指导教师姓名
- [ ] 全文无地理区域标识（如"来自XX大学所在省份"）
- [ ] 如果有 Letter/Memo，未签个人姓名（用 "Team # [队号]" 代替）
- [ ] 文件元数据中无个人信息

### B3. 文件合规
- [ ] 文件格式为 PDF
- [ ] 文件名：`[队号].pdf`（如 `2400996.pdf`）
- [ ] 文件大小 < 17MB
- [ ] 邮件主题：`[队号]`（如 `2400996`）
- [ ] 邮件收件人：`solutions@comap.com`
- [ ] 附件仅 1 个 PDF 文件（不附加代码/数据文件）
- [ ] Summary 页是 PDF 的第 1 页

### B4. 内容完整性
- [ ] Summary Sheet（第 1 页）
- [ ] 目录
- [ ] 引言（背景 + 问题复述）
- [ ] 假设 + 符号 + 数据
- [ ] 核心模型 + 结果（覆盖全部子问题）
- [ ] 灵敏度分析
- [ ] Strengths and Weaknesses
- [ ] 参考文献
- [ ] Memo/Letter（如有题目要求）
- [ ] AI 使用报告（如使用了 AI 工具）

### B5. 发送后确认
- [ ] 发送后 24–48 小时在 COMAP 网站确认接收状态
- [ ] 如显示 "not yet received"，立即联系 COMAP

## C. 快速自检脚本思路（编程手可做）

```python
# 伪代码：自动检查论文一致性
def check_paper_consistency(pdf_text):
    issues = []
    
    # 1. 检查摘要中的数字是否在正文中出现
    summary_numbers = extract_numbers(extract_summary(pdf_text))
    body_numbers = extract_numbers(extract_body(pdf_text))
    for n in summary_numbers:
        if n not in body_numbers:
            issues.append(f"摘要中的数字 {n} 未在正文中找到")
    
    # 2. 检查图表引用是否存在
    fig_refs = find_refs(pdf_text, r"Figure \d+")
    fig_actuals = find_figures(pdf_text)
    for ref in fig_refs:
        if ref not in fig_actuals:
            issues.append(f"引用的 {ref} 不存在")
    
    # 3. 检查假设是否被引用
    assumptions = find_assumptions(pdf_text)
    for i, a in enumerate(assumptions, 1):
        if f"Assumption {i}" not in pdf_text:
            issues.append(f"假设 {i} 未被正文引用")
    
    # 4. 检查参考文献引用
    ref_refs = find_refs(pdf_text, r"\[\d+\]")
    ref_list = find_reference_list(pdf_text)
    for r in ref_refs:
        if r not in ref_list:
            issues.append(f"引用 {r} 不在参考文献列表中")
    
    return issues
```

## D. 评委常见扣分点速查

| 扣分项 | 严重程度 | 修复难度 |
|---|---|---|
| 遗漏子问题 | 🔴 直接淘汰 | 需要重做模型 |
| 摘要与正文数字不一致 | 🔴 终评降级 | 容易修复 |
| 无灵敏度分析 | 🟡 筛选扣分 | 中等（需重跑） |
| 图表无正文解读 | 🟡 筛选扣分 | 容易修复 |
| 假设与模型脱节 | 🟡 终评扣分 | 中等 |
| 参考文献格式混乱 | 🟢 终评小扣分 | 容易修复 |
| 超过 25 页 | 🔴 可能违规 | 需要压缩 |
| 出现个人信息 | 🔴 可能取消资格 | 必须修复 |
