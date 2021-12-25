const $ = require('jquery');
const env = require('./env');

const $body = $('body');
const $mobilePopup = $('header.koni-header-desktop');
const $mobileHeader = $('header.koni-header-mobile');
const $menuBtn = $mobileHeader.find('.koni-header-mobile__hamberger');

const isMobileMenuOpen = () => {
    return $mobileHeader.hasClass('open');
}

const toggleMobileMenu = () => {
    console.log(123);
    if (isMobileMenuOpen()) {
        $mobileHeader.css('position', 'fixed');
    }

    $mobileHeader.toggleClass('open');
    $mobilePopup.fadeToggle(300, () => {
        if (isMobileMenuOpen()) {
            $mobileHeader.css('position', 'fixed');
        }
    });
    $body.toggleClass('no-scrolling');
    setTimeout(() => {
        $body.toggleClass('position-fixed');
    }, 250)

}


const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
}

module.exports = () => {
    registerEvents();
}
