---
layout: post
title: "Rethinking Responsive Design"
permalink: /rethinking-responsive/
date: '2016-11-06'
comments: true
tags:
- design
- development
- future
- web
header-bg: ../images/posts/ar.jpg
subtitle: "From Google's physical web project to the emergence of more affordable virtual reality and augmented reality systems, it's time to take a serious look at how the web is changing, and the exciting possibilities for its application outside of screens."
audio: rethinkingresponsive
duration: "05:15"
audio-size: 6302356
---

Communication is essential to human survival. It's what allowed us to work together, build tribes, and survive the elements to pass on the genetic code. And now, with the growth of the web &mdash; the most accessible, widespread, and powerful communication tool we have today &mdash; our tribe has become global. Our ideas have merged, and the web has allowed for some incredible collaborations across borders that have continued to move us all forward.

The emergence of this communication network brought with it the emergence of the world of big data, multi-player online games, and personal blogging. You can pretty much learn anything or get anything you can imagine online today (for better or for worse). Politics aside, the technologies with which we can access the web are evolving.

<blockquote class="left" style="padding-bottom:.7em"><a class="twitter-share">The future of the web exists beyond screens</a></blockquote>

From Google's [physical web project](https://google.github.io/physical-web/) to the beginnings of [more affordable](http://www.gearbrain.com/gear-vr-budget-virtual-reality-headset-1716690185.html) virtual reality and augmented reality systems, it's time to take a serious look at how the web is changing, and the exciting possibilities for it in various mediums. This means really rethinking responsive design because **the future of the web exists beyond screens.**

## Web VR

This is an exciting time to work on the web because the platforms on which we can communicate are growing quickly. VR (virtual reality) has a really exciting future. It can change how we receive information and communicate with people around the world, making distance feel like less of an obstacle. Recently, Mark Zuckerberg [showed a demo](https://www.youtube.com/watch?v=OyW4CBSZfL0) at Oculus Connect of what they've been working on lately in terms of VR chat. It's an incredible tool for communication and story-telling, especially when applied to journalism, as it really immerses the viewer an environment to help them to absorb a story.

<iframe width="720" height="405" style="margin: 1em 0 2em"  src="https://www.youtube.com/embed/0QY72R3ZDzw?rel=0" frameborder="0" allowfullscreen></iframe>

WebVR can create immersive experiences [too](https://www.youtube.com/watch?v=KMdCGkgNtno), and maybe one day, bring the ease of communication that a website provides into a 3D context. This can be great for understanding ambiance of a restaurant, or hotel, or even a design agency's aesthetic. WebVR opens a world of possibilities in an entirely new medium in which to present information.

This is all very groundbreaking; however, what's even more game-changing to me will occur when we finally have affordable AR (augmented reality) and can simultaneously interact with the web and the world around us. This means we can look up information while continuing to go about our day, having a seamless experience, and true ease of communication / knowledge sharing.

While there's nothing that allows us to experiment with AR on the web just yet, experimenting with WebVR is an exciting precursor. [A-Frame](https://aframe.io/) by Mozilla is a web framework that acts as a great kickoff to experimenting with integrating the web in a 3D context.

The more I think about virtual and augmented web, the more excited I get about the possibilities.

## The Physical Web

Another thing I'm really excited about is the core idea behind Google's physical web project.

The premise of the project, led by [Scott Jenson](https://twitter.com/scottjenson), is simple: using a URL bar as the only means of communication with the vast resources of the web is outdated. It brings the web to the physical world via beacons -- these are, in their current state, little devices that can be attached to anything: movie posters, restaurants, entrances to theme parks, which send out signals inviting you to the web.

Instead of the URL bar as the initiator of an online experience, you have a physical object initiating the exchange in the real world. Getting a ping to open a URL feels much more natural than the added step of opening a browser and typing one in to reach the same outcome.

<iframe width="720" height="405" style="margin: 1em 0 0"  src="https://www.youtube.com/embed/1yaLPRgtlR0?rel=0" frameborder="0" allowfullscreen></iframe>

## Rethinking Responsive

What does this all mean for responsive design? It means that we need to consider the user's experience in terms of their surroundings. How can we use new browser technology to leverage that? We now have a plethora of options. Just to name 3:

- **Geolocation** (which opens up so many possibilities alone, like getting information on weather, news, events, etc.)
- **Battery-Level Detection** (meaning the developer can determine when to send decorative content like animations based on system resources)
- **Ambient Light Queries** (allow the browser to detect how dark or light the surroundings of the user are, enabling style adjustment accordingly)

All of these Web APIs and future specs can be combined to give the user a truly *responsive* experience. Something that isn't just responsive to the screen size of the device being used, but is **responsive to the user in their current context.**

<blockquote class="right" style="padding-bottom:.7em"><a class="twitter-share">A user's context, not their device, is the future of responsive design</a></blockquote>

I first started thinking of responsive in this way while working at a startup called [nvite](http://nvite.com). The idea was to build a product responsive to an event in terms of both physical location to and time until the event. That was nvite's definition of a responsive experience. And it really has stuck with me because simply put, it's the future of responsive experiences. 

It's exactly kind of thinking, combined with the emerging opportunities we're uncovering for the web, which we need to nourish. And its kind of thinking that we need to consider when building products. We need to recognize that screens are ephemeral, and that <a class="twitter-share">making something responsive will no longer be about screens. It'll be about experiences</a>.