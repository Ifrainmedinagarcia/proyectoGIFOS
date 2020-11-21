/* Add to favorite */
let favoriteSection = [];
let gifosContainerFlex = document.getElementById('gifosContainerFlex');
let favoriteClean = document.getElementById('favoriteClean');
const addToFavorite = (gifosAdd) =>{
    favoriteSection.push(gifosAdd);
    favoriteClean.classList.add('none');
    let withoutRepeated = favoriteSection.filter((elementCurrent, indexCurrent, array) => array.indexOf(elementCurrent) === indexCurrent);
    gifosContainerFlex.innerHTML = '';
    withoutRepeated.map(elemento => createDomFavorite(elemento));
}
const createDomFavorite = (items) =>{
    createDom(items, gifosContainerFlex);
}

/* Add to favorite */
/* remover Gif To Favorite */
/* const removerGifToFavorite = () =>{
    gifosContainerFlex.removeChild();
} */
/* remover Gif To Favorite */