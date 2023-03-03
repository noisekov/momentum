export {getTimeOfDay};
import { lang } from "./settings";
import { greetingTranslation } from "./language";
export {greeting}
export {getLocalStorage}

const greeting = document.querySelector('.greeting');
const hour = new Date().getHours();
const name = document.querySelector('.name');

function getTimeOfDay() {
    if (lang === 'en') {
        let result = hour / 6;
        if(result < 1) {return Object.values(greetingTranslation)[0][3]} 
        else if (result < 2) {return Object.values(greetingTranslation)[0][0]}
        else if (result < 3) {return Object.values(greetingTranslation)[0][1]}
        else {return Object.values(greetingTranslation)[0][2]}
    } else {
        let result = hour / 6;
        if(result < 1) {return Object.values(greetingTranslation)[1][3]} 
        else if (result < 2) {return Object.values(greetingTranslation)[1][0]}
        else if (result < 3) {return Object.values(greetingTranslation)[1][1]}
        else {return Object.values(greetingTranslation)[1][2]}
        }
}

greeting.textContent = `${getTimeOfDay()}`;

name.addEventListener('input', setLocalStorage);
window.addEventListener('load', getLocalStorage); 

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
function getLocalStorage() {
    if (lang === 'ru') {
        if (localStorage.getItem('name') === null 
        || localStorage.getItem('name').trim() === "" ) {
            name.setAttribute('placeholder', '[Введите ваше имя]')
        } else {
            name.value = localStorage.getItem('name');
        }
    } else {
        if (localStorage.getItem('name') === null 
        || localStorage.getItem('name').trim() === "" ) {
            name.setAttribute('placeholder', '[Enter your name]');
        } else {
            name.value = localStorage.getItem('name');
        }
    }
}  