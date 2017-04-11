/**
 * Created by wangyingliang on 2017/4/1.
 */

window.onload = function () {

    var topInp = document.getElementById("theadInp");
    var tbody = document.getElementById("tbody");
    var botInpArr = tbody.getElementsByTagName("input");

    //绑定事件
    topInp.onclick = function () {
        for(var i = 0;i < botInpArr.length ; i++){
            botInpArr[i].checked = this.checked;
        }
    }
    //老三步
    for(var i = 0; i < botInpArr.length ; i++){
        botInpArr[i].onclick = function () {
            //开闭原则
            var bool = true;
            //检测每一个input的checked属性值。
            for(var j = 0 ; j < botInpArr.length ; j++){
                if(botInpArr[j].checked === false){
                    bool = false;
                }
            }
            topInp.checked = bool;
        }
    }
}