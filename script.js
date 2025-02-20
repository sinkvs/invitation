const userAnswers = [];

function selectAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
    showNextQuestion(questionIndex);
}

function showNextQuestion(currentIndex) {
    document.getElementById(`question${currentIndex + 1}`).classList.remove('active');
    const nextIndex = currentIndex + 1;

    if (nextIndex < 5) {
        document.getElementById(`question${nextIndex + 1}`).classList.add('active');
    } else {
        checkAnswers();
    }
}

function checkAnswers() {
    const correctAnswers = ['5', '20', '4', '21', '12'];
    let allCorrect = true;

    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] !== correctAnswers[i]) {
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
    document.getElementById('question1').classList.add('active');
    closeModal();
}

window.addEventListener('beforeunload', function (e) {
    if (window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
    }
});
