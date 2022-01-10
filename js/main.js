var $ = require('jquery');
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
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        appendDots: '.koni-hp-ourteam-slick-controls',
        appendArrows: '.koni-hp-ourteam-slick-controls'
    })

    $('.koni-hp-ouradvisor-slicker-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    })

    const koniWallet = $('.koni-hp-our-product-koni-wallet');
    const koniConnect = $('.koni-hp-our-product-koni-connect');
    const koniVerse = $('.koni-hp-our-product-koniverse');

    const koniWalletText = koniWallet.find('.koni-filled-info-box__text');
    const koniConnectText = koniConnect.find('.koni-filled-info-box__text');
    const koniVerseText = koniVerse.find('.koni-filled-info-box__text');

    const koniWalletBtn = koniWallet.find('.koni-button-with-icon-container');
    const koniConnectBtn = koniConnect.find('.koni-button-with-icon-container');
    const koniVerseBtn = koniVerse.find('.koni-button-with-icon-container');

    const koniWalletBtnText = koniWalletBtn.find('.koni-button-with-icon__text');
    const koniConnectBtnText = koniConnectBtn.find('.koni-button-with-icon__text');
    const koniVerseBtnText = koniVerseBtn.find('.koni-button-with-icon__text');

    const koniWalletBtnImg = koniWalletBtn.find('.koni-button-with-icon__icon use');
    const koniConnectBtnImg = koniConnectBtn.find('.koni-button-with-icon__icon use');
    const koniVerseBtnImg = koniVerseBtn.find('.koni-button-with-icon__icon use');

    if (koniWalletBtnText.text().trim() === 'show less') {
        koniWallet.addClass('h-info-show-more');
        koniWalletText.removeClass('h-info-text-show-less');
    } else {
        koniWallet.addClass('h-info-show-less');
    }

    if (koniConnectBtnText.text().trim() === 'show less') {
        koniConnect.addClass('h-info-show-more');
        koniConnectText.removeClass('h-info-text-show-less');
    } else {
        koniConnect.addClass('h-info-show-less');
    }

    if (koniVerseBtnText.text().trim() === 'show less') {
        koniVerse.addClass('h-info-show-more');
        koniVerseText.removeClass('h-info-text-show-less');
    } else {
        koniVerse.addClass('h-info-show-less');
    }

    let clampTimeout;

    function closeInfoBox(infoBox, infoBoxText, infoBoxContent, infoBoxImg) {
        infoBox.addClass('h-info-show-less');
        infoBox.removeClass('h-info-show-more');
        infoBoxText.text('show more');
        infoBoxContent.addClass('h-info-text-show-less');
        infoBoxImg.attr("href", "/images/plus.svg#icon")
    }

    function openInfoBox(infoBox, infoBoxText, infoBoxContent, infoBoxImg) {
        infoBox.addClass('h-info-show-more');
        infoBox.removeClass('h-info-show-less');
        infoBoxText.text('show less');
        infoBoxImg.attr("href", "/images/minus.svg#icon")
        clearTimeout(clampTimeout);
        clampTimeout = setTimeout(() => {
            infoBoxContent.removeClass('h-info-text-show-less');
        }, 300);

    }

    koniWalletBtn.on('click', function () {
        if (koniWalletBtnText.text().trim() === 'show less') {
            closeInfoBox(koniWallet, koniWalletBtnText, koniWalletText, koniWalletBtnImg);
            openInfoBox(koniConnect, koniConnectBtnText, koniConnectText, koniConnectBtnImg);
        } else {
            openInfoBox(koniWallet, koniWalletBtnText, koniWalletText, koniWalletBtnImg);
            closeInfoBox(koniConnect, koniConnectBtnText, koniConnectText, koniConnectBtnImg);
            closeInfoBox(koniVerse, koniVerseBtnText, koniVerseText, koniVerseBtnImg);
        }
    })

    koniConnectBtn.on('click', function () {
        if (koniConnectBtnText.text().trim() === 'show less') {
            closeInfoBox(koniConnect, koniConnectBtnText, koniConnectText, koniConnectBtnImg);
            openInfoBox(koniVerse, koniVerseBtnText, koniVerseText, koniVerseBtnImg);
        } else {
            closeInfoBox(koniWallet, koniWalletBtnText, koniWalletText, koniWalletBtnImg);
            openInfoBox(koniConnect, koniConnectBtnText, koniConnectText, koniConnectBtnImg);
            closeInfoBox(koniVerse, koniVerseBtnText, koniVerseText, koniVerseBtnImg);
        }
    })

    koniVerseBtn.on('click', function () {
        if (koniVerseBtnText.text().trim() === 'show less') {
            closeInfoBox(koniVerse, koniVerseBtnText, koniVerseText, koniVerseBtnImg);
            openInfoBox(koniWallet, koniWalletBtnText, koniWalletText, koniWalletBtnImg);
        } else {
            closeInfoBox(koniWallet, koniWalletBtnText, koniWalletText, koniWalletBtnImg);
            closeInfoBox(koniConnect, koniConnectBtnText, koniConnectText, koniConnectBtnImg);
            openInfoBox(koniVerse, koniVerseBtnText, koniVerseText, koniVerseBtnImg);
        }
    })

    function clearActiveClass(itemArr) {
        itemArr.each(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            }
        })
    }


    $(document).unbind("click.menuLinkEvent");
    if ($(window).width() <= 576) {
        $(document).on('click.menuLinkEvent', 'a.koni-header-link', function(event) {
            event.preventDefault();
            var $anchor = $(this);
            const $target = $($anchor.attr('href').substring(1)).offset().top;
            clearActiveClass($('a.koni-header-link'));
            $anchor.addClass('active');
            $('html, body').stop().animate({scrollTop: $target}, 500);
        });
    } else {

        $('a.koni-header-link').on('click', function(event) {
            event.preventDefault();
            var $anchor = $(this);
            const $target = $($anchor.attr('href').substring(1)).offset().top;
            clearActiveClass($('a.koni-header-link'));
            $anchor.addClass('active');
            $('html, body').stop().animate({scrollTop: $target}, 500);
        });
    }
});
