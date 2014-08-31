/**
 *  boot.js organize all the fw/*, features/* in angular style.
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define, _) {
    'use strict';

    //specify each feature module here explicitly
    define([
        'fw/RouteConfig',
        'common/osloading/main',
        'common/osnavtop/main',
        'common/osnumber/main',
        'common/osnavbottom/main',
        'features/gencode/main'
    ], function() {

            var appName = 'ordering-client';
            var modules = Array.prototype.slice.call(arguments, 0);
            var features = _.filter(modules, function(module) {
                return module && module.name && typeof module === 'object';
            });

            var dependencies = ['ngTouch', 'ngRoute', 'mobile-angular-ui'];

            _.each(features, function(module) {
                if (module.name) {
                    dependencies.push(module.name);
                }
            });

            var configModules = _.filter(modules, function(module) {
                return module && module.call;
            });

            /**
             * Start the main application
             *
             * We manually start this process; since ng:app is gone
             *
             */
            var app = angular.module(appName, dependencies);

            for (var i = 0; i < configModules.length; i++) {
                var module = configModules[i];
                module(features, app);
            }

            angular.bootstrap(document, [appName]);

            return app;
        });


}(define, _));