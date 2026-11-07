# 编程手能力强化手册

> 基于 6 篇 O 奖论文的代码结构分析，提炼编程能力的实战模板。
> 工具：Python / Matlab / Lingo

---

## 1 Python 代码模板

### 1.1 数据处理模板

```python
# data_processing.py
import pandas as pd
import numpy as np

# 读取数据
df = pd.read_excel('data.xlsx')

# 数据清洗
df.dropna(subset=['关键列'], inplace=True)  # 删除缺失值
df = df[df['数值列'] > 0]  # 逻辑过滤

# 补缺值
df['数值列'].fillna(df['数值列'].median(), inplace=True)

# 特征工程
df['特征1'] = df['原始1'] / df['原始2']
df['特征2'] = np.log1p(df['原始3'])  # 对数变换

# 保存处理后的数据
df.to_csv('processed_data.csv', index=False)
```

### 1.2 模型求解模板（优化问题）

```python
# solve_model.py
from scipy.optimize import linprog, minimize

# 线性规划示例
def solve_lp():
    # 目标函数：最大化 -c^T x
    c = [-3, -2, -4]  # 取负号变为最小化
    
    # 约束条件：A_ub x <= b_ub
    A_ub = [[2, 1, 3], [1, 2, 1]]
    b_ub = [10, 8]
    
    # 变量范围
    bounds = [(0, None), (0, None), (0, None)]
    
    # 求解
    result = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=bounds)
    
    return result

# 非线性优化示例
def solve_nlp():
    def objective(x):
        return x[0]**2 + x[1]**2 + x[0]*x[1]
    
    constraints = [
        {'type': 'eq', 'fun': lambda x: x[0] + x[1] - 5},
        {'type': 'ineq', 'fun': lambda x: 10 - x[0]**2 - x[1]**2}
    ]
    
    x0 = np.array([1, 1])
    result = minimize(objective, x0, constraints=constraints)
    
    return result
```

### 1.3 蒙特卡洛仿真模板

```python
# monte_carlo.py
import numpy as np

def monte_carlo_simulation(n_sim=1000, seed=42):
    np.random.seed(seed)
    
    # 参数分布
    alpha_mean, alpha_std = 0.3, 0.05
    K_mean, K_std = 100, 10
    
    results = []
    
    for i in range(n_sim):
        alpha = np.random.normal(alpha_mean, alpha_std)
        K = np.random.normal(K_mean, K_std)
        
        # 运行模型
        result = run_model(alpha, K)
        
        results.append(result)
    
    # 统计结果
    results = np.array(results)
    ci_lower = np.percentile(results, 2.5)
    ci_upper = np.percentile(results, 97.5)
    
    return {
        'mean': np.mean(results),
        'std': np.std(results),
        'ci_95': (ci_lower, ci_upper)
    }
```

### 1.4 灵敏度分析模板

```python
# sensitivity.py
import matplotlib.pyplot as plt

def sensitivity_analysis(model_fn, params, output_keys):
    # 单参数扫描
    results = []
    
    for param_name, param_range in params.items():
        for value in param_range:
            p = {k: v['baseline'] for k, v in params.items()}
            p[param_name] = value
            
            result = model_fn(p)
            results.append({param_name: value, **{k: result[k] for k in output_keys}})
    
    # 绘制灵敏度曲线
    fig, axes = plt.subplots(1, len(output_keys), figsize=(12, 4))
    
    for i, key in enumerate(output_keys):
        data = pd.DataFrame(results)
        for param_name in params:
            group = data.groupby(param_name)
            for name, group_data in group:
                axes[i].plot(group_data[param_name], group_data[key], label=name)
        
        axes[i].set_xlabel(param_name)
        axes[i].set_ylabel(key)
        axes[i].legend()
    
    plt.tight_layout()
    plt.savefig('sensitivity.png', dpi=300)
```

---

## 2 Matlab 代码模板

### 2.1 ODE 求解模板

```matlab
% solve_ode.m
function solve_ode()
    % 定义 ODE 系统
    ode_fun = @(t, y) [
        r1 * y(1) * (1 - (y(1) + alpha * y(2)) / K);
        r2 * y(2) * (1 - (y(2) + alpha * y(1)) / K)
    ];
    
    % 参数
    r1 = 0.3; r2 = 0.25; alpha = 0.5; K = 100;
    
    % 初始条件
    y0 = [10, 10];
    tspan = [0 200];
    
    % 求解
    [t, y] = ode45(ode_fun, tspan, y0);
    
    % 绘制结果
    figure;
    plot(t, y(:,1), 'b-', 'LineWidth', 2);
    hold on;
    plot(t, y(:,2), 'r-', 'LineWidth', 2);
    legend('Species 1', 'Species 2');
    xlabel('Time'); ylabel('Biomass');
    title('Lotka-Volterra Competition');
    grid on;
    saveas(gcf, 'ode_result.png');
end
```

### 2.2 遗传算法模板

```matlab
% genetic_algorithm.m
function [best_x, best_fit] = genetic_algorithm()
    % 种群参数
    N = 100;  % 种群大小
    generations = 100;  % 迭代代数
    
    % 初始化种群
    population = rand(N, 4);  % 4 基因
    
    % 遗传算法迭代
    for gen = 1:generations
        % 计算适应度
        fitness = arrayfun(@(x) fitness_fn(x), population, 'UniformOutput', false);
        fitness = [fitness';
        
        % 选择（轮盘赌）
        prob = fitness / sum(fitness);
        indices = randi(N, N, 1);
        selected = population(prob > cumsum(rand(N, 1)), :);
        
        % 交叉
        crossover_prob = 0.8;
        for i = 1:2:N-1
            if rand < crossover_prob
                offspring = cross_over(selected(i,:), selected(i+1,:));
            end
        end
        
        % 变异
        mutation_prob = 0.1;
        population = mutate(offspring, mutation_prob);
    end
    
    % 返回最优解
    [best_fit, idx] = max(fitness);
    best_x = population(idx, :);
end
```

### 2.3 动态规划模板

```matlab
% dynamic_programming.m
function result = dynamic_programming()
    % 阶段数
    n_stages = 1825;  % 5 年 = 1825 天
    
    % 状态变量：资金
    initial_capital = 1000;
    
    % 贝尔曼方程：V_t(s) = max { u(s, a) + V_{t+1}(s') }
    V = zeros(n_stages + 1, 100);  % 状态空间离散化
    
    % 逆序求解
    for t = n_stages:-1:1
        for s = 1:100
            V(t, s) = max_action(s, t, V(t+1, :));
        end
    end
    
    % 返回最优策略
    result = optimal_policy(V);
end
```

---

## 3 Lingo 模板（规划问题）

### 3.1 线性规划模板

```lingo
model:
    sets:
        products /1..n/ : cost, profit;
    endsets
    
    data:
        cost = ...;
        profit = ...;
    enddata
    
    max = @sum(products: profit * x);
    
    @sum(products: cost * x) <= budget;
    @for(products: x >= 0);
    
end
```

### 3.2 多目标规划模板

```lingo
model:
    sets:
        goals /1..m/ : weight;
    endsets
    
    max = @sum(goals: weight * goal_value);
    
    @sum(goals: weight) = 1;
    
end
```

---

## 4 论文级图表规范

### 4.1 Matplotlib 论文级配置

```python
# paper_style.py
import matplotlib.pyplot as plt
import matplotlib as mpl

# 字体设置
mpl.rcParams['font.family'] = 'serif'
mpl.rcParams['font.serif'] = ['Times New Roman', 'DejaVu Serif']
mpl.rcParams['font.size'] = 10
mpl.rcParams['axes.labelsize'] = 12
mpl.rcParams['axes.titlesize'] = 14
mpl.rcParams['legend.fontsize'] = 9

# 线条设置
mpl.rcParams['lines.linewidth'] = 1.5
mpl.rcParams['lines.markersize'] = 6

# 图像设置
mpl.rcParams['figure.dpi'] = 300
mpl.rcParams['savefig.dpi'] = 300
mpl.rcParams['savefig.bbox'] = 'tight'

# 颜色方案
colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
```

### 4.2 图表检查清单

- [ ] 分辨率 300 dpi（PDF/PNG）
- [ ] 字体 Times New Roman（与论文一致）
- [ ] 字体大小 ≥ 10pt
- [ ] 坐标轴标签 + 单位
- [ ] 图例（多曲线时）
- [ ] 网格线（淡灰色）
- [ ] 无白色背景边框（bbox_inches='tight'）
- [ ] 图注：Figure N: [What] vs [What] under [condition]

### 4.3 常见图表类型

| 类型 | 用途 | 示例 |
|---|---|---|
| 折线图 | 时序数据 | 资产价格变化 |
| 柱状图 | 类别比较 | 不同策略收益 |
| 散点图 | 相关性 | 变量关系 |
| 热力图 | 二维分布 | 相似度矩阵 |
| 箱线图 | 分布 | 蒙特卡洛结果 |
| 雷达图 | 多指标 | 综合评价 |

---

## 5 编程手工作流（4 天赛制）

### Day 1（模型实现）

| 时间 | 任务 |
|---|---|
| 0-4h | 读取建模手的模型公式 |
| 4-8h | 实现核心模型（Python/Matlab） |
| 8-12h | 单元测试（边界条件/极端参数） |
| 12-24h | 编写灵敏度分析脚本 |

### Day 2（结果生成 + 图表）

| 时间 | 任务 |
|---|---|
| 0-8h | 运行模型 + 生成结果 |
| 8-16h | 制作论文级图表 |
| 16-24h | 数据整理 + 表格生成 |

### Day 3（验证 + 优化）

| 时间 | 任务 |
|---|---|
| 0-8h | 模型验证（与基线对比） |
| 8-16h | 参数调优 + 灵敏度分析 |
| 16-24h | 代码优化 + 注释 |

### Day 4（附录 + 检查）

| 时间 | 任务 |
|---|---|
| 0-8h | 附录代码整理 |
| 8-16h | 结果复现验证 |
| 16-24h | 与写作手协作（图表编号/引用） |

---

## 6 编程手检查清单

### 6.1 代码质量

- [ ] 函数化（模块化）
- [ ] 注释（关键步骤）
- [ ] 参数外部化（配置文件）
- [ ] 错误处理（try-except）
- [ ] 随机种子（可复现）

### 6.2 结果验证

- [ ] 单元测试（边界条件）
- [ ] 与基线对比（误差指标）
- [ ] 灵敏度分析（参数扫描）
- [ ] 蒙特卡洛仿真（置信区间）

### 6.3 图表规范

- [ ] 分辨率 300 dpi
- [ ] 字体 Times New Roman
- [ ] 坐标轴标签 + 单位
- [ ] 图例（多曲线时）
- [ ] 图注（Figure N: ...）

---

## 7 编程手与建模手/写作手的协作

### 7.1 与建模手

**建模手输出：**
- 模型公式（编号方程）
- 参数表（来源 + 单位）
- 算法伪代码

**编程手实现：**
- Python/Matlab 代码
- 参数扫描
- 图表生成

### 7.2 与写作手

**编程手输出：**
- 代码（附录）
- 图表（PDF/PNG）
- 结果数据（CSV/表格）

**写作手撰写：**
- 图表引用（"From Figure N..."）
- 代码说明（附录）
- 结果解读

---

## 8 常见编程错误

| 错误 | 后果 | 正确做法 |
|---|---|---|
| 硬编码参数 | 不可复现 | 参数外部化 |
| 无随机种子 | 结果不一致 | 设置 seed |
| 图表分辨率低 | 模糊 | 300 dpi |
| 无错误处理 | 崩溃 | try-except |
| 代码无注释 | 不可维护 | 关键步骤注释 |

---

## 快速索引

| 需求 | 章节 |
|---|---|
| Python 模板 | §1 |
| Matlab 模板 | §2 |
| Lingo 模板 | §3 |
| 图表规范 | §4 |
| 工作流 | §5 |
| 检查清单 | §6 |
