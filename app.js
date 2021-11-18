
const titleP = document.querySelector('.title-p');

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

destinyBtn.addEventListener('click', (e) => {
  event.preventDefault();
  userAge+= userAnswer.value;

  if (humanLifespan - userAge + currentYear >= 2061){

    positiveMsg.style.display = "inline";
    tryAgainBtn.style.display = "inline";
    userAnswer.style.display = "none";
    howOld.style.display = "none";
    destinyBtn.style.display = "none";
    titleP.style.display = "none";
  } else {
    userAnswer.style.display = "none";
    howOld.style.display = "none";
    destinyBtn.style.display = "none";
    negativeMsg.style.display = "inline";
    tryAgainBtn.style.display = "inline";
    titleP.style.display = "none";
  }

})

tryAgainBtn.addEventListener('click', () => {
  tryAgainBtn.style.display = "none";
  positiveMsg.style.display = "none";
  negativeMsg.style.display = "none";
  userAnswer.style.display = "inline";
  howOld.style.display = "inline";
  destinyBtn.style.display = "inline";
  titleP.style.display = "inline";
  userAge = '';
  userAnswer.value = '';
})
