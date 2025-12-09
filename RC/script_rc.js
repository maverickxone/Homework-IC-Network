const introButton = document.getElementById("introButton");
const networkButton = document.getElementById("networkButton");
const rcWaveformButton = document.getElementById("rcWaveformButton");

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

if (introButton)   handleButtonClick(introButton, "intro_rc.html");
if (networkButton) handleButtonClick(networkButton, "network_rc.html");
if (rcWaveformButton)   handleButtonClick(rcWaveformButton, "rc_waveform.html");

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


