const input = document.querySelector('.wordInput');
const translateButton = document.querySelector('.btn');
const outputE = document.querySelector('#output');

function translateText(){
console.log('clicked');
}

translateButton.addEventListener('click',translateText)