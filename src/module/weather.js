import { lang } from "./settings";
export {getWeather};


async function getWeather (lang = 'ru') {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=01658d7feae675efba9922d7cbd1e94a&units=metric`
        const res = await fetch(url);
        const data = await res.json();
    
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        if (lang === 'en') {
            weatherWind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
            weatherHumidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
        } else {
            weatherWind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)}м/с`;
            weatherHumidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
        }

    } catch(e) {
        alert('Ошибка! Введите корректное название города!');
    }
}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

city.value = localStorage.getItem('cityWeather') || "Минск";

window.addEventListener('load', getLocalStorageCityWeather);
function getLocalStorageCityWeather() {
    if (lang === 'en') {
        city.value = localStorage.getItem('cityWeather') || "Minsk";
    } else {
        city.value = localStorage.getItem('cityWeather') || "Минск";
    }
}

city.addEventListener('change', (event) => {
    localStorage.setItem('cityWeather', event.target.value);
    event.target.value = localStorage.getItem('cityWeather');
    return getWeather ();
})
getWeather();