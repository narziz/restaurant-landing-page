const { watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function sassToCss (done) {
  return src('./src/assets/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest('dist/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
}

function imageMinify () {
  return src('./src/assets/images/*.+(png|jpg|jpeg|svg|gif)')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
}

function watchTask() {

    browserSync.init({
        server: "./",
        notify: false
    });

    watch('src/assets/scss/*.scss', series('sass'));
    watch(['./*.html', 'dist/images/*.+(png|jpg|jpeg|svg|gif)', 'dist/css/*.css']).on('change', browserSync.reload);
}

exports.sass = sassToCss;
exports.default = series(sassToCss, imageMinify, watchTask);
