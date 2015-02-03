# Blog goodness (a WIP)

This is a migration of unakravets.tumblr.com

Because:
![Performance on Tumblr](http://una.github.io/images/perf-tumblr.gif)
![Performance on Github Pages](http://una.github.io/images/perf-gh.gif)

And it went from this (interior page on Tumblr):
![Performance on Tumblr](http://una.github.io/images/interior-tumblr.gif)
to this (interior page on Github pages):
![Performance on Tumblr](http://una.github.io/images/interior-gh.gif)

## To-Do:

- [x] Eliminate render-blocking JavaScript and CSS in above-the-fold content
- [x] Add image optimization to gulpfile (maybe.. bc I optimize them manually now)
- [x] Review Mobile nav --> add more space around Archive & About links
- [x] Setup linter for my .scss (& lint it)
- [x] Make visual indicator for linked-out posts from archive list & main post list
- [ ] Add search functionality
- [ ] Tagging more visible/usable
- [ ] Mobile list utf-8 things are not working (fix for larger dimension)

## This was set up using:
 - [jekyll-gulp-sass-browser-sync starter](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync)
 - [gulp gh-pages](https://github.com/rowoot/gulp-gh-pages)
 - [scss-lint configs](https://github.com/causes/scss-lint/blob/master/config/default.yml)