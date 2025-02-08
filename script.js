/* script.js */

/**
 * Проверка мобильного устройства (по userAgent).
 */
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
  // Если устройство не мобильное – показываем предупреждение.
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }
  
  // Переход от приветственной области к приглашению.
  document.getElementById("enter-button").addEventListener("click", function() {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
  });
  
  // Функция обновления обратного отсчёта до ближайших 10:00.
  function updateCountdown() {
    var now = new Date();
    var target = new Date();
    target.setHours(10, 0, 0, 0);
    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }
    var diff = target - now;
    var hrs = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Форматирование до двух цифр.
    var hours = ("0" + hrs).slice(-2);
    var minutes = ("0" + mins).slice(-2);
    var seconds = ("0" + secs).slice(-2);
    
    // Обновляем каждую единицу flip‑clock.
    updateFlip("hours-tens", hours.charAt(0));
    updateFlip("hours-ones", hours.charAt(1));
    updateFlip("minutes-tens", minutes.charAt(0));
    updateFlip("minutes-ones", minutes.charAt(1));
    updateFlip("seconds-tens", seconds.charAt(0));
    updateFlip("seconds-ones", seconds.charAt(1));
    
    setTimeout(updateCountdown, 500);
  }
  
  /**
   * Функция updateFlip – если цифра изменилась, запускает анимацию.
   * unitId — идентификатор flip‑блока (например, "hours-tens")
   * newDigit — новое значение (символ)
   */
  function updateFlip(unitId, newDigit) {
    var unit = document.getElementById(unitId);
    var currentDigit = unit.querySelector(".upper-card").innerText;
    if (currentDigit !== newDigit) {
      unit.classList.remove("flip");
      // Принудительный reflow.
      void unit.offsetWidth;
      unit.classList.add("flip");
      // Обновляем цифры после 250 мс (половина анимации).
      setTimeout(function() {
        unit.querySelector(".upper-card").innerText = newDigit;
        unit.querySelector(".lower-card").innerText = newDigit;
      }, 250);
    }
  }
  
  updateCountdown();
  
  // Анимация падающих цветочков.
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
  setInterval(createFlower, 500);
});
