// ===== 页面加载完成后执行 =====
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 卡片点击事件 =====
    const cardLinks = {
        'card1': 'intro_iv.html',          // 实验总体介绍
        'card2': 'tcadProcess_iv.html',    // TCAD 模型过程
        'card3': 'ivCurve_iv.html',        // I-V 曲线
        'card4': 'network_iv.html'         // 网站搭建思路
    };

    // 为每个卡片添加点击事件
    Object.keys(cardLinks).forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) {
            card.addEventListener('click', function() {
                window.location.href = cardLinks[cardId];
            });
        }
    });

    // 底部卡片（总结与致谢）点击事件
    const lastWordsCard = document.getElementById('lastWordsCard');
    if (lastWordsCard) {
        lastWordsCard.addEventListener('click', function() {
            window.location.href = '../last_words.html';
        });
    }

});

// ===== 旧代码备份（如需使用请解注） =====
// const introButton = document.getElementById("introButton");
const ivCurveButton = document.getElementById("ivCurveButton");
const networkButton = document.getElementById("networkButton");
const tcadButton = document.getElementById("tcadButton");

function handleButtonClick(button, url) {
    button.addEventListener("click", function(event) {
        if (button.classList.contains('disabled')) {  
            event.preventDefault();  
            alert(`（不可点击‘${button.querySelector('h3').innerText}’，你已经处于该网页）`); 
        } else {
            window.location.href = url;  
        }
    });
}

if (introButton)   handleButtonClick(introButton, "intro_iv.html");
if (ivCurveButton) handleButtonClick(ivCurveButton, "ivCurve_iv.html");
if (networkButton) handleButtonClick(networkButton, "network_iv.html");
if (tcadButton)   handleButtonClick(tcadButton, "tcadProcess_iv.html");

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

const disabledCard = document.querySelector(".intro-card.disabled");
if (disabledCard) {
    disabledCard.addEventListener("click", function (event) {
        event.preventDefault(); 
        alert("Stop Trying!\n你已经处于该页面啦");
    });
}

const ctx = document.getElementById('ivCurveChart').getContext('2d');

// 初始化图表
const ivCurveChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5], 
        datasets: [
            {
                label: '数学上的理论曲线',
                data: [],  
                borderColor: 'rgba(0, 123, 255, 1)', 
                fill: false,
                tension: 0.1
            },
            {
                label: '实际建模曲线',
                data: [],  
                borderColor: 'rgba(255, 99, 132, 1)', 
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
                      
                        return legendItem.datasetIndex === 0 || legendItem.datasetIndex === 1;
                    }
                }
            }
        }
    }
});


const mathCurveData = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 16 },
    { x: 5, y: 25 }
];  

document.getElementById('mathCurveBtn').addEventListener('click', function () {

    ivCurveChart.data.datasets[0].data = [];
    ivCurveChart.update();  

    let i = 0;
    const interval = setInterval(() => {
        // 添加数据点为 { x, y }
        ivCurveChart.data.datasets[0].data.push({
            x: i, 
            y: mathCurveData[i].y  
        });
        ivCurveChart.update();  
        i++;
        if (i === mathCurveData.length) {
            clearInterval(interval);  
        }
    }, 50);  
});

const realCurveData = [
    { x: 0, y: 0 },
    { x: 1, y: 0.5 },
    { x: 2, y: 2 },
    { x: 3, y: 6 },
    { x: 4, y: 12 },
    { x: 5, y: 20 }
]; 

document.getElementById('realCurveBtn').addEventListener('click', function () {

    ivCurveChart.data.datasets[1].data = [];
    ivCurveChart.update();  

    let i = 0;
    const interval = setInterval(() => {
 
        ivCurveChart.data.datasets[1].data.push({
            x: i,  
            y: realCurveData[i].y 
        });
        ivCurveChart.update();  
        i++;
        if (i === realCurveData.length) {
            clearInterval(interval);  
        }
    }, 50); 
});

document.getElementById('resetBtn').addEventListener('click', function () {

    ivCurveChart.data.datasets.forEach(dataset => {
        dataset.data = []; 
    });
    ivCurveChart.update();  
});

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

// 面包屑导航动态生成（可选）
const breadcrumb = document.querySelector('.breadcrumb ul');
const pages = [
    { name: '首页', url: '../index.html' },
    { name: 'IV 模块', url: '' }
];

pages.forEach((page, index) => {
    const li = document.createElement('li');
    if (page.url && index !== pages.length - 1) {
        li.innerHTML = `<a href="${page.url}">${page.name}</a>`;
    } else {
        li.textContent = page.name;
    }
    breadcrumb.appendChild(li);
});


