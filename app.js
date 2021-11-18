
// GENERAL
const general = document.querySelector('.general');
const mainTitle = document.querySelector('.main-title');
const randomEventBtn = document.querySelector('.randomEventBtn');

// HALLEY'S

const halleyMainTexts = document.querySelector('.halleyMainTexts');

const halleyH1 = document.querySelector('.halleyH1');

const titleP = document.querySelector('.title-p');

const halleyForm = document.querySelector('.halleyform');

const destinyBtn = document.querySelector('.destiny');

const tryAgainBtn = document.querySelector('.try-again');

let userAnswer = document.querySelector('.userInput');

let howOld = document.querySelector('.how-old');

let userAge = "";

const humanLifespan = 79;

let currentYear = 2021;

document.getElementById("age-input").blur();

const positiveMsg = document.querySelector('.positive-message');
const negativeMsg = document.querySelector('.negative-message');

// HALLEY FUNCTION

function halley() {
  halleyMainTexts.style.display = "flex";
  document.body.style.background  = "url(img/halley/comet.jpg)";
  halleyForm.style.display = "flex";
}

destinyBtn.addEventListener('click', (e) => {
  event.preventDefault();
  userAge+= userAnswer.value;

  if (humanLifespan - userAge + currentYear >= 2061){

    positiveMsg.style.display = "inline";
    tryAgainBtn.style.display = "inline";
    halleyForm.style.display = "none";
    halleyMainTexts.style.display = "none"
  } else {
    halleyForm.style.display = "none";
    negativeMsg.style.display = "inline";
    tryAgainBtn.style.display = "inline";
    halleyMainTexts.style.display = "none"
  }

})

tryAgainBtn.addEventListener('click', () => {
  tryAgainBtn.style.display = "none";
  positiveMsg.style.display = "none";
  negativeMsg.style.display = "none";

  general.style.display = "flex";
  document.body.style.background = 'url("img/general/dice.jpg")';
  userAge = '';
  userAnswer.value = '';
})

// FUTURE EVENTS

let futureEvents = ["halley"]

let futurePosition;

let randomizeEvent = () => {
  futurePosition = Math.floor (Math.random() * futureEvents.length);

}

randomEventBtn.addEventListener('click', () =>{
  general.style.display = "none";
  randomizeEvent();
  if (futureEvents[futurePosition] == "halley"){
    halley();
}
})


// HALLEY'S
