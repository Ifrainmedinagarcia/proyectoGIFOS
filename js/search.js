/* API Search */
const searchValue = document.getElementById('search_value');
const searchBtn = document.getElementById('btn_search');
const sectionSearch = document.getElementById('sectionSearch');
const searchResult = document.getElementById('search_result');
const showMore = document.querySelector('.showMore');
const suggestionsContainer = document.getElementById('suggestions');
const lineSuggestions = document.querySelector('.line_search_input');
const xCancelSearch = document.querySelector('.x_cancel_search');

const search = (title) =>{
    const urlSearch = `${baseApi}search?api_key=${apiSearch}&q=${title}&q=&limit=12`;
    const result = getIfoApi(urlSearch);
    searchResult.innerHTML = '';
    result.then((resp)=>{
        resp.data.map((items, i) => domSearch(items, i));
    }).catch((e) => {
        console.log("a ocurrido un error " + e);
    });
}
const domSearch = (gifSearch, i) =>{
    const h1Title = document.getElementById('title');
    h1Title.textContent = searchValue.value;
    createDom(gifSearch, searchResult, i);
}
searchBtn.addEventListener('click', ()=>{
    if (searchValue.value != '') {
        search(searchValue.value);
        showMore.classList.remove('none');
        xCancelSearch.classList.remove('none');
        searchBtn.classList.add('none');
    }else{
        alert('Por favor introduce un término de búsqueda');
    }
});
searchValue.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        if (searchValue.value != '') {
            search(searchValue.value);
            showMore.classList.remove('none');
            xCancelSearch.classList.remove('none');
            searchBtn.classList.add('none');
        }else{
            alert('Por favor introduce un término de búsqueda');
        }
    }
});
/* API Search */


/* Buscador con sugerencia */

const suggestions = (title) =>{
    const urlSuggestion = `${baseApi}search?api_key=${apiSearch}&q=${title}&q=&limit=8`;
    const result = getIfoApi(urlSuggestion);
    suggestionsContainer.innerHTML = '';
    result.then((resp)=>{
        resp.data.map(elementoSuggestions => {
            let nombre = elementoSuggestions.title;
            if (nombre.indexOf(title) !== -1) {
                suggestionsDom(elementoSuggestions);
            }
        });
    }).catch((e) => {
        console.log("a ocurrido un error " + e);
    });
}

const filtrar = () =>{
    const texto = searchValue.value;
    suggestions(texto);
}

const suggestionsDom = (sugerencia) =>{
    const divContainerPSug = document.createElement('div');
    divContainerPSug.classList.add('sugerencia');

    const pSugerencia = document.createElement('p');
    pSugerencia.classList.add('sugerenciaP');
    pSugerencia.textContent = sugerencia.title;

    divContainerPSug.appendChild(pSugerencia);
    divContainerPSug.addEventListener('click', () =>{
        search(pSugerencia);
    });
    suggestionsContainer.appendChild(divContainerPSug);
};

searchValue.addEventListener('keyup', ()=>{
    filtrar();
    if (searchValue.value !== '') {
        lineSuggestions.classList.remove('none');
    }else{
        xSancelSearch.classList.add('none');
    }
} );

filtrar();
/* Buscador con sugerencia */