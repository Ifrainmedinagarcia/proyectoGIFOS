//Add to favorite

const gifosContainerFlex = document.getElementById('gifosContainerFlex');
const favoriteClean = document.getElementById('favoriteClean');

const createDomFavorite = () => {
    const gifLocal = JSON.parse(localStorage.getItem('gif')) || [];
    if (gifLocal.length <= 0) {
        favoriteClean.classList.remove ('none');
    } else {
        favoriteClean.classList.add('none');
        gifosContainerFlex.innerHTML = '';
        gifLocal.forEach((elemento, index) => {
            const gifosTrending = document.createElement('div');
            gifosTrending.classList.add('gifos_trending');
            gifosTrending.addEventListener('click', ()=>{
                if( screen.width < 1024) {
                    max (elemento);
                }
            });
            gifosTrending.style.backgroundImage = `url("${elemento.images.original.url}")`;

            const infoGif = document.createElement('div');
            infoGif.classList.add('info_gif');

            const actionsUser = document.createElement('div');
            actionsUser.classList.add('actions_users');
            const iconFav = document.createElement('div');
            iconFav.classList.add('icon_fav_remove', 'tamaño_actions_users');
            iconFav.addEventListener('click', () =>{
                removerGifToFavorite(gifosContainerFlex, gifosTrending, index);
            });
            actionsUser.appendChild(iconFav);

            const iconDownload = document.createElement('div');
            iconDownload.classList.add('icon_download', 'tamaño_actions_users');
            /*  iconDownload.addEventListener('click', () =>{
                iconDownload(data);
            }); */
            actionsUser.appendChild(iconDownload);

            const iconMax = document.createElement('div');
            iconMax.classList.add('icon_max', 'tamaño_actions_users');
            iconMax.addEventListener('click', ()=>{
                max(elemento);
            });
            actionsUser.appendChild(iconMax);

            const titleCardContainer = document.createElement('div');
            titleCardContainer.classList.add('container_title_gifos_card');

            const pGifosUser = document.createElement('p');
            pGifosUser.classList.add('p_gifos_card');
            pGifosUser.textContent = elemento.username;
            
            titleCardContainer.appendChild(pGifosUser);

            const titleGifosCard = document.createElement('p');
            titleGifosCard.classList.add('title_gifos_card');
            titleGifosCard.textContent = elemento.title;

            titleCardContainer.appendChild(titleGifosCard);

            infoGif.appendChild(actionsUser);
            infoGif.appendChild (titleCardContainer);

            gifosTrending.appendChild(infoGif);
            gifosContainerFlex.appendChild(gifosTrending);
        });
    }
}
createDomFavorite();
/* Add to favorite */