document.addEventListener("DOMContentLoaded", function() {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const continueBtn = document.getElementById("continueBtn");
  
  let transitioned = false; // чтобы предотвратить повторный переход
  
  // Функция перехода со страницы 1 на страницу 2
  function goToCard2() {
    if (transitioned) return;
    transitioned = true;
    
    // Перемещаем первую карточку влево
    card1.style.transform = "translateX(-100%)";
    card1.classList.remove("visible");
    card1.classList.add("hidden");
    
    // Показываем вторую карточку (она уже находится справа из-за класса hidden, поэтому задаем transform: translateX(0)) 
    card2.classList.remove("hidden");
    card2.classList.add("visible");
    card2.style.transform = "translateX(0)";
    
    // Запускаем анимацию падающих цветов на второй карточке
    startFallingFlowers();
  }
  
  continueBtn.addEventListener("click", goToCard2);
  
  // Обработка свайпа (для мобильных устройств) на первой карточке
  let touchStartX = 0;
  card1.addEventListener("touchstart", function(e) {
    touchStartX = e.touches[0].clientX;
  });
  
  card1.addEventListener("touchend", function(e) {
    let touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) { // свайп влево\n      goToCard2();\n    }\n  });\n\n  // Функция запуска анимации падающих цветов\n  function startFallingFlowers() {\n    setInterval(createFallingFlower, 300);\n  }\n\n  // Функция создания одного падающего цветка\n  function createFallingFlower() {\n    const flower = document.createElement(\"div\");\n    flower.classList.add(\"flower\");\n    flower.innerText = \"🌸\";\n    document.body.appendChild(flower);\n    \n    const startX = Math.random() * window.innerWidth;\n    const duration = Math.random() * 3 + 2;\n    flower.style.left = startX + \"px\";\n    flower.style.animationDuration = duration + \"s\";\n    \n    setTimeout(() => {\n      flower.remove();\n    }, duration * 1000);\n  }\n});\n"
});
