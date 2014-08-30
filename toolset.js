#!/usr/bin/env node

'use strict';

var gulp = require('gulp');
var chalk = require('chalk');
var inquirer = require('inquirer');
var Q = require('q');

var yargs = require('yargs')
    .alias({
        's': 'start',
        'i': 'install'
    })
    .describe({
        's': 'start a static webserver for specified app',
        'i': 'install dependencies for specified app'
    })
    .boolean(['s', 'i']);

var warn = function(msg) {
    console.log(chalk.bold.yellow(msg));
};


var argv = yargs.argv;
if (!argv.s && !argv.i) {
    yargs.showHelp(warn);
    process.exit(0);
}


var ask = function() {

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
    var path = require('path');

    var src = path.join(root, 'src');

    gulp.src(path.join(src, 'less', 'main.less'))
        .pipe(less({
            paths: [
                path.join(src, 'bower')
            ]
        }))
        .pipe(gulp.dest(path.join(src, 'css')));

    console.log(path.join(src, 'less', 'main.less') + ' compiled');

};

if (argv.s) {

    ask().then(function(answer) {

        var webserver = require('gulp-webserver');

        gulp.src(answer.appname + '/src')
            .pipe(webserver({
                host: '0.0.0.0',
                livereload: true,
                open: false,
                directoryListing: false,
                fallback: 'index.html'
            }));

        compileLess(answer.appname);

        gulp.watch(answer.appname + '/src/less/*.*', function() {
            compileLess(answer.appname);
        });

    });

} else if (argv.i) {

    ask().then(function(answer) {
        var exec = require('child_process').exec;

        var cp = exec('bower install', {
            maxBuffer: 5000 * 1024,
            cwd: answer.appname
        }, function(error) {
                if (error) {
                    return;
                }
            });

        cp.stdout.pipe(process.stdout);
        cp.stderr.pipe(process.stderr);
    });

}