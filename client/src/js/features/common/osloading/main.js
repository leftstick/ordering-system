/**
 *
 *  Defines `os-loading` directive which can only be used on body
 *
 *  usage:
 *
 *       <body os-loading></body>
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var modulename = 'osLoading';
        var module = angular.module(modulename, []);

        /**
         * Directive definition
         *
         * @constructor
         */
        var odLoading = function($rootScope) {

            // Return configured, directive instance
            return {
                restrict: 'A',
                link: function() {
                    $rootScope.$on('$routeChangeStart', function() {
                        $rootScope.loading = true;
                    });

                    $rootScope.loadFin = function() {
                        $rootScope.loading = false;
                    };

                }
            };
        };

        //Register navbar directive
        module.directive(modulename, ['$rootScope', odLoading]);


        return {
            name: modulename
        };

    });

}(define));