'use strict';

var gulp = require('gulp'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	cssmin = require('gulp-clean-css'),
    concat = require('gulp-concat'),
	browserSync = require("browser-sync"),
    notify = require('gulp-notify'),
	reload = browserSync.reload;


gulp.task('style', () => {
    gulp.src('src/style/**/**.*')
        .pipe(sourcemaps.init())
        .on('error', notify.onError(function(err) {
            return {
                title: 'css',
                message: err.message
            };
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css/'))
        .pipe(reload({stream: true}));
});