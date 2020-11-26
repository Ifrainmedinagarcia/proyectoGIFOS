/* API Search */
const searchValue = document.getElementById('search_value');
const searchBtn = document.getElementById('btn_search');
const sectionSearch = document.getElementById('sectionSearch');
const searchResult = document.getElementById('search_result');
const showMore = document.querySelector('.showMore');
const suggestions = document.getElementById('suggestions');

const search = (title) =>{
    const urlSearch = `${baseApi}search?api_key=${apiSearch}&q=${title}&q=&limit=12`;
    const result = getIfoApi(urlSearch);
    searchResult.innerHTML = '';
    result.then((resp)=>{
        resp.data.map(items => domSearch(items));
    }).catch((e) => {
        console.log("a ocurrido un error " + e);
    });
}
const domSearch = (gifSearch) =>{
    const h1Title = document.getElementById('title');
    h1Title.textContent = searchValue.value;
    createDom(gifSearch, searchResult);
}
searchBtn.addEventListener('click', ()=>{
    if (searchValue.value != '') {
        search(searchValue.value);
        showMore.classList.remove('none');   
    }else{
        alert('Por favor introduce un término de búsqueda');
    }
});
searchValue.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        if (searchValue.value != '') {
            search(searchValue.value);
            showMore.classList.remove('none');   
        }else{
            alert('Por favor introduce un término de búsqueda');
        }
    }
});
/* API Search */
/* Buscador con sugerencia */
/* const suggestionsDom = (sugerencia) =>{
    let divSegerenciaContainer = document.createElement('div');
    let divContainerPSug = document.createElement('div');
    divContainerPSug.classList.add('sugerencia');

    let pSugerencia = document.createElement('p');
    pSugerencia.classList.add('sugerenciaP');
    pSugerencia.textContent = sugerencia.user.username;

    divContainerPSug.appendChild(pSugerencia);
    divSegerenciaContainer.appendChild(divContainerPSug);
};
suggestionsDom(); */
/* Buscador con sugerencia */