// button variables to access html content 
var startBtn = document.querySelector(".button");
var answerBtn1 = document.querySelector(".answer-choice0");
var answerBtn2 = document.querySelector(".answer-choice1");
var answerBtn3 = document.querySelector(".answer-choice2");
var answerBtn4 = document.querySelector(".answer-choice3");
var submitBtn = document.getElementById("submit-button");
var goBackBtn = document.getElementById("go-back");
var clearBtn = document.getElementById("clear");

// variables to access other html elements
var title = document.querySelector(".title");
var instructions = document.getElementById('instructions');
var timer = document.querySelector(".time-display");
var beginHere = document.querySelector(".begin-here");
var beginQuestions = document.querySelector(".questions-begin-page");
var userEntry = document.querySelector(".user-entry-page");
var highscoreSect = document.querySelector(".view-highscores-page");
var askQuestion = document.getElementById("question");
var popUp = document.querySelector(".pop-up-verdict");
var displayVerdict = document.querySelector('.verdict');
var userInput = document.querySelector(".input");
var userInitials = document.querySelector(".stored-user-initials");
var viewHighscores = document.querySelector(".highscores");

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
            '2. parentheses',
            '3. curly brackets',
            '4. square brackets'
    ], 
        correctAnswer: 2
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

function hideElements(){
    beginQuestions.style.visibility = 'hidden';
    userEntry.style.visibility = 'hidden';
    highscoreSect.style.visibility = 'hidden';
    popUp.style.visibility = 'hidden';
}

// start timer at 75secs when the start button is clicked 
 function startQuiz(){
    displayQ1(quizContent);

    var quizTime = setInterval(function(){
        changeToSec--;
        timer.textContent = 'Time: ' + changeToSec;
        
        if (changeToSec === 0) {
            clearInterval(quizTime);
        }

    }, 1000)

    beginHere.style.visibility = 'hidden';
    beginQuestions.style.visibility = 'initial';
    
}

function displayQ1(quizContent){ 

    askQuestion.textContent = quizContent[0].question;

    for (var i = 0; i < quizContent[0].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[0].answers[0];
        answerBtn2.textContent = quizContent[0].answers[1];
        answerBtn3.textContent = quizContent[0].answers[2];
        answerBtn4.textContent = quizContent[0].answers[3];
    }

    document.querySelector('.list').addEventListener('click', function(event){
        if (event.target.matches(".answer-choice2")) {
            correctAnswer();
            displayQ2(quizContent);
        } else {
            incorrectAnswer();
            displayQ2(quizContent);
        }
    })
  
}


function displayQ2(quizContent){ 
    askQuestion.textContent = quizContent[1].question;
    popUp.style.visibility = 'hidden';

    for (var i = 0; i < quizContent[0].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[1].answers[0];
        answerBtn2.textContent = quizContent[1].answers[1];
        answerBtn3.textContent = quizContent[1].answers[2];
        answerBtn4.textContent = quizContent[1].answers[3];
    }

    document.querySelector('.list').addEventListener('click', function(event){
        if (event.target.matches(".answer-choice1")) {
            correctAnswer();
            displayQ4(quizContent);
        } else {
            incorrectAnswer();
            displayQ3(quizContent);
        }
    })
}

function displayQ3(quizContent){ 
    askQuestion.textContent = quizContent[2].question;
    popUp.style.visibility = 'hidden';

    for (var i = 0; i < quizContent[2].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[2].answers[0];
        answerBtn2.textContent = quizContent[2].answers[1];
        answerBtn3.textContent = quizContent[2].answers[2];
        answerBtn4.textContent = quizContent[2].answers[3];
    }

    document.querySelector('.list').addEventListener('click', function(event){
        if (event.target.matches(".answer-choice3")) {
            correctAnswer();
            displayQ4(quizContent);
        } else {
            incorrectAnswer();
            displayQ4(quizContent);
        }
    })
}



function displayQ4(quizContent){ 
    askQuestion.textContent = quizContent[3].question;
    popUp.style.visibility = 'hidden';

    for (var i = 0; i < quizContent[3].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[3].answers[0];
        answerBtn2.textContent = quizContent[3].answers[1];
        answerBtn3.textContent = quizContent[3].answers[2];
        answerBtn4.textContent = quizContent[3].answers[3];
    }

    document.querySelector('.list').addEventListener('click', function(event){
        if (event.target.matches(".answer-choice2")) {
            correctAnswer();
            displayQ5(quizContent);
        } else {
            incorrectAnswer();
            displayQ5(quizContent);
        }
    })
}

function displayQ5(quizContent){ 
    askQuestion.textContent = quizContent[4].question;
    popUp.style.visibility = 'hidden';

    for (var i = 0; i < quizContent[4].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[4].answers[0];
        answerBtn2.textContent = quizContent[4].answers[1];
        answerBtn3.textContent = quizContent[4].answers[2];
        answerBtn4.textContent = quizContent[4].answers[3];
    }

    document.querySelector('.list').addEventListener('click', function(event){
        if (event.target.matches(".answer-choice3")){
            correctAnswer();
            storeHighscore(event);
            timer.style.display = 'hidden';

        } else {
            incorrectAnswer();
            storeHighscore(event);
            timer.style.display = 'hidden';
        }
        
    })
}

// stores highscore in highscores.html
function storeHighscore(event, changeToSec){
    userEntry.style.visibility = 'initial';
    beginQuestions.style.display = 'none';
    timer.style.visibility = 'hidden';
    viewHighscores.style.visibility = 'hidden';


    document.querySelector('.final-score').textContent = 'Your final score is ' + changeToSec;

    event.preventDefault();
    
    localStorage.setItem(userInput.value, changeToSec);

    submitBtn.addEventListener("click", function(){
        userEntry.style.display = 'none';
        highscoreSect.style.visibility = 'initial';
        userInitials.textContent = userInput.value;
    });
}

// takes back to homepage when go back button is clicked
function goBack() {
    location.reload();
}

// clears local storage when clear highscores button is clicked
function clearHighscores(){
    localStorage.clear();
    userInitials.textContent = '';
}


// functions that change that change styling and displayed text based on whether the user got the quiz question right or not
function correctAnswer(){
    displayVerdict.textContent = 'Correct! Keep it up! :)';
    popUp.style.visibility = 'initial';
}

function incorrectAnswer(){
    displayVerdict.textContent = 'Incorrect! That\'s -15 points :(';
    timeStart - 1500;
    popUp.style.visibility = 'initial';
}

// event listeners and function calls
startBtn.addEventListener("click", startQuiz);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearHighscores);

hideElements();
