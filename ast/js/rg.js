const gulp = require('gulp');
const babel = require('gulp-babel');
console.log(33);
gulp.task('sass', function() {
    gulp.src('./ww.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.run('sass');
console.log(22);