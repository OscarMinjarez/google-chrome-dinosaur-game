const player = document.getElementById("player");
const captus = document.getElementById("captus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");

let scoreInterval;
let score = 0;

document.addEventListener("click", function() {
    player.classList.add("playerJump");
});

document.addEventListener("animationend", function() {
    player.classList.remove("playerJump");
});

function stopGame() {
    player.style.animationPlayState = "paused";
    captus.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
    clearInterval(scoreInterval);
}

function continueGame() {
    player.style.animationPlayState = "running";
    captus.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
    clearInterval(scoreInterval);
    scoreInterval = setInterval(function() {
        score++;
        document.getElementById("score").innerText = score;
    }, 1000);
}

buttonPlayStop.addEventListener("click", function() {
    if (buttonPlayStop.classList.contains("play")) {
        continueGame();
    } else {
        stopGame();
    }

    buttonPlayStop.classList.toggle("play");
});

scoreInterval = setInterval(function() {
    score++;
    document.getElementById("score").innerText = score;
}, 1000);