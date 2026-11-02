const quiz = [
  {
    id: 1,
    question: "India's Capital",
    answer: "Delhi",
    options: ["A:Tamil Nadu","B:Punjab","C:Rajasthan","D:Delhi"],
  },
  {
    id: 2,
    question: "India's Prime Minister",
    answer: " Narendra Modi",
    options: [
      "A:Narendra Modi",
      "B:Rahul Gandhi",
      "C:Draupati Murmu",
      "D:Amit Shah",
    ],
  },
  {
    id: 3,
    question: "India's National Animal",
    answer: "Tiger",
    options: ["A:Lion", "B:Tiger", "C:Camel", "D:Horse"],
  },
  {
    id: 4,
    question: "India's National Bird",
    answer: "Peacock",
    options: ["A:Chidiya", "B:Woodpecker", "C:Eagle", "D:Crow"],
  },
];

const startBtn = document.querySelector("#startBtn");
const quizSlide = document.querySelector(".quizSlide");
const firstpage = document.querySelector(".firstpage");
const nameInput = document.querySelector("#name");
startBtn.addEventListener("click", (e) => {
  if (nameInput.value.trim() === "") {
    alert("Write your name first");
    return;
  } else {
    e.preventDefault();
    firstpage.style.display = "none";
    quizSlide.style.display = "block";
     const currentQuiz = quiz[0];

    quizSlide.innerHTML = `
        <h1>${currentQuiz.question}</h1>
    `;
    currentQuiz.options.forEach((option) => {
    quizSlide.innerHTML += `
        <button>${option}</button>
    `;
});
    
  }
});
