var gulp  = require('gulp');
var webpack = require('gulp-webpack');
var clean = require('gulp-clean');
gulp.task('copy',function(){
    return gulp.src('./public/index.html')
                .pipe(gulp.dest('./dist'));
});

gulp.task('clean',function(){
    return gulp.src('./dist')
              .pipe(clean());
});

gulp.task('default',['clean','copy'],function(){
  'use strict';
  return gulp.src('./public')
              .pipe(webpack(require('./webpack.config')))
              .pipe(gulp.dest('./dist'));
});
