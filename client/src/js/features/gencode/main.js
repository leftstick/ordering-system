/**
 * ******************************************************************************************************
 *
 *   Defines a gencode feature
 *
 *  @author  Howard.Zuo
 *  @date    Aug 31th, 2014
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'features/gencode/router/Routes',
        'features/gencode/controller/GencodeController',
        'features/gencode/controller/CodeController'
    ], function(Routes,
        GencodeController,
        CodeController) {

            var moduleName = 'gencode';

            var module = angular.module(moduleName, []);

            module.controller('GencodeController', GencodeController);
            module.controller('CodeController', CodeController);



            //return the module name which will be used as dependency in framework
            return {
                name: moduleName,
                routes: Routes
            };

        });


}(define));