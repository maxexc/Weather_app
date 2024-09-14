import { convertUnixToTime } from "../utils/timeUtils";

export const renderWeather = (weatherData) => {
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');
    const sunrise = document.querySelector('.sunrise-text');
    const sunset = document.querySelector('.sunset-text');

    temperature.innerHTML = `${parseInt(weatherData.main.temp)}<span>°C</span>`;
    description.innerHTML = weatherData.weather[0].description;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    wind.innerHTML = `${parseInt(weatherData.wind.speed)}Km/h`;
    sunrise.innerHTML = convertUnixToTime(weatherData.sys.sunrise, weatherData.timezone);
    sunset.innerHTML = convertUnixToTime(weatherData.sys.sunset, weatherData.timezone);
};