function menuOpen() {
    const menuMobile = document.querySelector('.mobile-menu');
    const iconMenu = document.querySelector('#menu-icon')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'),
        iconMenu.classList.remove('fa-xmark');
    } else {
        menuMobile.classList.add('open'),
        iconMenu.classList.add('fa-xmark');
    }
}


