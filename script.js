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
var highscorePage = document.querySelector(".view-highscores-page");
var askQuestion = document.getElementById("question");
var popUp = document.querySelector(".pop-up-verdict");
var displayVerdict = document.querySelector('.verdict');
var userInput = document.querySelector(".input");
var userInitials = document.querySelector(".stored-user-initials");

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
    highscorePage.style.visibility = 'hidden';
    popUp.style.visibility = 'hidden';
}

// start timer at 75secs when the start button is clicked 
 function startQuiz(){
  
    var quizTime = setInterval(function(){
        changeToSec--;
        timer.textContent = 'Time: ' + changeToSec;
        
        if (changeToSec === 0) {
            clearInterval(quizTime);
        }

    }, 1000)

    beginHere.style.display = 'none';
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
    
  
    answerBtn3.addEventListener('click', function(event){
        if (event.target.matches(".answer-choice2")){
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Correct! Keep it up! :)';
            displayQ2(quizContent);
        } else if (event.target.matches(".answer-choice0") || event.target.matches(".answer-choice1") || event.target.matches(".answer-choice3")) {
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Incorrect! That\'s -15 points :(';
            displayQ2(quizContent);
            changeToSec - 15;
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

    answerBtn2.addEventListener('click', function(event){
        if (event.target.matches(".answer-choice1")){
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Correct! Keep it up! :)';
            displayQ3(quizContent);
        } else if (event.target.matches(".answer-choice0") || event.target.matches(".answer-choice2") || event.target.matches(".answer-choice3")) {
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Incorrect! That\'s -15 points :(';
            displayQ3(quizContent);
            changeToSec - 15;
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

    answerBtn4.addEventListener('click', function(event){
        if (event.target.matches(".answer-choice3")){
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Correct! Keep it up! :)';
            displayQ4(quizContent);
        } else if (event.target.matches(".answer-choice0") || event.target.matches(".answer-choice2") || event.target.matches(".answer-choice1")) {
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Incorrect! That\'s -15 points :(';
            displayQ4(quizContent);
            changeToSec - 15;
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

    answerBtn3.addEventListener('click', function(event){
        if (event.target.matches(".answer-choice2")){
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Correct! Keep it up! :)';
            displayQ5(quizContent);
        } else if (event.target.matches(".answer-choice0") || event.target.matches(".answer-choice1") || event.target.matches(".answer-choice3")) {
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Incorrect! That\'s -15 points :(';
            displayQ5(quizContent);
            changeToSec - 15;
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

    answerBtn4.addEventListener('click', function(event){
        if (event.target.matches(".answer-choice3")){
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Correct! Keep it up! :)';
            storeHighscore(event);
        } else if (event.target.matches(".answer-choice0") || event.target.matches(".answer-choice2") || event.target.matches(".answer-choice1")) {
            popUp.style.visibility = 'initial';
            displayVerdict.textContent = 'Incorrect! That\'s -15 points :(';
            changeToSec - 15;
            storeHighscore(event);
        }
        
    })
}

// stores highscore in highscores.html
function storeHighscore(event, quizTime){
    userEntry.style.visibility = 'initial';
    beginQuestions.style.display = 'none';

    event.preventDefault();
    
    localStorage.setItem(userInput.value, quizTime);
}

// takes back to homepage when go back button is clicked
function goBack(event) {
    event.preventDefault();
}

// clears local storage when clear highscores button is clicked
function clearHighscores(event){
    event.preventDefault();

    localStorage.clear();

}


// event listeners and function calls
startBtn.addEventListener("click", startQuiz);
answerBtn1.addEventListener('click', function(){
    console.log('Button 1 pushed');
})
answerBtn2.addEventListener('click', function(){
    console.log('Button 2 pushed');
})
answerBtn3.addEventListener('click', function(){
    console.log('Button 3 pushed');
})
answerBtn4.addEventListener('click', function(){
    console.log('Button 4 pushed');
})
submitBtn.addEventListener("click", storeHighscore);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearHighscores);

hideElements();
displayQ1(quizContent);

