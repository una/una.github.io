---
layout: post
title: CSS Image Effects &num;3&colon; Vignettes 3 Ways
permalink: /vignettes
date: '2015-10-12'
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
- vignette
subtitle: This week we'll take a look at one of the most popular photo manipulations&colon; adding a vignette to draw attention to the center of an image.
header-bg: ../images/posts/css-effects/3/bg.jpg
---

This is part of a series of posts breaking down visual effects using CSS filters and blend modes. Read [Part 1: The Vintage Washout Effect](/vintage-washout) and [Part 2: 3d Glasses](/3d-effect) for some background on blend modes. In this post we'll explore one of the most popular photo filters: the vignette. A vignette fades an image around the corners to draw attention to the center. There are a few ways to get this effect with CSS.

## Way 1: Inset Box Shadow

The first and most widely supported method is to use an inset `box-shadow` on an image. Box shadow is actually a very interesting and flexible property. I wrote an etire post on show to made [pixel art](/sass-pixel-art) out of box shadows using Sass lists and functions.

```
.vignette-1 {
  height: 300px;
  position: relative;
  background-image: url('jungle.jpg');

  &:after {
  content: "";
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  box-shadow: inset 0px 0px 100px rgba(0,0,0,1);
  }
}
```

## Way 2: CSS Gradients


{% include css-effects.html %}