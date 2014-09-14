/**
 *  head.js provides handy functions for setting heads.
 *
 *  @author  Howard.Zuo
 *  @date    Sep 14th, 2014
 *
 */
(function(document) {

    'use strict';

    define(['angular'], function(angular) {
        var head = angular.element(document.head);
        return {
            title: function(t) {
                var title = head.find('title');
                if (title.length === 0) {
                    title = angular.element('<title></title>');
                }
                title.html(t);
            },
            meta: function(attr) {
                var meta = angular.element('<meta>');

                meta.attr(attr);

                head.append(meta);
            },
            base: function(attr) {
                var base = angular.element('<base>');

                base.attr(attr);

                head.append(base);
            },
            link: function(attr) {
                var link = angular.element('<link>');

                link.attr(attr);

                head.append(link);
            },
            favicon: function(url) {
                this.link({
                    rel: 'shortcut icon',
                    href: url,
                    type: 'image/x-icon'
                });
            }
        };
    });

}(document));