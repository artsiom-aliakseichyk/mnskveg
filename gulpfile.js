var gulp = require('gulp');
var path = require('path');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var server =  server = require('gulp-express');

gulp.task('html', function () {
    return gulp.src('views/**/*.ejs')
        .pipe(livereload());
});

gulp.task('server', function() {
	server.run(['index.js']);
	gulp.watch(['views/**/*.ejs'], server.notify);
});


gulp.task('default', ['server']);
