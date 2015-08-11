'use strict';

var
  gulp          = require('gulp'),
  webpackStream = require('webpack-stream'),
  webpack       = require('webpack'),
  webpackConfig = require('../webpack.config.js');

module.exports = function(options) {

  gulp.task('webpack', function() {
  	return gulp.src(webpackConfig.entry)
  	.pipe( webpackStream(webpackConfig, webpack) )
  	.pipe(gulp.dest(options.dist));
  });

};
