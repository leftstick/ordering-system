/**
 *  Defines the CodeController controller
 *
 *  @author  Howard.Zuo
 *  @date    Aug 31th, 2014
 *
 */
(function(define, _) {
    'use strict';

    /**
     * Register the CodeController class with RequireJS
     */
    define([], function() {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var CodeController = function($rootScope, $scope, $timeout) {
            $rootScope.hasSubtitle = true;
            $rootScope.loadFin();

            $scope.waitingNum = 7;

            $scope.$on('$destroy', function() {
                $rootScope.hasSubtitle = false;
            });
        };

        //Expose this controller definition as a RequireJS module
        //Note: specify the inline annotation explicity
        return ['$rootScope', '$scope', '$timeout', CodeController];

    });


})(define, _);