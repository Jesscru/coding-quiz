// button variables to access html content 
var startBtn = document.querySelector(".button");
var answerBtn = document.getElementsByClassName("answer-choices");
var submitBtn = document.getElementsByClassName("submit-button");
var goBackBtn = document.getElementById("go-back");
var clearBtn = document.getElementById("clear");

// variables to access other html elements
var title = document.querySelector(".title");
var instructions = document.getElementsByClassName("instructions");
var timer = document.querySelector(".time-display");
var askQuestion = document.getElementById("question");
// var userInput = document.querySelector(".input")
// var userInitials = document.querySelector(".stored-user-initials");
// var allDone = document.querySelector('.all-done');

// js exclusive variables
var timeStart = 75000;
var changeToSec = timeStart / 1000;

// each question saved in an object, answers nested inside question object, all stored in an array
var quizContent = [
    { 
        question: 'Commonly used data types DO NOT include', 
        answers: [
            '1. strings',
            '2. booleans',
            '3. alerts',
            '4. numbers'
    ], 
        correctAnswer: 3
},

    {
        question: 'The condition of an if / else statement is enclosed within _______.', 
        answers: [
            '1. quotes',
            '2. curly brackets',
            '3. parentheses',
            '4. square brackets'
    ], 
        correctAnswer: 3
},
    
    {
        question: 'Arrays in JavaScripts can be used to store _______. ', 
        answers: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'
    ], 
        correctAnswer: 4
},

    {
        question: 'String values must be enclosed within _______ when being assigned to variables.', 
        answers: [
            '1. commas',
            '2. curly brackets',
            '3. quotes',
            '4. parentheses'
    ], 
        correctAnswer: 3
},

    {   
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        answers: [
            '1. JavaScript',
            '2. terminal / bash',
            '3. for loops',
            '4. console.log'
    ], 
        correctAnswer: 4

}];


// start timer at 75secs when the start button is clicked 
function startQuiz(){
  
    var quizTime = setInterval(function(){
        timeStart--;
        timer.textContent = 'Time: ' + changeToSec;
    }, 0)

    if (quizTime === 0) {
        clearInterval(quizTime);
    }

    window.location.href = "./questions.html"
    // displayQAndA();
}



function displayQAndA(){
    for (var i = 0; i < quizContent.length; i++) {
        askQuestion.textContent = quizContent[i].question;
        // answerChoice1.textContent = quizContent[i].answers[1];
        // answerChoice2.textContent = quizContent[i].answers[2];
        // answerChoice3.textContent = quizContent[i].answers[3];
        // answerChoice4.textContent = quizContent[i].answers[4];
        console.log(quizContent[i].question);
        
    }
}

displayQAndA();


//   console.log(startBtn);
//   console.log(answerBtn);
//   console.log(submitBtn);
//   console.log(goBackBtn);
//   console.log(clearBtn);
//   console.log(title);
//   console.log(instructions);
//   console.log(timer);
//   console.log(question);


// startBtn.addEventListener("click", startQuiz);
// // answerBtn.addEventListener("click", detectAnswer);

// // stores highscore in highscores.html
// function storeHighscore(event, quizTime){
//     event.preventDefault();

//     localStorage.setItem(userInput.value, quizTime);
// }

// // takes back to homepage when go back button is clicked
// function goBack(event) {
//     event.preventDefault();

//     window.location.href = "./index.html"
// }

// // clears local storage when clear highscores button is clicked
// function clearHighscores(event){
//     event.preventDefault();

//     localStorage.clear();

// }

// // submitBtn.addEventListener("click", storeHighscore);
// goBackBtn.addEventListener("click", goBack);
// clearBtn.addEventListener("click", clearHighscores);