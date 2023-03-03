export {languageSelect};
export {lang};
import { greeting } from "./greetings";
import { getTimeOfDay } from "./greetings";
import { getLocalStorage } from "./greetings";
import { showWeekDayMonth } from "./time";
import { getWeather } from "./weather";
import { getQuotesEN } from "./quotes";
import { getQuotesRU } from "./quotes";

const btnSettings = document.querySelector('.settings');
const settingsBlock = document.querySelector('.settings-block');
const settingsBlockCloseBtn = document.querySelector('.settings-block__close-btn');
const languageSelect = document.querySelector('#language');
const settingLanguage = document.querySelector('.setting-language__lang');
const settingTime = document.querySelector('.setting-time');
const settingDate = document.querySelector('.setting-date');
const settingQoute = document.querySelector('.setting-quote');
const settingTodo = document.querySelector('.setting-todo');
const changeWeather = document.querySelector('.setting-weather');
const changePlayer = document.querySelector('.setting-player');
const settingGreeting = document.querySelector('.setting-greeting');
const settingTimeSpan = document.querySelector('.setting-time span');
const settingTimeInput = document.querySelector('.setting-time input');
const settingDateSpan = document.querySelector('.setting-date span');
const settingDateInput = document.querySelector('.setting-date input');
const changeWeatherSpan = document.querySelector('.setting-weather span');
const changeWeatherInput = document.querySelector('.setting-weather input');
const changePlayerSpan = document.querySelector('.setting-player span');
const changePlayerInput = document.querySelector('.setting-player input');
const settingQouteSpan = document.querySelector('.setting-quote span');
const settingQouteInput = document.querySelector('.setting-quote input');
const settingGreetingSpan = document.querySelector('.setting-greeting span');
const settingGreetingInput = document.querySelector('.setting-greeting input');
const settingTodoSpan = document.querySelector('.setting-todo span');
const settingTodoInput = document.querySelector('.setting-todo input');
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const greetingContainer = document.querySelector('.greeting-container');
const quoteBlock = document.querySelector('.quote-block');
const changeQuote = document.querySelector('.change-quote');
const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const photo = document.querySelector('#photo');
const settingPhoto = document.querySelector('.setting-photo__name');
const todo = document.querySelector('.todo');



btnSettings.addEventListener('click', openSettingsBlock);
settingsBlockCloseBtn.addEventListener('click', closeSettingsBlock);
settingTime.addEventListener('change', showHiddenTime);
settingDate.addEventListener('change', showHiddenDate);
settingGreeting.addEventListener('change', showHiddenGreeting);
settingQoute.addEventListener('input', showHiddenQuote);
changeWeather.addEventListener('change', showHiddenWeather);
changePlayer.addEventListener('change', showHiddenPlayer);
photo.addEventListener('input', photoChange);
settingTodo.addEventListener('change', showHiddenTodo);


let photoSelect = 'git';
function photoChange() {
    if (photo.value === 'unsplash') {
        photoSelect = 'unsplash';
    } else if (photo.value === 'git') {
        photoSelect = 'git';
    } else {
        photoSelect = 'flickr';
    }
}

function showHiddenTodo () {
    if (localStorage.getItem('todo') === 'hidden') {
        todo.classList.remove('hidden');
        settingTodoInput.checked = true;
        localStorage.setItem('todo', '');
    } else {
        todo.classList.add('hidden');
        settingTodoInput.checked = false;
        localStorage.setItem('todo', 'hidden');
    }
}

function showHiddenWeather () {
    if (localStorage.getItem('weather') === 'hidden') {
        weather.classList.remove('hidden');
        changeWeatherInput.checked = true;
        localStorage.setItem('weather', '');
    } else {
        weather.classList.add('hidden');
        changeWeatherInput.checked = false;
        localStorage.setItem('weather', 'hidden');
    }
}

function showHiddenPlayer () {
    if (localStorage.getItem('player') === 'hidden') {
        player.classList.remove('hidden');
        changePlayerInput.checked = true;
        localStorage.setItem('player', '');
    } else {
        player.classList.add('hidden');
        changePlayerInput.checked = false;
        localStorage.setItem('player', 'hidden');
    }
}

function showHiddenQuote () {
    if (localStorage.getItem('quote') === 'hidden') {
        quoteBlock.classList.remove('hidden');
        changeQuote.classList.remove('hidden');
        settingQouteInput.checked = true;
        localStorage.setItem('quote', '');
    } else {
        quoteBlock.classList.add('hidden');
        changeQuote.classList.add('hidden');
        settingQouteInput.checked = false;
        localStorage.setItem('quote', 'hidden');
    }
}

function showHiddenGreeting () {
    if (localStorage.getItem('greeting') === 'hidden') {
        greetingContainer.classList.remove('hidden');
        settingGreetingInput.checked = true;
        localStorage.setItem('greeting', '');
    } else {
        greetingContainer.classList.add('hidden');
        settingGreetingInput.checked = false;
        localStorage.setItem('greeting', 'hidden');
    }
}

function showHiddenDate () {
    if (localStorage.getItem('date') === 'hidden') {
        date.classList.remove('hidden');
        settingDateInput.checked = true;
        localStorage.setItem('date', '');
    } else {
        date.classList.add('hidden');
        settingDateInput.checked = false;
        localStorage.setItem('date', 'hidden');
    }
}

function showHiddenTime () {
    if (localStorage.getItem('time') === 'hidden') {
        time.classList.remove('hidden');
        settingTimeInput.checked = true;
        localStorage.setItem('time', '');
    } else {
        time.classList.add('hidden');
        settingTimeInput.checked = false;
        localStorage.setItem('time', 'hidden');
    }
}

function openSettingsBlock () {
    settingsBlock.classList.add('open');
}

function closeSettingsBlock () {
    settingsBlock.classList.remove('open');
}

let lang = 'ru';
languageSelect.addEventListener('input', languageChange);

function languageChange () {
    if (languageSelect.value === 'ru') {
        lang = 'ru';
        localStorage.setItem('lang', 'ru');
        greeting.textContent = `${getTimeOfDay()}`;
        settingLanguage.innerText = 'Язык';
        settingTimeSpan.innerText = 'Время';
        settingDateSpan.innerText = 'Дата';
        settingGreetingSpan.innerText = 'Приветствие';
        settingQouteSpan.innerText = 'Цитаты';
        changeWeatherSpan.innerText = 'Погода';
        changePlayerSpan.innerText = 'Плеер';
        settingPhoto.innerText = 'Фото из ';
        settingTodoSpan.innerText = 'Список дел';
        getLocalStorage();
        showWeekDayMonth();
        getWeather(lang = 'ru');
        getQuotesRU();
    } else {
        lang = 'en';
        localStorage.setItem('lang', 'en');
        greeting.textContent = `${getTimeOfDay()}`;
        settingLanguage.innerText = 'Language';
        settingTimeSpan.innerText = 'Time';
        settingDateSpan.innerText = 'Date';
        settingGreetingSpan.innerText = 'Greeting';
        settingQouteSpan.innerText = 'Qoute';
        changeWeatherSpan.innerText = 'Weather';
        changePlayerSpan.innerText = 'Player';
        settingPhoto.innerText = 'Photo from ';
        settingTodoSpan.innerText = 'Todo';
        getLocalStorage();
        showWeekDayMonth();
        getWeather(lang = 'en');
        getQuotesEN();
    }
}

window.addEventListener('DOMContentLoaded', getDataSettingsFromLocalStorage);

function getDataSettingsFromLocalStorage () {
    if (localStorage.getItem('lang') === 'ru' || localStorage.getItem('lang') === null) {
        lang = 'ru';
        languageSelect.value = 'ru';
        greeting.textContent = `${getTimeOfDay()}`;
        settingLanguage.innerText = 'Язык';
        settingTimeSpan.innerText = 'Время';
        settingDateSpan.innerText = 'Дата';
        settingGreetingSpan.innerText = 'Приветствие';
        settingQouteSpan.innerText = 'Цитаты';
        changeWeatherSpan.innerText = 'Погода';
        changePlayerSpan.innerText = 'Плеер';
        settingPhoto.innerText = 'Фото из ';
        settingTodoSpan.innerText = 'Список дел';
        getLocalStorage();
        showWeekDayMonth();
        getWeather(lang = 'ru');
        getQuotesRU();
    }

    if (localStorage.getItem('lang') === 'en') {
        lang = 'en';
        languageSelect.value = 'eng'
        greeting.textContent = `${getTimeOfDay()}`;
        settingLanguage.innerText = 'Language';
        settingTimeSpan.innerText = 'Time';
        settingDateSpan.innerText = 'Date';
        settingGreetingSpan.innerText = 'Greeting';
        settingQouteSpan.innerText = 'Qoute';
        changeWeatherSpan.innerText = 'Weather';
        changePlayerSpan.innerText = 'Player';
        settingPhoto.innerText = 'Photo from ';
        settingTodoSpan.innerText = 'Todo';
        getLocalStorage();
        showWeekDayMonth();
        getWeather(lang = 'en');
        getQuotesEN();
    }

    if (localStorage.getItem('todo') === 'hidden') {
        settingTodoInput.checked = false;
        todo.classList.add('hidden');
    }

    if (localStorage.getItem('weather') === 'hidden') {
        changeWeatherInput.checked = false;
        weather.classList.add('hidden');
    }

    if (localStorage.getItem('player') === 'hidden') {
        changePlayerInput.checked = false;
        player.classList.add('hidden');
    }

    if (localStorage.getItem('date') === 'hidden') {
        settingDateInput.checked = false;
        date.classList.add('hidden');
    }

    if (localStorage.getItem('time') === 'hidden') {
        settingTimeInput.checked = false;
        time.classList.add('hidden');
    }

    if (localStorage.getItem('greeting') === 'hidden') {
        settingGreetingInput.checked = false;
        greetingContainer.classList.add('hidden');
    }

    if (localStorage.getItem('quote') === 'hidden') {
        settingQouteInput.checked = false;
        quoteBlock.classList.add('hidden');
        changeQuote.classList.add('hidden');
    }
}