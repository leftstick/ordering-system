/**
 *
 *  A require module should contain require configurations.
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 **/
(function(requirejs) {

    // Configure loading modules from the js directory
    var baseUrl = '/';

    requirejs.config({
        baseUrl: baseUrl,
        paths: {
            'fw': 'js/fw',
            'features': 'js/features',
            'common': 'js/features/common',
            'lodash': 'bower/lodash/dist/lodash.min',
            'angular': 'bower/angular/angular.min',
            'mobile-angular-ui': 'bower/mobile-angular-ui/dist/js/mobile-angular-ui.min',
            'mobile-angular-ui-base-css': 'bower/mobile-angular-ui/dist/css/mobile-angular-ui-base.min',
            'require-css': 'bower/require-css',
            'angular-touch': 'bower/angular-touch/angular-touch.min',
            'angular-route': 'bower/angular-route/angular-route.min'
        },
        shim: {
            'lodash': {
                exports: '_'
            },
            'angular': {
                deps: ['lodash']
            },
            'angular-touch': {
                deps: ['angular']
            },
            'angular-route': {
                deps: ['angular']
            },
            'mobile-angular-ui': {
                deps: ['angular']
            }
        },
        map: {
            '*': {
                'style': 'require-css/css.min'
            }
        }
    });


    var preLoadCss = ['style!mobile-angular-ui-base-css', 'style!css/main'];

    var preLoadJs = ['angular-touch',
        'mobile-angular-ui',
        'angular-route'
    ];

    var preLoads = preLoadCss.concat(preLoadJs);

    //Load all preload dependencies
    requirejs(preLoads, function() {
        // Start loading the main app file. Put all of
        // your application logic in there.
        requirejs(['js/boot']);

    });

}(requirejs));