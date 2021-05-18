//////////// VARS:

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback")

var questionsEl = document.getElementById("questions");
var questionTitle = questionsEl.getElementsByTagName("h2");

var userInfoEl = document.getElementById("user-info");
// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  var startScreenEl = document.querySelector("#start-screen");
  startScreenEl.style.display = "none";
  // un-hide questions section
  questionsEl.classList.remove("hide");

  // start timer
  // Set interval to call clockTick every second
  timerId = setInterval(clockTick, 1000);

  getQuestion();
}

function getQuestion() {
  var questionsEl = document.getElementById("questions");
  var questionTitle = document.getElementById("question-title");
  
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  questionTitle.textContent = currentQuestion.title;
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choices = currentQuestion.choices[i];
    // create new button for each choice
    var choiceBtn = document.createElement("button");
    
    // add answer data attributes
    choiceBtn.dataset.answer = choices;
    // text
    choiceBtn.textContent = choices;
    // attach click event listener to each choice
    choiceBtn.addEventListener('click', questionClick)
    
    // display on the page
    choicesEl.appendChild(choiceBtn);
  }

}
function questionClick() {
  // check if user guessed wrong
  var isCorrect = this.dataset.answer === questions[currentQuestionIndex].answer;
  if (!isCorrect){    
    
    // penalize time
    time -= 5;
    // display new time on page
    // ✅
    // play "wrong" sound effect
    sfxWrong.play();
    
    userInfoEl.textContent = "Sorry, Wrong answer, please try again!"
  
  } 
  else {
    
    // play "right" sound effect
    sfxRight.play();
    
  userInfoEl.textContent = "correct!!";

  }

    // flash right/wrong feedback on page for half a second 
    console.log(userInfoEl)
    userInfoEl.classList.add('show-info');
    // move to next question
  
  
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion


function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time
  time-- ;

  // assign the time var to time span textContent
  timerEl.textContent = time

  // check if user ran out of time
  if(time <= 0){
    clearInterval(timerId);
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}
//////// FUNCTION CALL

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
}