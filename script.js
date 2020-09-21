$(function(){
    var window_h = $(window).height();
    $(window).on("scroll", function(){
        var scroll_top = $(window).scrollTop();
        $('.start').each(function(){
            var elem_pos = $(this).offset().top;
            if(window_h + scroll_top > elem_pos + 300){
                $(this).addClass('fadein');
            }else{
                $(this).removeClass('fadein');
            }
        });
    });
});