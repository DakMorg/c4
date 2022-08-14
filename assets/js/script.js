var questionArray = [
 "A variable in the global scope is availible to the entire program",
 "flex-wrap: allows items to wrap onto new lines as needed",
 "// can be used to make comments in javascript", 
 "!-- --! can be used to create comments in HTML",
 "console.log() is used to print to the website's console",
 "it is good practice to create a custom property for colors used repeatedly",
 "a tags are used or hyperlinks",
 "the header iis at the top of the page",
 "the footer is at the top oof the page",
 "although this quiz may be rough around the edges, it deserves a passing grade because of the sheer amount of stress I experienced trying to get this thing to work.",
 quizOver
];
var questionCounter = 1;
var finalScore = 10

function startQuiz() {
    $('#questionContent').html(questionArray[0]);
}

function nextQuestion() {
    $('#questionContent').html(questionArray[questionCounter]);
    questionCounter++
    console.log("toggled next question")
    return;
}

function answerTrue() {
    nextQuestion();
}

function answerFalse() {
    finalScore--
    console.log("wrong answer -10%")
    nextQuestion();
}

function quizOver() {
    $('#questionContent').html("The quiz is over! your score is " + finalScore * 10 + "%");
}