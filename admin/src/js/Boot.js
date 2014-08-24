/**
 *  Boot.js helps you manually fire up the whole application in Angular way.
 *
 *  @author  Howard.Zuo
 *  @date    Aug 3th, 2014
 *
 */
(function(define, _) {
    'use strict';

    //specify each feature module here explicitly
    define([], function() {

        var appName = 'ordering-admin';
        var modules = Array.prototype.slice.call(arguments, 0);
        var ngModules = _.filter(modules, function(module) {
            return module && module.name && typeof module === 'object';
        });

        var dependencies = ['ngRoute'];

        _.each(ngModules, function(module) {
            if (module.name) {
                dependencies.push(module.name);
            }
        });

        var configModules = _.filter(modules, function(module) {
            return module && module.config && module.config.call;
        });

        /**
         * Start the main application
         *
         * We manually start this process; since ng:app is gone
         * ( necessary to allow Loader splash pre-AngularJS activity to finish properly )
         */
        var app = angular.module(appName, dependencies);

        for (var i = 0; i < configModules.length; i++) {
            var module = configModules[i];
            module.config(ngModules, app);
        }

        angular.bootstrap(document, [appName]);

        return app;
    });


}(define, _));