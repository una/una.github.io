---
layout: post
title: Media Queries of the Future!
permalink: /media-queries-of-the-future
date: '2014-10-16'
tags:
- media queries
- programming
- web development
- future
subtitle: The Media Queries 4 spec brings insight to technological capabilities that are coming up soon (this is based on the Editor’s Draft, October 10, 2014).
---

Media queries are infants. The first Media Query public working draft was published in 2001, and they became a W3C recommendation after [browser support](http://caniuse.com/#search=media%20queries) increased in 2012. 2012! **That's TWO years!** Hard to believe, considering how essential they've become in our web workflows today. Media queries are most often used to build flexible [web designs](http://mediaqueri.es/) which adapt to various browsers properties. Here are some [pointers](https://developers.google.com/web/fundamentals/layouts/rwd-fundamentals/use-media-queries?hl=en) from the smart people at Google.

### Media Query Capabilities

If you're familiar with building responsive websites, you're probably familiar with something like: <code>@media screen and (max-width: 700px)</code>, but did you know that you can use media queries to specify how to handle **paged braille printers** or **TVs** or how to use **[logic](http://css-tricks.com/logic-in-media-queries/)** in your media queries? Yeah, they're pretty rad.

Here's a list of current media types you can target:

- <code>all</code> — all the media types below
- <code>braille</code>* — braille tactile feedback devices
- <code>embossed</code>* — paged braille printers
- <code>handheld</code>* — handheld devices like mobile phones
- <code>print</code> — printed material
- <code>projection</code>* — projected presentations
- <code>screen</code> — color computer screens
- <code>speech</code> — speech synthesizers
- <code>tty</code>* — teletypes, terminals, and other devices with limited display capabilities
- <code>tv</code>* — televisions and television like devices

<small>&ast; = deprecated as media **types**, but can be used similarly as media **features** -- read on)</small>

And this is what you can specify (expressions) for each of those media types:

- <code>width</code> — width of the current window
- <code>height</code> — height of the current window
- <code>device-width</code> — width of the device
- <code>device-height</code> — height of the device
- <code>orientation</code> — either landscape or portrait
- <code>aspect-ratio</code> — aspect ratio of the current window
- <code>device-aspect-ratio</code> — aspect ratio of the device
- <code>color</code> — number of color bits per color component
- <code>color-index</code> — number of available colors on the device
- <code>monochrome</code> — number of bits per pixel in a monochrome frame buffer
- <code>resolution</code> — resolution of the device
- <code>scan</code> — either progressive or interlace
- <code>grid</code> — is the device grid-based?

This list was stolen from [here](http://cssmediaqueries.com/what-are-css-media-queries.html), by the way.

### Responsive Beyond the Browser Size

Media queries are most often used for their screen size properties to allow for **"Responsive Web Design"**, or **RWD**. But viewing "responsive design" as just a means for detecting screen sizes and browsers is narrow-minded. Responsive principles go far past the browser and stretch into the real world — how can the products we design respond to a users location, or the weather, or the lighting? How can we really personalize experiences for our users?

Well media queries are helping us get one step closer! As devices are able to detect more, browsers are keeping up to date with these capabilities.

## The Future of Media Queries

The [Media Queries 4](http://dev.w3.org/csswg/mediaqueries-4/) spec brings insight to technological capabilities that are coming up soon (this is based on the Editor’s Draft, October 10, 2014).

### Media Features vs Types
*One important distinction to note is that all of the **media types** listed above will eventually become deprecated and replaced with more specific **[media features](http://dev.w3.org/csswg/mediaqueries-4/#mq-features)** *

Media features are always wrapped in parentheses and combined with the <code>and</code> keyword rather than being separated with semicolons.

Here's an example from the spec:
<pre><code>(color) and (min-width: 600px)
</code></pre>


### @media (light-level) : dim | normal | washed

The <code>light-level</code> media feature is for detection **ambient lighting**. *(Ambient is such a fun word)*.

Values:

- <code>dim</code> — lighting in a dim environment (i.e. nighttime)
- <code>normal</code> — lighting in the "ideal screen range"
- <code>washed</code> — lighting in an overly bright environment (i.e. broad daylight)

Here's an example:
<pre><code>// change text coloring due to lighting for better legibility

@media (light-level: dim) {
  body { background: dimgrey;
         color: white;
    }
}

@media (light-level: washed) {
  body { background: white;
         color: black;
         font-size: 2em;
    }
}
</code></pre>


### @media (pointer) : none | course | fine

The <code>pointer</code> media feature detects the **presence and accuracy of a pointing device**.

Values:

- <code>none</code> — there is no pointing device present (i.e. TV, printer)
- <code>course</code> — the primary input mechanism is of limited accuracy (i.e. Nintendo Wii, Kinect, Google Glass)
- <code>fine</code> — the primary input mechanism is an accurate pointing device (i.e. stylus, mouse, touchpad)

Here's an example:
<pre><code>// Make input larger for inaccurate pointing devices

@media (pointer:coarse) {
  input[type="text"] {
    font-size: 3em;
    padding: .5em;
  }
}
</code></pre>


### @media (hover) : none | on-demand | hover

The <code>hover</code> media feature detects the ability of the primary pointing mechanism to hover over elements.

Values:

- <code>none</code> — there primary pointing mechanism can't hover
- <code>on-demand</code> — the user can hover but it requires significant action (i.e. touch screens)
- <code>fine</code> — the primary pointing system can easily hover

<small> &ast; If different input devices have different characteristics, there are also <code>any-pointer</code> and <code>any-hover</code> media features </small>

Here's an example:
<pre><code>//If hover is difficult, display the menu differently

@media (hover:none) and (hover:on-demand) {
  .menu {
    display: block;
    position absolute;
    ...
  }
}
</code></pre>


### @media (update-frequency) : none | slow | normal


The <code>update-frequency</code> media feature is used to query the ability of the output device to modify the appearance of content once it has been rendered.

Values:

- <code>none</code> — once rendered, the layout will not update (i.e. printed materials)
- <code>slow</code> — the layout may change dynamically but not smoothly (i.e. e-ink displays)
- <code>normal</code> — the output device is not constrained

Here's an example (stolen right from the spec):
<pre><code>//If a page styles its links to only add underlines on hover, 
// it may want to always display underlines when printed:

a {
  text-decoration: none;
}

a:hover, a:focus {
  text-decoration: underline;
}

@media (update-frequency: none) {
  a {
    text-decoration: underline;
    }
}
</code></pre>


### @media (scripting) : none | initial-only | enabled


The <code>scripting</code> media feature detects **whether or not Javascript is enabled** in the browser.

Values:

- <code>none</code> — scripting is not supported by the user agent, or innactive
- <code>enabled</code> — scripting is supported and active
- <code>initial-only</code> — scripting is supported on initial page load, but not afterwards


This section also borrowed heavily from the these [slides](http://www.slideshare.net/yiibu/the-future-of-mediaqueries), which break down the information from the spec really well.

Remember, it has only been 2 years since the general adoption of media queries and responsive web design. If this is just the beginning, then where are they heading next?