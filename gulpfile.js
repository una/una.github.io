var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var minifycss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var cp          = require('child_process');
var deploy      = require('gulp-gh-pages');
var scsslint    = require('gulp-scss-lint');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var concat = require('gulp-concat');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Deploy to Gh-Pages
 */
gulp.task("deploy", ["jekyll-build"], function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy());
});

/**
 * Minify Images
 */
gulp.task('imagemin', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('_site/images'));
});

/**
 * Lint .scss
 */
gulp.task('scss-lint', function() {
  gulp.src('_scss/**/*.scss')
    .pipe(scsslint({
        'bundleExec': true,
        'config': 'lint-config.yml'
    }));
});

/**
 * concat .js
 */
gulp.task('concat-scripts', function() {
  gulp.src(['./js/vendor/jquery-1.11.1.min.js','./js/vendor/jquery.lazyload.min.js', './js/vendor/highlight.pack.js', './js/vendor/jekyll-search.js', './js/scripts.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js'))
});

/**
 * Watch scss files for changes & recompile AND lint :)
 * Watch html/md files, run jekyll & reload BrowserSync
 * Minify images too
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['index.html', 'archive.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
    gulp.watch(['images/*'], ['imagemin'])
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
