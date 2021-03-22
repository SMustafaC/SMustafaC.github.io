<!-- Script to change bg of navbar on scroll-->
    $(window).scroll(function (){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 50);
})
