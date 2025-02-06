document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("reveal-btn");
    const surprise = document.getElementById("surprise");

    button.addEventListener("click", function () {
        surprise.classList.add("show");

        button.innerText = "С праздником! 🎉";
        button.disabled = true;
    });
});

function createFallingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "🌸";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2; // случайная задержка

    heart.style.left = `${startX}px`;
    heart.style.animation = `fall ${duration}s linear ${delay}s infinite`;

    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

setInterval(createFallingHeart, 500);
