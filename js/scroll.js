$(document).ready(function(){
    $('.option1').click(function(){
        $('html,body').animate({
            scrollTop: $('.content-section-a').offset().top
        },800);
    });
    $('.option2').click(function(){
        $('html,body').animate({
            scrollTop: $('.content-section-b').offset().top
        },800);
    });
    $('.option3').click(function(){
        $('html,body').animate({
            scrollTop: $('.content-section-d').offset().top
        },800);
    });
});