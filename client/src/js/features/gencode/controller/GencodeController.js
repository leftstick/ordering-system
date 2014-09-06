/**
 *  Defines the GencodeController controller
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define) {
    'use strict';

    /**
     * Register the GencodeController class with RequireJS
     */
    define(['lodash'], function(_) {

        /**
         * Constructor function used by AngularJS to create instances of this controller
         *
         * @constructor
         */
        var GencodeController = function($rootScope, $scope, $timeout, $location, osOverlay) {
            $rootScope.hasSubtitle = true;
            $rootScope.loadFin();
            $scope.finalNum = 0;
            $scope.input = {
                selectedNum: 0,
                custom: undefined
            };
            $scope.idStateMap = {};
            var promise;

            $rootScope.$on('mobile-angular-ui.toggle.toggled', function(e, id, state) {
                if (!$scope.idStateMap[id]) {
                    return;
                }
                $scope.idStateMap[id].state = state;
                if (promise) {
                    $timeout.cancel(promise);
                }
                promise = $timeout(function() {
                    var found = _.find($scope.idStateMap, function(value) {
                        return value.state;
                    });
                    if (found) {
                        $scope.input.selectedNum = found.num;
                        $scope.finalNum = $scope.input.selectedNum;
                    } else {
                        $scope.input.selectedNum = 0;
                        $scope.finalNum = $scope.input.custom;
                    }
                });
            });

            $scope.confirm = function() {
                osOverlay.show({
                    title: '确认',
                    message: '您确定要订一个' + $scope.finalNum + '人餐位么？',
                    yesHandler: function($event) {
                        $rootScope.toggle('overlay', 'off');
                        $location.url('/code/' + $scope.finalNum);
                        $event.stopPropagation();
                    }
                });
            };

            $scope.$watch('input.custom', function(newValue) {
                $scope.finalNum = newValue;
            }, true);

            $scope.$on('$destroy', function() {
                $rootScope.hasSubtitle = false;
            });
        };

        //Expose this controller definition as a RequireJS module
        //Note: specify the inline annotation explicity
        return ['$rootScope', '$scope', '$timeout', '$location', 'osOverlay', GencodeController];

    });


})(define);