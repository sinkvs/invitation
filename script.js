/* script.js */

/**
 * Функция для проверки, используется ли мобильное устройство.
 * Проверяется наличие подстрок "Mobi" или "Android" в userAgent.
 */
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }

  var enterButton = document.getElementById("enter-button");
  enterButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
    updateCountdown();
  });

  /**
   * Функция обновления обратного отсчёта до ближайших 10:00.
   * Если текущее время >= 10:00, отсчёт ведётся до 10:00 следующего дня.
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
    document.getElementById("countdown").innerText =
      "Осталось: " +
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  }

  setInterval(updateCountdown, 1000);

  // Переменные для мини-игры
  let score = 0;
  const targetScore = 10;
  const scoreEl = document.getElementById("score");
  const congratsEl = document.getElementById("congrats");

  // Интервал для создания цветочков – сохраняем id, чтобы при достижении цели можно было остановить генерацию
  let flowerInterval = setInterval(createFlower, 500);

  /**
   * Функция создания одного цветочка с рандомными параметрами.
   * Добавлен обработчик клика, который увеличивает счёт и удаляет цветочек.
   */
  function createFlower() {
    var flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "%";
    var duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";
    flower.style.animationDelay = Math.random() * 5 + "s";
    var size = Math.random() * 10 + 20;
    flower.style.fontSize = size + "px";

    // Добавляем обработчик для мини-игры
    flower.addEventListener("click", function (e) {
      // Увеличиваем счёт, обновляем счёт и удаляем элемент
      score++;
      updateScore();
      flower.remove();
      // Остановка дальнейшего распространения клика
      e.stopPropagation();
    });

    document.getElementById("flowers-container").appendChild(flower);

    setTimeout(function () {
      flower.remove();
    }, duration * 1000);
  }

  /**
   * Функция обновления отображения счёта и проверки достижения цели.
   */
  function updateScore() {
    scoreEl.innerText = "Собрано цветочков: " + score;
    if (score >= targetScore) {
      // Если цель достигнута – останавливаем генерацию цветочков и показываем поздравление
      clearInterval(flowerInterval);
      congratsEl.style.display = "block";
    }
  }

  // Обработка жестов: обновляем CSS-переменную --tilt-offset в зависимости от наклона устройства.
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
      // event.gamma – наклон устройства по горизонтали (в градусах)
      let tilt = event.gamma;
      if (tilt > 30) tilt = 30;
      if (tilt < -30) tilt = -30;
      // Преобразуем угол в пиксели (например, 1 градус ≈ 2px)
      let offset = tilt * 2;
      document.documentElement.style.setProperty("--tilt-offset", offset + "px");
    });
  }
});
