const gulp = require('gulp');
const htmlmin = require('gulp-html-minifier-terser');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');


 
gulp.task('minify', () => {
  return gulp.src('build/*/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public/')); 
});

gulp.task('sass', function () {
    return gulp.src('build/*/style/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('public/'));
});


//---
gulp.task('default', () => {
    gulp.watch(['build/*/*.html', 'build/*/style/*.scss', 'build/*/assets/*.*'], gulp.parallel('minify', 'sass'));
})
//---


gulp.task('image', function () {
  gulp.src('build/*/assets/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('public/'))
});
