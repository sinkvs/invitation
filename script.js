const userAnswers = [];
const questionsData = [
    { question: "2 + 3 = ?", options: ['4', '6', '5'], correctAnswer: '5' },
    { question: "4 * 5 = ?", options: ['18', '20', '25'], correctAnswer: '20' },
    { question: "6 - 2 = ?", options: ['3', '5', '4'], correctAnswer: '4' },
    { question: "3 * 7 = ?", options: ['19', '24', '21'], correctAnswer: '21' },
    { question: "8 + 4 = ?", options: ['11', '12', '10'], correctAnswer: '12' },
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const questionData = questionsData[index];
    document.getElementById('questionText').innerText = questionData.question;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; // Очистка предыдущих вариантов

    questionData.options.forEach((option, idx) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(index, option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        checkAnswers();
    }
}

function checkAnswers() {
    let allCorrect = true;

    for (let i = 0; i < questionsData.length; i++) {
        if (userAnswers[i] !== questionsData[i].correctAnswer) {
            allCorrect = false;
            break;
        }
    }

    if (allCorrect) {
        window.location.href = 'invitation.html';
    } else {
        showErrorModal();
    }
}

function showErrorModal() {
    document.getElementById('errorModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
}

function resetTest() {
    userAnswers.length = 0; // Очистка массива ответов
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
    closeModal();
}

window.addEventListener('beforeunload', function (e) {
    if (window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
    }
});

// Показать первый вопрос при загрузке страницы
showQuestion(currentQuestionIndex);
