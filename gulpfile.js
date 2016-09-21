var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cssnano = require('cssnano');

gulp.task('styles', function() {
    return gulp.src('src/*.css')
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest('dest/'));
});

gulp.task('rename', ['styles'], function() {
    return gulp.src('dest/example.css')
        .pipe(postcss([cssnano]))
        .pipe(rename('example.min.css'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest("dest/"));
});

gulp.task('default', ['styles', 'rename']);
