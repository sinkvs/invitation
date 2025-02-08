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
   * Функция для вычисления оставшегося времени до ближайших 10:00.
   * Если текущее время ≥ 10:00, цель – 10:00 следующего дня.
   */
  function getTimeRemaining() {
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
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  /**
   * Обновление flip clock.
   * Для каждого элемента (часы, минуты, секунды) обновляем значения с эффектом flip.
   */
  function updateFlipClock() {
    var timeRemaining = getTimeRemaining();
    updateUnit("hours", timeRemaining.hours);
    updateUnit("minutes", timeRemaining.minutes);
    updateUnit("seconds", timeRemaining.seconds);
  }

  /**
   * Обновление отдельной единицы времени с эффектом flip.
   * idUnit - "hours", "minutes" или "seconds"
   * value - числовое значение единицы времени
   */
  function updateUnit(idUnit, value) {
    var formattedValue = value.toString().padStart(2, '0');
    var upperEl = document.getElementById(idUnit + "-upper");
    var lowerEl = document.getElementById(idUnit + "-lower");

    // Если значение изменилось, запускаем анимацию flip
    if (upperEl.innerText !== formattedValue) {
      upperEl.innerText = formattedValue;
      lowerEl.innerText = formattedValue;
      // Добавляем класс flip для анимации, а затем удаляем его
      lowerEl.classList.add("flip");
      setTimeout(function() {
        lowerEl.classList.remove("flip");
      }, 700);
    }
  }

  // Запускаем обновление flip clock каждую секунду
  setInterval(updateFlipClock, 1000);
  updateFlipClock();

  /**
   * Функция создания одного цветочка с рандомными параметрами.
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

    document.getElementById("flowers-container").appendChild(flower);
    setTimeout(function() {
      flower.remove();
    }, (duration + parseFloat(flower.style.animationDelay)) * 1000);
  }

  // Создаём новые цветочки каждые 500 мс
  setInterval(createFlower, 500);
});
