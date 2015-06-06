---
layout: post
title: Hacking &colon;visited
permalink: /hacking visited
date: '2015-06-05'
comments: true
tags:
- visited
- css
- hack
- a11y
- accessibility
- sass
- scss
header-bg: ../images/posts/visited/doorbg.jpg
subtitle: Hacking the :visited selector to show unread posts.
---

It's been on my to-do list for two weeks now &mdash; adding a `:visited` state to my blog posts. I was inspired after reading [this](http://joelcalifa.com/blog/revisiting-visited/) blog post by [Joel Califa](http://twitter.com/joelcalifa), and thought "Heck yeah. That's a great idea. I can use it on my blog to represent links that haven't been read yet." But like most things on the Internet, it looked a lot cleaner from a distance.

## What is :visited?

`:visited` is a pseudo-class that is used to style links which have already been accessed in the browser of a user. Basically when you can tell if you have already been to a link or haven't yet (Joel's post goes over this pretty well). <img src="../images/posts/visited/home.png" alt="example image" style="max-width: 480px; width: 100%;" class="right"> In the early days of the Internet, stylig visited links was extremely prevalant, and a great way to understand context of place in a digital space. We seem to have lost that practice, and I rarely see it in action these days.


## Limitations

It all started fine and dandy. I applied `:visited` to the links on the home page and then accessed the child `h2` within them to change it's text color. This was a test. To avoid annoying my audience, what I really wanted was `:unvisited`, or to display a strikeout, or checkbox, or an *"Unread!"* badge. I could do any of those with the `:after` psuedo element. Well upon trying it, everything broke. So I did some [research](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) and discovered a few fun facts from reading the fine print:

> "For privacy reasons, browsers strictly limit the styles you can apply using an element selected by this pseudo-class: only color, background-color, border-color, border-bottom-color, border-left-color, border-right-color, border-top-color, outline-color, column-rule-color, fill and stroke."

So you can only change color? Well, being the stubborn girl I am, I knew I could work around this. I first tried to inject style with Javascript. That was fine -- but it didn't overpower the style logic embedded in browsers. The **method** `getComputedStyle()` is disabled for this pseudo class. According to the official Mozilla developer documentation: **"the method getComputedStyle will lie."** Nice.

Then, I thought: maybe I can use the `color: transparent` to essentially hide the pseudo element content and only show the color when I want to apply them! I'm changing only the color, right? But when I did this, *all* of the pseudo elements (not just the visited ones) disappeared... *Wat?* ... It turns out that the `:visited` tag will always pull its parent's alpha channel. So, even trying `rgba(0,0,0,0)` made everything disappear.

## Why the Limitations?

So what's up with this strict limitation anyway?

## It's Not Over Till I Win

- colors
- invert for the hover
- show code

## What About Accessibility?

You're right. I don't want screen readers to read "unread!" after every Blog post title. Since some screen readers do read pseudo elements, we'll want to avoid this. One way to do so is by using the `aria-label` [attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute). Yes, using it on an h2 isn't the intended use case, but we're already hacking here. I can pull in the text in the template in the same way I'm pulling in the title. In (a simplified example in broken [Liquid](https://docs.shopify.com/themes/liquid-documentation/basics)):

```
{ % for post in posts % }
  <li>
    <a href="{ { post.url | prepend: site.baseurl } }">
      <h2 aria-label="{ { post.title } }">
        { { post.title } }
      </h2>
    </a>
  </li>
{ % endfor % }
```

<img src="../images/posts/visited/list.png" alt="archive list" style="max-width: 460px; width: 100%;" class="left">

Another option would be better to create a blank element as a placeholder next to the title with attribute `aria-hidden="true"` so that the screen reader doesn't try to read it. The headers will still be parsed normally. The downside is that none of the posts will be denoted as "unread," but since it's an enhancement anyway, ignoring the tag seems to be a better option than reading every single one.

So what have you [missed](http://una.im/archive/)?


