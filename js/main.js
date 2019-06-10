$(document).ready(function () {
    $('.intro-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    $('.accordeon li').on('click', function () {
        $(this).toggleClass('active')
    });
});