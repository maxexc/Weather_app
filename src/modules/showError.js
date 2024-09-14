export function showErrorNoConnection(message) {
    const notFoundBlock = document.querySelector('.not-found');
    const notFoundMessage = notFoundBlock.querySelector('p');

    if (notFoundMessage.textContent !== message) {
        notFoundBlock.style.display = 'block';
        notFoundMessage.textContent = message;
    }
}
