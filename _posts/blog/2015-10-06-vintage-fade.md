---
layout: post
title: Image Effects in CSS #1: Vintage Washout
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

--> example image here <--

What is happening here is that we are replacing the dark tones with a slightly lighter shade. If the existing tone is darker than the "new" darkest tone, it is simply overriden by that tone. Thus, the lighten blend mode is perfect for our needs here.

## Step 1: Lighten

We apply the lighten blend mode to either an overlapping element or a pseudo element.

<aside class="note">Please note: the <code>img</code> element cannot have its own pseudo elements.</aside>

With the [lighten]() <-- GET LINK --0-- blend mode,