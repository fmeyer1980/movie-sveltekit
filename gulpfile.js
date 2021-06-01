const { parallel, watch } = require("gulp");
const gulp = require('gulp');
const purgecss = require('gulp-purgecss');

// Pull in each task
const sass = require("./gulp-tasks/sass.js");

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch("./src/assets/scss/**/*.scss", { ignoreInitial: true }, sass);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;

gulp.task('goron', function () {

  return gulp.src('./static/css/tokens.css')
    .pipe(purgecss({
      content: [
        './components/**/*.vue',
        './pages/**/*.vue',
        './layouts/**/*.vue'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-:/]+/g) || []
    }))
    .pipe(gulp.dest('./static/css'));
});


gulp.task('build', gulp.parallel(
  'goron'
));


// const gulp = require('gulp');
// const sass = require('gulp-sass');

// gulp.task('sass', function(){
//   gulp.src('assets/scss/tokens.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('static/css/'));
// });

// function style(){
//   return gulp.src('assets/scss/tokens.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('static/css/'));
// }

// exports.style = style;