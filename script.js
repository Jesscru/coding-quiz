// variables to get html content 
var startButton = document.querySelector('.title');
var instructions = document.querySelector('.instructions');
var title = document.querySelector('.title');
var timer = document.querySelector('#time-display')

// other variables 
var timeStart = 7500;

// start timer at 75secs when the start button is clicked 
function startQuiz(){
    var changeToSec = timeStart / 1000;
    var quizTime = setInterval(function(){
        timeStart--;
        timer.textContent = 'Time: ' + changeToSec;
    }, 7500)

    if (quizTime === 0) {
        clearInterval(quizTime);
    }
}


startButton.addEventListener('click', startQuiz());