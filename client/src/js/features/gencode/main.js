/**
 * ******************************************************************************************************
 *
 *   Defines a gencode feature
 *
 *  @author  Howard.Zuo
 *  @date    Aug 24th, 2014
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'features/gencode/router/Routes',
        'features/gencode/controller/GencodeController'
    ], function(Routes,
        GencodeController) {

            var moduleName = 'gencode';

            var module = angular.module(moduleName, []);

            module.controller('GencodeController', GencodeController);



            //return the module name which will be used as dependency in framework
            return {
                name: moduleName,
                routes: Routes
            };

        });


}(define));