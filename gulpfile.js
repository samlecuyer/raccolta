var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('html', () => 
  gulp.src('views/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/')));

gulp.task('css', () => 
  gulp.src('styles/raccolta.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/public')));

gulp.task('default', ['html', 'css']);
