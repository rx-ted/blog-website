const startCountdown = (date) => {
    const pasttime = new Date(date);
    const dateInMilliseconds = pasttime.getTime();

    const now = new Date();
    const nowInMilliseconds = now.getTime();

    const remainingTime = dateInMilliseconds - nowInMilliseconds;
    if (remainingTime <= 0) {
        endCountdown();
        return; //表示时间到了无法继续下去

    }
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    updateDom({ seconds, minutes, hours, days });
}


const updateDom = ({ seconds, minutes, hours, days }) => {
    $('.days').html(days + "<span>天</span>");
    $('.hours').html(hours + "<span>时</span>");
    $('.minutes').html(minutes + "<span>分</span>");
    $('.seconds').html(seconds + "<span>秒</span>");

};

function endCountdown() {
    $('.result').css('color', 'red')
}
$targetDate = '2021/12/12' //这个修改时间，比如说双12，元旦，双十一，清明节等等

$(() => {
    setInterval(() => {
        if ($targetDate) {
            startCountdown($targetDate);
        } else {
            endCountdown();
        }
    }, 1000);
})