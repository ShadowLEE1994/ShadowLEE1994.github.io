// 移动端响应式布局 计算rem
(function(doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 768) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 768) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();

}(document, window))




$(function() { 
	var def = 1;
    function grow() {
        $('header .navbar').animate({ height: '2.35rem' }, 1000);
        def = 0;
    }

    function shrink() {
        $('header .navbar').animate({ height: '.8rem' }, 1000);
        def = 1;
    }
    $('#box').click(function() {
        if (def == 1) { grow(); } else {
            shrink();
        }

    });

})
