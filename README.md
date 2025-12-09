# 集成电路大作业 - IC Project

## 📖 项目简介

本项目是集成电路课程的大作业，通过网站形式展示 **PN 结的 I-V 曲线扫描** 和 **RC 电路的波形分析** 两个核心实验模块。网站采用 HTML、CSS 和 JavaScript 开发，提供交互式可视化界面，帮助理解半导体器件和电路的特性。

**在线访问地址**：[https://maverickxone.github.io/Homework-IC-Network/](https://maverickxone.github.io/Homework-IC-Network/)

---

# 🌟 主要功能

## 1. **首页 (index.html)**
- 网站的主入口，提供项目总体介绍和快速导航。
- 包含两个主要模块的入口：
  - **IV 模块**：PN 结的 I-V 曲线扫描实验
  - **RC 模块**：RC 电路波形分析实验

### 2. **IV 模块 - PN 结 I-V 曲线扫描**
位于 `IV/` 文件夹，包含以下子页面：

#### **2.1 实验总体介绍 (intro_iv.html)**
- 介绍 PN 结 I-V 曲线的实验背景、目标和意义。
- 展示实验的总体流程和设计思路。

#### **2.2 TCAD 模型过程展示 (tcadProcess_iv.html)**
- 详细展示使用 TCAD 软件搭建 PN 结模型的过程。
- 包含模型参数设置、仿真流程和结果分析。

#### **2.3 I-V 曲线示意图 (ivCurve_iv.html)**
- 展示 PN 结的 I-V 曲线及其物理意义。
- 对比不同参数下的 I-V 曲线特性。
- 包含数学模型拟合与实际仿真结果的对比分析。

#### **2.4 网站搭建思路 (network_iv.html)**
- 介绍 IV 模块的网站架构和技术实现。
- 展示前端技术栈（HTML/CSS/JavaScript）的应用。

#### **2.5 主页 (index_iv.html)**
- IV 模块的导航中心，提供各子页面的快速访问入口。

## 3. **RC 模块 - RC 电路波形分析**
位于 `RC/` 文件夹，包含以下子页面：

#### **3.1 实验总体介绍 (intro_rc.html)**
- 介绍 RC 电路的实验背景和目标。
- 展示 RC 电路的基本原理和特性。

#### **3.2 RC Waveform 模型 (rc_waveform.html)**
- **交互式波形可视化**：使用 Plotly.js 实现实时波形绘制。
- **参数调节**：可调节频率 f、电阻 R、电容 C 三个参数。
- **双图展示**：
  - 左图：输入电压 V_in 和输出电压 V_out 随时间变化的曲线
  - 右图：Lissajous 图形，展示输入输出电压的相位关系
- **参数说明**：详细解释各参数对波形的影响。

#### **3.3 网站搭建思路 (network_rc.html)**
- 介绍 RC 模块的网站架构和技术实现。
- 展示数据处理和可视化技术。

#### **3.4 主页 (index_rc.html)**
- RC 模块的导航中心，提供各子页面的快速访问入口。

## 4. **总结与致谢 (last_words.html)**
- 项目总结：回顾实验过程和收获。
- 致谢：感谢课程老师和项目支持者。

---

# 🗂️ 项目结构

```
IC-Project/
│
├── index.html                 # 网站主页
├── last_words.html            # 总结与致谢
├── README.md                  # 项目说明文档
│
├── IV/                        # IV 模块（PN 结 I-V 曲线）
│   ├── index_iv.html          # IV 模块主页
│   ├── intro_iv.html          # 实验介绍
│   ├── tcadProcess_iv.html    # TCAD 建模过程
│   ├── ivCurve_iv.html        # I-V 曲线展示
│   ├── network_iv.html        # 网站搭建思路
│   ├── script_iv.js           # JavaScript 脚本
│   ├── style_iv.css           # 样式文件
│   └── images/                # 图片资源
│       ├── cover.jpg
│       ├── data_1.png
│       ├── data_2.png
│       ├── ...
│
└── RC/                        # RC 模块（RC 电路波形）
    ├── index_rc.html          # RC 模块主页
    ├── intro_rc.html          # 实验介绍
    ├── rc_waveform.html       # 交互式波形展示
    ├── network_rc.html        # 网站搭建思路
    ├── script_rc.js           # JavaScript 脚本
    ├── style_rc.css           # 样式文件
    └── images/                # 图片资源
        ├── 1.png
        ├── code.png
        ├── page.png
        └── ...
```

---

# 🚀 技术栈

- **前端框架**：HTML5, CSS3, JavaScript (ES6+)
- **可视化库**：
  - Chart.js（IV 模块 I-V 曲线绘制）
  - Plotly.js（RC 模块波形可视化）
- **开发工具**：VS Code + Live Server
- **版本控制**：Git + GitHub
- **部署平台**：GitHub Pages

---

# 🎯 核心特性

### 1. **交互式数据可视化**
- RC 模块支持实时参数调节，动态更新波形图。
- IV 模块提供多组数据对比和曲线拟合展示。

### 2. **模块化设计**
- IV 和 RC 两个独立模块，结构清晰。
- 每个模块包含独立的导航系统和样式文件。

### 3. **响应式布局**
- 支持桌面端和移动端访问。
- 自适应不同屏幕尺寸。

### 4. **面包屑导航**
- 所有页面提供面包屑导航，方便用户快速定位和返回。

---

# 📝 使用说明

### 1. **在线访问**
直接访问 GitHub Pages 链接：[https://maverickxone.github.io/Homework-IC-Network/](https://maverickxone.github.io/Homework-IC-Network/)

### 2. **本地运行**
1. 克隆仓库：
   ```bash
   git clone https://github.com/maverickxone/Homework-IC-Network.git
   ```
2. 进入项目目录：
   ```bash
   cd Homework-IC-Network
   ```
3. 使用 Live Server 或其他本地服务器打开 `index.html`。

### 3. **参数调节（RC 模块）**
- 打开 `RC/rc_waveform.html`。
- 使用滑块调节频率 f、电阻 R 和电容 C。
- 观察波形实时变化。
- 点击"重置"按钮恢复默认参数。

---

# 🔬 实验内容

### IV 模块：PN 结 I-V 曲线
- **目标**：通过 TCAD 仿真和数学建模，研究 PN 结的 I-V 特性。
- **方法**：
  1. 使用 TCAD 工具搭建 PN 结模型。
  2. 进行直流扫描，获取 I-V 数据。
  3. 使用 Shockley 方程拟合 I-V 曲线。
  4. 对比不同参数下的曲线特性。

### RC 模块：RC 电路波形
- **目标**：研究 RC 电路的频率响应特性。
- **方法**：
  1. 建立 RC 低通滤波器模型。
  2. 计算传递函数 H(ω) 和相位差 φ。
  3. 绘制输入输出波形和 Lissajous 图形。
  4. 分析不同参数对电路响应的影响。

---

# 📊 数据与公式

### IV 模块：Shockley 方程
$$
I = I_s \left( e^{\frac{V}{nV_T}} - 1 \right)
$$
其中：
- $I_s$：反向饱和电流
- $V$：外加电压
- $n$：理想因子
- $V_T$：热电压（约 26mV，室温下）

### RC 模块：传递函数
$$
H(\omega) = \frac{1}{\sqrt{1 + (\omega RC)^2}}
$$
$$
\phi(\omega) = \arctan(\omega RC)
$$
其中：
- $\omega = 2\pi f$：角频率
- $R$：电阻
- $C$：电容

---

# 🛠️ 开发者说明

### 文件命名规范
- HTML 文件：`模块名_功能.html`（如 `intro_iv.html`）
- CSS 文件：`style_模块名.css`（如 `style_iv.css`）
- JS 文件：`script_模块名.js`（如 `script_iv.js`）

### 样式规范
- 所有模块使用独立的 CSS 文件。
- 面包屑导航样式在各页面内部定义（考虑后续提取到公共 CSS）。

### 路径规范
- 使用相对路径引用资源。
- 图片存放在各模块的 `images/` 文件夹中。

---

# 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建新分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m "Add your feature"`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

---

# 📧 联系方式

- **作者**：Maverickxone（鲁铭泽，中国科学技术大学）
- **GitHub**：[https://github.com/maverickxone](https://github.com/maverickxone)
- **仓库地址**：[https://github.com/maverickxone/Homework-IC-Network](https://github.com/maverickxone/Homework-IC-Network)
- **学校邮箱**：[Maverickxone@mail.ustc.edu.cn](Maverickxone@mail.ustc.edu.cn)

---

# 📜 许可证

本项目仅供学习和研究使用。

---

## 🙏 致谢

感谢课程老师的悉心指导，感谢所有支持或参与本项目的朋友和小组成员们！

---

## ⭐ Star 支持

如果这个项目对你有帮助，请给一个 Star ⭐ 支持一下！
