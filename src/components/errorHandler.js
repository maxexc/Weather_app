export function showError(container, weatherBox, weatherDetails, error404, img404) {
    container.style.height = '400px';
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
    error404.style.display = 'block';
    error404.classList.add('fadeIn');
    error404.querySelector('img').src = img404;
}