/**
 *
 *  A module which contains the main configurations of the whole application.
 *
 *  @author  Howard.Zuo
 *  @date    Aug 3th, 2014
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
            'features': 'js/features',
            'common': 'js/features/common',
            'jquery': 'bower/jquery/dist/jquery.min',
            'lodash': 'bower/lodash/dist/lodash.min',
            'bootstrap': 'bower/bootstrap/dist/js/bootstrap.min',
            'bootstrapCss': 'bower/bootstrap/dist/css/bootstrap.min',
            'angular': 'bower/angular/angular.min',
            'require-css': 'bower/require-css',
            'angular-route': 'bower/angular-route/angular-route.min'
        },
        shim: {
            'jquery': {
                exports: '$'
            },
            'lodash': {
                exports: '_'
            },
            'bootstrap': {
                deps: ['jquery']
            },
            'angular': {
                deps: ['lodash', 'jquery']
            },
            'angular-route': {
                deps: ['angular']
            }
        },
        map: {
            '*': {
                'style': 'require-css/css.min'
            }
        }
    });


    var preLoadCss = ['style!bootstrapCss', 'style!css/main'];

    var preLoadJs = ['bootstrap',
        'angular-route'
    ];

    var preLoads = preLoadCss.concat(preLoadJs);

    //Load all preload dependencies
    requirejs(preLoads, function() {
        // Start loading the main app file. Put all of
        // your application logic in there.
        requirejs(['js/Boot']);

    });

}(requirejs));