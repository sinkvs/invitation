/* Подключаем красивый шрифт */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    text-align: center;
    color: #222;
    overflow: hidden;
    position: relative;
}

/* Контейнер */
.container {
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(12px);
    width: 80%;
    max-width: 420px;
    z-index: 10;
}

/* Заголовок */
h1 {
    font-size: 28px;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

/* Обычный текст */
.message {
    font-size: 19px;
    font-weight: 400;
    color: white;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

/* Кнопка */
button {
    background: #ff4d6d;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 12px;
    transition: background 0.3s ease, transform 0.3s ease;
    animation: pulse 1.5s infinite alternate;
    box-shadow: 0 4px 10px rgba(255, 77, 109, 0.4);
}

/* Анимация мягкого мерцания */
@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 4px 10px rgba(255, 77, 109, 0.4);
    }
    100% {
        transform: scale(1.07);
        box-shadow: 0 6px 15px rgba(255, 77, 109, 0.6);
    }
}

button:hover {
    background: #ff3459;
    transform: scale(1.1);
}

button:disabled {
    opacity: 0.7;
    cursor: default;
    animation: none;
}

/* Поздравление */
.hidden-message {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    color: white;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.hidden-message.show {
    opacity: 1;
    transform: translateY(0);
}

/* АНИМАЦИЯ ЛЕПЕСТКОВ */
@keyframes fall {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}

.heart {
    position: absolute;
    top: -10vh;
    font-size: 24px;
    opacity: 0.85;
    animation: fall linear infinite;
    pointer-events: none;
}
