$(function () {
    // banner slider
    $('.banner-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    // filter
    var containerEl = document.querySelector('.project-filter');

    var mixer = mixitup(containerEl);

    // video
    $('.venobox').venobox();

    // counter
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    // blog slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: false,
        speed: 1500,
        autoplaySpeed: 2000,
        arrows: false,
    });

})