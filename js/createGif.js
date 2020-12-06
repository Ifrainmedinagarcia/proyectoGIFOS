'use strict'
/* Funcionalidad de Menú hamburguesa */
const menuBurguer = document.getElementById('menu_burger');
const menuBurguerClose = document.getElementById('menu_burger_close');
const navBar = document.getElementById('navBar');
const funcionalidadMenuOpen = () => {
    menuBurguer.classList.add('none');
    menuBurguerClose.classList.remove('none');
    navBar.classList.remove('nav_none');
};
const funcionalidadMenuClose = () =>{
    menuBurguer.classList.remove('none');
    menuBurguerClose.classList.add('none');
    navBar.classList.add('nav_none');
}
menuBurguer.addEventListener('click', funcionalidadMenuOpen);
menuBurguerClose.addEventListener('click', funcionalidadMenuClose);
/* Funcionalidad de Menú hamburguesa */

/* Create Gifo */
const start = document.getElementById('start');
const record = document.getElementById('record');
const finish = document.getElementById('finish');
const upload = document.getElementById('upload');
const video = document.getElementById('videoCreate');
const containerTitleCrea = document.querySelector('.container_title_crea');
const titleCreateGifo = document.getElementById('titleCreateGifo');
const pCreateGifo = document.getElementById('pCreateGifo');

function getStreamAndRecord() {
    titleCreateGifo.innerHTML =  `<h1 id="titleCreateGifo">¿Nos das acceso a tu cámara?</h1>`;
    pCreateGifo.innerHTML = `<P id="pCreateGifo">El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.</P>`;
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: 360,
            height: 240
        }
    })

    .then(function (stream) {
        start.classList.add('none');
        record.classList.remove('none');
        containerTitleCrea.classList.add('none');
        video.srcObject = stream;
        video.play();

        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function () {
            console.log('started')
            },
        });
    });
}

start.addEventListener('click', () =>{
    getStreamAndRecord();
});
/* Create Gifo */
