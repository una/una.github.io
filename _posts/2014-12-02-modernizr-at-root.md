---
layout: post
title: Sass Snippets &num;3&colon; Modernizer + @at-root = <3
permalink: /modernizr-at-root
date: '2014-12-02'
comments: true
tags:
- modernizr
- at-root
- sass
subtitle: Like PB&amp;J, Modernizer and @at-root Were Made for Each Other. 
---

Like peanut butter and jelly (or wine and cheese if that's more your style), Modernizer and the Sass @at-root directive are a perfect pair.

## Modernizr
[Modernizr](http://modernizr.com/) is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser (that was stolen directly off of the Modernizr website since the definition was so clear &mdash; nice job y'all). It allows you to responsibly design layouts using modern techniques while implementing fallback options for accesibility on browsers with lesser feature support. 

The way it basically works is by running feature detection scripts and appending a class to the `<html>` element if the feature if available. You can customize which tests run for detection based on feautures relevant to your project. For example, in Chrome 39, it could generate:
<br><br>
```
<html lang="en" class="js no-touch postmessage history multiplebgs boxshadow opacity cssanimations csscolumns cssgradients csstransforms csstransitions fontface localstorage sessionstorage svg inlinesvg no-blobbuilder blob bloburls download formdata wf-athelas1-n4-active wf-proximanova1-i4-active wf-proximanova1-i7-active wf-proximanova1-n4-active wf-proximanova1-n7-active wf-proximanovacondensed1-n6-active wf-active">
<!-- modernizr.com -->
```

On another website in the same browser, it could look like:
```
<html class=" js canvas canvastext geolocation crosswindowmessaging websqldatabase indexeddb hashchange historymanagement draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions  video audio localstorage sessionstorage webworkers applicationcache svg smil svgclippaths fontface">
<!-- hongkiat.com -->
```

And on another, it could be much more simplified:
```
<html class=" js no-touch localstorage">
<!-- sassmeister.com -->
```

<aside>For more information on how to implement Modernizer, check out <a href="http://html5doctor.com/using-modernizr-to-detect-html5-features-and-provide-fallbacks/">this</a>article on HTML5Doctor.</aside>

## @at-root

The Sass @at-root directive pulls the styling rule out to the root of the document instead of being nested under its parent selector. I wrote a [post](http://una.github.io/2013/10/15/sass-3-3-at-root-bem.html) about using @at-root with [BEM](https://bem.info/) a while ago. 

@at-root is pretty great. While we all know that overnesting leads to terrifying CSS output, @at-root allows us to nest properties for order and visual clarity without any of the negative CSS output side effects. There are two ways to use @at-root; either inline, or containing a block of selectors.

<pre class="syntax--scss"><code>
// Nesting using @at-root
.speech-bubble{
  color: purple;
   @at-root #{&}__header{
    color: orange;
  }
   @at-root #{&}__text{
    color: black;
     @at-root #{&}--link{
      color: green;
    }
  }
}
</code></pre>

<pre class="syntax--css"><code>
// CSS Output
.speech-bubble {
  color: purple;
}
.speech-bubble__header {
  color: orange;
}
.speech-bubble__text {
  color: black;
}
.speech-bubble__text--link {
  color: green;
}
</code></pre>

## Modernizr, Meet @at-root

<aside>It's been a while since I did a "Sass Snippets" post (a short post about little Sass tips and tricks), but I really like the format so I'll try to post more frequently in the future!</aside>

