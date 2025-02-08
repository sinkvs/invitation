/* script.js */

/* Проверка мобильного устройства */
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }
  
  // Переход от приветствия к приглашению
  document.getElementById("enter-button").addEventListener("click", function() {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
  });
  
  // Обновление обратного отсчёта до ближайших 10:00
  function updateCountdown() {
    var now = new Date();
    var target = new Date();
    target.setHours(10, 0, 0, 0);
    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }
    var diff = target - now;
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Форматирование до двух цифр
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Обновление flip-блоков для часов и минут
    updateFlipUnit("hours-dizaines-", hours.charAt(0), 3);
    updateFlipUnit("hours-unites-", hours.charAt(1));
    updateFlipUnit("minutes-dizaines-", minutes.charAt(0), 6);
    updateFlipUnit("minutes-unites-", minutes.charAt(1));
    
    // Обновление секунд – меняем поворот контейнера
    updateSecondsFlip(seconds);
    
    setTimeout(updateCountdown, 500);
  }
  
  // Функция обновления единицы flip (обновляем класс для эффекта)
  function updateFlipUnit(prefix, newDigit, maxValue) {
    newDigit = parseInt(newDigit, 10);
    var outgoingDigit = (newDigit - 1 < 0) ? (maxValue !== undefined ? maxValue - 1 : 9) : newDigit - 1;
    var newElem = document.getElementById(prefix + newDigit);
    var outgoingElem = document.getElementById(prefix + outgoingDigit);
    if (newElem) newElem.className = "number is-active";
    if (outgoingElem) outgoingElem.className = "number outgoing";
  }
  
  // Обновление секунд (вращаем контейнер на 6° за каждую секунду)
  function updateSecondsFlip(secStr) {
    var s = parseInt(secStr, 10);
    var secondsElem = document.getElementById("seconds");
    secondsElem.style.transform = "rotateX(" + (-s * 6) + "deg)";
  }
  
  updateCountdown();
  
  // Анимация падающих цветочков
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
  
  // Радио (аудио-плеер)
  var radio = document.createElement("AUDIO");
  radio.setAttribute("src", "http://blobfolio.com/codepenfiles/atc-flip-clock/390917_AhWilderness.mp3");
  radio.setAttribute("id", "radio-player");
  radio.setAttribute("loop", "true");
  var radioBtn = document.getElementById("radio-btn");
  radioBtn.addEventListener("click", function() {
    if (radioBtn.className.indexOf("is-active") > -1) {
      radioBtn.className = "btn radio-btn";
      radio.muted = true;
    } else {
      radioBtn.className = "btn radio-btn is-active";
      radio.play();
      radio.muted = false;
    }
  });
});
