var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var ghPages = require('gulp-gh-pages');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('site'));
});

gulp.task('css', function(){
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('site/css'))
});

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('site/js'))
});

gulp.task('ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("src/js"));
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', [ 'html' ]);
    gulp.watch('src/css/*.css', [ 'css' ]);
    gulp.watch('src/ts/*.ts', [ 'ts' ]);
    gulp.watch('src/js/*.js', [ 'js' ]);
});

gulp.task('deploy', function () {
  return gulp.src('site/**/*')
    .pipe(ghPages());
});

gulp.task('default', [ 'html', 'css', 'js', 'watch' ]);