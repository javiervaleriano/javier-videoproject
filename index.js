// Preloader
window.addEventListener('load', function () {
    document.querySelector('.preloader').classList.add('hide-preloader');
});


const video = document.querySelector('#video');
const control = document.querySelectorAll('.control button');

control.forEach(ctr => {
    ctr.addEventListener('click', function () {
        const PARENT_BTN = ctr.parentElement;

        PARENT_BTN.classList.toggle('repro');
    
        if (!PARENT_BTN.classList.contains('repro')) {
            video.play();
        } else {
            video.pause();
        }
    });
});