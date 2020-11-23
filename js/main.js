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
    gifosTrending.style.backgroundImage = `url("${data.images.original.url}")`;
    let contador = 0;

    let infoGif = document.createElement('div');
    infoGif.classList.add('info_gif');

    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users');
    let iconFav = document.createElement('div');
    iconFav.classList.add('icon_fav', 'tamaño_actions_users');
    iconFav.addEventListener('click', () =>{
        if (contador === 0) {
            iconFav.classList.remove('icon_fav');
            iconFav.classList.add('icon_fav_remove');
            //addToFavorite(data);
            contador = 1;
        }else{
            iconFav.classList.add('icon_fav');
            iconFav.classList.remove('icon_fav_remove');
            //removerGifToFavorite();
            contador = 0;
        }
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


    let titleCardContainer = document.createElement('div');
    titleCardContainer.classList.add('container_title_gifos_card');

    let pGifosUser = document.createElement('p');
    pGifosUser.classList.add('p_gifos_card');
    pGifosUser.textContent = data.username;
    
    titleCardContainer.appendChild(pGifosUser);

    let titleGifosCard = document.createElement('p');
    titleGifosCard.classList.add('title_gifos_card');
    titleGifosCard.textContent = data.title;

    titleCardContainer.appendChild(titleGifosCard);


    infoGif.appendChild(actionsUser);
    infoGif.appendChild (titleCardContainer);

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