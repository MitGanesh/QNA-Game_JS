// console.log("QNA Game");

const startBtn = document.getElementById('start-btn');
const nextbtn = document.getElementById('next-btn');

const qestSection = document.getElementById('qest-sec');
const qestElement = document.getElementById('question');
const ansBtns = document.getElementById('answer-btn');

startBtn.addEventListener('click',startGame);

let suffelQuestions;
let currIndex;

function startGame() {
    console.log("Game Started!");
    startBtn.classList.add('hide');

    qestSection.classList.remove('hide');
    // nextbtn.classList.remove('hide');
    
    suffelQuestions = question.sort(()=> Math.random() - 0.5);
    currIndex = 0;
    setNextQest();
} 

function setNextQest() {
    showQuestion(suffelQuestions[currIndex]);
}

function showQuestion(questionSet) {
    qestElement.innerText = questionSet.question;
    ansBtns.children[0].innerText = questionSet.ans1;
    ansBtns.children[1].innerText = questionSet.ans2;
    ansBtns.children[2].innerText = questionSet.ans3;
    ansBtns.children[3].innerText = questionSet.ans4;
}

function selectAnswer() {
    
}


const question = [
    {
        question : "What is most used framwork for frontend devlopement ?",
        ans1 : "Java",
        ans2 : "JavaScript",
        ans3 : "React Native",
        ans4 : "ReactJs",
    },
    {
        question : "Most popular tecnolohy which use for Web Devlopment?",
        ans1 : "Java",
        ans2 : "JavaScript",
        ans3 : "c++",
        ans4 : "Python",
    },
    {
        question : "Most used framwork for CSS is ?",
        ans1 : "Ruby",
        ans2 : "Vue Js",
        ans3 : "Bootstarp",
        ans4 : "Angular",
    },
    {
        question : "What langauge is used in web devlopment to make dynamic ?",
        ans1 : "Tailwind",
        ans2 : "JavaScript",
        ans3 : "CSS",
        ans4 : "HTML",
    }
]