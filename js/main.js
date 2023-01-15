let quizData = [
    {
        question: '1. Javascript invention date?',
        a: 1992,
        b: 1993,
        c: 1995,
        d: 1996,
        correct: 1995
    },
    {
        question: '2. What is my Name',
        a: 'Karim',
        b: "Rahim",
        c: 'Shifat',
        d: "Arafath",
        correct: "Arafath"
    },
    {
        question: '3. Latest Javascript Version?',
        a: 'ES6',
        b: 'ES5',
        c: 'ES7',
        d: 'ES8',
        correct: 'ES6'
    },
    {
        question: '4. Css is a ____?',
        a: "Style language",
        b: "Markup Language",
        c: "Programming Language",
        d: "Database",
        correct: "Style language"
    },
]

let score = 0;
let currentQuiz = 0;
let question = document.getElementById('question');
let answer = document.querySelectorAll('.answer');
let aInp = document.getElementById('a');
let bInp = document.getElementById('b');
let cInp = document.getElementById('c');
let dInp = document.getElementById('d');
let a_text = document.getElementById('a-text');
let b_text = document.getElementById('b-text');
let c_text = document.getElementById('c-text');
let d_text = document.getElementById('d-text');

quizLoad();

function quizLoad(){
    document.getElementById('finished').style.display = 'none';
    if(currentQuiz < quizData.length){
        question.innerText = quizData[currentQuiz].question;
        aInp.value = quizData[currentQuiz].a;
        bInp.value = quizData[currentQuiz].b;
        cInp.value = quizData[currentQuiz].c;
        dInp.value = quizData[currentQuiz].d;
        a_text.innerText = quizData[currentQuiz].a;
        b_text.innerText = quizData[currentQuiz].b;
        c_text.innerText = quizData[currentQuiz].c;
        d_text.innerText = quizData[currentQuiz].d;
        document.getElementById('ifNotSelected').innerText = " ";
    }else{
        document.getElementById('row').style.display = 'none';
        document.getElementById('finished').style.display = 'block';
        document.getElementById('submit').style.display = 'none';
        document.getElementById('scoreShow').innerText = score;
        document.getElementById('quizDataLength').innerText = quizData.length;
    }
}


document.getElementById('submit').addEventListener('click', function(){
    let answer = document.getElementsByName('answer')
    var checkedRadio = Array.from(answer).find(
        (radio) => radio.checked
      );
    if(checkedRadio){
        if(currentQuiz < quizData.length){
            currentQuiz++;
            scoreIncrease();
            quizLoad();
            deselect();
        }else{
            console.log('finished')
        }
    }else{
        document.getElementById('ifNotSelected').innerText = 'Please select any answer';
    }
})

function scoreIncrease(){
    let answer = document.getElementsByName('answer')
    var checkedRadio = Array.from(answer).find(
        (radio) => radio.checked
      );
      if(checkedRadio && checkedRadio.value == quizData[currentQuiz-1].correct){
        console.log("You have selected : " + checkedRadio.value);
        score++;
        console.log(score)
      }else{
        console.log('false');
      }
}

function deselect(){
    let answer = document.getElementsByName('answer')
    var checkedRadio = Array.from(answer).find(
        (radio) => radio.checked
      );
    for (var i = 0; i < answer.length; i++) {
        if (answer[i].type == "radio") {
            answer[i].checked = false;
        }
    }
}

document.getElementById('reload').addEventListener('click', function(){
    location.reload();
})