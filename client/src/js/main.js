/**
 *
 *  A require module should contain require configurations.
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 **/
(function(requirejs) {
    'use strict';

    // Configure loading modules from the js directory
    var baseUrl = '/';

    requirejs.config({
        baseUrl: baseUrl,
        paths: {
            'fw': 'js/fw',
            'conf': 'js/fw/conf',
            'libs': 'js/fw/libs',
            'features': 'js/features',
            'common': 'js/features/common',
            'lodash': 'bower/lodash/dist/lodash.min',
            'angular': 'bower/angular/angular.min',
            'angular-number-picker': 'bower/angular-number-picker/angular-number-picker.min',
            'mobile-angular-ui': 'bower/mobile-angular-ui/dist/js/mobile-angular-ui.min',
            'mobile-angular-ui-base-css': 'bower/mobile-angular-ui/dist/css/mobile-angular-ui-base.min',
            'require-css': 'bower/require-css',
            'angular-touch': 'bower/angular-touch/angular-touch.min',
            'angular-route': 'bower/angular-route/angular-route.min',
            'mailcss': 'css/main'
        },
        shim: {
            'lodash': {
                exports: '_'
            },
            'angular': {
                exports: 'angular',
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
            },
            'angular-number-picker': {
                deps: ['angular']
            },
            'mailcss': {
                deps: ['mobile-angular-ui-base-css']
            }
        },
        map: {
            '*': {
                'css': 'require-css/css.min'
            }
        }
    });

    requirejs(['js/boot']);

}(requirejs));