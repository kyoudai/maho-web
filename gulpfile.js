var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    less = require('gulp-less'),
    path = require('path'),
    rename = require('gulp-rename');

gulp.task('less', function () {
  return gulp.src('source/less/theme.less')
    .pipe(less())
    .pipe(rename('maho.css'))
    .pipe(gulp.dest('./static/style'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['less'], function() {
    browserSync.init({ server: './' });

    gulp.watch('source/less/*.less', ['less']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
