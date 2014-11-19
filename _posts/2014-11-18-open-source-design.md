---
layout: post
title: Open Source Design
permalink: /open-source-design
date: '2014-11-18'
comments: true
tags:
- open source
- design
header-bg: 
subtitle: When designers and developers work together from the start, it produces better outcomes. But how can we get designers involved and wanting to participate in the open source community from the start?
---

When designers and developers work together from the start, it produces better outcomes. But how can we get designers involved and wanting to participate in the open source community from the start? In order to figure out how to fix it, we need to take a look at the barriers for designers (why they don't participate in open source), and how we can work together to to influence change.

<br>
<div class="video-container">
  <iframe src="http://www.youtube.com/embed/TkpjDOlB17E" frameborder="0" width="560" height="315"></iframe>
</div>
<div class="caption">Click <a href="http://www.youtube.com/embed/TkpjDOlB17E">here</a> if you can't see the video above.</div>

## Defining "Open Source Design"
For me, I see 3 distinct ways that the term “Open Source Design" can be interpreted:

1. **"Designing in the Open"**: This means showing design progress in the open, or "designing out loud." A lot of designers operate in a very different way: hiding unfinished and rough sketches due to fear of premature criticism: the "but it's not ready yet" mentality. [Dribbble](http://dribbble.com), for instance, was originally intended as a platform for works-in-progress to get feedback and critique. Now, it has has become a showcase for finished pieces and a miniature portfolio [platform](http://cmdspace.com/).
2. **Designing Free Resources**: Open sourcing your designs (i.e. icon sets, themes, layouts, stock photography, vector graphics, etc.) for others to use in their own work. This is all about making resources free for others. The [League of Moveable Type](https://www.theleagueofmoveabletype.com/), for instance provides some beautiful free fonts. [Open Designs](http://www.opendesigns.org/) is another example.
3. **Designing for Open Source Projects** (like on Github). This definition is about designers working in conjunction with developers to participate in their open source projects. When the two work together, the results are [beautiful](http://beautifulopen.com/) and make the open source projects more usable (therefore more likely to be adapted, grown, expanded &mdash; and the cycle goes on and on).

The third definition *(Designing for the Open Source Community)* is what I'd like to focus on.

## So Why Don't Designers contribute to Open Source?

Often, designers and developers have the same user-centered goals. But why don't designers participate in open source communities in the way that developers do? Well, we talked about this a lot at [SassConf](http://sassconf.com) last month, and came to a few conclusions.

### The "Fuck You, Pay Me" Mentality

If you haven't [seen it yet](https://www.youtube.com/watch?v=jVkLVRt6c1U), Mike Montiero gave one of the most famous Creative Mornings talks ever in 2011 where he encouraged creatives to not take abuse and payment refusal from their clients. 

<a class="quote twitter-share left">Designers often feel undervalued for their craft and therefore have a knee-jerk reaction when asked to do "free work." </a>

Because of the ignorant and prevalent public opinion that design is superfluous and subjective, designers need to defend their value to clients. With development it's simple: it either works or it doesn't (okay, okay it's definitely not that simple, there are a ton of factors that go into how efficiently it works), but for designers, it can come down to tastes or a clients' child's "favorite color." Designers often feel undervalued for their craft and therefore have a knee-jerk reaction when asked to do "free work." 


Since so many beginner designers feel forced into free or low-paying work to start out, students in art school are often taught about how to defend their value. Well, this is all important and good, but it's a mentality that creates a division. This is not a problem often faced by developers.

### The Intimidation Barrier

Designers and developers are often going about solving the same goals, but with different tool sets. And the tools that developers use for open source can be really intimidating at first. There are a [lot of designers](http://designopensrc.com) who would love to help but are afraid of "breaking something" in the process, and simply don't know where to get started. Telling these designers to just go "read the documentation," as though it is obvious and simple, further isolates them by creating an environment of inferiority (even if that wasn't the intention at all). Alternatively, developers could get lost in all of Photoshop's buttons and options &mdash; thinking &mdash; what is this GUI craziness?

<a class="twitter-share quote right">Designers and developers are often going about solving the same goals, but with different tool sets.</a>

Right now, developers and designers don't really have a "best way of communicating" that is natural to each others distinct workflow. I wrote more extensively about this topic for [Design Open](http://designopen.org/barriers-for-designers) by analyzing the challenges of that effort's current implementation.

### The Ownership Problem

This is not an issue of greed or wanting credit for work, but it's a problem with feeling like your work isn't really yours to design. That sounds strange, especially to proponents of open source, but let me explain. 

Focusing on small design components is creatively blocking. How can a designer make the best choices for people when they might not have the full story? How can we delineate tasks when multiple designers and developers are working together without stepping on each other's feet? The issue queue is one solution for developers, could this be translated to design as well? Designers generally want to build systems for users, not just components on a page.

### The Threat of "Design By Committee"

Design by committee is a designer's worst nightmare. It's when things get a little out of hand and the designer loses all creative expression to become a drone, or pixel pushers, for a committee above them. And this happens due to the subjective nature of design. It's already difficult to critique bad code that people are contributing to open source, but at least it's easy to give a solution with evidence of why it should be improved. It is much more difficult to be so objective with design. [Pixelapse](https://www.pixelapse.com/explore) is a brand new collaborative design tool that allows for diffing and commenting on imagery. I'm interested to see how well this product will go over, considering the ownership problem and design by committee.

## We're All Just Makers, Really

**[Codepen](http://codepen.io)** is a great example of mixing design and developer types. I was just at a Codepen Meetup in Austin, and it was great to see such a diversity of people. **Hackathons** are also the best. Though this term seems to scare designers away (proving that language is super important in this effort), some of the best hacks I've seen come from teams of both designers and developers. I just met a girl who is studying fashion design and computer science at Kent State and told me about their last hackathon: a fashion hackathon. Developers paired with fashion designers and were provided any hardware they wanted to create wearables.

## What Can We Do Right Now?

We need to foster more conversation between designers and developers. 

### Developers Recognizing the Value of Design

Step one would be a want for developers to work with designers. There have been a lot of [studies](http://www.npr.org/2014/05/09/308756512/what-s-the-difference-between-real-and-perceived-value) [showing](http://www.npr.org/programs/ted-radio-hour/308752278/brand-over-brain) the effect of good design on product adoption. It increased the perceived value, which is what really matters.

### Contributing Docs for Designers

Making contribution docs more clear (adding in missing steps between 0 and go, i.e. installing Bundler with a link instead of just saying "bundle install").  Also, breaking up contribution docs into core development and design development could be a solution. It will take a lot more conversation to sort out exactly how this system would work, but it could be a start.

### Issues: Design Needed

So now that designers and developers want to work together, how can they? Well, creating and tagging design-related issues on Github is a place to start. Hey, open source developers, start tagging your issues as `design needed` or labeling them as `design`. That way, designers can search Github:

`design needed type:issue state:open is:public`

`label:design state:open is:public`

Again, like contribution docs for designers, this system could use work, but its good to have a starting point to work off of.

### Styleguides as a Solution

I see [styleguides](http://una.github.io/pattern-libraries) as the best way for designers and developers to work together quickly and efficiently. Now, there IS [psd viewing/diffing](https://github.com/blog/1845-psd-viewing-diffing) on Github, but that still creates the boundary of not having the designs coded for developers to use as the product grows and changes (which you know, happens in open source). Static comps are not a good solution for open source design for this reason, but that's not to say that designers who don't code (yet ;)) can't participate. 

There can be a mix of static comps and design ideas submitted in the conversation for the style guide issue, from which designers with more coding experience can build them out. Styleguides are a great introduction to playing around with how the style layer will affect an entire application. The changes are quick and global. (And it will likely inspire more designers to learn how to code)

### Feedback Guidelines

Once we've gotten designers and developers working on these projects together (yay!), lets make sure that feedback is constructive and positive. Initially, language might be awkward and clumsy, but as this becomes more widely adopted, it will become normalized and fluid. Education is key for this. I'd like to have more conversations in the community about a unified set of feedback guidelines that can be used globally.

**That being said, I want to set up a time or place where we can get together and chat about this, either on IRC or a big Google Hangout. So if you haven't already, send your email address to me: una.kravets@gmail.com and I'll add you to the list when a date and time are set to continue the conversation about open source design.**

Finally, watch this really awesome [video](https://www.youtube.com/watch?v=djf8sLjtbzU) on Open Source Design by Garth Braithwaite.

<blockquote>Now, that was a lot of things. Join the conversation on the #opensourcedesign IRC channel and add your email to the invite list for the virtual Hangout event.</blockquote>

