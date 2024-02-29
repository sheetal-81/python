// script.js

let questions = [
	{
		prompt: `What is Python?`,
		options: [
		    
		    "A database management system",
		    "A web browser",
		    "A high-level programming language",
		    "An operating system",
		],
		answer: "A high-level programming language",
	    },
	    {
		prompt: `Which of the following statements is true about Python?`,
		options: [
		    "Python is dynamically typed",
		    "Python is statically typed",
		    "Python does not support functions",
		    "Python is not case-sensitive",
		],
		answer: "Python is dynamically typed",
	    },
	    {
		prompt: `What is the purpose of the "print" function in Python?`,
		options: [
		    
		    "To read user input",
		    "To perform mathematical calculations",
		    "To define functions",
		    "To display output",
		],
		answer: "To display output",
	    },
	    {
		prompt: `How do you define a variable in Python?`,
		options: [
		    "variableName = value",
		    "value = variableName",
		    "variableName",
		    "value",
		],
		answer: "variableName = value",
	    },
	    {
		prompt: `Which of the following is NOT a valid data type in Python?`,
		options: [
		    
		    "string",
		    "array",
		    "float",
		    "boolean",
		],
		answer: "array",
	    },
	    {
		prompt: `What is the purpose of the "if" statement in Python?`,
		options: [
		    "To make decisions based on conditions",
		    "To loop over a sequence of elements",
		    "To define functions",
		    "To perform mathematical calculations",
		],
		answer: "To make decisions based on conditions",
	    },
	    {
		prompt: `What is the purpose of the "for" loop in Python?`,
		options: [
		    "To iterate over a sequence of elements",
		    "To make decisions based on conditions",
		    "To define functions",
		    "To perform mathematical calculations",
		],
		answer: "To iterate over a sequence of elements",
	    },
	    {
		prompt: `What is the purpose of the "while" loop in Python?`,
		options: [
		    
		    "To make decisions based on conditions",
		    "To define functions",
		    "To repeatedly execute a block of code while a condition is true",
		    "To perform mathematical calculations",
		],
		answer: "To repeatedly execute a block of code while a condition is true",
	    },
	    {
		prompt: `What is the purpose of the "def" keyword in Python?`,
		options: [
		    "To define a function",
		    "To import modules",
		    "To perform mathematical calculations",
		    "To make decisions based on conditions",
		],
		answer: "To define a function",
	    },
	    {
		prompt: `What is the purpose of the "return" statement in Python functions?`,
		options: [
		    
		    "To exit the function and return control to the caller",
		    "To declare a new variable",
		    "To define a function",
		    "To specify the value to be returned by the function",
		],
		answer: "To specify the value to be returned by the function",
	    },
	    {
		prompt: `What is the purpose of the "import" statement in Python?`,
		options: [
		    "To import modules",
		    "To define functions",
		    "To perform mathematical calculations",
		    "To make decisions based on conditions",
		],
		answer: "To import modules",
	    },
	    {
		prompt: `What is the purpose of the "random" module in Python?`,
		options: [
		   
		    "To sort lists",
		    "To perform mathematical calculations",
		    "To generate random numbers",
		    "To make decisions based on conditions",
		],
		answer: "To generate random numbers",
	    },
	    {
		prompt: `What is the purpose of the "open" function in Python?`,
		options: [
		    "To open a file",
		    "To create a new variable",
		    "To define functions",
		    "To perform mathematical calculations",
		],
		answer: "To open a file",
	    },
	    {
		prompt: `What is the purpose of the "read" method in Python file objects?`,
		options: [
		    "To read the contents of a file",
		    "To write data to a file",
		    "To close a file",
		    "To delete a file",
		],
		answer: "To read the contents of a file",
	    },
	    {
		prompt: `What is the purpose of the "write" method in Python file objects?`,
		options: [
		    
		    "To read the contents of a file",
		    "To write data to a file",
		    "To close a file",
		    "To delete a file",
		],
		answer: "To write data to a file",
	    },
	    {
		prompt: `What is the purpose of the "close" method in Python file objects?`,
		options: [
		    
		    "To read the contents of a file",
		    "To write data to a file",
		    "To close a file",
		    "To delete a file",
		],
		answer: "To close a file",
	    },
	    {
		prompt: `What is the purpose of the "split" method in Python strings?`,
		options: [
		    "To split a string into a list of substrings",
		    "To join a list of strings into a single string",
		    "To reverse a string",
		    "To convert a string to uppercase",
		],
		answer: "To split a string into a list of substrings",
	    },
	    {
		prompt: `What is the purpose of the "join" method in Python strings?`,
		options: [
		    
		    "To split a string into a list of substrings",
		    "To reverse a string",
		    "To convert a string to uppercase",
		    "To join a list of strings into a single string",
		],
		answer: "To join a list of strings into a single string",
	    },
	    {
		prompt: `What is the purpose of the "append" method in Python lists?`,
		options: [
		    "To add an element to the end of a list",
		    "To remove an element from a list",
		    "To sort a list",
		    "To reverse a list",
		],
		answer: "To add an element to the end of a list",
	    },
	    {
		prompt: `What is the purpose of the "remove" method in Python lists?`,
		options: [
		    
		    "To add an element to the end of a list",
		    "To sort a list",
		    "To remove an element from a list",
		    "To reverse a list",
		],
		answer: "To remove an element from a list",
	    },
	    {
		prompt: `What is the purpose of the "sort" method in Python lists?`,
		options: [
		    "To sort a list",
		    "To add an element to the end of a list",
		    "To remove an element from a list",
		    "To reverse a list",
		],
		answer: "To sort a list",
	    },
	    {
		prompt: `What is the purpose of the "reverse" method in Python lists?`,
		options: [
		    
		    "To add an element to the end of a list",
		    "To reverse a list",
		    "To remove an element from a list",
		    "To sort a list",
		],
		answer: "To reverse a list",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
