// Required Plugins
var gulp          = require('gulp'),
    autoprefixer  = require('gulp-autoprefixer'),
    browserSync   = require('browser-sync'),
    cleanCSS      = require('gulp-clean-css'),
    htmlmin       = require('gulp-htmlmin'),
    plumber       = require('gulp-plumber'),
    reload        = browserSync.reload,
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass');

// Set paths for each file type
var sassPaths = ['src/scss/*.scss'],
    htmlPaths = ['src/*.html'],
    fontPath  = 'src/font/**/*';

// Sass Task autoprefixes, renames w/.min, minimizes
gulp.task('sass', function () {
    return gulp.src(sassPaths)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));
});

// Html Task minimizes html
gulp.task('html', function() {
    return gulp.src(htmlPaths)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({ stream:true }));
});

// Font Task moves fonts to dist
gulp.task('font', function() {
    return gulp.src(fontPath)
        .pipe(gulp.dest('dist/font'));
});

// Browser-Sync Task starts the browsersync server and servs from the dist folder
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
});

// Live Task starts browsersync then watches scss, html, and font files
gulp.task('live',  ['browser-sync'], function() {
    gulp.watch(sassPaths, ['sass']);
    gulp.watch(htmlPaths, ['html']);
    gulp.watch(fontPath, ['font']);
});

// Build Task runs all tasks except live and deletes tasks
gulp.task('build', function() {
    gulp.start('sass', 'html', 'font');
});

// Default Task runs all tasks except
gulp.task('default', function() {
    gulp.start('build');
});
