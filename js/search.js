/* API Search */
let searchValue = document.getElementById('search_value');
let searchBtn = document.getElementById('btn_search');
let sectionSearch = document.getElementById('sectionSearch');
let searchResult = document.getElementById('search_result');
let showMore = document.querySelector('.showMore');
let suggestions = document.getElementById('suggestions');

const search = (title) =>{
    let urlSearch = `${baseApi}search?api_key=${apiSearch}&q=${title}&q=&limit=12`;
    let result = getIfoApi(urlSearch);
    searchResult.innerHTML = '';
    result.then((resp)=>{
        resp.data.map(items => domSearch(items));
    }).catch((e) => {
        console.log("a ocurrido un error " + e);
    });
}
const domSearch = (gifSearch) =>{
    let h1Title = document.getElementById('title');
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
} */

/* Buscador con sugerencia */

