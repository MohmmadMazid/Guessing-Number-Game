'use strict';

let randomNo = Math.floor(Math.random() * 20) + 1;
console.log(randomNo);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let message = document.querySelector('.message');
  let guessNum = Number(document.querySelector('.guess').value);

  if (guessNum === randomNo) {
    message.innerHTML = ' 🥇🏆Correct Number';
    document.querySelector('.number').innerHTML = guessNum;
    document.querySelector('body').style.backgroundColor = '#60a347';
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.highscore').innerHTML = score;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').innerHTML = highscore;
    }
  } else if (guessNum < randomNo) {
    message.innerHTML = '📉 too low';
    score--;
    document.querySelector('.score').innerHTML = score;
  } else {
    message.innerHTML = '📈too high';
    score--;
    document.querySelector('.score').innerHTML = score;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  randomNo = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
  console.log(randomNo);
  document.querySelector('.score').innerHTML = score;
});

// if (highscore > score) {
//   document.querySelector('.highscore').innerHTML = highscore;
// } else {
//   document.querySelector('.highscore').innerHTML = highscore;
// }
