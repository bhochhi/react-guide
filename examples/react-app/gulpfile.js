'use strict';
var gulp  = require('gulp');
var webpack = require('gulp-webpack');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var webpackConfig = require('./webpack.config');

gulp.task('html',['clean'] ,function(){ //making sure clean completes before html.
    return gulp.src('./public/index.html')
                .pipe(gulp.dest('./dist'));
});

gulp.task('clean',function(){
    return gulp.src('./dist')
              .pipe(clean());
});

gulp.task('webpack',['html'], function(){
  gulp.src('./public')
              .pipe(webpack(webpackConfig))
              .pipe(uglify())
              .pipe(gulp.dest('./dist'));
});


gulp.task('watch',function(){
   gulp.watch('./public/**/*',['webpack']);
});

gulp.task('serve',['build'],function(){
      connect.server({
          root:'dist',
          port:8081,
          livereload:true,

      });
});

gulp.task('dist-watch',function(){
  gulp.src('./dist/index.html').pipe(connect.reload());
});

gulp.task('build',['html','webpack','watch'],function(){
  gulp.watch('./dist/index.html',['dist-watch']);
}); //all depns task starts async.

gulp.task('default',['serve']);
