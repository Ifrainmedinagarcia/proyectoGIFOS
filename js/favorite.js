/* Add to favorite */
let favoriteSection = [];
let gifosContainerFlex = document.getElementById('gifosContainerFlex');
let favoriteClean = document.getElementById('favoriteClean');
const addToFavorite = (gifosAdd) =>{
    favoriteSection.push(gifosAdd);
    console.log(favoriteSection);
    let withoutRepeated = favoriteSection.filter((elementCurrent, indexCurrent, array) => array.indexOf(elementCurrent) === indexCurrent);
    favoriteClean.classList.add('none');
    gifosContainerFlex.innerHTML = '';
    withoutRepeated.map(elemento => createDomFavorite(elemento));
}
const createDomFavorite = (items) =>{
    createDom(items, gifosContainerFlex); 
}
/* Add to favorite */
