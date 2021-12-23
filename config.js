const eventRegister = require('./eventRegister');

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
};
