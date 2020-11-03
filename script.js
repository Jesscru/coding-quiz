// variables to get html content 
var startButton = document.getElementsByClassName('button');
var instructions = document.getElementsByClassName('instructions');
var title = document.getElementsByClassName('title');
var timer = document.querySelector('#time-display');

// other variables 
var timeStart = 75000;
var changeToSec = timeStart / 1000;

// start timer at 75secs when the start button is clicked 
function startQuiz(){
    var quizTime = setInterval(function(){
        timeStart--;
        timer.textContent = 'Time: ' + changeToSec;
    }, 0)

    if (quizTime === 0) {
        clearInterval(quizTime);
    }
}

    console.log(startButton);
    console.log(instructions); 
    console.log(title); 
    console.log(timer); 

// startButton.addEventListener('click', startQuiz());

