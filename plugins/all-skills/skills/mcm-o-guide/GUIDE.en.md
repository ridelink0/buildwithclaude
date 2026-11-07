# MCM/ICM Paper-Writing Guide — User Guide

> [简体中文](使用指南.md) · **English**

## What this is

A writing skill distilled from a corpus of **502 award-winning MCM/ICM papers (2004–2024)** plus **3 official judges' commentaries**.

Every claim has data behind it — not "I think", but "of 449 O/F/M papers, 93% ran a sensitivity analysis".

## File structure

```
mcm-o-guide/
├── SKILL.md                          ← main skill file (~320 lines)
│   ├── 0 Quick start
│   ├── 1 The judges' view: three-round knockout
│   ├── 2 The Summary — one page decides everything
│   ├── 3 Paper skeleton and page budget
│   ├── 4 Model-selection matrix
│   ├── 5 Assumptions and data
│   ├── 6 Golden rules for figures and tables
│   ├── 7 Sensitivity analysis
│   ├── 8 Whole-paper consistency checklist
│   ├── 9 Writing checkpoints
│   ├── 10 Common fatal mistakes
│   ├── 11 The gap from Meritorious to Outstanding
│   ├── 12 Advanced modules
│   │   ├── 12.1 Writing Strengths & Weaknesses
│   │   ├── 12.2 Writing the Introduction
│   │   ├── 12.3 Memo / Letter (problem F)
│   │   └── 12.4 Model-innovation strategies
│   └── 13 Quick reference (templates + sentence bank)
├── SKILL.en.md                       ← full English translation of SKILL.md
├── 使用指南.md                         ← this guide (Chinese)
└── references/
    ├── model-matrix.md               ← model matrix + baseline recommendations for 6 problem types
    ├── summary-template.md           ← summary template + sentence-level breakdowns of 5 Outstanding summaries
    ├── checklist.md                  ← whole-paper consistency + pre-submission checklist
    ├── judge-commentary.md           ← 3 official judges' commentaries + cross-analysis
    ├── strengths-weaknesses.md       ← S/W templates + Outstanding examples
    ├── introduction-guide.md         ← Introduction guide
    ├── memo-letter.md                ← Memo/Letter format template (problem F)
    ├── model-innovation.md           ← 6 model-innovation strategies
    ├── end-to-end-case.md            ← end-to-end case: full 2023 A retrospective
    ├── quick-reference-card.md       ← ⚡ quick-reference card (30 minutes before submission)
    ├── team-workflow.md              ← 👥 team workflow (4-day contest)
    └── self-evaluation.md            ← 📊 100-point paper self-assessment
```

## When to use what

| Situation | Open this file |
|---|---|
| **Before the contest** | |
| Organising team roles | references/team-workflow.md |
| Just got the problem, need a paper plan | SKILL.md §3 page budget + §4 model matrix |
| **Writing** | |
| Writing the summary | SKILL.md §2 + references/summary-template.md |
| Writing the Introduction | references/introduction-guide.md |
| Choosing models | references/model-matrix.md |
| Want to innovate the model | references/model-innovation.md |
| Writing Strengths/Weaknesses | references/strengths-weaknesses.md |
| Writing Memo/Letter (problem F) | references/memo-letter.md |
| Looking for academic phrasing | references/sentence-patterns.md |
| **Reviewing** | |
| Self-check after the first draft | references/checklist.md |
| Want to grade the paper | references/self-evaluation.md |
| Want to know how judges think | SKILL.md §1 + references/judge-commentary.md |
| **Submitting** | |
| Final check before submission | references/quick-reference-card.md |
| Want to push from M to O | SKILL.md §11 + references/model-innovation.md |
| **Learning** | |
| Case study A (continuous/mechanistic) | references/end-to-end-case.md |
| Case study B (discrete/optimisation) | references/end-to-end-case-B.md |
| Case study C (data insight) | references/end-to-end-case-C.md |
| Case studies D/E/F (network/environment/policy) | references/end-to-end-case-DEF.md |
| Six-problem overview table | references/end-to-end-case-DEF.md §six-problem panorama |
| Anti-patterns from real papers | references/common-errors.md |
| Page-by-page dissection of 25 pages | references/page-by-page.md |
| Advanced techniques (sensitivity/validation/visualisation) | references/advanced-techniques.md |
| Top Outstanding strategy (data-driven) | references/top-award-strategy.md |
| Top Outstanding anatomy (2022 C Bitcoin) | references/top-paper-anatomy.md |
| **Team upskilling** | |
| Modeller | playbooks/modeling-playbook.md |
| Coder | playbooks/coding-playbook.md |
| Writer | playbooks/writing-playbook.md |
| Research | playbooks/research-playbook.md |
| **Paper skeletons** | |
| LaTeX skeleton | templates/latex-template.tex |
| Markdown skeleton | templates/markdown-template.md |
| Template notes | templates/README.md |
| **Automation** | |
| PDF to text | scripts/extract-pdf.mjs |
| Consistency check | scripts/check-paper.mjs |
| Parameter sweep (sensitivity) | scripts/parameter-sweep.mjs |
| Benchmark against top papers | scripts/benchmark-paper.mjs |

## Data basis

| Metric | Source |
|---|---|
| Corpus statistics (449 valid papers) | 502 PDFs extracted and analysed by the author |
| Judges' commentaries | COMAP official releases: 2009 A/B + 2021 Tips |
| Page budget / figure quotas | Median of 2021–2024 Outstanding papers |
| Common-error elimination rates | Judges' commentaries + corpus statistics |
| Outstanding summary breakdowns | Sentence-level analysis of 5 Outstanding papers (2021 C/D, 2023 A/E, 2024 A) |

## Relationship to the official rules

This skill **does not replace** the current-year COMAP rules. Before submitting you must check that year's official requirements:

- page limit
- file format
- submission method
- AI-use policy
- team number / anonymity requirements

The official rules can change year to year; the writing advice here is based on long-term observation and is relatively stable.

## Roadmap

### ✅ Done

1. ✅ Strengths/Weaknesses writing guide
2. ✅ Introduction writing guide
3. ✅ Memo/Letter template (problem F)
4. ✅ Model-innovation strategy guide
5. ✅ More Outstanding summary breakdowns (3 → 5: 2023 A, 2021 C, 2024 A, 2021 D, 2023 E)
6. ✅ End-to-end case (full 2023 A retrospective)
7. ✅ Quick-reference card (30 minutes before submission)
8. ✅ Team workflow guide (4-day contest)
9. ✅ Paper self-assessment rubric (100 points)
10. ✅ Academic sentence bank (mined from 498 papers)
11. ✅ Automation scripts (PDF extraction + consistency check)
12. ✅ Problem B case retrospective (2022 water resources, discrete/optimisation)
13. ✅ Problem C case retrospective (2021 bumblebees, data insight)
14. ✅ Common-error gallery (anti-patterns)
15. ✅ Combined D/E/F cases (+ A–F six-problem overview table)
16. ✅ 25-page dissection (modelled on the 2023 A Outstanding paper)
17. ✅ Ready-to-compile LaTeX skeleton
18. ✅ Markdown skeleton (Pandoc)
19. ✅ Advanced techniques handbook (6 sensitivity methods / 6 validation methods / visualisation decision tree / technique combos)
20. ✅ Parameter-sweep script (parameter-sweep.mjs, verified working)
21. ✅ Top-award strategy (data insights from 502 real papers)
22. ✅ Benchmarking script (benchmark-paper.mjs, verified working)
23. ✅ Top-paper anatomy (2022 C Bitcoin, 117 numbers, 17 figures)
24. ✅ Modeller upskilling handbook (decomposition / assumptions / model library / validation)
25. ✅ Coder upskilling handbook (Python/Matlab/Lingo templates + figure conventions)
26. ✅ Writer upskilling handbook (summary first / academic English / typesetting)
27. ✅ Research upskilling handbook (literature search / dataset sources / research ideas)

### 🔄 Planned

1. Extended sentence bank organised by problem type
2. Yearly updates with Outstanding analyses of each new contest
3. Larger error gallery (using real Meritorious papers as control group)
