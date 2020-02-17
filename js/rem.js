/**
 * Created by Administrator on 2020/1/8.
 */
//rem适配
function recalc() {
    var h = document.getElementById('html1');
    // w代表实际宽度,获取当前屏幕可视区域大小
    var w = document.documentElement.clientWidth;
    console.log(w);
    // d代表设计宽度
    var d = 375;
    // 来动态设置html根标签的字体大小
    if (w>= 640) {
        h.style.fontSize = '120px';
    } else {
        //h.style.fontSize = w / d * 100 + 'px';
    }
    //console.log(h.style.fontSize);
}
window.addEventListener("resize", recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);