/**
 *  The HeadConfig set head stuff.
 *
 *  Note: this module is part of application-level framework, developers should never care about
 *
 *
 *  @author  Howard.Zuo
 *  @date    Sep 14th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['utils/head'], function(head) {

        var config = function(features, app) {
            head.title('我的菜单');
            head.meta({
                'charset': 'utf-8'
            });
            head.meta({
                'http-equiv': 'X-UA-Compatible',
                'content': 'IE=edge,chrome=1'
            });
            head.meta({
                'name': 'viewport',
                'content': 'user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui'
            });
            head.meta({
                'name': 'apple-mobile-web-app-capable',
                'content': 'yes'
            });
            head.meta({
                'name': 'apple-mobile-web-app-status-bar-style',
                'content': 'yes'
            });
            head.meta({
                'name': 'apple-mobile-web-app-status-bar-style',
                'content': 'yes'
            });
            head.favicon('img/logo.png');
        };

        return {
            type: 'config',
            func: config
        };

    });

}(define));