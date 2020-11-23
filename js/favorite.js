/* Add to favorite */
let favoriteSection = [];
let gifosContainerFlex = document.getElementById('gifosContainerFlex');
let favoriteClean = document.getElementById('favoriteClean');


const addToFavorite = (gifosAdd) =>{
    favoriteSection.push(gifosAdd);
    favoriteClean.classList.add('none');
    let withoutRepeated = favoriteSection.filter((elementCurrent, indexCurrent, array) => array.indexOf(elementCurrent) === indexCurrent);
    saveLocal(withoutRepeated);
};
const saveLocal = (withoutRepeated) =>{
    localStorage.setItem('gif', JSON.stringify(withoutRepeated));
    createDomFavorite();
}

const createDomFavorite = () =>{
    gifosContainerFlex.innerHTML = '';
    let gifLocal = JSON.parse(localStorage.getItem('gif')) || [];
    gifLocal.forEach(elemento => createDom(elemento, gifosContainerFlex));
}



/* Add to favorite */
/* remover Gif To Favorite */
/* const removerGifToFavorite = () =>{
    gifosContainerFlex.removeChild();
} */
/* remover Gif To Favorite */



/*  */