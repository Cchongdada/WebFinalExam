// 获取演唱会开始时间
var concertDate = new Date('2023-07-28');
// 获取倒计时计时器元素
var countdownElem = document.getElementById('countdown');

// 定义倒计时函数
function countdown() {
    // 获取当前时间
    var now = new Date();
    // 计算时间差
    var diff = concertDate.getTime() - now.getTime();

    // 如果时间差小于等于0，停止倒计时
    if (diff <= 0) {
        countdownElem.innerHTML = '演唱会已经开始了！';
        clearInterval(timer);
        return;
    }

    // 计算剩余时间
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 更新倒计时计时器元素
    countdownElem.innerHTML = '距离深圳演唱会开始还有：' + days + '天 ' + hours + '小时 ' + minutes + '分钟 ' + seconds + '秒';
}

// 初始化倒计时
countdown();
// 每秒更新倒计时
var timer = setInterval(countdown, 1000);