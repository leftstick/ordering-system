/**
 *
 *  Defines `osNavBottom` directive which can only be used on .navbar-absolute-bottom div
 *
 *  usage:
 *
 *       <div class="navbar navbar-app navbar-absolute-bottom" os-top-nav></div>
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define, require) {
    "use strict";

    var baseUrl = require.toUrl('common');

    define([], function() {

        var modulename = 'osNavBottom';
        var module = angular.module(modulename, []);

        /**
         * Directive definition
         *
         * @constructor
         */
        var osNavBottom = function($rootScope) {

            // Return configured, directive instance
            return {
                restrict: 'A',
                link: function($scope, element, attrs) {
                    $scope.browse = function() {
                      alert('shangwang');  
                    };
                },
                templateUrl: baseUrl + '/osnavbottom/main.html'
            };
        };

        //Register navbar directive
        module.directive(modulename, ['$rootScope', osNavBottom]);


        return {
            name: modulename
        };

    });

}(define, require));