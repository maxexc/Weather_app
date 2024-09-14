const spinner = document.querySelector('.spinner-wrapper');

export function showSpinner() {
    spinner.classList.remove('is-hidden');
}

export function hideSpinner() {
    spinner.classList.add('is-hidden');
}