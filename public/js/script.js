document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('MenuMobile');

    btnMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('hidden');
    });
});