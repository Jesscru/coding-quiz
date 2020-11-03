// variables to get html content 
var startBtn = document.querySelector(".button");
var answerBtn = document.getElementsByClassName("answer-choices");
var submitBtn = document.querySelector(".submit-button");
var goBackBtn = document.querySelector("#go-back");
var clearBtn = document.querySelector("#clear");

var title = document.querySelector(".title");
var instructions = document.getElementsByClassName("instructions");
var timer = document.getElementsByClassName("time-display");
var question = document.getElementsByClassName("question");
var correctAnswer = document.getElementById("true");
var userInput = document.querySelector(".input")
var userInitials = document.querySelector(".stored-user-initials");
var allDone = document.querySelector('.all-done');


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
    storeHighscore();
}


// when user clicks the correct answer, the question and answer choices change and time decrements if user answers incorrectly
function detectAnswer(event) {
    event.preventDefault();

    if (event.target.matches(correctAnswer)) {
      question.innerHTML = 'The condition in an if / else statement is enclose within ______.'
        // display correct messaging and also change answer choices -- need variable help first 
    } else {
        timeStart - 15; 
        // display wrong message and still change question and answer 
    }
  };

//   console.log(startBtn);
//   console.log(instructions);
//   console.log(submitBtn);
//   console.log(title);
//   console.log(timer);
//   console.log(question);
//   console.log(answerBtn);
//   console.log(correctAnswer);
//   console.log(userInput);


// startBtn.addEventListener("click", startQuiz;
// answerBtn.addEventListener("click", detectAnswer;

// stores highscore in highscores.html
function storeHighscore(event, quizTime){
    event.preventDefault();

    localStorage.setItem(userInput.value, quizTime);
}

// takes back to homepage when go back button is clicked
function goBack(event) {
    event.preventDefault();

    window.location.href = "./index.html"
}

// clears local storage when clear highscores button is clicked
function clearHighscores(event){
    event.preventDefault();

    localStorage.clear();

}

// submitBtn.addEventListener("click", storeHighscore);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearHighscores);