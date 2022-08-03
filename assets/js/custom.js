$(document).ready(function(){

/* ===================================
    toggle menu
    ====================================== */

    $(document).on("click", function(event){
    	if($(event.target).closest(".sidebar-toggle").length){
    		$(".fixed-menu").toggleClass("active");
    		$('.sidebar-menu').toggleClass("active");
    	} else if(!$(event.target).closest(".sidebar-toggle").length){
    		$(".fixed-menu").removeClass("active");
    		$(".sidebar-menu").removeClass("active");
    	}
    });


    $(document).on("click", function(event){
        if($(event.target).closest(".toggle-menu").length){
            $(".navbar_collapse").toggleClass("static");
            $('.navbar-toggle').toggleClass("static");
        } else if(!$(event.target).closest(".toggle-menu").length){
            $(".navbar_collapse").removeClass("static");
            $(".navbar-toggle").removeClass("static");
        }
    });


/* ===================================
    sticky header
    ====================================== */

    $(window).scroll(function() {
        var sticky = $('.navbar-header'),
        scroll = $(window).scrollTop();

        if (scroll >= 40) { 
            sticky.addClass('sticky'); 
        }
        else { 
            sticky.removeClass('sticky');
        }
    });

});


/* ===================================
    Loading Timeout
    ====================================== */

    $(window).on("load", function() {
        $('.preloader').fadeOut(); 
    });




 /* ===================================
    header menu Active class
    ====================================== */

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 300, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

    function onScroll(event){
        var currentScrollPos = $(document).scrollTop();
        $('.navbar_collapse ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= currentScrollPos+1 && refElement.position().top + refElement.height() > currentScrollPos+1) {
                $('.navbar_collapse ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }



