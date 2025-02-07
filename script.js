document.addEventListener("DOMContentLoaded", function() {
  const nextBtn = document.getElementById("nextBtn");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");
  
  // Обработчик для кнопки
  nextBtn.addEventListener("click", function() {
    section2.scrollIntoView({ behavior: "smooth" });
    startFallingFlowers();
  });
  
  // Обработка свайпа (смахивание вверх) на первой секции
  let touchStartY = 0;
  section1.addEventListener("touchstart", function(e) {
    touchStartY = e.touches[0].clientY;
  });
  section1.addEventListener("touchend", function(e) {
    let touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) { // если свайп вверх более 50px
      section2.scrollIntoView({ behavior: "smooth" });
      startFallingFlowers();
    }
  });
  
  // Функция запуска анимации падающих цветов
  function startFallingFlowers() {
    // Запускаем интервал, который будет создавать цветы
    setInterval(createFallingFlower, 300);
  }
  
  // Функция создания одного падающего цветка
  function createFallingFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    document.body.appendChild(flower);
    
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;
    flower.style.left = startX + "px";
    flower.style.animationDuration = duration + "s";
    
    setTimeout(() => {
      flower.remove();
    }, duration * 1000);
  }
});
