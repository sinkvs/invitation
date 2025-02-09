/* script.js */

/**
 * Функция для проверки, используется ли мобильное устройство.
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

  let score = 0;
  const targetScore = 10;
  const scoreEl = document.getElementById("score");
  const congratsEl = document.getElementById("congrats");

  // Интервал для создания цветочков в пределах контейнера #flowers-container
  let flowerInterval = setInterval(createFlower, 500);

  function createFlower() {
    var flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌸";
    // Цветочек появляется в пределах ширины контейнера
    flower.style.left = Math.random() * 100 + "%";
    var duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";
    flower.style.animationDelay = Math.random() * 5 + "s";
    var size = Math.random() * 10 + 20;
    flower.style.fontSize = size + "px";

    // Обработчик клика по цветочку для мини-игры
    flower.addEventListener("click", function (e) {
      score++;
      updateScore();
      flower.remove();
      e.stopPropagation();
    });

    document.getElementById("flowers-container").appendChild(flower);

    setTimeout(function () {
      if (flower.parentNode) {
        flower.remove();
      }
    }, duration * 1000);
  }

  function updateScore() {
    scoreEl.innerText = "Собрано цветочков: " + score;
    if (score >= targetScore) {
      clearInterval(flowerInterval);
      congratsEl.style.display = "block";
    }
  }

  // Обработка жестов: изменение CSS-переменной --tilt-offset в зависимости от наклона устройства
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
      let tilt = event.gamma;
      if (tilt > 30) tilt = 30;
      if (tilt < -30) tilt = -30;
      let offset = tilt * 2;
      document.documentElement.style.setProperty("--tilt-offset", offset + "px");
    });
  }
});
