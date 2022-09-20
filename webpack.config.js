const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
        headers: {
            'X-Frame-Options': 'sameorigin'
        },
    },
};
