/**
 *
 *  Defines `osNumber` directive which can only be used as element
 *  It allows end-user to choose number
 *
 *  usage:
 *
 *       <os-number ></os-number>
 *
 *  @author  Howard.Zuo
 *  @date    Aug 31th, 2014
 *
 */
(function(define, require) {
    'use strict';

    var baseUrl = require.toUrl('common');


    var defaults = {
        min: 0,
        max: 100,
        step: 1
    };

    var isNumber = function(value) {
        var val = Number(value);
        return !isNaN(val) && val == value;
    };

    var toNumber = function(value) {
        return Number(value);
    };

    var checkNumber = function(value) {
        if (!isNumber(value)) {
            throw new Error('value [' + value + '] is not a valid number');
        }
    };

    var getTarget = function(e) {
        if (e.touches && e.touches.length > 0) {
            return angular.element(e.touches[0].target);
        }
        return angular.element(e.target);
    };

    var getType = function(e) {
        return getTarget(e).attr('type');
    };

    define([], function() {

        var modulename = 'osNumber';
        var module = angular.module(modulename, []);

        /**
         * Directive definition
         *
         * @constructor
         */
        var osNumber = function($timeout, $interval) {

            // Return configured, directive instance
            return {
                restrict: 'E',
                scope: {
                    'value': '=',
                    'min': '@',
                    'max': '@',
                    'step': '@'
                },
                link: function($scope, element, attrs) {

                    var opts = _.defaults({
                        min: $scope.min,
                        max: $scope.max,
                        step: $scope.step
                    }, defaults);

                    checkNumber(opts.min);
                    checkNumber(opts.max);
                    checkNumber(opts.step);

                    opts = _.transform(opts, function(result, value, key) {
                        result[key] = toNumber(value);
                    });

                    $scope.value = opts.min;

                    $scope.$watch('value', function(newValue) {
                        $scope.canDown = newValue > opts.min;
                        $scope.canUp = newValue < opts.max;
                    });

                    var changeNumber = function($event) {
                        var type = getType($event);
                        if ('up' === type) {
                            if ($scope.value >= opts.max) {
                                return;
                            }
                            $scope.value += opts.step;
                        } else if ('down' === type) {
                            if ($scope.value <= opts.min) {
                                return;
                            }
                            $scope.value -= opts.step;
                        }
                    };

                    var timeout = 600;
                    var timeoutPro, intervalPro;
                    var start, end;
                    var addon = element.find('span');

                    addon.on('touchstart', function(e) {
                        getTarget(e).addClass('active');
                        start = new Date().getTime();
                        timeoutPro = $timeout(function() {
                            intervalPro = $interval(function() {
                                changeNumber(e);
                            }, 200);
                        }, timeout);
                        e.preventDefault();
                    });

                    addon.on('touchend', function(e) {
                        end = new Date().getTime();
                        if (intervalPro) {
                            $interval.cancel(intervalPro);
                            intervalPro = undefined;
                        }
                        if (timeoutPro) {
                            $timeout.cancel(timeoutPro);
                            timeoutPro = undefined;
                        }
                        if ((end - start) < timeout) {
                            changeNumber(e);
                            $scope.$apply();
                        }
                        getTarget(e).removeClass('active');
                    });


                    $scope.$on('$destroy', function() {
                        addon.off('touchstart touchend');
                    });

                },
                templateUrl: baseUrl + '/osnumber/main.html'
            };
        };

        //Register navbar directive
        module.directive(modulename, ['$timeout', '$interval', osNumber]);


        return {
            name: modulename
        };

    });

}(define, require));