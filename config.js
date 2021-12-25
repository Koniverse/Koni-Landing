const eventRegister = require('./eventRegister');
const aboutUs = require('./data/about-us.json');
const header = require('./data/header.json');
const footerLink = require('./data/footerLinks.json');

module.exports = {
    baseUrl: '',
    baseContext: 'koni-website',
    siteName: 'Koni',
    siteDescription: '',
    dateTimeFormat: 'ddd, MM/DD/YYYY - HH:mm',
    dateFormat: 'MM/DD/YYYY',
    postUrlStyle: 'POSTS_SLUG',
    locales: ['en'],
    defaultLocale: 'en',
    eventRegister,
    aboutUs,
    header,
    footerLink
};
