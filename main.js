const userInput = document.getElementById('userInput');
const characterCounter = document.getElementById('characterCountNumber');
const wordCounter = document.getElementById('wordCounter');
const sentenceCounter = document.getElementById('sentenceCounter');
const userGreeting = document.getElementById('title')


function countCharacters() {
  const currentLength = userInput.value.length;
  characterCounter.innerHTML = currentLength;
}

function countWords() {
  const inputWords = userInput.value.match(/\S+/g);
  wordCounter.innerHTML = inputWords ? inputWords.length : 0;
}

function countSentences() {
  const inputSentences = userInput.value.split(/[.?!]+/);
  const nonEmptySentences = inputSentences.filter(sentence => sentence.trim().length > 0);
  sentenceCounter.innerHTML = nonEmptySentences.length;
}

userInput.addEventListener('input', () => {
  countCharacters();
  countWords();
  countSentences();
});

let date = new Date()
let currentDate = (date.getMonth()+1) + "-" + date.getDate() + "-"+ date.getFullYear();
document.getElementById('date').innerHTML = currentDate


let greetingHours = date.getHours()
switch (true) {
  case (greetingHours < 4):
    document.getElementById('title').innerHTML = 'Good Evening, Charissa';
    break
  case (greetingHours >= 4 && greetingHours < 12):
    document.getElementById('title').innerHTML = 'Good Morning, Charissa &#9749';
    break
  case (greetingHours >= 12 && greetingHours < 17):
    document.getElementById('title').innerHTML = 'Good Afternoon, Charissa &#x1F33B';
    break
  case (greetingHours >= 17 && greetingHours < 24):
    document.getElementById('title').innerHTML = 'Good Evening, Charissa';
    break
  default:
    document.getElementById('title').innerHTML = 'Welcome Charissa!';
    break
}


/* Stop Watch */ 

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startStopBtn = document.querySelector('.start-stop');
const resetBtn = document.querySelector('.reset');

let interval;
let startTime;
let elapsedSeconds = 0;

function toggleStartStop() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    startStopBtn.textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedSeconds * 1000;
    interval = setInterval(updateTimer, 1000);
    startStopBtn.textContent = 'Stop';
  }
}


function resetTimer() {
  clearInterval(interval);
  interval = null;
  elapsedSeconds = 0;
  startTime = Date.now(); // Set startTime to the current time
  updateTimer(); // Update the displayed timer to 00:00:00
  startStopBtn.textContent = 'Start';
}




function updateTimer() {
  const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const displaySeconds = totalSeconds % 60;
  const displayMinutes = totalMinutes % 60;
  const displayHours = totalHours;
  seconds.textContent = displaySeconds.toString().padStart(2, '0');
  minutes.textContent = displayMinutes.toString().padStart(2, '0');
  hours.textContent = displayHours.toString().padStart(2, '0');
  elapsedSeconds = totalSeconds;
}


startStopBtn.addEventListener('click', toggleStartStop);
resetBtn.addEventListener('click', resetTimer);

