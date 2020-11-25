/* Add to favorite */
let gifosContainerFlex = document.getElementById('gifosContainerFlex');
let favoriteClean = document.getElementById('favoriteClean');


const createDomFavorite = () =>{
    favoriteClean.classList.add('none');
    gifosContainerFlex.innerHTML = '';
    let gifLocal = JSON.parse(localStorage.getItem('gif')) || [];
    console.log(gifLocal);
    gifLocal.forEach(elemento => createDom(elemento, gifosContainerFlex));
}
createDomFavorite();
/* Add to favorite */
/* remover Gif To Favorite */

/* remover Gif To Favorite */
