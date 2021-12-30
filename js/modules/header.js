const $ = require('jquery');
const env = require('./env');

const $body = $('body');
const $mobilePopup = $('header.koni-header-desktop');
const $mobileHeader = $('header.koni-header-mobile');
const $menuBtn = $mobileHeader.find('.koni-header-mobile__hamberger');
const $menuLinkBtn = $('a.koni-header-link');

const isMobileMenuOpen = () => {
    return $mobileHeader.hasClass('open');
}

const toggleMobileMenu = () => {
    console.log('isMobileMenuOpen()', isMobileMenuOpen())
    if (isMobileMenuOpen()) {
        $mobileHeader.css('position', 'fixed');
    }

    $mobileHeader.toggleClass('open');
    $mobilePopup.fadeToggle(200, () => {
        if (isMobileMenuOpen()) {
            $mobileHeader.css('position', 'fixed');
        }
    });
    $body.toggleClass('no-scrolling');
    setTimeout(() => {
        $body.toggleClass('position-fixed');
    }, 250)
}

const clickToLink = () => {
    if ($(window).width() <= 576) {
        $mobileHeader.css('position', 'fixed');
        $mobileHeader.removeClass('open');
        $mobilePopup.fadeToggle(200);
        $body.removeClass('no-scrolling');
        $body.removeClass('position-fixed');
    }
}


const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
    $menuLinkBtn.on('click', clickToLink);
}

module.exports = () => {
    registerEvents();

}
