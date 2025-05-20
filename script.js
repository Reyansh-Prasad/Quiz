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
  showQuestion(questions[currentQuestionIndex]);
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
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === 'true';
  if (correct) score++;
  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === 'true') {
      btn.style.backgroundColor = 'green';
    } else {
      btn.style.backgroundColor = 'red';
    }
  });
  nextBtn.classList.remove('hide');
}
