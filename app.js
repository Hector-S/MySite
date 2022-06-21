const Menu = document.querySelector('#MobileMenu')
const MenuLinks = document.querySelector('.NavbarMenu');

//Display Mobile Menu
const MobileMenu = () => {
    Menu.classList.toggle('is-active');
    MenuLinks.classList.toggle('active');
}

Menu.addEventListener('click', MobileMenu);