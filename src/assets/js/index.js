/* eslint-disable*/
import '../scss/main.scss';
import 'slick-slider';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import AOS from 'aos';
import 'slick-slider';
import 'jquery.maskedinput/src/jquery.maskedinput';

$('.popup-youtube').magnificPopup({
    type: 'iframe'
});

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
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        }
    }],
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
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
});

AOS.init();

var width = $(window).width();
if (width >= 576) {
    AOS.init();
}

$('.qa__accord-header').click(function () {
    $(this).toggleClass('qa__accord-header_open');
});

jQuery(function ($) {
    const section = $('.js-qaBlock');
    const nav = $('.js-qaNav');
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

jQuery(function ($) {
    const section = $('.js-regBlock');
    const nav = $('.js-regNav');
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

$('#file1').change(function (e) {
    $('#filename1').text(this.files[0].name);
    $('#filename1').addClass('file-select');
    $('#filename1').parent('.reg__form-wrapper').addClass('selected-file');
});
$('#reset1').on('click', function () {
    $('#file1').val('');
});

var control = $("#file1");
var clearBn = $("#reset1");
clearBn.on("click", function () {
    control.replaceWith(control.val('').clone(true));
});

control.on({
    change: function () {
        console.log("Changed")
    },
    focus: function () {
        console.log("Focus")
    }
});

$('#file2').change(function (e) {
    $('#filename2').text(this.files[0].name);
    $('#filename2').addClass('file-select');
    $('#filename2').parent('.reg__form-wrapper').addClass('selected-file');
});
$('#reset2').on('click', function () {
    $('#file2').val('');
});

var control2 = $("#file2");
var clearBn2 = $("#reset2");
clearBn2.on("click", function () {
    control2.replaceWith(control2.val('').clone(true));
});

control2.on({
    change: function () {
        console.log("Changed")
    },
    focus: function () {
        console.log("Focus")
    }
});

$('#file3').change(function (e) {
    $('#filename3').text(this.files[0].name);
    $('#filename3').addClass('file-select');
    $('#filename3').parent('.reg__form-wrapper').addClass('selected-file');
});
$('#reset3').on('click', function () {
    $('#file3').val('');
});

var control3 = $("#file3");
var clearBn3 = $("#reset3");
clearBn3.on("click", function () {
    control3.replaceWith(control3.val('').clone(true));
});

control3.on({
    change: function () {
        console.log("Changed")
    },
    focus: function () {
        console.log("Focus")
    }
});


$('.programm__button--js').click(function () {
    $('body').addClass('open-offer');
    const ID = $(this).attr('data-formId');
    console.log(ID);
    $('#formId').val(ID);
});

$('.offer-popup__close').click(function () {
    $('body').removeClass('open-offer');
});

$('.backdrop').click(function () {
    $('body').removeClass('open-offer');
});

$("#phone-mask").mask("+ 7 (999) 999 - 99 - 99", {});

$('#agree').on('change', function () {
    if ($('#agree').prop('checked')) {
        $('.reg__form-submit').attr('disabled', false);
    } else {
        $('.reg__form-submit').attr('disabled', true);
    }
});

$('#agree').on('change', function () {
    if ($('#agree').prop('checked')) {
        $('.get__form-submit').attr('disabled', false);
    } else {
        $('.get__form-submit').attr('disabled', true);
    }
});

$('#agree1').on('change', function () {
    if ($('#agree1').prop('checked')) {
        $('.reg__form-submit').attr('disabled', false);
    } else {
        $('.reg__form-submit').attr('disabled', true);
    }
});

$('.mob-header__burger').click(function () {
    $('body').toggleClass('open-mob-nav');
});