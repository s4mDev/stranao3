import '../scss/main.scss';
import 'slick-slider';

$('.first-sec__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 2000,
});