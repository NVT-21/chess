document.addEventListener("DOMContentLoaded", function() {
    var normalButton = document.getElementById("normal");
    var hardButton = document.getElementById("hard");
    var exitButton = document.getElementById("exit");

    normalButton.addEventListener("click", function() {
        playNormalSound();
    });

    hardButton.addEventListener("click", function() {
        playNormalSound();
    });

    exitButton.addEventListener("click", function() {
        playExitSound();
    });
});

function playNormalSound() {
    var sound = new Audio("sound.mp3");
    sound.play();
}

function playExitSound() {
    var exitSound = document.getElementById("exit-sound");
    exitSound.play();
}
