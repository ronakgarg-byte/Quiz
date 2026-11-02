const quiz = [
  {
    id: 1,
    question: "India's Capital",
    answer: "Delhi",
    options: ["A:Tamil NAdu,B:punjab,C:Rajasthan,D:Delhi"],
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


const startBtn=document.querySelector("#startBtn");
const quizSlide=document.querySelector(".quizSlide");
const  firstpage=document.querySelector(".firstpage")







startBtn.addEventListener("click",(e)=>{
     e.preventDefault();
     firstpage.style.display='none';
     quizSlide.style.display='block';
    console.log("papa")
})