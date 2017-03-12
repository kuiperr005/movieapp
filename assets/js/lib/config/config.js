require.config({
    baseUrl: 'assets/js',
    paths: {
        underscore: 'lib/vendor/underscore.min',
        routie: 'lib/vendor/routie',
        promise: 'lib/vendor/promise.min',
        transparency: 'lib/vendor/transparency.min',
        text: 'lib/vendor/text',
        hammer: 'lib/vendor/hammer.min'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'routie': {
            exports: 'routie'
        },
        'promise': {
            exports: 'promise'
        },
        'hammer': {
            exports: 'Hammer'
        }
    }
});

require(['moviebucket'], function(Moviebucket) {
    console.log('initialize app from config');
    Moviebucket.controller.init();
});