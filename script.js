'use strict';
//selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling dice functionality

btnRoll.addEventListener('click', function() {
    const dice =Math.trunc(Math.random() * 6) +1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;

    //check for rolled is 1 or not
if(dice !=1){
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; 
}else{
    //switch to next player

}
}
);




