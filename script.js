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
    question: "Who was the king of the gods and the ruler of Mount Olympus?",
    answers: [
      { text: "Aphrodite", correct: false },
      { text: "Hades", correct: false },
      { text: "Athena", correct: false },
      { text: "Zeus", correct: true }
    ]
  },
  {
    question: "Who was the goddess of love, beauty, and pleasure?",
    answers: [
      { text: "Ares", correct: false },
      { text: "Poseidon", correct: false },
      { text: "Aphrodite", correct: true },
      { text: "Hermes", correct: false }
    ]
  },
  {
    question: "Who was the god of the sea, earthquakes, and storms?",
    answers: [
      { text: "Hermes", correct: false },
      { text: "Poseidon", correct: true },
      { text: "Eros", correct: false },
      { text: "Hestia", correct: false }
    ]
  },
  {
    question: "Who was the goddess of wisdom, warfare, and crafts?",
    answers: [
      { text: "Ares", correct: false },
      { text: "Athena", correct: true },
      { text: "Demeter", correct: false },
      { text: "Hecate", correct: false }
    ]
  },
  {
    question: "Who was the god of the Underworld and the dead?",
    answers: [
      { text: "Hades", correct: true },
      { text: "Persephone", correct: false },
      { text: "Eros", correct: false },
      { text: "Zeus", correct: false }
    ]
  },
  {
    question: "Who was the messenger of the gods, known for his winged sandals?",
    answers: [
      { text: "Nike", correct: false },
      { text: "Apollo", correct: false },
      { text: "Iris", correct: false },
      { text: "Hermes", correct: true }
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
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false },
      { text: "Osmium", correct: false }
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
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false },
      { text: "Osmium", correct: false }
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
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false },
      { text: "Osmium", correct: false }
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
