 function mute(){
     //alert("helooooo")
              if(document.getElementById('background_audio').muted == false){
                // alert("false") 
                document.getElementById('background_audio').muted = true;
              } else {
                 // alert("true") 
                document.getElementById('background_audio').muted = false;
              }

    }
let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");

function setAdditionGame() {
    
    answerform.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerform.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerform.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer() {
    
    let gametype = answerform.getAttribute("data-gametype");
    //document.getElementById("alert").innerHTML = "<h2></h2>";
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        
        document.getElementById("alert").innerHTML = "<h2>Hey! You got it right :)</h2>";
        setTimeout(function() {
	document.getElementById("alert").innerHTML = ""
}, 3000);
        score++;
    }
    else {
        
        document.getElementById("alert").innerHTML = "<h2>Awww...wrong this time :(</h2>";
        setTimeout(function() {
	document.getElementById("alert").innerHTML = ""
}, 3000);
            
        }
    answerform["answer"].value = "";
    scorebox.textContent = score;
    if (gametype == "addition") {
        additionQuiz();
    }
    else if (gametype == "subtraction") {
        subtractionQuiz();
    }
    else if (gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;
}

function additionQuiz() {

    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
}

function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num1 < num2) {
        let num3 = num1;
        num1 = num2;
        num2 = num3;
    }
    questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    answerform["rightAnswer"].value = (num1 - num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    answerform["rightAnswer"].value = (num1 * num2);
}
additionQuiz();
