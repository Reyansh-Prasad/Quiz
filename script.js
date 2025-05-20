const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Who is the Greek god of the sea?",
    answers: [
      { text: "Poseidon", correct: true },
      { text: "Zeus", correct: false },
      { text: "Apollo", correct: false },
      { text: "Ares", correct: false }
    ]
  },
  {
    question: "What is 5 + 3?",
    answers: [
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "15", correct: false },
      { text: "7", correct: false }
    ]
  },
  {
    question: "What color do you get by mixing red and white?",
    answers: [
      { text: "Pink", correct: true },
      { text: "Purple", correct: false },
      { text: "Orange", correct: false },
      { text: "Brown", correct: false }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Kyoto", correct: false },
      { text: "Osaka", correct: false },
      { text: "Hiroshima", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false },
      { text: "Osmium", correct: false }
    ]
  }
];

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add('hide');
  currentQuestionIndex = 0;
  score = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  if(currentQuestionIndex < questions.length){
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showScore();
  }
}

function showQuestion(question) {
  questionEl.textContent = question.question;
  question.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.classList.add('btn');
    if (answer.correct) {
      btn.dataset.correct = true;
    }
    btn.addEventListener('click', selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextBtn.classList.add('hide');
  answerButtons.innerHTML = '';
  questionEl.style.color = 'white'; // reset color for question
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === 'true';
  if (correct) score++;

  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === 'true') {
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }
  });

  nextBtn.classList.remove('hide');
}

function showScore() {
  resetState();
  questionEl.textContent = `Quiz Over! Your score is ${score} out of ${questions.length}.`;
  startBtn.textContent = 'Restart Quiz';
  startBtn.classList.remove('hide');
}
