import './styles/main.scss';
import { showSpinner, hideSpinner } from './components/spinner';
import { fetchWeather } from './api/weatherAPI';
import { renderWeather } from './components/weatherRenderer';
import { showError } from './components/errorHandler';
import { checkInternetConnection } from './modules/checkInternet';
import { showErrorNoConnection } from './modules/showError';
import sunnyImage from './assets/sunny.png';
import moonImageNight from './assets/moon2.png';
import rainyImage from './assets/rainy.png';
import rainyImageNight from './assets/rainy-moon.png';
import snowyImage from './assets/snowy.png';
import snowyImageNight from './assets/snowy-moon.png';
import cloudyImage from './assets/cloudy.png';
import cloudyImageNight from './assets/cloudy-moon.png';
import drizzleImage from './assets/drizzle.png';
import drizzleImageNight from './assets/drizzle-moon.png';
import thunderstormImage from './assets/thunderstorm.png';
import mistImage from './assets/mist.png';
import smokeImage from './assets/smoke.png';
import hazeImage from './assets/haze.png';
import dustImage from './assets/dust.png';
import fogImage from './assets/fog.png';
import sandImage from './assets/sandstorm.png';
import ashImage from './assets/ash.png';
import squallImage from './assets/squall.png';
import tornadoImage from './assets/tornado.png';
import img404 from './assets/404.jpg'
import windImage from './assets/wind.png';

const container = document.querySelector('.container');
const searchButton = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


async function searchWeather(event) {
  showSpinner();
  event.preventDefault()

  if (!checkInternetConnection()) {
    showErrorNoConnection("Oops! It seems the connection was lost... Our engineers are already working on it.");
    hideSpinner();
  } else {
    error404.querySelector('p').textContent = 'Oops! Not found location'
  }

  const APIKey = import.meta.env.VITE_API_KEY;
  // const APIKey = 'ef0b2575d7cb6c86d51b755ce7e5e8fc'
  const city = searchInput.value.trim();

  if (city === '') {
    hideSpinner();
    return;
  }

  try {
    const data = await fetchWeather(city, APIKey);

    hideSpinner();

    if (data.cod === '404') {
      showError(container, weatherBox, weatherDetails, error404, img404);
      return;
    }

    error404.style.display = 'none';
    error404.classList.remove('fadeIn');

    renderWeather(data);

    let night = data.weather[0].icon.endsWith('n');
    const image = document.querySelector('.weather-box img');

    switch (data.weather[0].main) {
      case 'Clear':
        image.src = night ? moonImageNight : sunnyImage;
        break;
      case 'Rain':
        image.src = night ? rainyImageNight : rainyImage;
        break;
      case 'Snow':
        image.src = night ? snowyImageNight : snowyImage;
        break;
      case 'Clouds':
        image.src = night ? cloudyImageNight : cloudyImage;
        break;
      case 'Drizzle':
        image.src = night ? drizzleImageNight : drizzleImage;
        break;
      case 'Thunderstorm':
        image.src = thunderstormImage;
        break;
      case 'Mist':
        image.src = mistImage;
        break;
      case 'Smoke':
        image.src = smokeImage;
        break;
      case 'Haze':
        image.src = hazeImage;
        break;
      case 'Dust':
        image.src = dustImage;
        break;
      case 'Fog':
        image.src = fogImage;
        break;
      case 'Sand':
        image.src = sandImage;
        break;
      case 'Ash':
        image.src = ashImage;
        break;
      case 'Squall':
        image.src = squallImage;
        break;
      case 'Tornado':
        image.src = tornadoImage;
        break;
      default:
        image.src = '';
    }

    weatherBox.style.display = '';
    weatherDetails.style.display = '';
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');
    container.style.height = '650px';
  } catch (error) {
    hideSpinner();
    console.error('Error fetching weather: ', error);
    showError(container, weatherBox, weatherDetails, error404, img404);
  }
}

searchButton.addEventListener('click', searchWeather);

searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchWeather(event);
  }
});

