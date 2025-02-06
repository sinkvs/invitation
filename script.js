// Ждем, пока загрузится вся страница
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("reveal-btn");
    const surprise = document.getElementById("surprise");

    button.addEventListener("click", function () {
        // Добавляем класс, который делает текст видимым
        surprise.classList.add("show");

        // Меняем текст кнопки после клика
        button.innerText = "С праздником! 🎉";
        button.disabled = true; // Делаем кнопку неактивной
    });
});

function createFallingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "🌸"; // Можно заменить на "💖" для сердечек
    heart.classList.add("heart");
    document.body.appendChild(heart);

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;

    heart.style.left = `${startX}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createFallingHeart, 500);
