'use strict';
var gulp = require('gulp');

var ask = function() {

    var inquirer = require('inquirer');
    var Q = require('q');
    var deferred = Q.defer();

    inquirer.prompt([
        {
            type: 'list',
            name: 'appname',
            message: 'What app would you like to play with',
            choices: [
                'admin',
                'client',
                'server'
            ]
        }
    ], function(answer) {
            deferred.resolve(answer);
        });

    return deferred.promise;

};

var compileLess = function(root) {

    var less = require('gulp-less');
    var prefix = require('gulp-autoprefixer');
    var sourcemap = require('gulp-sourcemaps');
    var path = require('path');

    var src = path.join(root, 'src');

    gulp.src(path.join(src, 'less', 'main.less'))
        .pipe(sourcemap.init())
        .pipe(less({
            paths: [
                path.join(src, 'bower')
            ]
        }))
        .pipe(sourcemap.write())
        .pipe(prefix('last 4 version'))
        .pipe(gulp.dest(path.join(src, 'css')));


    console.log(path.join(src, 'less', 'main.less') + ' compiled');

};


gulp.task('start', function(cons) {
    ask().then(function(answer) {

        var webserver = require('gulp-webserver');

        gulp.src(answer.appname + '/src')
            .pipe(webserver({
                host: '0.0.0.0',
                livereload: true,
                port: 9000,
                open: false,
                directoryListing: false,
                fallback: 'index.html'
            }));

        compileLess(answer.appname);

        gulp.watch(answer.appname + '/src/less/*.*', function() {
            compileLess(answer.appname);
        });

        cons();

    });

});


gulp.task('install', function(cons) {
    ask().then(function(answer) {
        var exec = require('child_process').exec;

        var cp = exec('bower install', {
            maxBuffer: 5000 * 1024,
            cwd: answer.appname
        }, function(error) {
                if (error) {
                    cons(error);
                    return;
                }
                cons();
            });

        cp.stdout.pipe(process.stdout);
        cp.stderr.pipe(process.stderr);
    });
});