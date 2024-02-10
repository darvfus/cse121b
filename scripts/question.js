document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");
    const nextBtn = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion(question) {
        questionContainer.innerText = question.text;

        optionsContainer.innerHTML = "";
        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("div");
            optionElement.className = "option";
            optionElement.innerText = option;
            optionElement.addEventListener("click", () => checkAnswer(optionIndex));
            optionsContainer.appendChild(optionElement);
        });
    }

    function checkAnswer(optionIndex) {
        const correctIndex = questions[currentQuestionIndex].correctIndex;
        if (optionIndex === correctIndex) {
            score++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        questionContainer.innerText = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        nextBtn.style.display = "none";
        scoreContainer.style.display = "block";
        scoreElement.innerText = score;
    }

    // Fetch questions from external API
    fetch("https://run.mocky.io/v3/5d0a938f-1214-4363-9d17-d228d19710dc")
        .then(response => response.json())
        .then(data => {
            questions = data.questions;
            showQuestion(questions[currentQuestionIndex]);
        })
        .catch(error => console.error("Error fetching questions:", error));

    nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            endQuiz();
        }
    });
});
