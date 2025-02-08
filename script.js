/* script.js */

/**
 * Функция для проверки, используется ли мобильное устройство.
 * Проверяется наличие подстрок "Mobi" или "Android" в userAgent.
 */
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
  // Если устройство не мобильное, показываем предупреждение и скрываем основной контент
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }

  // Обработка нажатия на кнопку: скрываем приветственную область и показываем приглашение
  var enterButton = document.getElementById("enter-button");
  enterButton.addEventListener("click", function () {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
    updateCountdown(); // Запускаем таймер после нажатия кнопки
  });

  /**
   * Функция обновления обратного отсчёта до ближайших 10:00.
   * Если текущее время больше или равно 10:00, то отсчёт ведётся до 10:00 следующего дня.
   */
  function updateCountdown() {
    var now = new Date();
    var target = new Date(now);
    target.setHours(10, 0, 0, 0);
    if (now.getHours() >= 10) {
      // Если текущее время позже 10:00, устанавливаем цель на следующий день
      target.setDate(target.getDate() + 1);
    }
    var diff = target - now;
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerText =
      "Осталось: " +
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  }

  // Обновляем обратный отсчёт каждую секунду
  setInterval(updateCountdown, 1000);

  /**
   * Функция создания одного цветочка с рандомными параметрами:
   * позиция по горизонтали, длительность анимации, задержка и размер.
   */
  function createFlower() {
    var flower = document.createElement("div");
    flower.className = "flower";
    // Используем эмодзи цветка, можно заменить на изображение
    flower.innerText = "🌸";
    // Случайная горизонтальная позиция (от 0% до 100%)
    flower.style.left = Math.random() * 100 + "%";
    // Случайная длительность анимации от 5 до 10 секунд
    var duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";
    // Случайная задержка перед началом анимации (до 5 секунд)
    flower.style.animationDelay = Math.random() * 5 + "s";
    // Случайный размер цветочка (от 20px до 30px)
    var size = Math.random() * 10 + 20;
    flower.style.fontSize = size + "px";

    document.getElementById("flowers-container").appendChild(flower);

    // Удаляем элемент после завершения анимации
    setTimeout(function () {
      flower.remove();
    }, duration * 1000);
  }

  // Создаём новые цветочки каждые 500 мс
  setInterval(createFlower, 500);
});
