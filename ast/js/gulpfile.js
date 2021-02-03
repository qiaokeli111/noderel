
const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');
function compile() {
    console.log(3322);
  return src('./ss.js')  // src下的所有scss文件
    // .pipe(sass.sync())  // 把scss文件编译成css
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(dest('dist'))
}
exports.build = series(compile);


