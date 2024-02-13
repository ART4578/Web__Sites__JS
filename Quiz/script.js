const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn"); 
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

//start btn
startBtn.onclick = () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
};

//exit btn
exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
};

//continue btn
continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");

    showQuestions(0); //questions index number(0)
    questionCounter(1); //questions total number(1)
    headerScore(); //score    
};

//try again btn
tryAgainBtn.onclick = () => {
    quizBox.classList.add("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
};

//go home btn
goHomeBtn.onclick = () => {
    quizSection.classList.remove("active");
    nextBtn.classList.remove("active");
    resultBox.classList.remove("active");

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
};

//number
let questionCount = 0; //index number
let questionNumb = 1;  //total number
let userScore = 0; //score

const nextBtn = document.querySelector(".next-btn");

//next btn
nextBtn.onclick = () => {
    //index number(0) < questions length - 1 (5)
    if (questionCount < questions.length - 1) {
        questionCount++; //index number(0) = 0 + 1
        showQuestions(questionCount); //index number(1)

        questionNumb++; //total number(1) = 1 + 1
        questionCounter(questionNumb); //total number(2)

        nextBtn.classList.remove("active");
    } else { //index number(5) === questions length(5)
        showResultBox();
    }
};

const optionList = document.querySelector(".option-list");

//getting question and options from array.
function showQuestions(index) {
    const questionText = document.querySelector(".question-text");
    //question index(0) = question(1)
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    //options ` A, B, C, D
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    //options
    const option = document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
};

//option selected` A or B or C or D
function optionSelected(answer) {
    let userAnswer = answer.textContent; //question answer options
    let correctAnswer = questions[questionCount].answer; //the correct answer to the question
    let allOptions = optionList.children.length; //all options length

    //user answer(question answer options) == correct answer(the correct answer to the question)
    if (userAnswer == correctAnswer) {
        answer.classList.add("correct");
        userScore += 1; //score++
        headerScore();
    } else {
        answer.classList.add("incorrect");

        //if answer incorrect, auto selected correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute("class", "option correct");
            }
        }
    }

    //if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) { 
        optionList.children[i].classList.add("disabled");
    }

    nextBtn.classList.add("active");  
};

//question counter
function questionCounter(index) {
    const questionTotal = document.querySelector(".question-total");
    //total number(1) of questions length(5)
    questionTotal.textContent = `${index} of ${questions.length} Questions`; 
};

//score
function headerScore() {
    const headerScoreText = document.querySelector(".header-score");
    //header score html element = score(0) / question.length(5)
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
};

//result
function showResultBox() {
    quizBox.classList.remove("active");
    resultBox.classList.add("active");

    const scoreText = document.querySelector(".score-text");
    //score text html element = Your Score score(0) out of question.length(5)
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    //circular progress and progress value
    const circularProgress = document.querySelector(".circular-progress");
    const progressValue = document.querySelector(".progress-value");
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
};