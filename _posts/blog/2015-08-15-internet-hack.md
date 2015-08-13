---
layout: post
title: The Internet We Know is Built on Hacks
permalink: /internet-is-hacks
date: '2015-08-15'
comments: true
tags:
- development
- design
- web
- internet
- history
subtitle: subtitle
header-bg: ../images/posts/web-hack/opte-project.png
---

The Internet we know today is built on hacks. All of the newest trends that have come out have been based on workarounds of the past. HTTP2, Flexbox, and CSS Filter options are all examples of things that have solved inevitable hacks. Let's start by taking a look at the past.

## The Anchor Tag

It all started with the birth of the World Wide Web in 1989, which was based on a single, simple, yet extremely powerful building block of the internet: the anchor tag. Tim Berners Lee wrote a paper at CERN called "Information Management: A Proposal," in which he outlined an ever-evolving pool of information &mdash; "a universal linked information system" where "generality and portability are more important than fancy graphics techniques and complex extra facilities. <sup>[1](http://www.independent.co.uk/life-style/gadgets-and-tech/news/25-years-of-the-world-wide-web-the-inventor-of-the-web-tim-bernerslee-explains-how-it-all-began-9185040.html)</sup>"

That, in a nutshell, is why the web was created. It was a system of information sharing and linking, leading users to be able to connect between documents and share content. There is beauty in that simplicity of pure content sharing and information transfer.

![Opte Project](../../images/posts/web-hack/opte-project.png)
<div class="caption">An image from the [Opte Project](http://www.opte.org/), which visualizes Internet connections.</div>

But we wanted those fancy graphics techniques and complex add-ons. Unfortunately, all we really had to work with was basic HTML that you couldn't even nest that deep, and anchor tag &mdash; this idea of a link.

<figure class="right">
  <img src="../images/posts/web-hack/html-elements.png" alt="html 1.0 elements" style="max-width: 460px; width: 100%;">
  <figcaption>The <a href="http://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt">HTML 1.0 Draft Spec</a> (it's super interesting &mdash; highly recommend giving it a read!</figcaption>
</figure>

This link has become the basis of the web. Seriously. If you think about it, <a class="twitter-share">everything is a link: from images to CSS styles to scripts.</a> They are all links.

<ul>
  <li> Images: <code>&lt;img src="&lt;LINK&gt;"&gt;</code></li>
  <li> Styles: <code>&lt;link href="&lt;LINK&gt;"&gt;</code></li>
  <li> Scripts: <code>&lt;script src="&lt;LINK&gt;"&gt;</code></li>
</ul>

These have become the building blocks of the web today, but at its core, you can pretty much call this a hack. Instead of creating a new system, we've just continued linking elements regardless of type. And it's just getting worse and worse. The original purpose of the link was pure content connectivity, but here we are, hacking the link to extend it as much as we can and cluttering the web as we go.

<figure class="left">
  <img src="../images/posts/web-hack/webpage-sizes.jpg" alt="In about 7 months average web page size will be same as Doom install image." style="max-width: 460px; width: 100%;">
  <figcaption>
</figure>

In 2014, the average number of HTTP requests per web page was 95.<sup><a href="http://www.sitepoint.com/average-page-weight-increases-15-2014/">2</a></sup> I have no doubt in my mind that it is now reaching triple digits if it hasn't already hit that. In fact, in about 7 months, the average web page size will be same as Doom install image. <sup><a href="http://imgur.com/dBhlzlN">3</a></sup></figcaption> So, **way to go, us!**

## HTTP2

Because this proliferation of links we now inject into each and every web page, we've needed to come up with faster and better mechanisms. Enter *the solution: HTTP2*. I am not going to pretend to know everything about this new transfer protocol, but the important thing to know is that is will speed up header requests, and will specifically improve speed of multiple threads of data being served at the same time. For instance, with multithreading, it will be more performant to send multiple script files instead of concatenating all of your scripts into one large file since they won't each be individual blocking requests.

## Lets Talk About CSS

We looked at the HTML Tags spec, so naturally, its time to take a step [back](http://www.w3.org/TR/REC-CSS1-961217) in time again and see what happened when webpages transcended being pure content and became hubs of information. They needed what is now the bane of many developers' existance (and our next hack): **layout.**

Remember table-based layouts? By 1998, this was our fancy solution (read:hack) to website presentation! *Why would we lay out a web-page document, with headers and navigation and content elements, as a table?* Because it's all we had. You could create nested layouts and it was great and everyone complained and nothing has changed.

But because this didn't make any semantic sense, we did the next best thing: *floated layouts*. Which was also a mess, but that's sort of what people came to expect they'd have to deal with, because we all know CSS is a bit like this:

![Css](../../images/posts/web-hack/css.gif)
s
### Flexbox

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) is the current solution to the hacks of layout's past. It uses semantic naming based on what we "want" the div to align and justify. It even allows us to order our content visually without messing with its HTML markup (yay for separation of concerns!).

### Blurred Backgrounds

As layouts became increasingly complex, so did graphic rendering on the web. I'll talk about one example because I'm SO SO SO excited about it.


-> fixed/cover/background == hack
-> backdrop-filters == solution

Now with `backdrop-filter` which just *dropped* a few days [ago](https://www.webkit.org/blog/3632/introducing-backdrop-filters/) (sorry i'm not sorry about that pun), this hack will become reality! http://caniuse.com/#feat=css-backdrop-filter

## Javascript

All of Javascript is a hack. Patterns, things like classes now being available in ES6

I don't even want to get into all of the ways that we [hack]() [Javascript]() to make it work. One of the classic ways is by creating fake [classes](http://www.phpied.com/3-ways-to-define-a-javascript-class/) and implementing conventions like <strong style="text-transform:uppercase">capitalizing constants</strong>. [ES6](https://github.com/lukehoban/es6features) will save us from these hacks.


//We've even begun to [hack](http://facebook.github.io/react/) the Dom.


## Conclusion

Hack: Link All the Things!
Solution: HTTP2 To Make Links Not Suck

Hack: Floated Layouts Getting Overwhelmingly Complex
Solution: Flexbox Spec to Save Us From Ourselves

Hack: Fancy Graphics Processing CSS Hacks
Solution: Enabling these things as native in browsers (backdrop-filters)

We look up to the people who built the internet as heros, but really they're just people like us. People who build things by hacking things. And hacks are brilliant. They are unique ideas that use existing tools to build solutions to things we previously thought impossible. So we can then grab that brilliance and transform it into something real: into real specs.

All we can really do is keep building. Complain on Twitter, figure out a hack to fix it, then submit a proposal to the W3C and make change. Everything we build is a hack. But those hacks have become the cornerstones of what the internet is (or is becoming). It's a **great** thing. We, as a collective audience and user base of the web are paving the cowpaths of this thing we are building together instead of leaving it to a committee forging a plan in stone. The web is a democracy! And this is evident for anybody who has ever worked in product design.

People will start doing things you don't expect them to, and using your product in unintended ways (I use Snapchat to check the weather). Instead of fighting users and re-directing them, embrace it! This is how innovations are created and then standards are built from those innovations. Right now, there is begining to be talk a

The internet is a hack. It is built on hacks and it will continue to be built on hacks as long as people are building for it. Someone comes up with a desire to something that is not yet in existance, will create a hack, and then will make it a reality.

The web is getting better because we are hacking it more. So, what's next? Taking the web offline?
