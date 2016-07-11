var browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    path = require('path'),
    rename = require('gulp-rename'),
    gulp = require('gulp');

gulp.task('sass', function() {
  return gulp.src('source/scss/theme.scss')
    .pipe(sass())
    .pipe(rename('maho.css'))
    .pipe(gulp.dest('./static/style'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], function() {
    browserSync.init({ server: './' });

    gulp.watch('./source/scss/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
