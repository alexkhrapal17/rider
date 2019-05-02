$(function() {

    AOS.init();

    // header
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance) {
            $(".main-header").addClass("scroll-class");
        } else {
            $(".main-header").removeClass("scroll-class");
        }
    }).scroll();

    $(function () {
        $('.nav-link').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length && $(window).width() > 767) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 99
                    }, 500);
                    return false;
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 52
                    }, 500);
                    return false;
                }
            }
        });
    });

    // main slider
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        fade: true,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false
                }
            }
        ]
    });

    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // collapse
    $('.distribution-select').on('click', function (e) {
       e.preventDefault();
       $('.results-wrapper').slideDown();
    });

    // mobile nav
    $('.mobile-menu-button').on('click', function (e) {
        e.preventDefault();
        if ($('.mobile-menu-button').hasClass('open')) {
            $('.mobile-menu-button').removeClass('open')
        } else {
            $('.mobile-menu-button').addClass('open');
        }

        if ($('.main-nav').hasClass('show')) {
            $('.main-nav').removeClass('show')
        } else {
            $('.main-nav').addClass('show');
        }
    });

    // close mobile menu on click
    if ($(window).width() < 767) {
        $('.main-nav .nav-link').on('click', function (e) {
            e.preventDefault();
            $('.mobile-menu-button').removeClass('open');
            $('.main-nav').removeClass('show');
        });

        // scroll to active section
        $('.tabs-nav .tabs__caption li').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $('.tabs-details-wrap').offset().top - 53
            },'slow');
        });
    }

});
