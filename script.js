"use strict";
const question = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Blue Whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: "London",
        correct: false,
      },
      {
        text: "Berlin",
        correct: false,
      },
      {
        text: "Madrid",
        correct: false,
      },
      {
        text: "Paris",
        correct: true,
      },
    ],
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      {
        text: "Benjamin Franklin",
        correct: false,
      },
      {
        text: "Thomas Jefferson",
        correct: false,
      },
      {
        text: "George Washington",
        correct: true,
      },
      {
        text: "Abraham Lincoln",
        correct: false,
      },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      {
        text: "O2",
        correct: false,
      },
      {
        text: "H2O",
        correct: true,
      },
      {
        text: "CO2",
        correct: false,
      },
      {
        text: "NaCl",
        correct: false,
      },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      {
        text: "Charles Dickens",
        correct: false,
      },
      {
        text: "Jane Austen",
        correct: false,
      },
      {
        text: "William Shakespeare",
        correct: true,
      },
      {
        text: "F. Scott Fitzgerald",
        correct: false,
      },
    ],
  },
  {
    question: "Which sport is associated with Wimbledon Championships?",
    answers: [
      {
        text: "Basketball",
        correct: false,
      },
      {
        text: "Tennis",
        correct: true,
      },
      {
        text: "Golf",
        correct: false,
      },
      {
        text: "Soccer",
        correct: false,
      },
    ],
  },
  {
    question: "Who is known as the 'King of Pop'?",
    answers: [
      {
        text: "Justin Bieber",
        correct: false,
      },
      {
        text: "Michael Jackson",
        correct: true,
      },
      {
        text: "Madonna",
        correct: false,
      },
      {
        text: "Beyoncé",
        correct: false,
      },
    ],
  },
  {
    question: "What is the value of π (pi) to two decimal places?",
    answers: [
      {
        text: "3.14",
        correct: true,
      },
      {
        text: "2.71",
        correct: false,
      },
      {
        text: "3.16",
        correct: false,
      },
      {
        text: "3.21",
        correct: false,
      },
    ],
  },
  {
    question: "Which movie won the Academy Award for Best Picture in 1994?",
    answers: [
      {
        text: "Titanic",
        correct: false,
      },
      {
        text: "Forrest Gump",
        correct: true,
      },
      {
        text: "The Shawshank Redemption",
        correct: false,
      },
      {
        text: "Braveheart",
        correct: false,
      },
    ],
  },
  {
    question: "What does CPU stand for in the context of computers?",
    answers: [
      {
        text: "Central Processing Unit",
        correct: true,
      },
      {
        text: "Computer Programming Unit",
        correct: false,
      },
      {
        text: "Central Power Unit",
        correct: false,
      },
      {
        text: "Computer Processing Unit",
        correct: false,
      },
    ],
  },
];

const questionEl = document.querySelector("#question");
const answerBtns = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");
let currentQuestionIndex = 0;
let score = 0;

const startQuiz = function () {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const resetState = function () {
  nextBtn.style.display = "none";
  answerBtns.innerHTML = "";
};

const showQuestion = function () {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(({ text, correct }) => {
    answerBtns.insertAdjacentHTML(
      "beforeend",
      `<button class="btn" ${
        correct ? "data-correct=" + correct : ""
      }>${text}</button>`
    );
  });
};

const showScore = () => {
  resetState();
  questionEl.innerHTML = `You Scored ${score} out of ${question.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
};

answerBtns.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");
  if (!clicked) return;
  if (clicked.dataset.correct) {
    clicked.classList.add("correct");
    score++;
  } else {
    clicked.classList.add("incorrect");
    answerBtns.childNodes.forEach((btn) => {
      if (btn.dataset.correct) {
        btn.classList.add("correct");
      }
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
    });
  }
  nextBtn.style.display = "block";
});

nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else if (currentQuestionIndex === question.length) {
    showScore();
  } else {
    startQuiz();
  }
});
startQuiz();
