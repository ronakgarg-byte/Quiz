const quiz = [
  {
    id: 1,
    question: "India's Capital",
    answer: "Delhi",
    options: ["Tamil Nadu", "Punjab", "Rajasthan", "Delhi"],
  },
  {
    id: 2,
    question: "India's Prime Minister",
    answer: "Narendra Modi",
    options: [
      "Narendra Modi",
      "Rahul Gandhi",
      "Draupati Murmu",
      "Amit Shah",
    ],
  },
  {
    id: 3,
    question: "India's National Animal",
    answer: "Tiger",
    options: ["Lion", "Tiger", "Camel", "Horse"],
  },
  {
    id: 4,
    question: "India's National Bird",
    answer: "Peacock",
    options: ["Chidiya", "Woodpecker", "Eagle", "Crow"],
  },
];

const startBtn = document.querySelector("#startBtn");
const quizSlide = document.querySelector(".quizSlide");
const firstpage = document.querySelector(".firstpage");
const nameInput = document.querySelector("#name");

let questionIndex = 0;
let timeLeft = 5;
let score = 0;
let questionInterval;
let hasAnswered = false;

function showQuestion() {
  const currentQuestion = quiz[questionIndex];
  hasAnswered = false;

  quizSlide.innerHTML = `
    <h1>${currentQuestion.question}</h1>
    <p id="countdown">Next question in: ${timeLeft}</p>
  `;

  currentQuestion.options.forEach((option) => {
    quizSlide.innerHTML += `
      <button type="button" class="answer-btn">${option}</button>
    `;
  });

  const answerButtons = quizSlide.querySelectorAll(".answer-btn");

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Ek question ka score sirf ek baar check hoga
      if (hasAnswered) return;
      hasAnswered = true;

      if (button.textContent.trim() === currentQuestion.answer.trim()) {
        score++;
      }

      // Option select hone ke baad saare buttons disable
      answerButtons.forEach((optionButton) => {
        optionButton.disabled = true;
      });
    });
  });
}

function showResult() {
  clearInterval(questionInterval);

  quizSlide.innerHTML = `
    <h1>Quiz completed!</h1>
    <p>Your score: ${score} / ${quiz.length}</p>
  `;
}

startBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Write your name first");
    return;
  }

  firstpage.style.display = "none";
  quizSlide.style.display = "flex";
  quizSlide.style.flexDirection = "column";

  questionIndex = 0;
  timeLeft = 5;
  score = 0;

  showQuestion();
  clearInterval(questionInterval);

  questionInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft > 0) {
      const countdown = quizSlide.querySelector("#countdown");
      countdown.textContent = `Next question in: ${timeLeft}`;
      return;
    }

    questionIndex++;

    if (questionIndex >= quiz.length) {
      showResult();
      return;
    }

    timeLeft = 5;
    showQuestion();
  }, 1000);
});