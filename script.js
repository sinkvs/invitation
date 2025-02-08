/* script.js */

/**
 * Функция проверки мобильного устройства.
 */
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
  // Если не мобильное устройство – показываем предупреждение
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }
  
  // Обработка нажатия на кнопку приветствия
  document.getElementById("enter-button").addEventListener("click", function() {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
  });
  
  // Функция обновления обратного отсчёта до ближайших 10:00
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
    
    // Форматируем в 2-значный вид
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Обновляем flip-блоки для часов и минут с эффектом смены
    resetOutgoing();
    updateFlipUnit('hours-dizaines-', hours.charAt(0), 2);
    updateFlipUnit('hours-unites-', hours.charAt(1));
    updateFlipUnit('minutes-dizaines-', minutes.charAt(0));
    updateFlipUnit('minutes-unites-', minutes.charAt(1));
    
    // Для секунд – обновляем поворот контейнера (#seconds)
    updateSecondsFlip(seconds);
    
    setTimeout(updateCountdown, 500);
  }
  
  // Сброс всех элементов с классом outgoing
  function resetOutgoing() {
    var oldOutgoing = document.querySelectorAll('.outgoing');
    oldOutgoing.forEach(function(el) {
      el.className = 'number';
    });
  }
  
  // Функция обновления flip-блока (unitPrefix – например, "hours-dizaines-")
  function updateFlipUnit(unitPrefix, newDigit, maxValue) {
    newDigit = parseInt(newDigit, 10);
    // Рассчитываем значение для "outgoing" – если newDigit равен 0, берем последний допустимый
    var outgoingDigit = (newDigit - 1 < 0) ? (typeof maxValue !== 'undefined' ? maxValue - 1 : 9) : newDigit - 1;
    var elementNew = document.getElementById(unitPrefix + newDigit);
    var elementOutgoing = document.getElementById(unitPrefix + outgoingDigit);
    if (elementNew) elementNew.className = 'number is-active';
    if (elementOutgoing) elementOutgoing.className = 'number outgoing';
  }
  
  // Функция для обновления секунд: задаём вращение контейнера
  function updateSecondsFlip(secStr) {
    var s = parseInt(secStr, 10);
    var secondsContainer = document.getElementById('seconds');
    // Каждый шаг – 6° (360/60)
    secondsContainer.style.transform = 'rotateX(' + (-s * 6) + 'deg)';
  }
  
  // Запускаем обновление обратного отсчёта
  updateCountdown();
  
  // Падающие эмодзи‑цветочки
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
  radio.setAttribute("src","http://blobfolio.com/codepenfiles/atc-flip-clock/390917_AhWilderness.mp3");
  radio.setAttribute("id", "radio-player");
  radio.setAttribute("loop", "true");
  var radioBtn = document.getElementById("radio-btn");
  radioBtn.addEventListener("click", function(){
    if ((' ' + radioBtn.className + ' ').indexOf(' is-active ') > -1) {
      radioBtn.className = "btn radio-btn";
      radio.muted = true;
    } else {
      radioBtn.className = "btn radio-btn is-active";
      radio.play();
      radio.muted = false;
    }
  });
});
