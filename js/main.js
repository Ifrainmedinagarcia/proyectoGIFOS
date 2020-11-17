/* Funcionalidad de Menú hamburguesa */
const menuBurguer = document.getElementById('menu_burger');
const menuBurguerClose = document.getElementById('menu_burger_close');
const navBar = document.getElementById('navBar');
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
    //localStorage for Dark Mode
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
}else{
    document.body.classList.remove('dark');
}
/* Dark mode */

/* Carrusel trending */
const fila = document.querySelector('.container_trending_gifos_flex');
const arrowLef = document.getElementById('arrow-lef');
const arrowRight = document.getElementById('arrow-right');
arrowRight.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;
});
arrowLef.addEventListener('click', ()=>{
    fila.scrollLeft -= fila.offsetWidth;
});
/* Carrusel trending */

/* API Trending */
const api = 'https://api.giphy.com/v1/gifs/trending?api_key=pEo6WXMy7qnbv6QjNIWmRF2ghCLUvM4L&limit=25&rating=g'

const createDom = () =>{
    let containerTrending = document.getElementById('containerTrending');
    let gifosTrending = document.createElement('div');
    gifosTrending.classList.add('gifos_trending');

    let infoGif = document.createElement('div');
    infoGif.classList.add('info_gif');

    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users');

    let iconFav = document.createElement('div');
    iconFav.classList.add('icon_fav', 'tamaño_actions_users');
    actionsUser.appendChild(iconFav);

    let iconDownload = document.createElement('div');
    iconDownload.classList.add('icon_download', 'tamaño_actions_users');
    actionsUser.appendChild(iconDownload);

    let iconMax = document.createElement('div');
    iconMax.classList.add('icon_max', 'tamaño_actions_users');
    actionsUser.appendChild(iconMax);

    infoGif.appendChild(actionsUser);
    gifosTrending.appendChild(infoGif);
    containerTrending.appendChild(gifosTrending);
}
/* API Trending */
