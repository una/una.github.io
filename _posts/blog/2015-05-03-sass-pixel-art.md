---
layout: post
title: Sass Pixel Art
permalink: /sass-pixel-art
date: '2015-05-03'
comments: true
tags:
- drop-shadow
- pixel
- art
- sass
- scss
header-bg: ../images/posts/terminal.jpg
subtitle: Understanding drop-shadow pixel art.
---

It is 6:37 AM and I am at an airport. This is where to best ideas happen right? I’ve been perusing the internet to find some practical examples of Sass lists using list functions in production (somewhat unsuccessfully) and stumbled upon [this](http://codepen.io/jackarmley/pen/LohqG) really awesome CodePen by [@shadowmint](https://twitter.com/shadowmint) and [@jackarmley](https://twitter.com/jackarmley). Hmm. Just the thing I needed for in-flight entertainment for the duration of the trip. I wanted to get down to nitty gritty and understand what was happening here.

The first time I saw Sass read from a matrix for instruction was in [Roy Tomeij’s](http://twitter.com/roy) SassConf 2013 [workshop](https://github.com/roytomeij/sassconf)
and it went right over my head. No shame in that. I get it now. And I was able to cover this topic in my own [workshop](http://github.com/una/adv-sass-workshop) for PEERS!

## Box Shadow Pixels

So let's get started. What exactly is making those little pixels? If the title didn't give it away, it is the CSS3 multiple box shadows property! Each pixel is it's own, individually placed box shadow.

-- show how it works here visually --

## Reading a Matrix

-- sass has lists that can be either comma separated values or space separated values.

## Building the Pixel Grid

## Magics

## Colormapping Pixels

We can also use this same technique to get a bit more advanced. Let's make the mushroom from Mario! First step is to figure out the grid:

![](../images/posts/pixel-art/mushroom-dude.png)

Then, we can use these numbers and color values to make some colored pixel art. Let's use *w* for *white*, *r* for *red* and *b* for *black*. With that setup, we can turn the mario mushroom into a matrix of pixel values:

```
(w w w w w b b b b b b w w w w w)
(w w w b b r r r r w w b b w w w)
(w w b w w r r r r w w w w b w w)
(w b w w r r r r r r w w w w b w)
(w b w r r w w w w r r w w w b w)
(b r r r w w w w w w r r r r r b)
(b r r r w w w w w w r r w w r b)
(b w r r w w w w w w r w w w w b)
(b w w r r w w w w r r w w w w b)
(b w w r r r r r r r r r w w r b)
(b w r r b b b b b b b b r r r b)
(w b b b w w b w w b w w b b b w)
(w w b w w w b w w b w w w b w w)
(w w b w w w w w w w w w w b w w)
(w w w b w w w w w w w w b w w w)
(w w w w b b b b b b b b w w w w)
```

Now, when we read the lines, we want to adjust for each of these colors:

```
@if $item == w{
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + white;
}
@if $item == b {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + black;
}
@if $item == r {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + red;
}
```

We can make this a little bit more modular by abstracting the pixel color variables into a property map and access that to make sure things remain modular and neatly organized:

```
// map of pixel mapping color values to actual color
$pixel-color-map: (
  'r' : #f00,
  'w': #fff,
  'b': #000
);

// using the map in our mixin
@if $item == 'w' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'w');
}
@if $item == 'b' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'b');
}
@if $item == 'r' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'r');
}
```

But we can surely clean that up a bit more, right? Let's check to see if our value exists in our map, and then sync it up with it's matching value:

```
@if map-has-key($pixel-color-map, $item) {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, $item);
}
```

With this method, we can specify our color-mapped pixel variable for transparent colors like so:

```
$pixel-color-map: (
  'r' : #f00,
  'w': #fff,
  'b': #000,
  'x': transparent
);
```

Voila! It's Sass magicery!

P.s. please never actually use this. It's terrible for performance, but perfect for just playing with code for fun :)