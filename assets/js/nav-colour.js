
$(window).scroll(function (){
    $("nav").toggleClass("trigger", $(this).scrollTop() > 100);
})


