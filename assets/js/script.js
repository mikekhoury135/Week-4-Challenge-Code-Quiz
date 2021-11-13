// countdown
function timer() {

    var countdown = document.getElementById('countdown');
    countdown.innerText = 5;
    
    var timeInterval = setInterval(function() {

        if(countdown.innerText > 0) {
          countdown.innerText--;
        } else {
            clearInterval();
        }
      }, 1000);
}

timer();

function questions() {
    
    var questionText = document.getElementById('currentQuestion');
    var questionOptions = document.getElementsByClassName('question-options');
    var result = document.getElementById('answerResult');

    const question1 = {
        question:"What is not a commonly used data type?",
        option1:"Strings",
        option2:"Booleans",
        option3:"Alerts",
        option4:"Numbers",
    }
    const question2 = {
        question:"The condition of an if statement is enclosed in _____.",
        option1:"Quotes",
        option2:"Curly Brackets",
        option3:"Parenthesis",
        option4:"Square Brackets",
    }
    const question3 = {
        question:"Arrays can store which data types?",
        option1:"Strings",
        option2:"Booleans",
        option3:"Numbers",
        option4:"All of the Above",
    }
    const question4 = {
        question:"String values must be enclosed by which symbol?",
        option1:"Quotes",
        option2:"Parenthesis",
        option3:"Square Brackets",
        option4:"Curly Brackets",
    }

}



