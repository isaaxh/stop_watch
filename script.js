const timer = document.querySelector("#timer");
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const resetButton = document.querySelector("#resetButton");

let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function resetTimer() {
  timer.innerText = "00:00:00";
  stopTime = true;
  hr = 0;
  min = 0;
  sec = 0;
}

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
}

function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
  }
}

function timerCycle() {
  if (stopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer.innerText = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}
