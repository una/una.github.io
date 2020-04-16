const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const cp = require('child_process');
const deploy = require('gulp-gh-pages');
const scsslint = require('gulp-scss-lint');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const ngrok = require('ngrok');
const psi = require('psi');
let site = '';
const portVal = 3020;

const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  cp.spawn(jekyll, ['build'], {
    stdio: 'inherit'
  })
  .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function(done) {
  browserSync.reload();
  done();
}));

/**
 * Compile files from _scss into both css and _includes
 */
gulp.task('sass', function() {
  return gulp.src('_scss/main.scss')
    .pipe(sass())
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(minifycss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('_includes'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', gulp.series('sass', 'jekyll-build', function(done) {
  browserSync({
    server: {
      baseDir: '_site'
    }
  }, done);
}));

/**
 * Deploy to Gh-Pages
 */
gulp.task('deploy', gulp.series('jekyll-build', function() {
  return gulp.src('./_site/**/*')
    .pipe(deploy());
}));

/**
 * Minify Images
 */
gulp.task('imagemin', function() {
  return gulp.src('images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('_site/images'));
});

/**
 * Lint .scss
 */
gulp.task('scss-lint', function() {
  return gulp.src('_scss/**/*.scss')
    .pipe(scsslint({
      'bundleExec': true,
      'config': 'lint-config.yml'
    }));
});

/**
 * Page Speed Insights
 */
gulp.task('psi-desktop', function(done) {
  psi({
    nokey: 'true',
    url: site,
    strategy: 'desktop',
  }, done);
});

gulp.task('psi-mobile', function(done) {
  psi({
    nokey: 'true',
    url: site,
    strategy: 'mobile',
  }, done);
});

/**
 * ngrok for the url
 */
gulp.task('ngrok-url', function(done) {
  ngrok.connect(portVal, function(err, url) {
    site = url;
    console.log('serving your tunnel from: ' + site);
    done();
  });
});

/**
 * Wait for jekyll-build, then launch the Server with port 3020
 */

gulp.task('browser-sync-psi', gulp.series('jekyll-build', function(done) {
  browserSync({
    port: portVal,
    open: false,
    server: {
      baseDir: '_site',
    }
  }, done);
}));

gulp.task('psi-seq', gulp.series(
  'browser-sync-psi',
  'ngrok-url',
  'psi-desktop',
  'psi-mobile'
));

gulp.task('psi', gulp.series('psi-seq', function(done) {
  console.log('Woohoo! Check out your page speed scores!')
  process.exit();
  done();
}));

/**
 * Watch scss files for changes & recompile AND lint :)
 * Watch html/md files, run jekyll & reload BrowserSync
 * Minify images too
 */
gulp.task('watch', function() {
  gulp.watch('_scss/**/*.scss', gulp.series('sass', 'jekyll-build'));
  gulp.watch(['index.html', 'archive.html', '_layouts/*.html', '_includes/*.html', '_posts/**/*', 'archive/*', 'diffeedemo/*', 'speaking/*', 'about/*'], gulp.series('jekyll-rebuild'));
  gulp.watch('images/*', gulp.series('imagemin'));
  gulp.watch('js/*.js', gulp.series('jekyll-build'));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series('browser-sync', 'watch'));