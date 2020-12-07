'use strict'
//Add to favorite

const gifosContainerFlex = document.getElementById('gifosContainerFlex');
const favoriteClean = document.getElementById('favoriteClean');

const createDomFavorite = () => {
    const ruta = window.location.href.toString().split(window.location.host)[1];
    if (ruta != '/favoritos.html') return;
    const gifLocal = JSON.parse(localStorage.getItem('gif')) || [];
    if (gifLocal.length <= 0 && gifLocal !==  '') {
        favoriteClean.classList.remove('none');
        gifosContainerFlex.innerHTML = '';
    } else {
        favoriteClean.classList.add('none');
        gifosContainerFlex.innerHTML = '';
        gifLocal.forEach((favoritoGif, index) => {
            createDom(favoritoGif, gifosContainerFlex, index);
        });
    };
}
createDomFavorite();
/* Add to favorite */
