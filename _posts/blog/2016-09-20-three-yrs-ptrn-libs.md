---
layout: post
title: "3 Years of Pattern Libraries: Lessons Learned"
permalink: /pattern-libs/
date: '2016-09-20'
comments: true
tags:
- design
- development
- pattern
- library
- component
subtitle: "TBD"
---

From a small startup called [nvite](https://nvite.com/), to the large corporation that is IBM (on [Watson](http://www.ibm.com/watson/) and [Bluemix](https://console.ng.bluemix.net/)), and now at a mid-sized startup: [DigitalOcean](https://www.digitalocean.com/), I've been working on pattern libraries for a while, and my understanding of design systems has come a long way since my first take at one for a University design [project](http://unakravets.com/edible/).

Component libraries can be very useful in terms of organization, unity, and ensuring performance/accessibility. They're a great asset to any team (especially as teams grow) and I've learned a lot about the development of design systems along the way, from working on various teams and chatting with other smart people at conferences/on the Internet. This is not a technical post, but a few good items to consider before diving into such an endeavor.

*I'm going to use the terms "pattern library", "component library", and "design system" interchangeably for the purposes of this blog post*

## Lesson 1: Not Everyone Will Agree

Pattern libraries (and really CSS in general) is one of those things that everyone has an opinion on how to implement because of its low barrier to entry. This can (and likely will) cause strong opinions to form among various members of your team. I've never worked on a team which agreed on everything in terms of a pattern library (which is a good thing&mdash;and I hope you're never on one either).

That's because of all of the different opinionated moving parts:

- File Architecture
- CSS Naming convention (THERE ARE SO MANY)
- Using Sass/PostCSS/Stylus/LESS
- (Even in just Sass, using `@extend` vs `@mixin`)
- How to share/implement/import
- Portability to systems
- NPM vs. Bower for delivery
- Extensibility story
- Reset vs. Normalize
- Plugins/Dependencies used
- Composability
- Do we port to other systems/libraries? (like React, etc.) Which ones?

This is just what I can come up with in 5 minutes. Those ideas and issues span a variety of front end topics and experience levels and **guess what!** Most of them have multiple valid solutions&mdash;it just becomes a matter of opinion at a point. And opinion is not the best method of decision making.

Like I said, I've never been on a team that didn't face this. I find the best way to deal with inconsistencies of opinion is to have a meeting **with a time-boxed agenda** *(this is the most important part!)* to talk them out. Have resources ready to defend your side. Then, make a commitment to have a final solution by the end of the meeting (or schedule a regroup meeting if no conclusion has been reached). It's best to make a decision and move forward as a team, even if its not *your* favorite way to do things, rather than get stuck on a naming convention and really put a dent in your productivity.

-- photos of DO team launching the new site w/our pattern library --

Another thing to keep in mind at all times when entering these kinds of discussions is your *audience*. Your audience is likely going to be other engineers or designers at your company. Ask them what they want (seriously, **just ask**), so you can both manage expectations and find the best solution to present.

As an example, while working on the Bluemix pattern library, we front-end devs were pretty heads-down and full-force with a Sass implementation, until we realized that a lot of our engineers were unfamiliar with the preprocessor and just wanted something like [Bootstrap](#) to "plug-and play." We came up with a multi-tier solution (providing the `.css` file via a CDN as one option, providing `.scss` files as classes, and providing `.scss` files with extensible styles to customize your own class names but pull in the style (that was 3 modes of consumption if you were counting). This allowed customization based on level of CSS familiarity/experience and project integration needs. I recently faced this challenge again at DigitalOcean and ended up providing both `.css` (for easy Ember integration instead of developing a build process on a microsite) and `.scss` for more advanced projects.

## Lesson 2: Layout is Hard

Everyone loves creating modular components like buttons, but handling the layout is the weird/difficult part. This is also because components are also much easier to deliver, but you can't really consume them without the base or global styles/variables.

My favorite solution to this is to provide utility classes along with those components, but not layouts. Providing layouts is, in my opinion, a little too restrictive. Utility classes are really useful for spacing and sizing of items including:

- margins/padding
- font sizes and styles
- common color application
- common flex/grid features
- hiding/showing items at various screen sizes

These should be *helpers* and not the bulk of your component library. As an example, the DigitalOcean pattern library, [Zach Schnackel](#)implemented the following naming convention system for these things:

| Class | Description |
|:---|:---|
| `.u-mt--large` | Use the "large" whitespace variable size on the top margin |
| `.u-ph--small` | Use the "small" whitespace variable on the horizontal (left and right) padding |
| `.u-mv--remove`| Remove vertical (top and bottom) margins |

If you noticed, all of the above examples use variables. Variables are important to keep up to date and consistent (as long as you also make sure to keep the naming consistent). Using a variable map for z-indices, colors, and whitespace is a good data structure solution for those items. This is the system used to better explain some of the whitespace modifiers:

- `m` / `p`: margin/padding
- `t` / `r` / `b` / `l` / `a`: top, right, bottom, left, all
- `v`/`h`: vertical (top and bottom) /horizontal (left and right)
- `remove`:  0px
- `small`: 8px
- `medium`: 16px
- `large`: 32px
- `xlarge`: 64px

It's like a "build-your-own-~~adventure~~-utility` machine 😅

## Lesson 3: Documentation is Your Product

While working on pattern libraries, it feels like the actual components or, you know, the actual pattern library is your product/deliverable, but this is a narrow view! As the developer of this, by nature, you are familiar with this product and with how to build it (because you built it!), but <a class="twitter-share">the real product/deliverable is the *ability* to use your component library</a>. This means documentation is paramount, and I'd even say it's more important than the individual components themselves.

There are a few methods for building documentation, some of which does most of the work for you (like [KSS](#), [StyleDoco](#), and [many others](#LinktoWelchspost)), but it's important to keep in mind, there is still a human element and amount of effort in each of these.

Some allow you to add notes directly in the CSS itself and will parse those files for you to build out documentation. This could work well, and is easy enough to implement, with the added benefit of always keeping up to date with the CSS itself.

If you need a more customized documentation page or pattern library (which is often the case), you could make these systems work for you, or spin up a separate docs page. If it's separate, it's *paramount* to keep this documentation up to date with each change. *That documentation is your product!*

**TL;DR: When it comes to pattern libraries, be prepared for differences in opinion and weirdness in dealing with layout, and remember that documentation is the most important part of your product**

Be sure to leave your own #protips in the comments below!

{% include threexthree.html %}
