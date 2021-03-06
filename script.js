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
var highscoreSect = document.querySelector("#view-highscores-page");
var askQuestion = document.getElementById("question");
var popUp = document.querySelector(".pop-up-verdict");
var displayVerdict = document.querySelector('.verdict');
var userInput = document.querySelector(".input");
var userInitials = document.querySelector(".stored-user-initials");
var viewHighscores = document.querySelector(".highscores");

// js exclusive variables
var timeStart = 90000;
var changeToSec = timeStart / 1000;

// each question saved in an object, answers nested inside question object, all stored in an array
var quizContent = [
    { 
        question: 'What year was the U.S. constitution written?', 
        answers: [
            '1. 1805',
            '2. 1686',
            '3. 1787',
            '4. 1792'
    ], 
        correctAnswer: 3
},

    {
        question: 'Who was the first person to sign the Declaration of Independence?', 
        answers: [
            '1. Thomas Jefferson',
            '2. John Hancock',
            '3. Benjamin Franklin',
            '4. George Washington'
    ], 
        correctAnswer: 2
},
    
    {
        question: 'Who was the fist president to live in the white house? ', 
        answers: [
            '1. James Garfield',
            '2. Abraham Lincoln',
            '3. Andrew Jackson',
            '4. John Adams'
    ], 
        correctAnswer: 4
},

    {
        question: 'How many amendments does the constituition currently have?', 
        answers: [
            '1. 24',
            '2. 31',
            '3. 27',
            '4. 19'
    ], 
        correctAnswer: 3
},

    {   
        question: 'Who was the youngest president to be elected?', 
        answers: [
            '1. Calvin Coolidge',
            '2. Barak Obama',
            '3. Ulysses S. Grant',
            '4. John F. Kennedy'
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
        timer.textContent = changeToSec;

        if (changeToSec === 0) {
            clearInterval(quizTime);
        }

    }, 1000)

    beginHere.style.visibility = 'hidden';
    beginQuestions.style.visibility = 'initial';
    viewHighscores.style.visibility = 'hidden';
}

// show the first question in the object and loop through the answers
function displayQ1(quizContent){ 

    askQuestion.textContent = quizContent[0].question;

    for (var i = 0; i < quizContent[0].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[0].answers[0];
        answerBtn2.textContent = quizContent[0].answers[1];
        answerBtn3.textContent = quizContent[0].answers[2];
        answerBtn4.textContent = quizContent[0].answers[3];
    }

    // if user clicks the right answer, moves to next question--no penalties; otherwise it moves to next question and deducts 5 second "points"
    document.querySelector('.list').addEventListener('click', function(event, incorrectPenalty){
        if (event.target.matches(".answer-choice2")) {
            correctAnswer();
            displayQ2(quizContent);

        } else {
            incorrectAnswer(incorrectPenalty);
            displayQ2(quizContent);
        }
    })
  
}

// show the second question in the object and loop through the answers
function displayQ2(quizContent){ 
    askQuestion.textContent = quizContent[1].question;

    for (var i = 0; i < quizContent[0].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[1].answers[0];
        answerBtn2.textContent = quizContent[1].answers[1];
        answerBtn3.textContent = quizContent[1].answers[2];
        answerBtn4.textContent = quizContent[1].answers[3];
    }


// if user clicks the right answer, moves to next question--no penalties; otherwise it moves to next question and deducts 5 second "points"
    document.querySelector('.list').addEventListener('click', function(event, incorrectPenalty){
        if (event.target.matches(".answer-choice1")) {
            correctAnswer();
            displayQ4(quizContent);
        } else {
            incorrectAnswer(incorrectPenalty);
            displayQ3(quizContent);
        }
    })
}


// show the third question in the object and loop through the answers
function displayQ3(quizContent){ 
    askQuestion.textContent = quizContent[2].question;

    for (var i = 0; i < quizContent[2].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[2].answers[0];
        answerBtn2.textContent = quizContent[2].answers[1];
        answerBtn3.textContent = quizContent[2].answers[2];
        answerBtn4.textContent = quizContent[2].answers[3];
    }

    // if user clicks the right answer, moves to next question--no penalties; otherwise it moves to next question and deducts 5 second "points"
    document.querySelector('.list').addEventListener('click', function(event, incorrectPenalty){
        if (event.target.matches(".answer-choice3")) {
            correctAnswer();
            displayQ4(quizContent);
        } else {
            incorrectAnswer(incorrectPenalty);
            displayQ4(quizContent);
        }
    })
    popUp.style.visibility = 'hidden';
}


// show the fourth question in the object and loop through the answers
function displayQ4(quizContent){ 
    askQuestion.textContent = quizContent[3].question;

    for (var i = 0; i < quizContent[3].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[3].answers[0];
        answerBtn2.textContent = quizContent[3].answers[1];
        answerBtn3.textContent = quizContent[3].answers[2];
        answerBtn4.textContent = quizContent[3].answers[3];
    }

// if user clicks the right answer, moves to next question--no penalties; otherwise it moves to next question and deducts 5 second "points"
    document.querySelector('.list').addEventListener('click', function(event, incorrectPenalty){
        if (event.target.matches(".answer-choice2")) {
            correctAnswer();
            displayQ5(quizContent);
        } else {
            incorrectAnswer(incorrectPenalty);
            displayQ5(quizContent);
        }
    })
}

// show the fourth question in the object and loop through the answers
function displayQ5(quizContent, changeToSec){ 
    askQuestion.textContent = quizContent[4].question;

    for (var i = 0; i < quizContent[4].answers.length - 1; i++) {
        answerBtn1.textContent = quizContent[4].answers[0];
        answerBtn2.textContent = quizContent[4].answers[1];
        answerBtn3.textContent = quizContent[4].answers[2];
        answerBtn4.textContent = quizContent[4].answers[3];
    }

// if user clicks the right answer, moves to next question--no penalties; otherwise it moves to next question and deducts 5 second "points"
    document.querySelector('.list').addEventListener('click', function(event, incorrectPenalty, quizTime){
        if (event.target.matches(".answer-choice3")){
            correctAnswer();
            storeHighscore(event);
            timer.style.display = 'hidden';
            localStorage.setItem('stopClock', changeToSec);

        } else {
            incorrectAnswer(incorrectPenalty);
            storeHighscore(event);
            timer.style.display = 'hidden';
            localStorage.setItem('stopClock', changeToSec);
            if (changeToSec === 0) {
                clearInterval(quizTime);
            }
        }  
    })

    if (parseInt(timer.innerHTML) === 0) {
        clearInterval(quizTime);
        changeToSec = 0;
    }
}


// stores highscore in highscores.html
function storeHighscore(event){
    event.preventDefault();

    userEntry.style.visibility = 'initial';
    beginQuestions.style.display = 'none';
    timer.style.visibility = 'hidden';
    viewHighscores.style.visibility = 'hidden';

    document.querySelector('.final-score').textContent = 'Your final score is ' + changeToSec;

    // when submit button is clicked, value of changeToSec is saved and displayed with user's inputted initials
    submitBtn.addEventListener("click", function(event){
        event.preventDefault();
        userEntry.style.visibility = 'hidden';
        highscoreSect.style.visibility = 'visible';
        localStorage.setItem('stopClock', changeToSec);
        localStorage.setItem(userInput.value, localStorage.getItem('stopClock'));
        userInitials.textContent = userInput.value + ' ------- score: ' + localStorage.getItem('stopClock');
    });
}


// takes back to homepage when go back button is clicked
function goBack() {
    beginHere.style.visibility = 'visible';
    highscoreSect.style.visibility = 'hidden';
    viewHighscores.style.visibility = 'visible';
}
console.log(goBack);

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

function incorrectAnswer(incorrectPenalty){
    displayVerdict.textContent = 'Incorrect! That\'s -10 time points :(';
    popUp.style.visibility = 'initial';
    var incorrectPenalty = parseInt(timer.innerHTML);
    timer.textContent = incorrectPenalty -= 10;
}

// when user clicks on the highscores link, it shows them the stored data 
document.querySelector('#highscores-link').addEventListener("click", function(event){
    event.preventDefault();
    beginHere.style.visibility = 'hidden';
    timer.style.visibility = 'hidden';
    highscoreSect.style.visibility = 'visible';
    viewHighscores.style.visibility = 'hidden';
});


// event listeners and function calls
startBtn.addEventListener("click", startQuiz);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearHighscores);

hideElements();
