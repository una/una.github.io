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

## Drop Shadow Pixels

So let's get started. What exactly is making those little pixels? If the title didn't give it away, it is the CSS3 multiple drop shadow property! Each pixel is it's own drop shadow individually placed.