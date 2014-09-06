/**
 *
 *  Defines `osNavTop` directive which can only be used on .navbar-absolute-top div
 *
 *  usage:
 *
 *       <div class="navbar navbar-app navbar-absolute-top" os-top-nav></div>
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define, require) {
    'use strict';

    var baseUrl = require.toUrl('common');

    define(['angular'], function(angular) {

        var modulename = 'osNavTop';
        var module = angular.module(modulename, []);

        /**
         * Directive definition
         *
         * @constructor
         */
        var osNavTop = function() {

            // Return configured, directive instance
            return {
                restrict: 'A',
                templateUrl: baseUrl + '/osnavtop/main.html'
            };
        };

        //Register navbar directive
        module.directive(modulename, [osNavTop]);

        return {
            name: modulename
        };

    });

}(define, require));