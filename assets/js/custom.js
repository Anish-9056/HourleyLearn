$(document).ready(function () {

    "use strict";


    /* =================================
       LOADER                     
    =================================== */
    // makes sure the whole site is loaded
    $(window).on('load', function () {

        // will first fade out the loading animation
        $(".loader-inner").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".loader").fadeOut("slow");

    });

    (function ($) {
        var size = $(document).width();


        //SMALLER HEADER WHEN SCROLL PAGE
        $(window).on('load resize scroll', function smallerMenu() {

            var sc = $(window).scrollTop();
            if ($(window).width() >= 992) {
                if (sc > 40) {
                    $('#header-sroll').addClass('small');
                    //$('.top_header').addClass('hide');
                } else {
                    $('#header-sroll').removeClass('small');
                    //$('.top_header').removeClass('hide');
                }
            }


        });


        // VERIFY WINDOW SIZE
        function windowSize() {
            size = $(document).width();
            if (size >= 991) {
                $('body').removeClass('open-menu');
                $('.hamburger-menu .bar').removeClass('animate');
            }
        };

        // ESC BUTTON ACTION
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $('.bar').removeClass('animate');
                $('body').removeClass('open-menu');
                $('header .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function (index) {
                    $(this).removeClass('open-sub');
                });
            }
        });

        $('#cd-primary-nav > li').hover(function () {
            var $whidt_item = $(this).width();
            $whidt_item = $whidt_item - 8;

            var $prevEl = $(this).prev('li');
            var $preWidth = $(this).prev('li').width();
            var pos = $(this).position();
            pos = pos.left + 4;
            $('header .desk-menu .menu-container .menu>li.line').css({
                width: $whidt_item,
                left: pos,
                opacity: 1
            });
        });

        $('.address_ca').hide()
        $(".tableViewer").click(function(){
            //debugger
       $(this).next('.address_ca').slideToggle(300);
       $('.tableViewer').not(this).next('.address_ca').slideUp();
       $(this).toggleClass('rotateIn')
       $('.tableViewer').not(this).removeClass('rotateIn')
        })
        //alert('b')
        $("#card li").click(function () {
            //alert('cicked')
            $(this).addClass('pay-active')
            $("#card li").not(this).removeClass('pay-active')
        })

        // ANIMATE HAMBURGER MENU
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .bar').toggleClass('animate');
            if ($('body').hasClass('open-menu')) {
                $('body').removeClass('open-menu');
            } else {
                $('body').toggleClass('open-menu');
            }
        });
        size = $(document).width();
       
        $('header .desk-menu .menu-container .menu .menu-item-has-children > a').on('click', function (e) {
            e.preventDefault();
            if (size <= 991) {

                $("header .desk-menu .menu-container .menu .menu-item-has-children > a").not($(this)).removeClass("active");
                $(this).toggleClass("active");



              
            }
        });

      

        $('body .over-menu').on('click', function () {
            $('body').removeClass('open-menu');
            $('.bar').removeClass('animate');
        });

        $(document).ready(function () {
            windowSize();

        });

     

        $(window).resize(function () {
            windowSize();
        });

    })(jQuery);




   

    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $(".open-popup-link").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: "mfp-fade"
    });




    $(window).on("load resize ", function () {
        var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
        $('.tbl-header').css({
            'padding-right': scrollWidth
        });
    }).resize();


    $("#own-2").owlCarousel({
        stagePadding: 500,
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        lazyLoad: true,
        dots: true,
        nav: false,

        // navText: ["<i class='icon-left-arrow'></i>", "<i class='icon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 20
            },
            600: {
                items: 1,
                stagePadding: 50
            },
            1000: {
                items: 1,
                stagePadding: 100
            },
            1200: {
                items: 1,
                stagePadding: 130
            },
            1400: {
                items: 1,
                stagePadding: 330
            },
            1600: {
                items: 1,
                stagePadding: 330
            },
            1800: {
                items: 1,
                stagePadding: 330
            }
        }
    });
    $('#buy_apply').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        slideTransition: 'linear',
        //autoplayTimeout: 0,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },

    })
    $('#servies_slide, #news, #events_slide').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        slideTransition: 'linear',
        //autoplayTimeout: 0,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },

    })
    $('#resource_sec, #knowledge').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        slideTransition: 'linear',
        //autoplayTimeout: 0,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },

    })
    $('#cunsultation').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        navText: ["<i class='icon-left-arrow'></i>", "<i class='icon-right-arrow'></i>"],
        dots: true,
        autoplay: false,
        slideTransition: 'linear',
        //autoplayTimeout: 0,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },

    })
    $("#authentic_slide").owlCarousel({
        stagePadding: 200,
        loop: true,
        dots: false,
        margin: 10,
        items: 1,
        autoplay: true,
        lazyLoad: true,
        nav: true,
        navText: ["<i class='icon-left-arrow'></i>", "<i class='icon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 60
            },
            600: {
                items: 1,
                stagePadding: 90
            },
            1000: {
                items: 1,
                stagePadding: 100
            },
            1200: {
                items: 1,
                stagePadding: 130
            },
            1400: {
                items: 1,
                stagePadding: 130
            },
            1600: {
                items: 1,
                stagePadding: 130
            },
            1800: {
                items: 1,
                stagePadding: 130
            }
        }
    });
    /* =================================
       NAVBAR COLLAPSE ON SCROLL
    =================================== */
    $(window).on('scroll', function () {
        var b = $(window).scrollTop();
        if (b > 60) {
            $(".navbar").addClass("top-nav-collapse");
        } else {
            $(".navbar").removeClass("top-nav-collapse");
        }
    });


    /* ===========================================================
       PAGE SCROLLING FEATURE
    ============================================================== */
    $('a.smooth-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    /* ===========================================================
       BACK TO TOP BUTTON
    ============================================================== */
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.top');

    //hide or show the "back to top" link
    $(window).on('scroll', function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, scroll_top_duration);
    });


    /* ===========================================================
        WOW ANIMATIONS                   
    ============================================================== */
    new WOW().init();


    /* ===========================================================
       HIDE MOBILE MENU AFTER CLICKING 
    ============================================================== */
    $('.navbar-nav>li>a:not(#dLabel)').on('click', function () {
        $('#navbar-collapse').removeClass("in").addClass("collapse");
    });




    /* ===========================================================
       MAGNIFIC POPUP
    ============================================================== */
    $('.mp-singleimg').magnificPopup({
        type: 'image'
    });

    $('.mp-gallery').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
    });

    $('.mp-iframe').magnificPopup({
        type: 'iframe'
    });



    /* ===========================================================
       COUNTER COUNTER
    ============================================================== */
    if ($('.counter').length) {
        var o = $('.counter'),
            cc = 1;

        $(window).on('scroll', function () {
            var elemPos = o.offset().top,
                elemPosBottom = o.offset().top + o.height(),
                winHeight = $(window).height(),
                scrollToElem = elemPos - winHeight,
                winScrollTop = $(this).scrollTop();

            if (winScrollTop > scrollToElem) {
                if (elemPosBottom > winScrollTop) {
                    if (cc < 2) {
                        cc = cc + 2;
                        o.countTo();
                    }
                }
            }
        });
    }




    /* ===========================================================
       BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8  
    ============================================================== */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }
    //view more view less
    $(".content").hide();
    $(".show_hide").on("click", function () {
        //debugger
        var txt = $(this).prev('.content').is(':visible') ? '+ 20 More' : 'Collapse';
        $(this).text(txt);
        $(this).prev('.content').slideToggle(200);
    });
    $("#showFilter, #hideFilter").on("click", function () {

        $('.filer_section').toggleClass('active');
    });
    $(".SaveJob").on("click", function () {
        debugger
        $(this).html('<i class="pull-left fa fa-check text-success"></i>Saved');
        //$(this).prev('.saveButton').addClass('bg-gradient')
    });


    // filtr for job
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });
    //$(".filterForGov").hide()
    $(".grid_filterInner a").click(function () {
        $(this).addClass('active-btn')
        $(".grid_filterInner a").not(this).removeClass('active-btn')

    })

    //resume Template
    $(".template_selection img").click(function () {
        debugger
        $(this).addClass('bordered')
        $(".template_selection img").not(this).removeClass('bordered')

    })


    $('.more_specs').hide()
     $(".main_button").click(function(){
    $(this).next('.more_specs').slideToggle(300);
    $(this).toggleClass('clicked')
     })
   

     //custom file input
     $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });

}); // End $(document).ready Function