---
layout: post
title: "3 Easy Performance Wins for Designers"
permalink: /perf-design-wins/
date: '2016-06-12'
comments: true
tags:
- performance
subtitle: "TBD"
---

Performance is key in positive product outcomes. Not only do we need to deliver our content quickly for user experience continuity, but we also need to present content quickly for it to be accessible to users. One of my favorite quotes on this subject is from a talk on accessibility (not performance), but it relates to both:

> Accessibility is like a blueberry muffin — you can't push the berries in there afterward. It needs to be baked in from the beginning &mdash; [Cordelia Dillon](https://twitter.com/cordeliadillon)

*From the beginning.* This is exactly why we need to empower our UX designers and copywriters to think about these topics. And it's especially relevant to designers, when [media is the linchpin to performance optimization](https://www.keycdn.com/blog/web-performance-experts/).

<style>
#twitter-widget-0 {
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2em !important; /*override*/
  margin-top: 2em !important; /*override*/
  display: block;
  width: 100%
}
</style>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">😱 During the last Olympics, the avg webpage was less than half the size it is today.<br><br>😬 Images have also doubled. <a href="https://t.co/UshDN4KTb6">pic.twitter.com/UshDN4KTb6</a></p>&mdash; Una Kravets (@Una) <a href="https://twitter.com/Una/status/695062118719029248">February 4, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

**This is a team effort** and we need to get the whole team on board instead of waiting for the point in the project where we're developing the thing to focus on accessibility. We need to start thinking about performance as a part of the design process, because it is. <a class="twitter-share">Performance is a design challenge.</a>

## An Open Letter to Digital Designers:

<br/>

*Dear Web Designer,* 💕

*You have the power to make the Internet a more accessible place. You can bring content to your users quickly and efficiently, and use load time efficiently. Performance is in your hands. You can impress your team, your manager, and your CEO. You affect the bottom line, right now.*

*But it isn't even just about that bottom line. It's about sending your content to a user so that they can access it quickly, with the most important information first. It's about making the experience work seamlessly. It's about saving humans from frustration, cognitive load, and the most valuable resources we have &mdash; time and money.*

*You have the power to make the Internet better for people. Make your voice heard. Prioritize creating performant and accessible designs from the beginning. Embrace this responsibility and own it. Make us proud! I can't wait to work together on this because accesibillity is for everyone!*

💖 *The Users of the Internet*

<br>
<br>

![THINX ad](../images/posts/a11y/a11yxthinx.jpg)

<br>
<br>


## Win #1: Image Optimization

Images are the biggest "bang for your buck" performance win since, again, media assets take up the majority of web resources. There are a few things you can do to make sure that the assets you are putting online are performant.

The first is to choose the correct image format. Some formats are more performant than others in different use cases. For example, for an icon with simple colors, an svg or png may be ideal. A photo with a lot of color is more performant as a jpg.

Here's a flowchart by the awesome [Sarah Drasner](https://twitter.com/sarah_edo):

<p data-height="502" data-theme-id="light" data-slug-hash="VjvGJM" data-default-tab="result" data-user="sdras" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/sdras/pen/VjvGJM/">Animated Flow Chart to demo animating viewBox</a> by Sarah Drasner (<a href="http://codepen.io/sdras">@sdras</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

> Never put an image on the web that hasn't been optimized &mdash; Dave Rupert

<style>
input[type="checkbox"] {
  -webkit-appearance: checkbox;
  appearance: checkbox;
  margin-right: .5em;
}

input:checked + label {
  text-decoration: line-through;
}

.small-check {
  font-size: 80%;
  margin-left: 1.5em;
}
</style>

- <input type="checkbox"><label>Resize images to fit their containers. <br> <span class="small-check">*(Don't send assets larger than the greatest common factor size)*</span></label>
- <input type="checkbox"><label>Download [ImageOptim](https://imageoptim.com) and run your asset folder through it</label>
- <input type="checkbox"><label>Remove additional layers and artifacts from SVGs <br> <span class="small-check">*(such as uneccesary headers from Sketch or Illustrator)*</span></label>
- <input type="checkbox"><label>Minify SVG with [SVGO](https://jakearchibald.github.io/svgomg/)</label>
- <input type="checkbox"><label>Consider using [Picturefill](https://scottjehl.github.io/picturefill/) for retina images and responsive assets</label>

## Win #2: Typography Decisions

Typography is a key part of the identity of any company, and plays an important role in helping users parse a web page's content more effectively. However, you may not realize that every weight of every font of every style is another request and a heavier load on the page. For example:

-- example image of all of the font weights --

- Am I using the correct HTML tags?
- Do we really need all of those font weights?
- Subset Header Typography

## Win #3: Active Waiting

No matter how much optimization you do, there will still be some delay in load time as assets roll in. This is where design becomes even more critically important in improving a website's performance. The most important part of performance optimizations for a user is improving **percieved performance** &mdash; AKA how fast a user *feels* the website is loading. Is it noticeable? [Studies show](#) that when users leave to competitors when they feel a 20% page slowdown (1 second on a site that takes 5 seconds to load).

> "Progress bars are the hold music of the web. They highlight to the user that they're waiting" -- [Tim Kadlec](https://twitter.com/tkadlec) at [Generate NYC](http://www.generateconf.com/new-york-2016/)

There is so much you can do to take advantage of this waiting time &mdash; also known as **active waiting.** Tim Kadlec gave a great talk on this subject where he highlighted some of the behavior that various companies do in this waiting time. For example, Facebook loads up blank divs where the content will go so the user is cued that content is coming, and visually primed to receive it.

-- image of blank facebook screen --

This is akin to going to a restaurant for dinner. The table is set for food to arrive. We're primed to recieve it. When we arrive and there is no place setting, we're just sitting there with the menu and nothing else, it feels strange.

-- cartoon of restaurant compared to load bar --

- viget study on the customized laoding animation

Either way that you spend this wait time, <a class="twitter-share">consider active waiting rather than a passive, generic loading bar.</a>
