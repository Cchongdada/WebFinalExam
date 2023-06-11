const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderNavItems = document.querySelectorAll('.slider-nav-item');

let currentSlide = 0;

function updateSliderNav() {
    sliderNavItems.forEach((navItem, index) => {
        if (index === currentSlide) {
            navItem.classList.add('active');
        } else {
            navItem.classList.remove('active');
        }
    });
}

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = sliderItems.length - 1;
    } else if (slideIndex >= sliderItems.length) {
        slideIndex = 0;
        sliderInner.style.transform = 'translateX(0)'; // 回到第一张
    }
    sliderInner.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;
    updateSliderNav();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000);

sliderNavItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        showSlide(index);
    });
});


var audio = document.getElementById("music");
audio.play();

var scrollSpeed = 50; // 滚动速度（像素/秒）
var pauseTime = 2000; // 暂停时间（毫秒）
var container = document.querySelector('.scroll-container');
var images = container.querySelectorAll('img');
var imageWidth = images[0].offsetWidth;
var scrollPos = 0;

setInterval(function () {
    scrollPos += 1;
    if (scrollPos > imageWidth) {
        scrollPos = 0;
        container.appendChild(images[0]);
        images = container.querySelectorAll('img');
    }
    container.scrollLeft = scrollPos;
}, 1000 / scrollSpeed);

