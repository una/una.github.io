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
var ngrok       = require('ngrok');
var psi         = require('psi');
var sequence    = require('run-sequence');
var site        = '';
var portVal     = 3020;
var exit = require('gulp-exit');


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
        .pipe(gulp.dest('_includes'))
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
 * Page Speed Insights
 */
gulp.task('psi-desktop', function (cb) {
    psi({
        nokey: 'true',
        url: site,
        strategy: 'desktop',
    }, cb);
});

gulp.task('psi-mobile', function (cb) {
    psi({
        nokey: 'true',
        url: site,
        strategy: 'mobile',
    }, cb);
});

/**
 * ngrok for the url
 */
gulp.task('ngrok-url', function(cb) {
 return ngrok.connect(portVal, function (err, url) {
  site = url;
  console.log('serving your tunnel from: ' + site);
  cb();
 });
});

/**
 * Wait for jekyll-build, then launch the Server with port 3020
 */

gulp.task('browser-sync-psi', ['jekyll-build'], function() {
    browserSync({
        port: portVal,
        open: false,
        server: {
            baseDir: '_site',
        }
    });
});

gulp.task('psi-seq', function (cb) {
 return sequence(
    'browser-sync-psi',
    'ngrok-url',
    'psi-desktop',
    'psi-mobile',
    cb
 );
});

gulp.task('psi', ['psi-seq'], function() {
    console.log('Woohoo! Check out your page speed scores!')
    process.exit();
})

/**
 * Watch scss files for changes & recompile AND lint :)
 * Watch html/md files, run jekyll & reload BrowserSync
 * Minify images too
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['index.html', 'archive.html', '_layouts/*.html', '_includes/*.html', '_posts/**/*', 'archive/*', 'speaking/*'], ['jekyll-rebuild']);
    gulp.watch(['images/*'], ['imagemin'])
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
