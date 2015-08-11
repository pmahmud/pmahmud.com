'use strict';

var
  gulp = require('gulp');

module.exports = function(options) {

  gulp.task('main',['clean'], function() {
    gulp.start('html');
    gulp.start('extra');
    gulp.start('webpack');
  });

};
