var gulp = require('gulp'),
    sass = require('gulp-sass');

//Sass
gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

//Watch tasks
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);