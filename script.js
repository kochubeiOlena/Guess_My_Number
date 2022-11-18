'use strict';

const defaultNumber = null;
let secretNumber = defaultNumber || Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.highscore').textContent = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        //document.querySelector('.message').textContent = 'No nummber!';
        displayMessage('No number');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    } else if (score !== secretNumber) {
        if (score > 1) {
            //  document.querySelector('.message').textContent = guess> secretNumber ? 'Number is too hight' : 'Number is too low';
            displayMessage(guess > secretNumber ? 'Number is too hight' : 'Number is too low');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('LOSE GAME!')
            document.querySelector('.score').textContent = 0;
        }
    }

})
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = defaultNumber || Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})
