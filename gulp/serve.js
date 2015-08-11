'use strict';

var
  gulp           = require('gulp'),
  browserSync    = require('browser-sync'),
  browserSyncSpa = require('browser-sync-spa');

module.exports = function(options){

  function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var server = {
      baseDir: baseDir,
    };

    // if(middleware.length > 0) {
    //   server.middleware = middleware;
    // }

    browserSync.instance = browserSync.init({
      startPath: '/',
      server: server,
      browser: browser
    });
  }

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
  }));

  // gulp.task('serve', ['watch'], function () {
  //   browserSyncInit([options.tmp + '/serve', options.src]);
  // });

  gulp.task('serve', function () {
    browserSyncInit(options.dist);
  });

  // gulp.task('serve:e2e', ['inject'], function () {
  //   browserSyncInit([options.tmp + '/serve', options.src], []);
  // });
  //
  // gulp.task('serve:e2e-dist', ['build'], function () {
  //   browserSyncInit(options.dist, []);
  // });
};
