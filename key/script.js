const key = document.querySelector('.like');
const code = document.querySelector('.code');
const locat = document.querySelector('.location');
const which = document.querySelector('.which');
const text = document.querySelector('h1');
const just = document.querySelector('.header__key')
const header = document.querySelector('.header__content');
const headers = document.querySelector('header')
document.addEventListener('keyup', (e) => {
    key.style.color = 'black';
    which.style.color = 'black';
    code.style.color = 'black';
    locat.style.color = 'black';



    which.innerText = e.which;
    key.innerText = e.key;
    code.innerText = e.code;
    locat.innerText = e.location;

});

const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    code.classList.toggle('active')
    locat.classList.toggle('active')
    which.classList.toggle('active')
    key.classList.toggle('active')
    which.style.color = 'black'
    key.style.color = 'black'
    code.style.color = 'black' 
   
    locat.style.color = 'black'   
}