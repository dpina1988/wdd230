document.addEventListener('DOMContentLoaded', () => {
    displayBanner();
});

function displayBanner() {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');
    const dayOfWeek = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
        banner.classList.add('active');
    }

    closeButton.addEventListener('click', () => {
        banner.classList.remove('active');
    });
}
