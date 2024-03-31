'use strict';
//selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
}else{
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    

    
}
}
);

btnHold.addEventListener('click',function(){
   //1. add current score to active player
   scores[activePlayer] += currentScore;
   //scores[1] = scores[1]+currentScore;
   document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

   //2. check if player's score is 100 or not
   
   //3. switch to next player
});




