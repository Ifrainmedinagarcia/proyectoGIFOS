/* Funcionalidad de Menú hamburguesa */
let menuBurguer = document.getElementById('menu_burger');
let menuBurguerClose = document.getElementById('menu_burger_close');
let navBar = document.getElementById('navBar');
const funcionalidadMenuOpen = () => {
    menuBurguer.classList.add('none');
    menuBurguerClose.classList.remove('none');
    navBar.classList.remove('nav_none');
};
const funcionalidadMenuClose = () =>{
    menuBurguer.classList.remove('none');
    menuBurguerClose.classList.add('none');
    navBar.classList.add('nav_none');
}
menuBurguer.addEventListener('click', funcionalidadMenuOpen);
menuBurguerClose.addEventListener('click', funcionalidadMenuClose);
/* Funcionalidad de Menú hamburguesa */
/* Dark mode */
let darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', (e) =>{
    e.preventDefault();
    document.body.classList.toggle('dark');
});
/* Dark mode */
