var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
    return gulp.src('src/*.css')
		.pipe(postcss([ autoprefixer ]))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('maps/'))
		.pipe(gulp.dest('dest/'));
});
