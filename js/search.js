/* API Search */
const searchValue = document.getElementById('search_value');
const searchBtn = document.getElementById('btn_search');
const sectionSearch = document.getElementById('sectionSearch');
const searchResult = document.getElementById('search_result');
const showMore = document.querySelector('.showMore');
const suggestionsContainer = document.getElementById('suggestions');
const lineSuggestions = document.querySelector('.line_search_input');
const xCancelSearch = document.querySelector('.x_cancel_search');
const h1Title = document.getElementById('title');
const lupa = document.querySelector('.fa-search');

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
    h1Title.textContent = searchValue.value;
    createDom(gifSearch, searchResult, i);
}
lupa.addEventListener('click', ()=>{
    if (searchValue.value != '') {
        search(searchValue.value);
        lineSuggestions.classList.add('none');
        showMore.classList.remove('none');
        suggestionsContainer.innerHTML = '';
    }else{
        alert('Por favor introduce un término de búsqueda');
    }
});
searchValue.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        if (searchValue.value != '') {
            search(searchValue.value);
            showMore.classList.remove('none');
            lineSuggestions.innerHTML = '';
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
    const lupa = document.createElement('i');
    lupa.classList.add('fas', 'fa-search', 'lupaSuggestions');

    
    const pSugerencia = document.createElement('p');
    pSugerencia.classList.add('sugerenciaP');
    pSugerencia.textContent = sugerencia.title;
    pSugerencia.appendChild(lupa);


    divContainerPSug.appendChild(pSugerencia);
    divContainerPSug.addEventListener('click', () =>{
        search(sugerencia.title);
        h1Title.textContent = sugerencia.title;
        searchValue.value = sugerencia.title;
        lineSuggestions.classList.add('none');
        showMore.classList.remove('none');
        suggestionsContainer.innerHTML = '';
    });
    
    suggestionsContainer.appendChild(divContainerPSug);
};
searchValue.addEventListener('keyup', ()=>{
    if (searchValue.value !== '') {
        filtrar();
        lupa.classList.remove('none');
        lineSuggestions.classList.remove('none');
        xCancelSearch.classList.remove('none');
        xCancelSearch.addEventListener('click', () =>{
            searchValue.value = '';
            lupa.classList.add('none');
            searchBtn.classList.remove('none');
            xCancelSearch.classList.add('none');
            suggestionsContainer.innerHTML = '';
        });
        searchBtn.classList.add('none');
    }else{
        lupa.classList.add('none');
        xCancelSearch.classList.add('none');
        searchBtn.classList.remove('none')
        suggestionsContainer.innerHTML = '';
    }
} );
/* Buscador con sugerencia */

/* Show More */
/* showMore.addEventListener('click', () =>{
    search(h1Title.textContent);
}); */
/* Show More */