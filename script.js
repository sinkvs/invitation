body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #ffe6e6; /* Слегка розовый фон */
    padding: 20px;
    box-sizing: border-box;
}

.loading, .chat, .test, .final {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
}

.loader {
    border: 16px solid #ffcccc;
    border-top: 16px solid #ff69b4;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
    margin-bottom: 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.message {
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
}

button {
    padding: 15px 25px;
    border: none;
    border-radius: 25px;
    background-color: #ff69b4;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
}

button:hover {
    background-color: #ff1493;
}

.emoji {
    position: absolute;
    animation: float 5s infinite;
    font-size: 2rem;
}

@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

@media (min-width: 600px) {
    .message {
        max-width: 400px;
    }

    button {
        padding: 20px 30px;
        font-size: 18px;
    }
}
