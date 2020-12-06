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
/* Cronómetro */
let cronometro;
let contadorS = 0;
let contadorM = 0;
const timeRecord = () =>{
    const s = document.getElementById('segundos');
    const m = document.getElementById('minutos');
    cronometro = setInterval(() => {
        if (contadorS == 60) {
            contadorS = 0;
            contadorM++;
            m.innerHTML = contadorM;
        }
        if (contadorM = 0) {
            contadorM = 0;
        }
        s.innerHTML = contadorS;
        contadorS++;
    }, 1000);
}
const stopTime = () =>{
        clearInterval(cronometro);
}
/* Cronómetro */

/* Create Gifo */
const start = document.getElementById('start');
const record = document.getElementById('record');
const finish = document.getElementById('finish');
const upload = document.getElementById('upload');
const video = document.getElementById('videoCreate');
const containerTitleCrea = document.querySelector('.container_title_crea');
const titleCreateGifo = document.getElementById('titleCreateGifo');
const pCreateGifo = document.getElementById('pCreateGifo');
const pasoUno = document.getElementById('pasoUno');
const pasoDos = document.getElementById('pasoDos');
const pasoTres = document.getElementById('pasoTres');
const timming = document.querySelector('.timming');
let recorder;

function getStreamAndRecord() {
    titleCreateGifo.innerHTML =  `<h1 id="titleCreateGifo">¿Nos das acceso a tu cámara?</h1>`;
    pCreateGifo.innerHTML = `<P id="pCreateGifo">El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.</P>`;
    pasoUno.classList.add('paso_paso_checked');
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
        pasoUno.classList.remove('paso_paso_checked');
        pasoDos.classList.add('paso_paso_checked');
        timming.classList.remove('none');
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

};

start.addEventListener('click', () =>{
    getStreamAndRecord();
});
record.addEventListener('click', () =>{
    record.classList.add('none');
    finish.classList.remove('none');
    recorder.startRecording();
    timeRecord();
});

finish.addEventListener('click', () =>{
    stopTime();
    //recorder.stopRecording(() => uploandGifo(recoder));
});
/* Create Gifo */
