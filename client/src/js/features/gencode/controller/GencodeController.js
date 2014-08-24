/**
 *  Defines the GencodeController controller
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define, _) {
    'use strict';

    /**
     * Register the GencodeController class with RequireJS
     */
    define([], function() {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var GencodeController = function($rootScope, $scope, $timeout) {
            $rootScope.hasSubtitle = true;
            $rootScope.loadFin();
            $scope.finalNum = 0;
            $scope.input = {
                selectedNum: 0,
                inputNum: undefined
            };
            $scope.idStateMap = {};
            var promise;

            $rootScope.$on('mobile-angular-ui.toggle.toggled', function(e, id, state) {
                $scope.idStateMap[id].state = state;
                if (promise) {
                    $timeout.cancel(promise);
                }
                promise = $timeout(function() {
                    var found = _.find($scope.idStateMap, function(value) {
                        return value.state;
                    });
                    if (!found) {
                        $scope.input.inputNum = '';
                    }
                    $scope.input.selectedNum = found ? found.num : 0;
                    $scope.finalNum = $scope.input.selectedNum;
                });
            });

            $scope.confirm = function() {
                alert($scope.finalNum);
            };

            $scope.$watch('input.inputNum', function(newValue) {
                $scope.finalNum = newValue;
            }, true);

            $scope.$on('$destroy', function() {
                $rootScope.hasSubtitle = false;
            });
        };

        //Expose this controller definition as a RequireJS module
        //Note: specify the inline annotation explicity
        return ['$rootScope', '$scope', '$timeout', GencodeController];

    });


})(define, _);