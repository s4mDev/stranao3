import '../scss/main.scss';
import 'slick-slider';
import AOS from 'aos';

$('.first-sec__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button class="slick-prev"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9.0498L5 8.85941L1.3636 5.0498L5 1.2402L4.81814 1.0498L1 5.0498L4.81814 9.0498Z" fill="#72A631" stroke="#72A631" stroke-width="1.4" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9.0498L5 8.85941L1.3636 5.0498L5 1.2402L4.81814 1.0498L1 5.0498L4.81814 9.0498Z" fill="#72A631" stroke="#72A631" stroke-width="1.4" stroke-linejoin="round"/></svg></button>',
    arrows: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.about-place__gallery').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button class="slick-prev"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9.0498L5 8.85941L1.3636 5.0498L5 1.2402L4.81814 1.0498L1 5.0498L4.81814 9.0498Z" fill="#72A631" stroke="#72A631" stroke-width="1.4" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9.0498L5 8.85941L1.3636 5.0498L5 1.2402L4.81814 1.0498L1 5.0498L4.81814 9.0498Z" fill="#72A631" stroke="#72A631" stroke-width="1.4" stroke-linejoin="round"/></svg></button>',
    arrows: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.leader__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button class="slick-prev"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9.0498L5 8.85941L1.3636 5.0498L5 1.2402L4.81814 1.0498L1 5.0498L4.81814 9.0498Z" fill="#72A631" stroke="#72A631" stroke-width="1.4" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9.0498L5 8.85941L1.3636 5.0498L5 1.2402L4.81814 1.0498L1 5.0498L4.81814 9.0498Z" fill="#72A631" stroke="#72A631" stroke-width="1.4" stroke-linejoin="round"/></svg></button>',
    arrows: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
});

AOS.init();

$('.qa__accord-header').click(function () {
    $(this).toggleClass('qa__accord-header_open');
});

jQuery(function ($) {
    const section = $('.qa__accord-block');
    const nav = $('.qa-page__nav');
    let navHeight = nav.outerHeight();
    window.addEventListener('orientationchange', function () {
        navHeight = nav.outerHeight();
    }, false);
    $(window).on('scroll', function () {
        const position = $(this).scrollTop();
        section.each(function () {
            const top = $(this).offset().top - navHeight - 5;
            const bottom = top + $(this).outerHeight();
            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('qa-page__nav-link_active');
                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('qa-page__nav-link_active');
            }
        });
    });

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeight,
        }, 487);

        return false;
    });
});