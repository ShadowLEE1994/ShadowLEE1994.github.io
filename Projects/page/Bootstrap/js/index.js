// 移动端响应式布局 计算rem
(function(doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 992) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 992) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();

}(document, window))

$(function() {
    var img = $('.gallery .img');
    var image = $('.gallery img');
    var layer = $('.gallery .layer');
    img.hover(function(index) {
        var x = img.index(this);
        layer.eq(x).css('display', 'block');
        image.eq(x).css('border', '1px solid #000');
    }, function() {
        layer.css('display', 'none');
        image.css('border', '1px solid #ccc');
    });
});