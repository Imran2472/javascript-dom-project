var Username = document.querySelector("#name");
var email = document.querySelector("#email");
var rollNum = document.querySelector("#roll");
var institute = document.querySelector("#institute");
var personal_details = document.querySelector(".personal-details");
var quiz_body = document.querySelector(".quiz-body");
var boxcontainer = document.querySelector(".box-container");
var result = document.querySelector(".result");
var percantagesShow = document.querySelector(".percantages");
var ScoreShow = document.getElementById("score");
var show_question = document.querySelector(".show-question");
var failsShow = document.querySelector(".failsShow");
var nameShow = document.querySelector("#name-show");
var EmailShow = document.querySelector("#email-show");
var RollShow = document.querySelector("#roll-show");
var instituteShow = document.querySelector("#institute-show");
var submitBtn = document.querySelector(".nextbtn");
var submitBtnBack = document.querySelector("#submitBtnBack");
var ProgressStart = 0;
var PrgressEndVal = 0;
var Speed = 50;
let selectedAnswer = null;

function GetValues() {
  var NameValue = Username.value;
  var EmailValue = email.value;
  var rollNumValue = rollNum.value;
  var instituteValue = institute.value;
  if (!NameValue || !EmailValue || !rollNumValue || !instituteValue) {
    
    Toastify({
      text: "Please fill in all the fields",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "center",
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #ee7752,#e73c7e)",
      },
    }).showToast();
    return;
  }
  personal_details.classList.add("hidden");
  quiz_body.classList.remove("hidden");
  nameShow.textContent = NameValue;
  EmailShow.textContent = EmailValue;
  RollShow.textContent = rollNumValue;
  instituteShow.textContent = instituteValue;
  RenderQuestion();
}

var questions = [
  {
    question: "what does html stand for ?",
    answer: "C. hyper text markup language",
    option1: "A. hyper type multi language",
    option2: "B. hyper text multiple language",
    option3: "C. hyper text markup language",
    option4: "D. home text multi language",
  },
  {
    question: "what does css stand for ?",
    answer: "A. cascading style sheet",
    option1: "A. cascading style sheet",
    option2: "B. cute style sheet",
    option3: "C. computer style sheet",
    option4: "D. imrancode style sheet",
  },
  {
    question: "what does php stand for ?",
    answer: "A. hypertext preprocessor",
    option1: "A. hypertext preprocessor",
    option2: "B. home text programing",
    option3: "C. hypertext programing",
    option4: "D. programing hypertext preprocessor",
  },
  {
    question: "what does sql stand for ?",
    answer: "D. structured query language",
    option1: "A. strength query language",
    option2: "B. stylesheet query langauge",
    option3: "C. science query languagee",
    option4: "D. structured query language",
  },
  {
    question: "what does xml stand for ?",
    answer: "D. extensible markup language",
    option1: "A. excellent multiple language",
    option2: "B. explore multiple language",
    option3: "C. extra mark  language",
    option4: "D. extensible markup language",
  },

  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    option1: "A. var x = 10;",
    option2: "B. variable x = 10;",
    option3: "C. x := 10;",
    option4: "D. declare x = 10;",
    answer: "A. var x = 10;",
  },
  {
    question: "Which of the following is a Python data type?",
    option1: "A. list",
    option2: "B. array",
    option3: "C. set",
    option4: "D. All of the above",
    answer: "D. All of the above",
  },
  {
    question: "In C++, which of the following is used to include a library?",
    option1: "A. #include <library>",
    option2: "B. import library",
    option3: "C. using library;",
    option4: "D. include library;",
    answer: "A. #include <library>",
  },
  {
    question: "Which CSS property controls the text size?",
    option1: "A. font-size",
    option2: "B. text-size",
    option3: "C. font-style",
    option4: "D. text-style",
    answer: "A. font-size",
  },
  {
    question: "What does HTML stand for?",
    option1: "A. Hyper Text Markup Language",
    option2: "B. High-Level Text Markup Language",
    option3: "C. Hyperlink and Text Markup Language",
    option4: "D. Hyper Text Machine Language",
    answer: "A. Hyper Text Markup Language",
  },

  {
    question: "Which property is used to change the background color in CSS?",
    option1: "A. Both B and D",
    option2: "B. background-color",
    option3: "C. color",
    option4: "D. background",
    answer: "A. Both B and D",
  },
  {
    question: "How do you select an element with the id 'header' in CSS?",
    option1: "A. #header",
    option2: "B. .header",
    option3: "C. header",
    option4: "D. *header",
    answer: "A. #header",
  },
  {
    question: "Which CSS property controls the text size?",
    option1: "A. font-size",
    option2: "B. text-size",
    option3: "C. font-style",
    option4: "D. text-font",
    answer: "A. font-size",
  },
  {
    question:
      "What is the correct CSS syntax to change the font of an element?",
    option1: "A. font-family: Arial;",
    option2: "B. font: Arial;",
    option3: "C. font-style: Arial;",
    option4: "D. text-font: Arial;",
    answer: "A. font-family: Arial;",
  },

  {
    question: "What is the correct syntax to create a function in JavaScript?",
    option1: "A. function myFunction()",
    option2: "B. function:myFunction()",
    option3: "C. function = myFunction()",
    option4: "D. myFunction() = function",
    answer: "A. function myFunction()",
  },
  {
    question:
      "Which of the following is used to declare a variable in JavaScript?",
    option1: "A. var",
    option2: "B. let",
    option3: "C. const",
    option4: "D. All of the above",
    answer: "D. All of the above",
  },
  {
    question: "What is the output of 'typeof NaN' in JavaScript?",
    option1: "A. number",
    option2: "B. NaN",
    option3: "C. undefined",
    option4: "D. object",
    answer: "A. number",
  },
  {
    question: "How can you add a comment in JavaScript?",
    option1: "A. // This is a comment",
    option2: "B. <!-- This is a comment -->",
    option3: "C. ' This is a comment",
    option4: "D. # This is a comment",
    answer: "A. // This is a comment",
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    option1: "A. JSON.parse()",
    option2: "B. JSON.stringify()",
    option3: "C. JSON.convert()",
    option4: "D. JSON.object()",
    answer: "A. JSON.parse()",
  },
  {
    question: "What will the following code return: Boolean(2 + 2 === 4)?",
    option1: "A. true",
    option2: "B. false",
    option3: "C. undefined",
    option4: "C. NaN",
    answer: "A. true",
  },
];

var currentQuestion = 0;
var Score = 0;
var Question = document.querySelector(".question");
var options = document.querySelectorAll(".option");
var question_count = document.querySelector(".question-count");
var score = document.querySelector(".score");
function RenderQuestion() {
  Question.textContent = questions[currentQuestion].question;
  options[0].textContent = questions[currentQuestion].option1;
  options[1].textContent = questions[currentQuestion].option2;
  options[2].textContent = questions[currentQuestion].option3;
  options[3].textContent = questions[currentQuestion].option4;
  var QuesLength = questions.length;
  question_count.textContent = `Question ${
    currentQuestion + 1
  } of ${QuesLength}`;
}

function RestartQuiz() {
  currentQuestion = 0;
  Score = 0;
  result.classList.add("hidden");
  quiz_body.classList.add("hidden");
  personal_details.classList.remove("hidden");
  options.forEach((data) => {
    data.classList.remove("pointer-event-none");
    data.classList.remove(
      "bg-green-200",
      "border-green-400",
      "hover:bg-green-200"
    );
    data.classList.remove("bg-red-200", "border-red-400", "hover:bg-red-200");
  });
  ProgressStart = 0;
  var QuesLength = questions.length;
  question_count.textContent = `Question ${
    currentQuestion + 1
  } of ${QuesLength}`;
  score.innerHTML = Score;
  nameShow.textContent = "";
  EmailShow.textContent = "";
  RollShow.textContent = "";
  instituteShow.textContent = "";
  boxcontainer.style.background = `conic-gradient(#2664EB 3.6deg, #ededed 0deg)`;
  Username.value = "";
  email.value = "";
  rollNum.value = "";
  institute.value = "";
}
var check = true;
function CheckAnswer(ele) {
  if(questions.length > 1){
    submitBtnBack.classList.remove("pointer-events-none","bg-blue-200")
    submitBtnBack.classList.add("bg-blue-500")
  }
  var CheckAnswer = ele.textContent == questions[currentQuestion].answer;
  if (CheckAnswer) {
    Score++;
    score.innerHTML = Score;
    ele.classList.add(
      "bg-green-200",
      "border",
      "border-green-400",
      "hover:bg-green-200"
    );
    ele.setAttribute("data-answer", "correct");
    submitBtn.classList.add("bg-blue-500")
    submitBtn.classList.remove("pointer-events-none")
    options.forEach((data) => {
      data.classList.add("pointer-event-none");
    });
  } else if (!CheckAnswer) {
    ele.classList.add(
      "bg-red-200",
      "border",
      "border-red-400",
      "hover:bg-red-200"
    );
    ele.setAttribute("data-answer", "wrong");
    submitBtn.classList.add("bg-blue-500")
    submitBtn.classList.remove("pointer-events-none")
    options.forEach((data) => {
      data.classList.add("pointer-event-none");
      if (data.innerHTML == questions[currentQuestion].answer) {
        data.classList.add(
          "bg-green-200",
          "border",
          "border-green-400",
          "hover:bg-green-200"
        );
      }
    });
  }
}
function GetAnswer() {
  options.forEach((data) => {
    data.classList.remove("pointer-event-none");
    data.classList.remove(
      "bg-green-200",
      "border-green-400",
      "hover:bg-green-200"
    );
    data.classList.remove("bg-red-200", "border-red-400", "hover:bg-red-200");
  });
  currentQuestion++;
  if (currentQuestion == questions.length) {
    quiz_body.classList.add("hidden");
    currentQuestion = 0;
    var QuestionLength = questions.length;
    var Percantages = (Score / QuestionLength) * 100;

    if (Percantages < 50) {
      failsShow.innerHTML = "You Failed";
    } else {
      failsShow.innerHTML = "Congratulations You Passed";
    }

    result.classList.remove("hidden");
    var StartProgress = setInterval(() => {
      ProgressStart++;
      percantagesShow.innerHTML = `${ProgressStart}%`;
      ScoreShow.innerHTML = `${Score}`;
      show_question.innerHTML = `Total Questions : ${questions.length}`;
      boxcontainer.style.background = `conic-gradient(#2664EB ${
        ProgressStart * 3.6
      }deg, #ededed 0deg)`;
      if (ProgressStart >= Percantages) {
        clearInterval(StartProgress);
      }
    }, Speed);


  const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function Firework(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.exploded = false;
    this.particles = [];

    this.update = function() {
        if (!this.exploded) {
            this.y -= 5; // Move upwards
            if (this.y < canvas.height / 2) {
                this.explode();
            }
        } else {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
            }
        }
    };

    this.explode = function() {
        this.exploded = true;
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    };

    this.draw = function() {
        if (!this.exploded) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].draw();
            }
        }
    };
}

function Particle(x, y, color) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 2 + 1;
  this.color = color;
  this.speed = Math.random() * 10 + 2;
  console.log(this.speed)
  this.angle = Math.random() * Math.PI * 2;
  this.life = 500

    this.update = function() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life--;
    };

    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };
}

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    fireworks.push(new Firework(x, y));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].draw();
        if (fireworks[i].exploded && fireworks[i].particles.every(p => p.life <= 0)) {
            fireworks.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}


function userWins() {
    for (let i = 0; i < 10; i++) {
        createFirework();
    }
}


userWins();
animate();


setTimeout(() => {
    fireworks = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, 300000); 
  }
  RenderQuestion();
  submitBtn.classList.remove("bg-blue-500")
  submitBtn.classList.add("pointer-events-none")
}

function BackButtonfun() {
  currentQuestion--;
  if (currentQuestion < 0) {
    currentQuestion = 0;
    return;
  }
  RenderQuestion();
}
