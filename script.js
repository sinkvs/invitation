document.addEventListener("DOMContentLoaded", function () {
  // Если устройство не мобильное, показываем предупреждение и скрываем основной контент
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }

  // Обработка нажатия на кнопку
  const enterButton = document.getElementById("enter-button");
  enterButton.addEventListener("click", function () {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
  });

  // Обновление обратного отсчёта
  function updateCountdown() {
    const now = new Date();
    const target = new Date(now);
    target.setHours(10, 0, 0, 0);

    if (now.getHours() >= 10) {
      target.setDate(target.getDate() + 1);
    }

    const diff = target - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.innerText =
        "Осталось: " +
        hours.toString().padStart(2, "0") + ":" +
        minutes.toString().padStart(2, "0") + ":" +
        seconds.toString().padStart(2, "0");
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Создание падающих цветочков
  function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "%";
    const duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";
    flower.style.animationDelay = Math.random() * 2 + "s";
    flower.style.fontSize = Math.random() * 10 + 20 + "px";

    document.getElementById("flowers-container").appendChild(flower);

    // Удаляем цветочек после завершения анимации
    flower.addEventListener("animationend", function () {
      flower.remove();
    });
  }

  setInterval(createFlower, 500);
});
