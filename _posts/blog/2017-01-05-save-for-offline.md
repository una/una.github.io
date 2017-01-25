---
layout: post
title: 'Implementing "Save For Offline" with Service Workers'
permalink: /save-for-offline/
date: '2017-01-05'
comments: true
tags:
- offline
- tutorial
- service
- workers
subtitle: 'I recently added an option to save blog posts for offline reading. This post details how I did that and how you can too.'
---

I just moved to New York City and started commuting to work on the subway. On said subway ride, despite its many glorious people watching moments, most commuters are just on their phones or reading books. The subway is also famous for not having reliable cell service, so many of those people trying to read articles on their phone are struggling with cache and unexpected reloads if they click the wrong button. The offline web experience we're providing users is something we all need to start thinking about. Luckily, we have the tools.

**I recently added an option to save blog posts for offline reading, and this post will detail how I did that so you can too.**

This way, if someone is reading your blog on the subway, and loses their Internet connection, they won't lose their place. If they accidentally click and the browser refreshes, they won't lose their place. If they want to save your article to read on an airplane or at at a café in a foreign country where they have no internet plan, they can do that. And if they just want to save battery and be on airplane mode, that's cool too. ✨Magic.✨

## Offline-First

Some basic offline considerations include:

## The Service Worker

If you're wondering [what a service worker is](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers), it's like a little [alien](http://kosamari.com/notes/Service-Worker-what-are-you) that lives on your page and relays messages for you. It can detect when you have an Internet connection and when you don't, and can responds in different ways based on the response.

Support for service workers is still a bit patchy, but getting much better:

![Service worker can be used in Chrome, Safari, Opera, and Samsung internet](../images/posts/save-for-offline/serviceworker-caniuse.jpg)
<small>While <a href="https://jakearchibald.github.io/isserviceworkerready/">service worker support</a> is still missing in Safari and Edge, they seem to be [working on it](https://jakearchibald.github.io/isserviceworkerready/#request). Also be aware that for service worker [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache), some versions of browsers support different versions of cache than others.</small>

You likely already have a few service workr caches saved in your browser. To see them, navigate to to `chrome://serviceworker-internals.` in Chrome, or `about:debugging` in Firefox. You'll see something like:

-- image here --

### Implementing Service Workers

Before we can use service workers, we'll need to implement HTTPS (a secure HTTP connection). The easiest way I know to do this is via [Cloudflare](https://www.cloudflare.com/). It's quick to set up and works flawlessly with Github pages too (what I have my blog served on).

The first thing we'll need to do is create a service worker file, usually called `sw.js`, and check to see if its supported. This file should live in the root of your site/app. In your application JavaScript, you can write a little script to test it and then register the service worker if its supported like so:

```
// Test if service workers are supported
if ('serviceWorker' in navigator) {
  // Attempt to register it
  navigator.serviceWorker.register('/sw.js').then(function() {
    // Success Message
    console.log('ServiceWorker succesfully registered');
  }).catch(function(err) {
    // Error Message
    console.log('ServiceWorker registration failed: ', err);
  });
}
```

Great, so we have a service worker. Now what? That's the fun part! There are so many options!

## Decisions, Decisions

While service workers can do a [variety of things](https://serviceworke.rs/) like push notifications, we're going to focus on its offline capabilities, specifically for caching files.

We don't want to cache *everything* because cache is expensive and limited, so how do we decide what's important enough to save?

## Offline Switch

By giving our users the option to save a post for offline reading, we're not taking up valuable space in their cache without permission. I wanted to give you all the option to save posts for web by clicking this download button next to the article title:

- image of download button --

It's important to not that despite the Service Worker being separate from your page, its cache is still accessible from within the page's JavaScript.

## Hot Protip: skipWaiting

https://davidwalsh.name/service-worker-claim

## Testing in Production

ngrok

## Resources

Some future resources:

- [Service Worker Cache Script](https://gist.github.com/dgrijuela/38cde675b70ed097dbbe)
- [Jake Archibald's Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
- [Mozilla Service Worker Cookbook](https://serviceworke.rs/)
- [CSS TricksService Worker for Offline](https://css-tricks.com/serviceworker-for-offline/)
- [Chris Ruppel's Post on Service Worker](https://chrisruppel.com/blog/service-worker-offline-content/)
