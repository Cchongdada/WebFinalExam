const video = document.querySelector("video");

function formatTime(time) {
    const h = Math.floor(time / 3600);
    const m = Math.floor(time % 3600 / 60);
    const s = Math.floor(time % 60);
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

}

video.oncanplay = function () {
    document.querySelector("video").style.display = "block";
    const totalTime = formatTime(video.duration);

    document.querySelector(".total").innerHTML = totalTime;
}


document.querySelector(".switch").addEventListener("click", function () {
    if (this.classList.contains("fa-play")) {
        video.play();
        this.classList.remove("fa-play");
        this.classList.add("fa-pause");
    } else {
        video.pause();
        this.classList.remove("fa-pause");
        this.classList.add("fa-play");
    }
});

document.addEventListener("keypress", function (event) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (video != "" && (code == 13 || code == 32)) {
        if (video.paused) {
            video.play();
            document.querySelector('.switch').classList.remove("fa-play");
            document.querySelector('.switch').classList.add("fa-pause");
        } else {
            video.pause();
            document.querySelector('.switch').classList.remove("fa-pause");
            document.querySelector('.switch').classList.add("fa-play");
        }
    }
});


video.ontimeupdate = function () {
    const w = video.currentTime / video.duration * 100 + "%";
    document.querySelector(".line").style.width = w;
    document.querySelector(".current").innerHTML = formatTime(video.currentTime);
}

video.onended = function () {
    video.currentTime = 0;
    document.querySelector(".switch").classList.remove("fa-pause");
    document.querySelector(".switch").classList.add("fa-play");
}

document.querySelector(".bar").addEventListener("click", function (event) {
    const offset = event.offsetX;
    const current = offset / this.offsetWidth * video.duration;
    video.currentTime = current;
})

var expandBtn = document.querySelector(".expand");
var player = document.querySelector(".player");

expandBtn.addEventListener("click", function () {
    if (expandBtn.classList.contains("fa-arrows-alt")) {
        player.requestFullscreen();
        expandBtn.classList.remove("fa-arrows-alt");
        expandBtn.classList.add("fa-compress");
    } else {
        document.exitFullscreen();
        expandBtn.classList.remove("fa-compress");
        expandBtn.classList.add("fa-arrows-alt");
    }
});

function checkFull() {
    var isFull = document.webkitIsFullScreen;
    if (isFull === undefined) {
        isFull = false;
    }
    return isFull;
}

window.addEventListener("resize", function () {
    if (!checkFull()) {
        expandBtn.classList.remove("fa-compress");
        expandBtn.classList.add("fa-arrows-alt");
    }
});

function toggleMute() {
    var video = document.querySelector('video'); // 获取视频元素
    var volIcon = document.querySelector('.vol'); // 获取音量图标元素

    if (video.muted) { // 如果视频已静音
        video.muted = false; // 取消静音
        volIcon.classList.remove('fa-volume-off'); // 移除静音图标类
        volIcon.classList.add('fa-volume-up'); // 添加有声图标类
    } else { // 如果视频未静音
        video.muted = true; // 静音
        volIcon.classList.remove('fa-volume-up'); // 移除有声图标类
        volIcon.classList.add('fa-volume-off'); // 添加静音图标类
    }
}

// 为音量图标添加点击事件
var volButton = document.querySelector('.vol');
volButton.addEventListener('click', toggleMute);

var videoContainer = document.querySelector('.player'); // 获取视频容器元素
var controls = document.querySelector('.controls'); // 获取视频控制控件元素

videoContainer.addEventListener('mouseenter', showControls); // 鼠标进入视频区域时显示控制控件
videoContainer.addEventListener('mouseleave', hideControls); // 鼠标离开视频区域时隐藏控制控件

function showControls() {
    controls.style.display = 'flex'; // 显示控制控件
}

function hideControls() {
    controls.style.display = 'none'; // 隐藏控制控件
}