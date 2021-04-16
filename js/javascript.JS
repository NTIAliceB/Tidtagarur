const timer = document.getElementById('stopwatch');

let objectArrey = []

var hr = 0;
var min = 0;
var sec = 0;
var mil = 0;
var stoptime = true;

function medel() {
  let total = 0;
  for(let i = 0; i < objectArrey.length; i++) {
    total += objectArrey[i];
  }
  const m = document.getElementById('medelvarde');
  m.innerHTML = msToTime(total/objectArrey.length)

}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    mil = parseInt(mil);

    mil = mil + 10;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
      mil = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
      mil = 0;
    }
    if (mil == 1000) {
      sec = sec + 1;
      mil = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    if (mil < 100 || mil == 0) {
      mil = '0' + mil;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec + ':' + mil;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
    mil = 0;
    objectArrey = []
}

function saveTime() {
    var tidimil = parseInt(hr)*60*60*1000 + parseInt(min)*60*1000 + parseInt(sec)*1000 + parseInt(mil)
    objectArrey.push(tidimil)
    console.log(objectArrey)
    var tabell = document.querySelector("#verden tbody")
    tabell.innerHTML += "<tr><td>namn</td><td>" + hr + ":" + min + ":" + sec + ":" + mil + "</td></tr>"
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}