import {getTimeOfDay} from './greetings';
export {timeOfDay};

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let timeOfDay = getTimeOfDay().replace('Good ', "").replace('Добрый ', "").replace('Доброе ', "").replace('Доброй ', "");

if (timeOfDay === 'вечер') {
    timeOfDay = 'evening';
} else if (timeOfDay === 'ночи') {
    timeOfDay = 'night';
} else if (timeOfDay === 'день') {
    timeOfDay = 'afternoon';
} else {
    timeOfDay = 'morning';
}

function getRandomNum() {
    return Math.round(Math.random()* (20 - 1) + 1);
}

setBg()
function setBg() {
    const bgNum = getRandomNum();
    const twoDigit = bgNum.toString().padStart(2, "0");

    return (bgNum.toString().length === 1)
        ? body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${twoDigit}.jpg)`
        : body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;
}

let randomNum = getRandomNum();

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

function getSlideNext() {
    if (randomNum < 20) {
        randomNum++
    } else if (randomNum === 20) {
        randomNum = 1;
    }
    const twoDigitRandom = randomNum.toString().padStart(2, "0");

    const img = new Image();
    if (randomNum.toString().length === 1) {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${twoDigitRandom}.jpg`;
        img.onload = () => {      
            body.style.backgroundImage = `url(${img.src})`;
        }; 
    } else {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
        img.onload = () => {      
            body.style.backgroundImage = `url(${img.src})`;
        };
    }
}
function getSlidePrev() {
    if (randomNum <= 20 && randomNum !== 1) {
        randomNum--
    } else if (randomNum === 1) {
        randomNum = 20;
    }
    const twoDigitRandom = randomNum.toString().padStart(2, "0");

    const img = new Image();
    if (randomNum.toString().length === 1) {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${twoDigitRandom}.jpg`;
        img.onload = () => {      
            body.style.backgroundImage = `url(${img.src})`;
        }; 
    } else {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
        img.onload = () => {      
            body.style.backgroundImage = `url(${img.src})`;
        };
    }
}
