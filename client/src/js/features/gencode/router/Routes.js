/**
 *
 *  Routes module expose route information used in gencode feature
 *
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 */
(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            isDefault: true,
            when: '/',
            controller: 'GencodeController',
            templateUrl: features + '/gencode/partials/gencode.html'
        }];
    });

}(define, require));