const btn = document.querySelector('.btn-toggle-nav');
const menu = document.querySelectorAll('.nav-main ul li');
let toggleNavStatus = false;
const home = document.querySelector('#home');
const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const purple = document.querySelector('#purple');
const green = document.querySelector('#green');
const body = document.querySelector('body');
const text = document.querySelector('p');

btn.addEventListener('click', function(){
    if (toggleNavStatus === false) {
        for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-50px';
        };
        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-300px';
        };
        toggleNavStatus = false;
    };
});

home.addEventListener('click', function(){
    body.style.backgroundColor = '#808080';
    for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-300px';
        };
        toggleNavStatus = false;
        text.textContent = "Home";
});

red.addEventListener('click', function(){
    body.style.backgroundColor = '#ff0000';
    for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-300px';
        };
        toggleNavStatus = false;
        text.textContent = "Red";
});

orange.addEventListener('click', function(){
    body.style.backgroundColor = '#ffa500';
    for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-300px';
        };
        toggleNavStatus = false;
        text.textContent = "Orange";
});

purple.addEventListener('click', function(){
    body.style.backgroundColor = '#800080';
    for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-300px';
        };
        toggleNavStatus = false;
        text.textContent = "Purple";
});

green.addEventListener('click', function(){
    body.style.backgroundColor = '#008000';
    for (let i=0; i < menu.length; i++){
        menu[i].style.marginLeft = '-300px';
        };
        toggleNavStatus = false;
        text.textContent = "Green";
});

document.addEventListener('keypress', function (e) {
    if (e.key === '1') {
    body.style.backgroundColor = '#808080';
    text.textContent = "Home";
    };
    if (e.key === '2') {
    body.style.backgroundColor = '#ff0000';
    text.textContent = "Red";
    };
    if (e.key === '3') {
    body.style.backgroundColor = '#ffa500';
    text.textContent = "Orange";
    };
    if (e.key === '4') {
    body.style.backgroundColor = '#800080';
    text.textContent = "Purple";
    };
    if (e.key === '5') {
    body.style.backgroundColor = '#008000';
    text.textContent = "Green";
    };
});