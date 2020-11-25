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

/* Favoritos */
const addToFavorite = (gifosAdd) =>{
    const favoriteSection = JSON.parse(localStorage.getItem('gif')) || [];
    favoriteSection.push(gifosAdd);
    localStorage.setItem('gif', JSON.stringify(favoriteSection));
    createDomFavorite();
}
const removerGifToFavorite =(gifosContainerFlex, gifosTrending, index) =>{
    const favoriteSection = JSON.parse(localStorage.getItem('gif')) || [];
    gifosContainerFlex.removeChild(gifosTrending);
    favoriteSection.splice(index, 1);
    localStorage.setItem('gif', JSON.stringify(favoriteSection));
    createDomFavorite();
};
/* Favoritos */

/* Function create Dom */
const createDom = (data, containerMain) =>{
    let gifosTrending = document.createElement('div');
    gifosTrending.classList.add('gifos_trending');
    gifosTrending.addEventListener('click', ()=>{
        if(screen.width < 1024){
            max(data);
        };
    });
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
            addToFavorite(data);
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
        iconDownload.addEventListener('click', () =>{
            download(data);
        });
    actionsUser.appendChild(iconDownload);

    let iconMax = document.createElement('div');
    iconMax.classList.add('icon_max', 'tamaño_actions_users');
    iconMax.addEventListener('click', ()=>{
        max(data);
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

/* Function download */
const download = (datosForDownload) =>{

}
/* Function download */


/* Function max */
let maxSection = document.getElementById('maxSection');
let containerCarruselMax = document.querySelector('.container_gif_max_title_actions');
let closeMaxGif = document.querySelector('.close_max_gif');
const max = (items) =>{
    let contador = 0;
    maxSection.classList.remove('none');
    //contenedor gifMax
    containerCarruselMax.innerHTML='';
    let divGifMax = document.createElement('div');
    divGifMax.classList.add('gifMax');
    //contenedor gifMax

    //imgGifMax
    let imgGifMax = document.createElement('div');
    imgGifMax.classList.add('imgGifMax');
    imgGifMax.style.backgroundImage = `url("${items.images.original.url}")`;
    divGifMax.appendChild(imgGifMax);
    //imgGifMax

    //contenedor titulos y acciones
    let containerTitleAndAction = document.createElement('div');
    containerTitleAndAction.classList.add('container_title_max_actions_user');
    //contenedor titulos y acciones

    //contenedor de acciones
    let actionsUser = document.createElement('div');
    actionsUser.classList.add('actions_users_mobile');
    //contenedor de acciones

    //icono favorito
    let iconFavMax = document.createElement('div');
    iconFavMax.classList.add('icon_fav_max', 'tamaño_actions_users');
    iconFavMax.addEventListener('click', ()=>{
        if (contador === 0) {
            iconFavMax.classList.remove('icon_fav_max');
            iconFavMax.classList.add('icon_fav_max_active');
            addToFavorite(items);
            contador = 1;
        }else{
            iconFavMax.classList.add('icon_fav_max');
            iconFavMax.classList.remove('icon_fav_max_active');
            //removerGifToFavorite();
            contador = 0;
        }
    });
    actionsUser.appendChild(iconFavMax);
    //icono favorito

    //icono descarga
    let iconDownloadMax = document.createElement('div');
    iconDownloadMax.classList.add('icon_download_max', 'tamaño_actions_users');
    actionsUser.appendChild(iconDownloadMax);
    //icono descarga

    containerTitleAndAction.appendChild(actionsUser);

    //contenedor titulos y usuario
    let containerTitleAndUser = document.createElement('div');
    containerTitleAndUser.classList.add('container_title_gifos_card_max');
    //contenedor titulos y usuario

    //usuario
    let pGifosMax = document.createElement('p');
    pGifosMax.classList.add('p_gifos_card_max');
    pGifosMax.textContent = items.username;
    containerTitleAndUser.appendChild(pGifosMax);
    //usuario

    //titulo del gif
    let titleGifosMax = document.createElement('p');
    titleGifosMax.classList.add('title_gifos_card_max');
    titleGifosMax.textContent = items.title;
    containerTitleAndUser.appendChild(titleGifosMax);
    //titulo del gif
    containerTitleAndAction.appendChild(containerTitleAndUser);
    divGifMax.appendChild(containerTitleAndAction);
    containerCarruselMax.appendChild(divGifMax);
}
closeMaxGif.addEventListener('click', ()=>{
    maxSection.classList.add('none');
});
/* Function max */

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

/* Carrusel max */
const containerMax = document.querySelector('.container_gif_max_title_actions');
const arrowLefMax = document.getElementById('arrow-lef-max');
const arrowRightMax = document.getElementById('arrow-right-max');
arrowRightMax.addEventListener('click', ()=>{
    containerMax.scrollLeft -= containerMax.offsetWidth;
});
arrowLefMax.addEventListener('click', ()=>{
    containerMax.scrollLeft += containerMax.offsetWidth;
});
/* Carrusel max */
