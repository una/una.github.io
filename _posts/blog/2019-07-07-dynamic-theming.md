---
layout: post
title: "Dynamic Color Theming with Pure CSS Custom Properties"
permalink: /dynamic-theming/
date: '2019-07-07'
comments: true
tags:
- css
- variables
- theme
- custom properties
- pure css
subtitle: "Did you know that you can build custom dynamic color themes without the use of JavaScript or a CSS preprocessor!? Read on!"
---

Did you know that you can build custom dynamic color themes without the use of JavaScript or a CSS preprocessor!? With the magic of CSS Custom Properties, HSL colors, and some calc() fun, you too can create custom theming with no dependencies. It's such an exciting time to be a web developer!

## The Demo

<p class="codepen" data-height="850" data-theme-id="36912" data-default-tab="result" data-user="una" data-slug-hash="VJMBbx" style="height: 850px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Dynamic Color Theme With CSS Vars">
  <span>See the Pen <a href="https://codepen.io/una/pen/VJMBbx/">
  Dynamic Color Theme With CSS Vars</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

In the above demo, you can select a primary and secondary color and create entire color systems with vanilla CSS alone. The only JavaScript used in that demo is to change the colors dynamically.

## The Inspiration

<a class="twitter-share quote left">It's 2019 - is your design system 60,000 lines of Sass?</a>

It's a common story: [explain here] and especially with systems that were built about 5 years ago. IBM's Carbon, and Google's Material Design are two such system based on Sass (the CSS preprocessor). This is because Sass (and other CSS preprocessors) were the first tools which provided web developers real powerful, logical tools that allowed us to build systems without requiring JavaScript. And really, JavaSceipt wouldn't make sense for what Sass provides us with.

Since then, many systems have moved into framework-based component approaches (i.e. AirBnb's __ , Attlassian's ___). This is because the user is the focus for design systems. And usability is key. Providing the system in a user's preffered workflow pattern (i.e. framework), which makes it easier for them to actually adopt the system into the product, helps.

When migrating to these systems, it doesn't always make sense to still use Sass. So we may use something like PostCSS to polyfill some of the tooling. But why even have those extra dependancies when we no longer need to? CSS is now capable of doing this for us. So what do I mean by "this"?

## What Preprocessors Give Us

When it comes to color systems, there are several [Sass color functions](https://sass-lang.com/documentation/functions/color) that authors find useful. Jackie Balzar has a great [visual post](http://jackiebalzer.com/color) about this. Some of the most common are:

- `lighten()` and `darken()`
- `complement()`
- `hue()`
- `mix()`

A lot of these transformations are based on HSL, or can be re-created with CSS filters. For example, `lighten` and `darken` are essentially just the `lightness` value from HSL (the L). Similarly, `hue` is the H from HSL. Complement can be calculated by taking the inverse of the hue (i.e. adding or subtracting `180`, which would transform the hue to the other side of the 360 degree color wheel. Using `calc()` in our CSS, along with Custom Properties (AKA CSS Variables), lets us apply these transformations based on a single value.

Another *key* functionality that Sass provides are logical values, which allow for us to calculate accessible colors based on their background is the `contrast-color()` function. This function takes a series of values: the base color to contrast against, a light value, and a dark value, and will return whichever of the provided values contrasts more with the base [TODO: Double check this and make sure it aligns with the Sass docs].

This is really important for generated themes and systems. For example, in a design system like Material, Sass is used to set the text color of headers based on the background color of the top app bar, or button. This prevents inaccessible colors in an application and makes it easier for developers to build with best practices.

[image of two themes of top app bar for material]

In this demo, I've recreated `lighten()`, `darken()`, `complement()`, `color-contrast()`, and even triadic colors, all using CSS custom properties with the `calc()` function. This will work in all modern browsers, but you still need to use a preprocessor to support older browsers like IE11. 

## Setting it Up

- setting base theme variables

## Adjusting Color with HSL

- how to adjust lightness

## Getting the Complement and Triads

- put a diagram in here -

## Recreating Mix()

The `mix()` blend mode is a little bit trickier than something like `lighten()` or `darken()` but it can totally be done with HSL calculations!

<p class="codepen" data-height="370" data-theme-id="36912" data-default-tab="result" data-user="una" data-slug-hash="qzKXgr" style="height: 370px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Color Mix in Vanilla CSS">
  <span>See the Pen <a href="https://codepen.io/una/pen/qzKXgr/">
  Color Mix in Vanilla CSS</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Creating a Color Contrast Function

## The Future of CSS Color Functions

- Color Level 5