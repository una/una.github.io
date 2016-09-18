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

I created my first "design guide" for a university print design class. The project was to rebrand an existing corporate identity, and I chose [Edible Arrangements](#). Me and my ~~partner~~-nerd-in-crime [Ally Palanzi](#) decided to turn the print project digital since pattern libraries were starting to emerge as vogue at the time.

Since then, I've worked on various forms of pattern libraries for over 3 years now. From [nvite](#) to [Watson](#) to [Bluemix](#) and now at [DigitalOcean](#), I've learned a few things from various teams and from chatting with other smart people at conferences and on the Internet. Aside from the details and testing and implementation, here are 3 general lessons learned, which are good to know when diving into such a project.

*I'm going to use the terms "pattern library", "component library", and "design guide" interchangeably for the purposes of this blog post*

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
- Plugins/Dependancies used
- Composability
- Do we port to other systems/libraries? (like React, etc.) Which ones?

This is just what I can come up with in 5 minutes. Those ideas and issues span a variety of front end topics and experience levels and **guess what!** Most of them have multiple valid solutions&mdash;it just becomes a matter of opinion at a point. And opinion is not the best method of tem decision making.

Like I said, I've never been on a team that didn't face this. I find the best way to deal with inconsistencies of opinion is to have a meeting **with a timeboxed agenda** (this is the morst important part!) to talk them out. Have resources ready to defend your side. Then, make a commitment to have a final solution by the end of the meeting (or schedule a regroup meeting if no conclusion has been reached). It's best to make a decision and move forward as a team, even if its not *your* favorite way to do things, rather than get stuck on a naming convention and really put a dent in your productivity.

-- photos of DO team launching the new site w/our pattern library --

Another thing to keep in mind at all times when entering these kinds of discussions is your *audience*. Your audience is likely going to be other engineers or designers at your company. Ask them what they want (seriously, **just ask**), so you can both manage expectations and find the best solution to present.

As an example, while working on the Bluemix pattern library, we front-end devs were pretty heads-down and full-force with a Sass implementation, until we realized that a lot of our engineers wer unfamiliar with the preprocessor and just wanted something like [Bootstrap](#) to "plug-and play." We came up with a multi-tier solution (providing the `.css` file via a CDN as one option, providing `.scss` files as classes, and providing `.scss` files with extensible styles to customize your own class names but pull in the style). This allowed customization based on level of CSS familiarity/experience and project integration needs. I recently faced this challenge again at DigitalOcean and ended up providing both `.css` (for easy Ember integration instead of developing a build process on a microsite) and `.scss` for more advanced projects.

## Lesson 2: Layout is Hard

Everyone loves creating modular components like buttons, but handling the layout is the weird/difficult part.

- utility classes over layouts over margins in components over individualized layout

## Lesson 3: Documentation is Your Product

While working on pattern libraries, it feels like the actual components or pattern library is your product/deliverable, but this is a narrow view. You are familiar with this product you've been working on and you're familiar with how to build it (because you built it!), but <a class="twitter-share">the real product/deliverable is the ability to use your components</a>. This means documentation is paramount, and I'd even say it's more important than the individual components themselves.

- auto documentation is good
- i like being able to customize and add notes
- provide some optinos here

{% include threexthree.html %}