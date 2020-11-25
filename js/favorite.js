/* Add to favorite */
let gifosContainerFlex = document.getElementById('gifosContainerFlex');
let favoriteClean = document.getElementById('favoriteClean');


const createDomFavorite = () =>{
    let gifLocal = JSON.parse(localStorage.getItem('gif')) || [];
    if(gifLocal.length > 0){
        favoriteClean.classList.add('none');
        gifosContainerFlex.innerHTML = '';

        gifLocal.forEach(elemento = (elemento)=>{
            let gifosTrending = document.createElement('div');
            gifosTrending.classList.add('gifos_trending');
            gifosTrending.addEventListener('click', ()=>{
                if(screen.width < 1024){
                    max(elemento);
                }
            });
            gifosTrending.style.backgroundImage = `url("${elemento.images.original.url}")`;

            let infoGif = document.createElement('div');
            infoGif.classList.add('info_gif');

            let actionsUser = document.createElement('div');
            actionsUser.classList.add('actions_users');
            let iconFav = document.createElement('div');
            iconFav.classList.add('icon_fav_remove', 'tamaño_actions_users');
            iconFav.addEventListener('click', () =>{
                removerGifToFavorite();
            });
            actionsUser.appendChild(iconFav);

            let iconDownload = document.createElement('div');
            iconDownload.classList.add('icon_download', 'tamaño_actions_users');
            /*  iconDownload.addEventListener('click', () =>{
                iconDownload(data);
            }); */
            actionsUser.appendChild(iconDownload);

            let iconMax = document.createElement('div');
            iconMax.classList.add('icon_max', 'tamaño_actions_users');
            iconMax.addEventListener('click', ()=>{
                max(elemento);
            });
            actionsUser.appendChild(iconMax);


            let titleCardContainer = document.createElement('div');
            titleCardContainer.classList.add('container_title_gifos_card');

            let pGifosUser = document.createElement('p');
            pGifosUser.classList.add('p_gifos_card');
            pGifosUser.textContent = elemento.username;
            
            titleCardContainer.appendChild(pGifosUser);

            let titleGifosCard = document.createElement('p');
            titleGifosCard.classList.add('title_gifos_card');
            titleGifosCard.textContent = elemento.title;

            titleCardContainer.appendChild(titleGifosCard);


            infoGif.appendChild(actionsUser);
            infoGif.appendChild (titleCardContainer);

            gifosTrending.appendChild(infoGif);
            gifosContainerFlex.appendChild(gifosTrending);
        });
    };
}

createDomFavorite();

/* Add to favorite */


