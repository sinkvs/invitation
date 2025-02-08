/* script.js */

/**
 * Проверка мобильного устройства по userAgent.
 */
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
  // Если устройство не мобильное, выводим предупреждение
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }

  // Обработка нажатия на кнопку – смена областей
  var enterButton = document.getElementById("enter-button");
  enterButton.addEventListener("click", function() {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
  });

  /**
   * Обновление обратного отсчёта до ближайших 10:00 с эффектом flip.
   * Если текущее время ≥ 10:00, цель – 10:00 следующего дня.
   */
  function updateCountdown() {
    var now = new Date();
    var target = new Date(now);
    target.setHours(10, 0, 0, 0);
    if (now.getHours() >= 10) {
      target.setDate(target.getDate() + 1);
    }
    var diff = target - now;
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    var countdownEl = document.getElementById("countdown");
    countdownEl.innerText =
      hours.toString().padStart(2, '0') + ":" +
      minutes.toString().padStart(2, '0') + ":" +
      seconds.toString().padStart(2, '0');
    // Триггерим эффект flip
    countdownEl.classList.remove("flip");
    void countdownEl.offsetWidth; // принудительный reflow
    countdownEl.classList.add("flip");
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  /**
   * Функция создания одного цветочка с рандомными параметрами:
   * горизонтальная позиция, длительность, задержка и размер.
   */
  function createFlower() {
    var flower = document.createElement("div");
    flower.className = "flower";
    // Используем эмодзи цветочка
    flower.innerText = "🌸";
    // Случайная позиция по горизонтали
    flower.style.left = Math.random() * 100 + "%";
    // Длительность анимации от 5 до 10 секунд
    var duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";
    // Случайная задержка перед стартом анимации (до 5 секунд)
    flower.style.animationDelay = Math.random() * 5 + "s";
    // Случайный размер цветочка от 20px до 30px
    var size = Math.random() * 10 + 20;
    flower.style.fontSize = size + "px";

    document.getElementById("flowers-container").appendChild(flower);
    // Удаляем элемент после завершения анимации
    setTimeout(function() {
      flower.remove();
    }, (duration + parseFloat(flower.style.animationDelay)) * 1000);
  }

  // Создаём новые цветочки каждые 500 мс
  setInterval(createFlower, 500);
});
