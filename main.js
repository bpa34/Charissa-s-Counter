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


let hours = date.getHours()
switch (true) {
  case (hours < 4):
    document.getElementById('title').innerHTML = 'Good Evening Charissa';
    break
  case (hours >= 4 && hours < 12):
    document.getElementById('title').innerHTML = 'Good Morning Charissa &#9749';
    break
  case (hours >= 12 && hours < 17):
    document.getElementById('title').innerHTML = 'Good Afternoon Charissa &#x1F33B';
    break
  case (hours >= 17 && hours < 24):
    document.getElementById('title').innerHTML = 'Good Evening Charissa';
    break
  default:
    document.getElementById('title').innerHTML = 'Welcome Charissa!';
    break
}