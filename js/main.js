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
        darkMode.textContent = 'Modo Diurno';
    }else{
        localStorage.setItem('dark-mode', 'false');
        darkMode.textContent = 'Modo Nocturno';
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

/* Function create Dom */
const createDom = (data, containerMain) =>{
    let gifosTrending = document.createElement('div');
    gifosTrending.classList.add('gifos_trending');
    gifosTrending.style.backgroundImage = `url("${data.images.downsized_medium.url}")`;

    let infoGif = document.createElement('div');
    infoGif.classList.add('info_gif');

    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users');

    let iconFav = document.createElement('div');
    iconFav.classList.add('icon_fav', 'tamaño_actions_users');
    iconFav.addEventListener('click', () =>{
        addToFavorite(data);
        iconFav.style.backgroundImage = `url("../assets/icon-fav-active.svg")`;
    });
    actionsUser.appendChild(iconFav);

    let iconDownload = document.createElement('div');
    iconDownload.classList.add('icon_download', 'tamaño_actions_users');
    /*  iconDownload.addEventListener('click', () =>{
        iconDownload(data);
    }); */
    actionsUser.appendChild(iconDownload);

    let iconMax = document.createElement('div');
    iconMax.classList.add('icon_max', 'tamaño_actions_users');
    iconMax.addEventListener('click', ()=>{
        max();
    });

    actionsUser.appendChild(iconMax);
    infoGif.appendChild(actionsUser);
    gifosTrending.appendChild(infoGif);
    containerMain.appendChild(gifosTrending);
}
/* Function create Dom */

/* Function max */
let maxSection = document.getElementById('maxSection');
let closeMaxGif = document.querySelector('.close_max_gif');
const max = () =>{
    maxSection.classList.remove('none');
}
closeMaxGif.addEventListener('click', ()=>{
    maxSection.classList.add('none');
});
/* Function max */

/* Function download */

/* Function download */

/* API Trending */
const trendingDom = () =>{
    let url = `${baseApi}trending?api_key=${apiSearch}&limit=25&rating=g`;
    let result = getIfoApi(url);
    result.then((resp)=>{
        resp.data.map(item => createDomTrending(item));
    }).catch((e) => {
        alert("a ocurrido un error" + e);
    });
};
const createDomTrending = (datos) =>{
    let containerTrending = document.getElementById('containerTrending');
    createDom(datos, containerTrending);
}
trendingDom();
/* API Trending */