document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const cards = document.querySelectorAll(".card");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.transform = "translateX(0)";
                card.style.opacity = "1";
            } else {
                card.style.transform = "translateX(100%)";
                card.style.opacity = "0";
            }
        });
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            showCard(currentIndex);
        }
    });

    let startX = 0;

    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                showCard(currentIndex);
            }
        }
    });

    showCard(currentIndex);

    function createFallingFlower() {
        const flower = document.createElement("div");
        flower.innerHTML = "🌸";
        flower.classList.add("flower");
        document.body.appendChild(flower);

        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 3;

        flower.style.left = `${startX}px`;
        flower.style.animationDuration = `${duration}s`;

        setTimeout(() => {
            flower.remove();
        }, duration * 1000);
    }

    setInterval(createFallingFlower, 300);
});
