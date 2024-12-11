document.addEventListener('DOMContentLoaded', () => {
    displayBanner();
});

function displayBanner() {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    banner.classList.add('active');

    closeButton.addEventListener('click', () => {
        banner.classList.remove('active');
    });
}
