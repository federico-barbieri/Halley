
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
    userAge = '';
    userAnswer.value = '';
  } else {
    halleyForm.style.display = "none";
    negativeMsg.style.display = "inline";
    tryAgainBtn.style.display = "inline";
    halleyMainTexts.style.display = "none"
    userAge = '';
    userAnswer.value = '';
  }

})

tryAgainBtn.addEventListener('click', () => {
  tryAgainBtn.style.display = "none";
  positiveMsg.style.display = "none";
  negativeMsg.style.display = "none";

  general.style.display = "flex";
  document.body.style.background = 'url("img/general/dice.jpg")';
  document.body.style.backgroundPosition = "center";
})


// ROBOTS

const robotsMainTexts = document.querySelector('.robotsMainTexts');
const robotsH1 = document.querySelector('.robotsH1');
const robotsP = document.querySelector('.robots-p');
const robotsform = document.querySelector('.robotsform');
const robotsUserAnswer = document.querySelector('.userInputRobots');
const robotsdestinyBtn = document.querySelector('.robotsdestiny');
const robotsPositive = document.querySelector('.positive-message-robots')
const robotsNegative = document.querySelector('.negative-message-robots')
const robotsTryAgain = document.querySelector('.try-again-robots');

function robots () {
  robotsMainTexts.style.display = "flex";
  document.body.style.background  = "url(img/robots/robot1.jpg)";
  document.body.style.backgroundPosition = "bottom";
  robotsform.style.display = "flex";
}

robotsdestinyBtn.addEventListener('click', (e) => {
  event.preventDefault();
  userAge+= robotsUserAnswer.value;
  console.log(userAge);
  console.log(parseInt(userAge) + parseInt(currentYear));

  if (parseInt(userAge) + parseInt(currentYear) > 2038){
    robotsMainTexts.style.display = "none";
    robotsform.style.display = "none";
    robotsPositive.style.display = "flex";
    robotsTryAgain.style.display = "inline";
    userAge = '';
    robotsUserAnswer.value = '';
  } else {
    robotsNegative.style.display = "flex";
    robotsTryAgain.style.display = "inline";
    robotsMainTexts.style.display = "none";
    robotsform.style.display = "none";
    userAge = '';
    robotsUserAnswer.value = '';
  }
})

robotsTryAgain.addEventListener('click', () => {
  robotsTryAgain.style.display = "none";
  robotsPositive.style.display = "none";
  robotsNegative.style.display = "none";
  general.style.display = "flex";
  document.body.style.background = 'url("img/general/dice.jpg")';
  document.body.style.backgroundPosition = "center";
})

// ADVERTISING

const advertisingMainTexts = document.querySelector('.advertisingMainTexts');
const advertisingH1 = document.querySelector('.advertisingH1');
const advertisingP = document.querySelector('.advertising-p');
const advertisingform = document.querySelector('.advertisingform');
const advertisingUserAnswer = document.querySelector('.userInputAdvertising');
const advertisingdestinyBtn = document.querySelector('.advertisingdestiny');
const advertisingPositive = document.querySelector('.positive-message-advertising')
const advertisingNegative = document.querySelector('.negative-message-advertising')
const advertisingTryAgain = document.querySelector('.try-again-advertising');

function advertising () {
  advertisingMainTexts.style.display = "flex";
  document.body.style.background  = "url(img/advertising/advertising1.jpg)";
  document.body.style.backgroundPosition = "center";
  advertisingform.style.display = "flex";
}

advertisingdestinyBtn.addEventListener('click', (e) => {
  event.preventDefault();
  userAge+= advertisingUserAnswer.value;
  console.log(userAge);
  console.log(parseInt(userAge) + parseInt(currentYear));

  if (parseInt(userAge) + parseInt(currentYear) > 2050){
    advertisingMainTexts.style.display = "none";
    advertisingform.style.display = "none";
    advertisingPositive.style.display = "flex";
    advertisingTryAgain.style.display = "inline";
    userAge = '';
    advertisingUserAnswer.value = '';
  } else {
    advertisingNegative.style.display = "flex";
    advertisingTryAgain.style.display = "inline";
    advertisingMainTexts.style.display = "none";
    advertisingform.style.display = "none";
    userAge = '';
    advertisingUserAnswer.value = '';
  }
})

advertisingTryAgain.addEventListener('click', () => {
  advertisingTryAgain.style.display = "none";
  advertisingPositive.style.display = "none";
  advertisingNegative.style.display = "none";
  general.style.display = "flex";
  document.body.style.background = 'url("img/general/dice.jpg")';
  document.body.style.backgroundPosition = "center";
})

// ANIMALS

const animalsMainTexts = document.querySelector('.animalsMainTexts');
const animalsH1 = document.querySelector('.animalsH1');
const animalsP = document.querySelector('.animals-p');
const animalsform = document.querySelector('.animalsform');
const animalsUserAnswer = document.querySelector('.userInputAnimals');
const animalsdestinyBtn = document.querySelector('.animalsdestiny');
const animalsPositive = document.querySelector('.positive-message-animals')
const animalsNegative = document.querySelector('.negative-message-animals')
const animalsTryAgain = document.querySelector('.try-again-animals');

function animals () {
  animalsMainTexts.style.display = "flex";
  document.body.style.background  = "url(img/animals/animals.jpg)";
  document.body.style.backgroundPosition = "center";
  animalsform.style.display = "flex";
}

animalsdestinyBtn.addEventListener('click', (e) => {
  event.preventDefault();
  userAge+= animalsUserAnswer.value;

  if (parseInt(userAge) + parseInt(currentYear) > 2055){
    animalsMainTexts.style.display = "none";
    animalsform.style.display = "none";
    animalsPositive.style.display = "flex";
    animalsTryAgain.style.display = "inline";
    userAge = '';
    animalsUserAnswer.value = '';
  } else {
    animalsNegative.style.display = "flex";
    animalsTryAgain.style.display = "inline";
    animalsMainTexts.style.display = "none";
    animalsform.style.display = "none";
    userAge = '';
    animalsUserAnswer.value = '';
  }
})

animalsTryAgain.addEventListener('click', () => {
  animalsTryAgain.style.display = "none";
  animalsPositive.style.display = "none";
  animalsNegative.style.display = "none";
  general.style.display = "flex";
  document.body.style.background = 'url("img/general/dice.jpg")';
  document.body.style.backgroundPosition = "center";
})



// FUTURE EVENTS

let futureEvents = ["halley", "robots", "advertising", "animals"];

let futurePosition;

let randomizeEvent = () => {
  futurePosition = Math.floor (Math.random() * futureEvents.length);

}

randomEventBtn.addEventListener('click', () =>{
  general.style.display = "none";
  randomizeEvent();
  if (futureEvents[futurePosition] == "halley"){
    halley();
} else if (futureEvents[futurePosition] == "robots"){
  robots();
} else if (futureEvents[futurePosition] == "advertising"){
  advertising();
} else if (futureEvents[futurePosition] == "animals"){
  animals();
}
})
