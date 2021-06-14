
const destinyBtn = document.querySelector('.destiny');

const tryAgainBtn = document.querySelector('.try-again');

let userAnswer = document.querySelector('.userInput');

let userAge = "";

const humanLifespan = 79;

let currentYear = 2021;

const positiveMsg = document.querySelector('.positive-message');
const negativeMsg = document.querySelector('.negative-message');

destinyBtn.addEventListener('click', () => {
  userAge+= userAnswer.value;
  console.log(userAge);
  console.log(currentYear);
  console.log(humanLifespan);
  if (humanLifespan - userAge + currentYear >= 2061){
    positiveMsg.style.display = "flex";
    tryAgainBtn.style.display = "inline";
  } else {
    negativeMsg.style.display = "flex";
    tryAgainBtn.style.display = "inline";
  }

})

tryAgainBtn.addEventListener('click', () => {
  tryAgainBtn.style.display = "none";
  positiveMsg.style.display = "none";
  negativeMsg.style.display = "none";
  userAge = '';
  userAnswer.value = '';


})
