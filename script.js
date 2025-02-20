function startChat() {
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.chat').style.display = 'block';
  simulateChat();
}

function simulateChat() {
  const messages = ["Привет!", "Как дела?", "Готов(а) к тесту?", "Начинаем!"];
  let index = 0;
  const chatWindow = document.getElementById("chatWindow");

  function showMessage() {
    if (index < messages.length) {
      let msg = document.createElement("p");
      msg.textContent = messages[index++];
      msg.classList.add("message");
      chatWindow.appendChild(msg);
      setTimeout(() => msg.style.opacity = 1, 100);
      setTimeout(showMessage, 2000);
    } else {
      setTimeout(startTest, 2000);
    }
  }
  showMessage();
}

function startTest() {
  document.querySelector('.chat').style.display = 'none';
  document.querySelector('.test').style.display = 'block';
  document.getElementById("num1").textContent = Math.floor(Math.random() * 10) + 1;
  document.getElementById("num2").textContent = Math.floor(Math.random() * 10) + 1;
}

function checkAnswer() {
  const num1 = parseInt(document.getElementById("num1").textContent);
  const num2 = parseInt(document.getElementById("num2").textContent);
  const answer = parseInt(document.getElementById("answer").value);
  if (answer === num1 * num2) {
    showFinalScreen();
  } else {
    alert("Неверно, попробуйте ещё раз.");
  }
}

function showFinalScreen() {
  document.querySelector('.test').style.display = 'none';
  document.querySelector('.final').style.display = 'block';
  document.getElementById("randomNumber").textContent = Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111;
  setInterval(spawnEmoji, 500);
}

function spawnEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = "🌸";
  emoji.classList.add("emoji");
  document.body.appendChild(emoji);
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "0px";
  let animation = setInterval(() => {
    let top = parseInt(emoji.style.top) || 0;
    if (top < window.innerHeight) {
      emoji.style.top = (top + 2) + "px";
    } else {
      clearInterval(animation);
      document.body.removeChild(emoji);
    }
  }, 50);
}
