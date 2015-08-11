'use strict';

var
  gulp = require('gulp'),
  del  = require('del');

module.exports = function(options) {

  gulp.task('clean', function (done) {
    del([options.dist + '/', options.tmp + '/'], done);
  });

  gulp.task('html', function() {
  	return gulp.src(options.src + '/**/*.html')
  	.pipe(gulp.dest(options.dist));
  });

  gulp.task('extra', function() {
  	return gulp.src(options.src + '/favicon.ico')
  	.pipe(gulp.dest(options.dist));
  });

};
