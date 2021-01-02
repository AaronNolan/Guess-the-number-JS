'use strict';

/*
console.log(document.querySelector('.message').textContent); // Select an element from the page and return its text output
document.querySelector('.message').textContent = 'Correct Number!'; // Select element 'message' (= "Start Guessing") and replace it with 'Correct Number'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; 
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').value = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    // If wrong value entered
    if (!guess) {
        displayMessage('⛔ No Number!');
    // If correct guess is entered
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct!');
        // Adjust background colour
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        console.log("1. Not correct number")
        if (score > 0) {
            console.log("score is less than 0")
            displayMessage(guess > secretNumber ? '🔺 Too High!' : '🔻 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.number').textContent = secretNumber;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').value = secretNumber;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'; 
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
});
