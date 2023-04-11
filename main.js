const userInput = document.getElementById('userInput');
const characterCounter = document.getElementById('characterCountNumber');
const wordCounter = document.getElementById('wordCounter');
const sentenceCounter = document.getElementById('sentenceCounter');
const date = document.getElementById('date&time')

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


