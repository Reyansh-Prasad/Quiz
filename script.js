const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Who was the legendary king of Mycenae, whose capture prompted the Trojan War?",
    answers: [
      { text: "Perseus", correct: false },
      { text: "Helen", correct: false },
      { text: "Menelaus ", correct: true },
      { text: "Paris", correct: false }
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
    question: "What creature was a monstrous serpent with multiple heads, slain by Heracles?",
    answers: [
      { text: "Python", correct: false },
      { text: "Hydra", correct: true },
      { text: "Cobra", correct: false },
      { text: "Snake", correct: false }
    ]
  },
  {
    question: "Who was the winged horse that was ridden by heroes in Greek mythology?",
    answers: [
      { text: "Arion", correct: false },
      { text: "Xanthus and Balius", correct: false },
      { text: "Pegasus", correct: true },
      { text: "Hippocampi", correct: false }
    ]
  },
  {
    question: "Who was the greatest hero of the Trojan War, known for his invulnerability except for his heel?",
    answers: [
      { text: "Paris", correct: false },
      { text: "Odysseus", correct: false },
      { text: "Hector", correct: false },
      { text: "Achilles", correct: true }
    ]
  },
  {
    question: "What was the name of the monstrous Gorgon whose gaze could turn people to stone?",
    answers: [
      { text: "Medusa", correct: true },
      { text: "Chrysaor", correct: false },
      { text: "Stheno", correct: false },
      { text: "Euryale", correct: false }
    ]
  },
  {
    question: "Who was the wife of Zeus, the queen of the gods, and the goddess of marriage?",
    answers: [
      { text: "Metis", correct: false },
      { text: "Hera", correct: true },
      { text: "Themis", correct: false },
      { text: "Leto", correct: false }
    ]
  },
  {
    question: "Who was the titan who was chained and tortured for bringing fire to mortals?",
    answers: [
      { text: "Prometheus", correct: true },
      { text: "Krios", correct: false },
      { text: "Atlas", correct: false },
      { text: "Iapetus", correct: false }
    ]
  },
  {
    question: "Who was the Titan who ruled over the cosmos and swallowed his children to prevent them from overthrowing him?",
    answers: [
      { text: "Oceanus", correct: false },
      { text: "Ouranos", correct: false },
      { text: "Kronos", correct: true },
      { text: "Hyperion", correct: false }
    ]
  },
  {
    question: "Who was the goddess of the hunt, wild animals, and the moon?",
    answers: [
      { text: "Hera", correct: false },
      { text: "Demeter", correct: false },
      { text: "Hestia", correct: false },
      { text: "Artemis", correct: true }
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
