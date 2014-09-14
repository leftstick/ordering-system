/**
 *  boot.js organize all the fw/*, features/* in angular style.
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define) {
    'use strict';

    //specify each feature module here explicitly
    define([
        'angular',
        'lodash',
        'angular-touch',
        'angular-route',
        'mobile-angular-ui',
        'angular-number-picker',
        'css!mobile-angular-ui-base-css',
        'css!mailcss',
        'conf/RouteConfig',
        'common/osloading/main',
        'common/osnavtop/main',
        'common/osnavbottom/main',
        'common/osoverlay/main',
        'features/gencode/main'
    ], function() {

            var appName = 'ordering-client';
            var modules = Array.prototype.slice.call(arguments, 0);

            var angular = modules[0];
            var _ = modules[1];

            var features = _.filter(modules, function(module) {
                return angular.isObject(module) && module.name;
            });

            var dependencies = ['ngTouch', 'ngRoute', 'mobile-angular-ui', 'angularNumberPicker'];

            Array.prototype.push.apply(dependencies, _.pluck(features, 'name'));

            var configModules = _.filter(modules, function(module) {
                return angular.isObject(module) && module.type === 'config' && angular.isFunction(module.func);
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
                module.func(features, app);
            }

            angular.bootstrap(document, [appName]);

            return app;
        });


}(define));