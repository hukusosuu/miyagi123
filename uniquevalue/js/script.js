$(function(){
    $('.drawar-btn').click(function(e) {
        $(this).toggleClass("click");
    })
    $('.drawar-btn').click(function(e) {
    $('.drawar-menu').toggleClass("click");
    })
    jQuery('a[href^="#"]').on('click', function() {
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#') {
    position = jQuery(id).offset().top - header-20;
    }
    jQuery('html,body').animate({
    scrollTop: position
    },
    300);
    });
});