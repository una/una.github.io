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
- sass snippets
- snippets
- snippet
header-bg: ../images/posts/pbj.jpg
subtitle: Combined with a trailing ampersand, Modernizer and @at-root are a perfect pair.
---

Like peanut butter and jelly (or wine and cheese if that's more your style), Modernizer and the Sass @at-root directive are a perfect pair.

## Modernizr
[Modernizr](http://modernizr.com/) is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser (that was stolen directly off of the Modernizr website since the definition was so clear &mdash; nice job y'all). It allows you to responsibly design layouts using modern techniques while implementing fallback options for accesibility on browsers with lesser feature support.

The way it basically works is by running feature detection scripts and appending a class to the `<html>` element if the feature if available. You can customize which tests run for detection based on feautures relevant to your project. For example, in Chrome 39, it could generate:

<pre class="syntax--html"><code>
&lt;html lang="en" class="js no-touch postmessage history multiplebgs
boxshadow opacity cssanimations csscolumns cssgradients csstransforms
csstransitions fontface localstorage sessionstorage svg inlinesvg
no-blobbuilder blob bloburls download formdata wf-athelas1-n4-active
wf-proximanova1-i4-active wf-proximanova1-i7-active wf-proximanova1-n4-active
wf-proximanova1-n7-active wf-proximanovacondensed1-n6-active wf-active"&gt;
&lt;!-- modernizr.com --&gt;
</code></pre>

On another website in the same browser, it could look like:

<pre class="syntax--html"><code>
&lt;html class=" js canvas canvastext geolocation crosswindowmessaging
websqldatabase indexeddb hashchange historymanagement draganddrop
websockets rgba hsla multiplebgs backgroundsize borderimage borderradius
boxshadow opacity cssanimations csscolumns cssgradients cssreflections
csstransforms csstransforms3d csstransitions  video audio localstorage
sessionstorage webworkers applicationcache svg smil svgclippaths fontface"&gt;
&lt;!-- hongkiat.com --&gt;
</code></pre>

And on another, it could be much more simplified:
<pre class="syntax--html"><code>&lt;html class=" js no-touch localstorage"&gt;
&lt;!-- sassmeister.com --&gt;
</code></pre>

<aside>For more information on how to implement Modernizer, check out <a href="http://html5doctor.com/using-modernizr-to-detect-html5-features-and-provide-fallbacks/">this</a>article on HTML5Doctor.</aside>

## @at-root

The Sass @at-root directive pulls the styling rule out to the root of the document instead of being nested under its parent selector. I wrote a [post](http://una.github.io/2013/10/15/sass-3-3-at-root-bem.html)(it's a little outdated now as you don't have to use interpolation for the `&`) about using @at-root with [BEM](https://bem.info/) a while ago.

@at-root is pretty great. While we all know that overnesting leads to terrifying CSS output, @at-root allows us to nest properties for order and visual clarity without any of the negative CSS output side effects. There are two ways to use @at-root; either inline, or containing a block of selectors.

Here's the first way:
<pre class="code--half syntax--scss"><code>// Nesting using @at-root
.speech-bubble{
  color: purple;
   @at-root &\_\_header{
    color: orange;
  }
   @at-root &\_\_text{
    color: black;
     @at-root &--link{
      color: green;
    }
  }
}
</code></pre>
<pre class="code--half syntax--css"><code>// CSS Output
.speech-bubble {
  color: purple;
}
.speech-bubble\_\_header {
  color: orange;
}
.speech-bubble\_\_text {
  color: black;
}
.speech-bubble\_\_text--link {
  color: green;
}
</code></pre>

And using it with blocks of code will yield the same result:
<pre class="code--half syntax--scss"><code>// A block of @at-root
.speech-bubble{
  color: purple;
   @at-root{
    &\_\_header{
      color: orange;
    }
    &\_\_text{
      color: black;
       &--link{
        color: green;
      }
    }
  }
}
</code></pre>
<pre class="code--half syntax--css"><code>// CSS Output
.speech-bubble {
  color: purple;
}
.speech-bubble\_\_header {
  color: orange;
}
.speech-bubble\_\_text {
  color: black;
}
.speech-bubble\_\_text--link {
  color: green;
}
</code></pre>

## Modernizr += @at-root

So back to peanut butter and jelly (peanut butter and chocolate is better, IMO). Modernizr and @at-root are PERFECT for each other. Combine the two with a **trailing ampersand**, and you have a concise solution for handling feature-based styling. Read all about the Sass ampersand **[here](http://una.github.io/2014/03/06/sass-snippets-the-almighty-ampersand.html)**.

For instance if you had a feature using the CSS3 text-shadow property, and wanted to ensure a safe fallback solution for legibility, you could use the following solution. Configure modernizer to detect this property and append a class of `.text-shadow` to the `<html>`.

<pre class="syntax--scss"><code>.text-class {
  //fallback
  color: #000;

  @at-root .text-shadow & {
    color: #15b2ff;
    text-shadow: .2em .2em rgba(0, 0, 0, .5);
  }
}
</code></pre>
<pre class="syntax--css"><code>
//CSS Output
.text-class {
  color: #000;
}
.text-shadow .text-class {
  color: #15b2ff;
  text-shadow: 0.2em 0.2em rgba(0, 0, 0, 0.5);
}
</code></pre>

<br>
Conversely, you can detect missing features and append the `.no-text-shadow` class to the `<html>` and then use something like this:
<pre class="syntax--scss"><code>.text-class {
  color: #15b2ff;
  text-shadow: .2em .2em rgba(0, 0, 0, .5);<br>
  @at-root .no-text-shadow & {
    //fallback
    color: #000;
  }
}
</code></pre>
<pre class="syntax--css"><code>
//CSS Output
.text-class {
  color: #000;
}
.no-text-shadow .text-class {
  color: #15b2ff;
  text-shadow: 0.2em 0.2em rgba(0, 0, 0, 0.5);
}
</code></pre>

<aside>It's been a while since I did a "Sass Snippets" post (a short post about little Sass tips and tricks), but I really like the format so look out for more in the future!</aside>

