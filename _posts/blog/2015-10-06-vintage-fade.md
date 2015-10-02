---
layout: post
title: CSS Image Effects &num;1&colon; Vintage Washout
permalink: /vintage-washout
date: '2015-10-06'
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

---

Last week, I gave a talk at [CSS Conf EU](http://2015.cssconfeu.com) called "PS is Dead!: Editing Photos in CSS." The original idea was to go over 10 things you traditionally used Photoshop for that you can now just do in the browser, but when I started to look into filter effects and blend modes there was just *so* much to explore! I showed a few of those effects in the talk, and now I'm going to write a series of posts to split it into more digestible and sharable bits. I hope you enjoy them!

## The Washout Effect

This effect is something we often see in filters trying to get a vintage feel. What happens is that the darkest shade is lightened and the detail in the shadows is lost (washing out the darker details). It appears as a lower contrast because the color (and thus) luminosity range is being limited.

<img class="half--left" src="../images/posts/blend-modes/tahoe-prefilter.jpg" alt="">
<img class="half--right" src="../images/posts/blend-modes/tahoe-postfilter.jpg" alt="">

What is happening here is that we are replacing the dark tones with a slightly lighter shade. If the existing tone is darker than the "new" darkest tone, it is simply overriden by that tone. Thus, the lighten blend mode is perfect for our needs here.

## Step 1: Blend-Mode: Lighten

We apply the lighten blend mode to either an overlapping element or a pseudo element. You can use `background-blend-mode: lighten` on an element with multiple blend modes, or `mix-blend-mode: lighten` on the overlapping element.

<small>Please note: the <code>img</code> element cannot have its own pseudo elements.</small>

With the [lighten]() <-- GET LINK --0-- blend mode, the luminosity of the pixels (brightness value) is determined between overlapping pixels and the pixel with the darker luminosity has its tone and hue overriden by the lighter one. If a bright orange overlapped a dark brown, for instance, the pixels would become orange. Here is an example:

<img src="../images/posts/blend-modes/lighten-ex.png" alt="">

The reason we lose the box outline is because on the white background, it takes the luminosity of the white (1).

## Step 2: Determine Darkest Color

We can use this feature to then determine what we want to set as the darkest possible value on the image, therefore eliminating any detail in darker elements and creating that subdued effect. For instance, if we choose our dark shade to be a dimgrey, any pixels darker than dimgrey will become dimgrey, while any pixels lighter than it will remain.

<div class="video-container">
<video autoplay loop controls src="../images/posts/blend-modes/vintage-effect-demo--noaudio.mp4"></video>
</div>

-- ADD STATIC IMAGES OF THE EFFECT --

Choosing a dark purple or brown color will likely get you the effect you are looking for.

&num;artTheWeb

**tldr; lighten blend mode element with a background that is the shadow color**