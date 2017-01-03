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

The offline web is something we all need to start thinking about as a part of the experience we're providing to our users. __why offline is important here __

So, if someone is reading your blog on the subway, and loses their Internet connection, they won't lose their place if their browser refreshes. Similarly, with this technique, one can elect to save your content to their device when they do have a good Internet connection for later reading when they may not (say on the subway or on an airplane, or just to save data).

## Offline-First

Some basic offline considerations include:

## The Service Worker

If you're wondering [what a service worker is](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers), it's like a little [alien](http://kosamari.com/notes/Service-Worker-what-are-you) that lives on your page and relays messages for you. It can detect when you have an Internet connection and when you don't, and can responds in different ways based on the response.

Support for service workers is still a bit patchy, but getting much better:

![Service worker can be used in Chrome, Safari, Opera, and Samsung internet](../images/posts/save-for-offline/serviceworker-caniuse.jpg)
<small class="caption"><a href="https://jakearchibald.github.io/isserviceworkerready/">Service Worker Support Progress</a></small>

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

## Decisions, Decisions

But we don't want to cache *everything*, so how do we decide what's important enough to save?

## Offline Switch

By giving our users the option to save a post for offline reading, we're not taking up valuable space in their cache without permission.

## Resources

Some future resources:

- [Service Worker Script](https://gist.github.com/dgrijuela/38cde675b70ed097dbbe)