'use strict';

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log(`Mi numero aleatorio es ${randomNumber}`);

function chooseANumber () {
    const selectedNumber = parseInt(input.value);
    console.log(parseInt(input.value));
    if (selectedNumber < 1 || selectedNumber > 100) {
        clue.innerHTML = 'El numero debe estar entre 1 y 100';
    } else if (selectedNumber === randomNumber) {
        clue.innerHTML = 'Has ganado campeona!!!';
    } else if (selectedNumber < randomNumber) {
        clue.innerHTML = 'Pista: Demasiado bajo';
    } else if (selectedNumber > randomNumber) {
        clue.innerHTML = 'Pista: Demasiado alto';
    }
}

const counterTries = () => {
    let tries = 0;
    counter.innerHTML = `Numero de intentos: ${tries}`;
}


function handleClickButton () {
    chooseANumber()
    counterTries()
}

button.addEventListener('click', handleClickButton);