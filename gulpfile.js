import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import removeCode from 'gulp-remove-code';

function styles() {
  return gulp.src('app/style/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build'));
}

function scripts() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(removeCode({ production: true }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
}

function watch() {
  gulp.watch('app/style/**/*.scss', styles);
  gulp.watch('app/scripts/**/*.js', scripts);
}

const build = gulp.parallel(styles, scripts);

export { watch };
export default build;
