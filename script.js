document.addEventListener("DOMContentLoaded", function () {
  // Проверка мобильного устройства
  if (!isMobile()) {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("non-mobile-warning").style.display = "flex";
    return;
  }

  // Кнопка "Войти"
  const enterButton = document.getElementById("enter-button");
  enterButton.addEventListener("click", function () {
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("invitation-area").style.display = "block";
  });

  // Обратный отсчет
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

  // Падающие цветочки
  function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "%";
    flower.style.top = Math.random() * 20 - 20 + "px";
    flower.style.animationDuration = Math.random() * 5 + 8 + "s";
    flower.style.animationDelay = Math.random() * 2 + "s";
    flower.style.transform = `rotate(${Math.random() * 360}deg)`;
    flower.style.fontSize = Math.random() * 20 + 30 + "px";

    const container = document.getElementById("flowers-container");
    container.appendChild(flower);

    // Удаление элемента после завершения анимации
    flower.addEventListener("animationend", () => flower.remove());
  }

  setInterval(createFlower, 300);
});
