import {getTimeOfDay} from './greetings';
import { lang } from './settings';
export {showWeekDayMonth}

showTime();
// show time
function showTime() {
    const time = document.querySelector(".time");
    const date = new Date().toLocaleTimeString('ru-RU');
    time.textContent = `${date}`;
    
    //update time
    setTimeout(() =>{
        showTime();
        showWeekDayMonth();
        getTimeOfDay();
    }, 1000)
}

// show week
function showWeekDayMonth() {
    if (lang === 'en') {
        const dateFiled = document.querySelector(".date");
        const date = new Date();
        const options = {weekday: 'long', day: 'numeric', month: 'long'};
        const currentDate = date.toLocaleDateString('en-US', options);
        dateFiled.textContent = `${currentDate}`;
    } else {
        const dateFiled = document.querySelector(".date");
        const date = new Date();
        const options = {weekday: 'long', day: 'numeric', month: 'long'};
        const currentDate = date.toLocaleDateString('ru-RU', options);
        dateFiled.textContent = `${currentDate}`;
    }
}