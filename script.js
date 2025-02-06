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

// Функция для создания падающих цветов
function createFallingFlower() {
    const flower = document.createElement("div");
    flower.innerHTML = "🌸"; // Можно заменить на "💖" для сердечек
    flower.classList.add("heart");
    document.body.appendChild(flower);

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;

    flower.style.left = `${startX}px`;
    flower.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Запускаем анимацию падающих цветов
setInterval(createFallingFlower, 500);
