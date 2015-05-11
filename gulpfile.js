var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

gulp.task('browserify', function(){
   gulp.src('src/js/Main.js')
       .pipe(browserify({transform: 'reactify'}))
       .pipe(concat('Main.js'))
       .pipe(gulp.dest('dist/js'));
});

gulp.task('style', function(){
    gulp.src('src/style/style.css')
        .pipe(gulp.dest('dist/style'));
});

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'style', 'copy']);

gulp.task('watch', function(){
    gulp.watch('src/**/*.*',['default']);
});