function generateQuiz() {
    var difficulty = document.getElementById("difficulty").value;
    var num1, num2, answer;

    switch(difficulty) {
        case "default":
            num1 = Math.floor(Math.random() * 55) + 1;
            num2 = Math.floor(Math.random() * 55) + 1;
        case "easy":
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            break;
        case "medium":
            num1 = Math.floor(Math.random() * 150) + 25;
            num2 = Math.floor(Math.random() * 150) + 25;
            break;
        case "hard":
            num1 = Math.floor(Math.random() * 200) + 1;
            num2 = Math.floor(Math.random() * 200) + 1;
            break;
       
    }

    answer = num1 + num2;

    var quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    var question = document.createElement("p");
    question.textContent = "What is " + num1 + " + " + num2 + "?";
    quizDiv.appendChild(question);

    var input = document.createElement("input");
    input.type = "number";
    input.id = "userAnswer";
    quizDiv.appendChild(input);

    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = function() {
        var userAnswer = document.getElementById("userAnswer").value;
        checkAnswer(userAnswer, answer);
    };
    quizDiv.appendChild(submitButton);
}

function checkAnswer(userAnswer, correctAnswer) {
    userAnswer = parseInt(userAnswer);
    var notification = document.getElementById("notification");

    if (userAnswer === correctAnswer) {
        notification.textContent = "Correct!";
        notification.style.color = "green";
    } else {
        notification.textContent = "Incorrect. The correct answer is " + correctAnswer + ".";
        notification.style.color = "red";
    }
}
