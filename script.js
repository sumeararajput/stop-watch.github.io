const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const second = document.getElementById("second");
const day = document.getElementById("day");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let clockInterval;

function updateClock() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h < 10 ? `0${h}` : h;
    minutes.textContent = min < 10 ? `0${min}` : min;
    second.textContent = sec < 10 ? `0${sec}` : sec;
}

function startClock() {
    if (!clockInterval) {
        clockInterval = setInterval(updateClock, 1000);
    }
}

function pauseClock() {
    clearInterval(clockInterval);
    clockInterval = null;
}

function resetClock() {
    pauseClock();
    hour.textContent = '00';
    minutes.textContent = '00';
    second.textContent = '00';
    day.innerHTML = '';
}

// Event listeners for buttons
startButton.addEventListener("click", startClock);
pauseButton.addEventListener("click", pauseClock);
resetButton.addEventListener("click", resetClock);

// Initialize the clock display
updateClock();
