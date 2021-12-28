const $ = require('jquery');
window.jQuery = require('jquery');
const header = require('./modules/header');
slick = require('slick-carousel');
$(function () {
    header();
    $('.koni-hp-ourteam-slick-wrapper').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1646,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.koni-hp-ouradvisor-slicker-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    })
});
