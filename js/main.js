$(function () {

    var introH = $("#intro").innerHeight(),
        header = $("#header");
        scrollOffset = $(window).scrollTop();

    // Fixed header

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass('header--fixed');
        } else {
            header.removeClass('header--fixed');
        }
    }

    // Smooth scroll

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOfset = $(blockId).offset().top;
        
        $('#nav a').removeClass('active');    
        $(this).addClass('active');

        $("html, body").animate({
            scrollTop: blockOfset
        }, 700);
    });

    // Menu nav toogle

    $("#nav-toogle").on('click', function (event) {
        event.preventDefault(); 
        $(this).toggleClass('active');       
        $('#nav').toggleClass('active');
    });


    // Collapse

    $("[data-collapse]").on('click', function (event) { 
        event.preventDefault(); 
        var elemId = $(this).data('collapse');

        $(this).toggleClass("active");
    });
});