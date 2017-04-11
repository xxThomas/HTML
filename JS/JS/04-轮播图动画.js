/**
 * Created by wangyingliang on 2017/4/6.
 */
window.onload = function () {

    var square = document.getElementsByClassName("square")[0];
    var spanArr = square.children;
    var inner = document.getElementsByClassName("inner")[0];  //  获得inner
    var ul = inner.children[0];  // ul
    var scrollWidth = inner.offsetWidth;  // 得到 490
    console.log(ul);
    for (var i = 0 ; i < spanArr.length ; i++) {

        spanArr[i].index = i;  // 获得当前的索引号
        spanArr[i].onmouseover = function () {
            // 清除所有的人
            for (var j = 0; j < spanArr.length; j++) {
                spanArr[j].className = "";
            }
            this.className = "current";
            animate(ul, -this.index * scrollWidth);
        }
    }
    //  动画的基本封装

    function animate(obj,target) {
        clearInterval(obj.timer);  // 要开启定时器，先清除以前定时器
        // 有2个参数 第一个 对象谁做动画  第二 距离 到哪里
        // 如果 offsetLeft 大于了  target 目标位置就应该反方向
        var speed = obj.offsetLeft < target ? 15 : -15;
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft;  //  他们的值 等于 0 说明完全相等
            // 动画的原理
            obj.style.left = obj.offsetLeft + speed  + "px";
            if(Math.abs(result) <= 15) {
                obj.style.left = target + "px";   //抖动问题
                clearInterval(obj.timer);
            }
        },10);
    }
}





