/* Определяем переменную для смещения падающих цветочков при наклоне */
:root {
  --tilt-offset: 0px;
}

/* Сброс базовых стилей */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Основной стиль для body */
body {
  font-family: 'Pacifico', cursive;
  background: #ff69b4;
  color: #fff;
  overflow: hidden;
}

/* Контейнер с основным содержимым */
#main-container {
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Стилизация приветственной области */
#welcome-area {
  text-align: center;
}

/* Стилизация области приглашения */
#invitation-area {
  text-align: center;
}

/* Стили для анимированной кнопки */
.button {
  padding: 30px 60px;
  color: #1670f0;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 5px;
  font-size: 30px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  overflow: hidden;
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.1);
}

/* Внутренние span не должны перехватывать клики */
.button span {
  pointer-events: none;
}

.button::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 50%;
  background: rgba(255,255,255,0.05);
}

.button span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #0c002b, #1779ff);
  animation: animate1 2s linear infinite;
  animation-delay: 1s;
}
@keyframes animate1 {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.button span:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #0c002b, #1779ff);
  animation: animate2 2s linear infinite;
  animation-delay: 2s;
}
@keyframes animate2 {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.button span:nth-child(3) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, #0c002b, #1779ff);
  animation: animate3 2s linear infinite;
  animation-delay: 1s;
}
@keyframes animate3 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.button span:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to top, #0c002b, #1779ff);
  animation: animate4 2s linear infinite;
  animation-delay: 2s;
}
@keyframes animate4 {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}

/* Стиль для обратного отсчёта */
#countdown {
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
}

/* Стиль для счёта мини-игры */
#score {
  font-size: 24px;
  margin: 10px 0;
}

/* Стилизация предупреждения для не мобильных устройств */
#non-mobile-warning {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  font-size: 20px;
}

/* Контейнер для анимации падающих цветочков */
#flowers-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  z-index: 5;
}

/* Стили для отдельного цветочка */
.flower {
  position: absolute;
  font-size: 24px;
  animation: fall linear infinite;
  top: -50px;
  cursor: pointer;
  pointer-events: auto;
  /* z-index по умолчанию, чтобы не быть поверх основного UI */
  z-index: auto;
  touch-action: manipulation;
}

/* Ключевые кадры анимации падения цветочка с учетом наклона */
@keyframes fall {
  0% {
    transform: translateX(var(--tilt-offset)) translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(calc(var(--tilt-offset) + 50px)) translateY(100%) rotate(360deg);
    opacity: 0;
  }
}

h1 {
  font-family: 'Pacifico', cursive;
  font-size: 3em;
  margin-bottom: 20px;
  color: #fff;
}
