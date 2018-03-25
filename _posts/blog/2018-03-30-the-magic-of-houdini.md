---
layout: post
title: "The Magic of Houdini"
permalink: /the-magic-of-houdini/
date: '2017-03-30'
comments: true
tags:
- year in review
- reflection
- yearly
- 2017
subtitle: "There's a lot of talk these days about what is going to be the future of CSS. My hot take: it's Houdini; a tool that allows us to access the CSS object model and invent reusable styles for browsers!"

---

<style>
</style>

There's a lot of talk these days about what the "future of CSS" is going to be. CSS in JS? CSS inline? CSS (in) modules? CSS in da club? Okay, so I made the last one up, but you get the idea. 

Something that people *aren't* talking about however, is a magical tool called **Houdini** that's been in the works for a few years now and allows developers to, for the first time, gain access to the CSS object model itself.

> Oh yes, you heard me -- the CSSOM! The actual CSSOM! CSSOM-Y GOSH!

Okay, if you aren't convinced yet, let me take you through a journey of why this is so exciting. The journey starts with an outline of what this is (in a few more words than above), then will venture into the performance implications, go through some examples with the CSS Paint API (now available in Chrome Stable as of 65!), and then talk about *the future*.

## So Wait, What Exactly is Houdini?

So glad you asked! Let's take a look at the current problems plaguing forward-thinking web styling today: say we want to apply a cool effect but it's not really possible in browsers yet, and only really works under a weird flag in Chrome. We can... write a polyfill for it! Excellent! But the polyfill is a layer on top of your Document Object Model (DOM), that runs the page through a recomposite, paint, etc. and then jankily applies the style, slowing down our user's time-to-see-site (T2S2(__tm symbol__)).



Houdini works through a series of JavaScript-like files

## Performance Implications