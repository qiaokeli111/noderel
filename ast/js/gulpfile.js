const gulp = require("gulp")
const babel = require("gulp-babel")
console.log(33)
gulp.task("sass", function () {
    gulp.src("./ww.js")
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            })
        )
        .pipe(gulp.dest("./dist/"))
    // return new Promise(function (resolve) {
    //     resolve()
    // })
})
gulp.task("default", gulp.series("sass"))
console.log(22)
