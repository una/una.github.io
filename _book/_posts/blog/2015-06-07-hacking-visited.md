---
layout: post
title: "Hacking :visited"
permalink: /hacking-visited/
date: '2015-06-07'
comments: true
tags:
- visited
- css
- hack
- a11y
- accessibility
- sass
- scss
header-bg: ../images/posts/visited/bg.jpg
audio: audio-visited
duration: "7:44"
audio-size: 9274561
subtitle: Hacking the :visited selector to show unread posts. We'll look at the limitations and my little work-around.
---

It's been on my to-do list for two weeks now &mdash; adding a `:visited` state to my blog posts. I was inspired after reading [this](http://joelcalifa.com/blog/revisiting-visited/) blog post by [Joel Califa](http://twitter.com/notdetails), and thought "Heck yeah. That's a great idea. I can use it on my blog to represent links that haven't been read yet." But like most things on the Internet, it looked a lot cleaner from a distance.

## What is :visited?

`:visited` is a pseudo-class that is used to style links which have already been accessed in the browser of a user. Basically when you can tell if you have already been to a link or haven't yet (Joel's post goes over this really nicely -- I'd highly recommend checking it out). <img src="../images/posts/visited/home.png" alt="example image" style="max-width: 480px; width: 100%;" class="right"> In the early days of the Internet, stylig visited links was extremely prevalant, and a great way to understand context of place in a digital space. We seem to have lost that practice, and I rarely see it in action these days.


## Limitations

It all started fine and dandy. I applied `:visited` to the links on the home page and then accessed the child `h2` within them to change it's text color. This was a test. To avoid annoying my audience, what I really wanted was `:unvisited`, or to display a strikeout, or checkbox, or an *"Unread!"* badge. I could do any of those with the `:after` psuedo element. Well upon trying it, everything broke. So I did some [research](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) and discovered a few fun facts from reading the fine print:

> "For privacy reasons, browsers strictly limit the styles you can apply using an element selected by this pseudo-class: only color, background-color, border-color (and its sub-properties), outline-color, column-rule-color, and the color parts of fill and stroke."

So you can only change color? Well, being the stubborn girl I am, I knew I could work around this. I first tried to inject style with JavaScript. That was fine -- but it didn't overpower the style logic embedded in browsers. The method `getComputedStyle()` is disabled for this pseudo class. According to the official Mozilla developer documentation: **"the method getComputedStyle will lie."** Nice.

Then, I thought: maybe I can use the `color: transparent` to essentially hide the pseudo element content and only show the color when I want to apply them! I'm changing only the color, right? But when I did this, *all* of the pseudo elements (not just the visited ones) disappeared... *Wat?* ... It turns out that the `:visited` tag will always pull its parent's alpha channel. So, even trying `rgba(0,0,0,0)` will make everything disappear.

## Why the Limitations?

So what's up with this strict limitation anyway? Well, the way that `:visited` works is by walking through the user's history to figure out what sites the they've visited. This means that a lot of information can be accessed about that user, and their identity could be inferred. In 2010, a lot of changes were made to limit access to this type of information. Under certain circumstances, the browser is more likely to [lie](https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector) and mark a link as unvisited.

## It's Not Over Till I Win

It ended up being a pretty simple solution. To get the effect I wanted, I first, gave every element with a blog title (`h2` in this case) an `:after` pseudo-element and styled it to my preferences:

```scss
h2 {
  color: blue;

  &:after {
    content: '(unread!)';
    color: hotpink;
    display: inline-block;
    font-size: .6em;
    margin-left: .5em;
    vertical-align: middle;
  }
}
```

Then I had to apply the `:visited` pseudo class to all of the links in the list and target a child element `h2:after` to effectively *"hide"* it. I'm "hiding" it here by giving it the same color as the background (white). If you're not familiar with the power of the Sass ampersand, I'd recommend checking out [this post](http://una.im//2014/03/06/sass-snippets-the-almighty-ampersand.html).

```scss
a {
  display: block;
  text-decoration: none;

  &:visited h2:after {
    color: white;
  }
}
```

Awesome! So we're almost there. `:visited` is working. I've gotten relatively "hidden" badges. But then there's this hover... I'm applying a lightgrey background to each list-item when hovering over them, and I need to make sure I don't give away my pseudo-element secrets when hovering. So I simply just need to compensate:

```scss
// set global transition:
%transition-duration {
  transition-duration: .5s;
}

li {
  // applying uniform transition:
  @extend %transition-duration;

  // this is where I'm apply hover style:
  &:hover {
    background-color: lightgrey;

    // within the hover state, I'm also transitioning the h2:after color to match the background transition
    a:visited h2:after {
      color: lightgrey;
    }
  }
}

// return to the header to give it an identical transition:
h2 {
  color: blue;

  &:after {
    // applying uniform transition:
    @extend %transition-duration;
    ...
  }
}
```

## What About Accessibility?

You're right. Since some screen readers do read pseudo elements, we'll want to avoid hearing "unread" after every blog post title. That would be inaccurate. Also, **fun fact:** screen readers typically do this work for us. They note if a link has been visited or not right away before reading the link text.

To mitigate this, we can create a blank element as a placeholder next to the title with attribute `aria-hidden="true"` so that the screen reader doesn't try to read it. I'm using a `span` tag next to the `h2`. The content of the header will still be read normally, but anything inside of `span` is ignored. A simplified example in broken [Liquid](https://docs.shopify.com/themes/liquid-documentation/basics):

```html
{ % for post in posts % }
  <li>
    <a href="{ { post.url | prepend: site.baseurl } }">
      <h2 aria-label="{ { post.title } }">
        { { post.title } }
      </h2>
      <span aria-hidden="true"></span>
    </a>
  </li>
{ % endfor % }
```

This will cause a need to make minor changes things in the CSS now. But a quick way to make that change would simply be to swap out `h2` with `span`. Because we're introducing a new element here, you don't have to rely on pseudo-elements, and can even write the content or apply the visuals directly inside of the span tag: `<span aria-hidden="true">(Unread!)</span>`.

<img src="../images/posts/visited/list.png" alt="archive list" style="max-width: 460px; width: 100%;" class="left">

The downside is that none of the posts will be denoted as "unread," but since it's an enhancement anyway, ignoring the tag seems to be a better option than falsely reading it with every single header (which, as pointed out earlier, is redundant anyway).

So check out the [archive](http://una.im/archive/) and you can see what you've missed out on!

<div style="clear: both;"></div>

