const timer = document.getElementById('stopwatch'); //skapa timern och koppla det till html koden stopwatch

let objectArrey = [] //skapa en arrey där värderna skrivs ut om man klickar på spara knappen

var hr = 0;
var min = 0;
var sec = 0;
var mil = 0; //skapa en variabel för milli, sek, min
var stoptime = true; // vet inte||||||||||||||||||||

function medel() { // skapa en function för knappen medel
  let total = 0;
  for(let i = 0; i < objectArrey.length; i++) {
    total += objectArrey[i];
  }
  var m = document.getElementById('medelvarde');
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
    const med = document.getElementById('medelvarde');
  med.innerHTML = msToTime(0);
  const median = document.getElementById('median');
  median.innerHTML = msToTime(0);
  var tabell = document.querySelector("#verden tbody").innerHTML = ''
}

function median() {
  var arrayLength = objectArrey.length;
  var resultat = document.getElementById('median');
  if(arrayLength % 2 == 0){
  var halva = arrayLength / 2;
  resultat.innerHTML = msToTime(parseFloat(objectArrey[halva - 1] + objectArrey[halva]) / 2);
} else {
  var halva = parseFloat(arrayLength) / 2
  resultat.innerHTML = msToTime(objectArrey[Math.round(halva) - 1])
}
}

function saveTime() {
    var tidimil = parseInt(hr)*60*60*1000 + parseInt(min)*60*1000 + parseInt(sec)*1000 + parseInt(mil)
    objectArrey.push(tidimil)
    console.log(objectArrey)
    var tabell = document.querySelector("#verden tbody")
    tabell.innerHTML += "<tr><td><span class='box' onclick='showTextBox(this)'>namn</span></td><td>" + hr + ":" + min + ":" + sec + ":" + mil + "</td></tr>"
}

function showTextBox(e) {
  e.parentNode.innerHTML= "<input class='textbox' type='text' onfocusout='saveName(this)'>"
}

function saveName(e){
  e.parentNode.innerHTML = "<span class='box' onclick='showTextBox(this)'>"+ e.value + "</span>"
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