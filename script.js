// 获取所有按钮元素
const introButton = document.getElementById("introButton");
const ivCurveButton = document.getElementById("ivCurveButton");
const networkButton = document.getElementById("networkButton");
const tcadButton = document.getElementById("tcadButton");

// 为每个按钮添加点击事件监听器
function handleButtonClick(button, url) {
    button.addEventListener("click", function(event) {
        if (button.classList.contains('disabled')) {  // 检查按钮是否禁用
            event.preventDefault();  // 阻止默认跳转
            alert(`（不可点击‘${button.querySelector('h3').innerText}’，你已经处于该网页）`);  // 弹出提示框
        } else {
            window.location.href = url;  // 跳转到对应页面
        }
    });
}

// 绑定点击事件
if (introButton)   handleButtonClick(introButton, "intro.html");
if (ivCurveButton) handleButtonClick(ivCurveButton, "ivCurve.html");
if (networkButton) handleButtonClick(networkButton, "network.html");
if (tcadButton)   handleButtonClick(tcadButton, "tcadProcess.html");

// 页面滚动时触发动画
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// intro / 其他子页面里：给禁用的卡片添加提示
const disabledCard = document.querySelector(".intro-card.disabled");
if (disabledCard) {
    disabledCard.addEventListener("click", function (event) {
        event.preventDefault(); // 虽然没有 onclick 了，习惯性写上没坏处
        alert("Stop Trying!\n你已经处于该页面啦");
    });
}

// 获取图表元素
const ctx = document.getElementById('ivCurveChart').getContext('2d');

// 初始化图表
const ivCurveChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5],  // 电压（V）
        datasets: [
            {
                label: '数学上的理论曲线',
                data: [],  // 初始为空数据
                borderColor: 'rgba(0, 123, 255, 1)', // 蓝色
                fill: false,
                tension: 0.1
            },
            {
                label: '实际建模曲线',
                data: [],  // 初始为空数据
                borderColor: 'rgba(255, 99, 132, 1)', // 红色
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: '电压 (V)' } },
            y: { title: { display: true, text: '电流 (I)' } }
        },
        plugins: {
            legend: {
                labels: {
                    filter: function(legendItem, chartData) {
                        // 只显示数学曲线和实际建模曲线，隐藏所有其他曲线
                        return legendItem.datasetIndex === 0 || legendItem.datasetIndex === 1;
                    }
                }
            }
        }
    }
});


// 数学曲线数据：假设电流是电压的指数函数
const mathCurveData = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 16 },
    { x: 5, y: 25 }
];  // 假设的电流数据

// 数学上的理论曲线按钮
document.getElementById('mathCurveBtn').addEventListener('click', function () {
    // 清空之前的数据（如果需要）
    ivCurveChart.data.datasets[0].data = [];
    ivCurveChart.update();  // 更新图表

    // 逐步将数据添加到图表中
    let i = 0;
    const interval = setInterval(() => {
        // 添加数据点为 { x, y }
        ivCurveChart.data.datasets[0].data.push({
            x: i,  // 电压（V）
            y: mathCurveData[i].y  // 电流（I）
        });
        ivCurveChart.update();  // 更新图表
        i++;
        if (i === mathCurveData.length) {
            clearInterval(interval);  // 数据添加完毕，清除定时器
        }
    }, 50);  // 每50毫秒更新一次
});

// 实际建模数据：假设是随机生成的数据
const realCurveData = [
    { x: 0, y: 0 },
    { x: 1, y: 0.5 },
    { x: 2, y: 2 },
    { x: 3, y: 6 },
    { x: 4, y: 12 },
    { x: 5, y: 20 }
];  // 假设的实际建模数据

// 实际建模曲线按钮
document.getElementById('realCurveBtn').addEventListener('click', function () {
    // 清空之前的数据（如果需要）
    ivCurveChart.data.datasets[1].data = [];
    ivCurveChart.update();  // 更新图表

    // 逐步将数据添加到图表中
    let i = 0;
    const interval = setInterval(() => {
        // 添加数据点为 { x, y }
        ivCurveChart.data.datasets[1].data.push({
            x: i,  // 电压（V）
            y: realCurveData[i].y  // 电流（I）
        });
        ivCurveChart.update();  // 更新图表
        i++;
        if (i === realCurveData.length) {
            clearInterval(interval);  // 数据添加完毕，清除定时器
        }
    }, 50);  // 每50毫秒更新一次
});

// 重置按钮：清空图表并恢复初始状态
document.getElementById('resetBtn').addEventListener('click', function () {
    // 清空所有数据集的数据
    ivCurveChart.data.datasets.forEach(dataset => {
        dataset.data = [];  // 清空数据
    });
    ivCurveChart.update();  // 更新图表
});

// ======== 搜索功能部分（只需要改这里）========

// 纯输入框 + 回车查询（不依赖任何按钮）
const voltageInput = document.getElementById('voltageInput');

voltageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const v = parseFloat(voltageInput.value);
        if (isNaN(v) || v < 0 || v > 5) {
            alert('请输入 0~5V 之间的有效电压！');
            return;
        }
        const i = v * v;  // I = V²（你原来的公式）
        ivCurveChart.data.datasets.push({
            label: `查询点：${v}V → ${i.toFixed(3)}A`,
            data: [{ x: v, y: i }],
            backgroundColor: '#10b981',
            borderColor: '#10b981',
            pointRadius: 10,
            showLine: false
        });
        ivCurveChart.update();
        voltageInput.value = '';
    }
});


