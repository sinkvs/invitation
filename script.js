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
