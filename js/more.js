function toggleText() {
    var partialText = document.getElementById("partial-text");
    var fullText = document.getElementById("full-text");
    if (partialText.style.display === "none") {
        partialText.style.display = "inline";
        fullText.style.display = "none";
    } else {
        partialText.style.display = "none";
        fullText.style.display = "inline";
    }
}

const audio = document.getElementById("audio");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume-slider");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline-block";
    } else {
        audio.pause();
        pauseIcon.style.display = "none";
        playIcon.style.display = "inline-block";
    }
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

audio.addEventListener("ended", function () {
    pauseIcon.style.display = "none";
    playIcon.style.display = "inline-block";
    progressBar.style.width = "0%";
});