/**
 *  The BodyConfig set init stuff in body.
 *
 *  Note: this module is part of application-level framework, developers should never care about
 *
 *
 *  @author  Howard.Zuo
 *  @date    Sep 14th, 2014
 *
 */
(function(define, document) {
    'use strict';

    define(['angular', 'tpl!conf/body.html'], function(angular, tpl) {

        var config = function() {
            var body = angular.element(document.body);

            body.attr({
                'os-loading': '',
                'ng-class': '{\'subtitle-exist\': hasSubtitle}'
            });

            body.html(tpl());

        };

        return {
            type: 'config',
            func: config
        };

    });

}(define, document));