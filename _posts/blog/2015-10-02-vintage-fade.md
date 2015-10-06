---
layout: post
title: CSS Image Effects &num;1&colon; Vintage Washout
permalink: /vintage-washout
date: '2015-10-02'
comments: true
tags:
- development
- design
- css
- sass
- filter
- blend mode
- photo
- effect
subtitle: The first post in a series on creating custom image effects in CSS. We'll take a look at the vintage washout effect.
header-bg: ../images/posts/css-effects/1/bg.jpg
audio: audio-vintagewashout
---

Last week, I gave a talk at [CSS Conf EU](http://2015.cssconf.eu) called *PS is Dead!: Editing Photos in CSS*. My original idea was to outline 10 things you traditionally used Photoshop for that you can now just do in the browser, but when I started to look into filter effects and blend modes there was just *so* much to explore! I showed a few of those effects in the talk, and now I'm going to write a series of posts to split it into more digestible and sharable bits. Let's start with something simple and effective!

## The Washout Effect

This effect is something we often see in filters trying to get a vintage feel. What happens is that the darkest shade is lightened and the detail in the shadows is lost (washing out the darker details). It appears as a lower contrast because the color (and thus) luminosity range is being limited.

<figure class="half--left">
<img src="../images/posts/css-effects/1/tahoe-prefilter.jpg" alt="">
<figcaption>No washout effect</figcaption>
</figure>

<figure class="half--right">
<img src="../images/posts/css-effects/1/tahoe-postfilter.jpg" alt="">
<figcaption>Washout effect applied</figcaption>
</figure>

What is happening here is that we are replacing the dark tones with a slightly lighter shade. If the existing tone is darker than the "new" darkest tone, it is simply overridden by that tone. Thus, the lighten blend mode is perfect for our needs here.

## Step 1: Blend-Mode: Lighten

We apply the lighten blend mode to either an overlapping element or a pseudo element. You can use `background-blend-mode: lighten` on an element with multiple blend modes, or `mix-blend-mode: lighten` on the overlapping element. However, *I'd recommend multiple backgrounds for this (see Application section).*

<small>Please note: the &lt;img&gt; element cannot have its own pseudo elements like :before and :after.</small>

With the [lighten](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode) blend mode, the lightness of the pixels (brightness value) is determined between overlapping pixels *on every RGB channel* and the pixel with the darker luminosity has its tone and hue overriden by the lighter one. If a bright orange overlapped a dark brown, for instance, the pixels would become orange since *every* channel is lighter. When we mix tones we get a new color from the lightest selected RGB tonality per channel.

A background shade of: `rgb(195, 25, 106) //deep pink` lightened by: `rgb(6, 19, 255) //blue` becomes: `rgb(195, 25, 255) //magenta` because it is taking the red and green value from the first number and the blue value from the last one. Here is a visual:

<figure>
<img src="../images/posts/css-effects/1/lighten-ex.png" alt="">
<figcaption>Note: the reason we lose the box outline is because on the white background, it takes the luminosity of the white (1).</figcaption>
</figure>


## Step 2: Determine Darkest Color

We can use this feature to then determine what we want to set as the darkest possible value on the image, therefore eliminating any detail in darker elements and creating that subdued effect. For instance, if we choose our dark shade to be a dimgrey, any pixels darker than dimgrey will become dimgrey, while any pixels lighter than it will remain.

<div class="video-container">
<video autoplay loop controls src="../images/posts/css-effects/1/vintage-effect-demo--noaudio.mp4"></video>
</div>

<small> Choosing a dark purple or brown color will likely get you the effect you are looking for.</small>

## Application

The best way to apply this effect is via multiple backgrounds right now. This is because not [every](http://caniuse.com/#search=blend%20modes) browser supports blend modes yet. If you use multiple backgrounds, the top image will show regardless and the lightened second background will appear if they are supported as progressive enhancement. Here is a live example:

<div class="half--left vintage-effect">
</div>

<style contenteditable class="css live-code half--right">/* you can edit me! */

.vintage-effect {
  height: 350px;
  background:
    url('../images/posts/css-effects/1/example-img.jpg'),
    #533a16;
  background-size: cover;
  background-blend-mode: lighten;
}
</style>

## @Mixin For the Win

Okay, so that's cool and all, but we can make it even easier to apply with a `@mixin`!

<div class="half--left">
Sass
<pre><code>@mixin fade-it($img, $shadow: #536) {
  background: url('#{$img}'), $shadow;
  background-blend-mode: lighten;
}

.apply-base {
  @include fade-it('1.jpg');
}

.apply-unique-shade {
  @include fade-it('2.jpg',
                   #293e78);
}
</code></pre>
</div>

<div class="half--right">
CSS Output

<pre><code>.apply-base {
  background: url('1.jpg'), #536;
  background-blend-mode: lighten;
}

.apply-unique-shade {
  background: url('2.jpg'), #293e78;
  background-blend-mode: lighten;
}
</code></pre>
</div>

<div class="clearfix"></div>

**tldr; vintage washout effect = lighten blend mode + element with a background that is the shadow color**


For further reading, [this](http://photoblogstop.com/photoshop/photoshop-blend-modes-explained) article is an excellent resource on how blend modes work.

{% include css-effects.html %}