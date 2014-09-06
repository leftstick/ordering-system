/**
 *
 *  Defines `osOverlay` service helps developer controlling overlay
 *
 *
 *  @author  Howard.Zuo
 *  @date    Sep 6th, 2014
 *
 */
(function(define) {
    'use strict';

    var defaults = {
        title: '',
        message: '',
        yesTxt: '确定',
        noTxt: '取消',
        showNo: true,
        yesHandler: function($event) {
            this.toggle('overlay', 'off');
            $event.stopPropagation();
        },
        noHandler: function($event) {
            this.toggle('overlay', 'off');
            $event.stopPropagation();
        }
    };

    define(['angular', 'lodash'], function(angular, _) {

        var modulename = 'osOverlay';
        var module = angular.module(modulename, []);

        /**
         * Directive definition
         *
         * @constructor
         */
        var osOverlay = function($rootScope) {
            var factory = {};
            defaults.yesHandler = _.bind(defaults.yesHandler, $rootScope);
            defaults.noHandler = _.bind(defaults.noHandler, $rootScope);

            factory.show = function(opts) {
                if (!opts) {
                    return;
                }
                var options = _.defaults(opts, defaults);
                $rootScope.overlay = {};
                _.assign($rootScope.overlay, options);
                $rootScope.toggle('overlay', 'on');
            };
            return factory;
        };

        //Register osOverlay factory
        module.factory(modulename, ['$rootScope', osOverlay]);

        return {
            name: modulename
        };

    });

}(define));