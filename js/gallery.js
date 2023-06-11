// 获取class为gallery的元素
const gallery1 = document.querySelector('.gallery1');
const gallery2 = document.querySelector('.gallery2');

// 获取id为content-container的元素
const contentContainer = document.getElementById('content-container');
// 定义变量currentContent，初始化为null
let currentContent = null;

gallery1.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        // 获取当前img元素的自定义属性data-id的值
        const id = event.target.dataset.id;
        // 获取id为content-{id}的元素
        const content = document.getElementById(`content-${id}`);
        if (currentContent === content) {
            // 隐藏contentContainer元素和currentContent元素
            contentContainer.style.display = 'none';
            animateHide(contentContainer); // 添加动画
            currentContent.style.display = 'none';
            animateHide(currentContent);  // 添加动画
            currentContent = null;
        } else {
            // 如果currentContent元素存在,先将其隐藏
            if (currentContent) {
                currentContent.style.display = 'none';
                animateHide(currentContent); // 添加动画
            }
            // 显示contentContainer元素和content元素
            contentContainer.style.display = 'block';
            animateShow(contentContainer); // 添加动画
            content.style.display = 'block';
            animateShow(content);      // 添加动画
            currentContent = content;
        }
    }
});

// 添加显示动画
function animateShow(element) {
    element.style.animation = 'show .5s ease-in-out';
}

// 添加隐藏动画
function animateHide(element) {
    element.style.animation = 'hide .5s ease-in-out';
}

gallery2.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        // 获取当前img元素的自定义属性data-id的值
        const id = event.target.dataset.id;
        // 获取id为content-{id}的元素
        const content = document.getElementById(`content-${id}`);
        if (currentContent === content) {
            // 隐藏contentContainer元素和currentContent元素
            contentContainer.style.display = 'none';
            animateHide(contentContainer); // 添加动画
            currentContent.style.display = 'none';
            animateHide(currentContent);  // 添加动画
            currentContent = null;
        } else {
            // 如果currentContent元素存在,先将其隐藏
            if (currentContent) {
                currentContent.style.display = 'none';
                animateHide(currentContent); // 添加动画
            }
            // 显示contentContainer元素和content元素
            contentContainer.style.display = 'block';
            animateShow(contentContainer); // 添加动画
            content.style.display = 'block';
            animateShow(content);      // 添加动画
            currentContent = content;
        }
    }
});

