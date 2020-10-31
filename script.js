// variables to get html content 
var startButton = document.querySelector('.title');
var instructions = document.querySelector('.instructions');
var title = document.querySelector('.title');
var timer = document.querySelector('#time-display')

// other variables 
var timeStart = 75000;
// var changeToSec = timeStart / 1000;

// start timer at 75secs when the start button is clicked 
function startQuiz(){
    var quizTime = setInterval(function(){
        timeStart--;
        timer.textContent = 'Time: ' + timeStart;
    }, 75000)

    if (quizTime === 0) {
        clearInterval(quizTime);
    }
    console.log(quizTime);
    console.log(timeStart);
}


startButton.addEventListener('click', startQuiz());