---
layout: post
title: Setting up Page Speed Insights to test Performance Locally via Gulp
permalink: /gulp-local-psi
date: '2014-12-18'
comments: true
tags:
- gulp
- page speed insights
- ngrok
- ports
- front end
- development
subtitle: This is a walk through of how to set up Page Speed Insights within your existing gulp project. This way, you can get your page speed score information within your terminal without first needing to push your site to a live server.
---

Today, I'll be walking you through setting up Page Speed Insights within your existing gulp project. This way, each time you call the gulp command, `gulp psi` in your terminal, you can get your page speed insights scores right in your terminal without needing to push your site to a live server, navigate to the Page Speed Insights website, enter in your URL, etc. I'll be using ngrok to tunnel your locally hosted site and a few gulp tasks to bring it all together.

## Page Speed Insights

[Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) is a project by Google that analyzes the performance of your website, giving you a score index based on a variety of factors. [Addy Osmani](http://addyosmani.com/blog/) created a neat little node [module](https://www.npmjs.com/package/psi) so that we can run Page Speed insights right in the terminal and get a nicely formated table of scores.

To install this tool globally (which I recommend, because you can use it with any live website, any time), simply type `npm install -g psi` into your terminal.

The way it works is simple: merely type `psi http://example.com` in your terminal. For instance, if try google.com, it will give you this:

```
URL:       https://www.google.com/?gws_rd=ssl
Score:     92
Strategy:  desktop

Number Resources                                 | 13
Number Hosts                                     | 5
Total Request                                    | 2.62 kB
Number Static Resources                          | 9
Html Response                                    | 116.9 kB
Image Response                                   | 46.02 kB
Javascript Response                              | 879.68 kB
Other Response                                   | 1.76 kB
Number Js Resources                              | 5
                                                 |
Avoid Landing Page Redirects                     | 7
Enable Gzip Compression                          | 0
Leverage Browser Caching                         | 0
Main Resource Server Response Time               | 0
Minify Css                                       | 0
Minify HTML                                      | 0
Minify Java Script                               | 0.27
Minimize Render Blocking Resources               | 0
Optimize Images                                  | 0
Prioritize Visible Content                       | 0
```

Unfortunately, Page Speed Insights (psi) doesn't work on locally hosted websites. So, if you try running `psi http://localhost:3000` it won't work. But that's okay. There are brilliant people on the internet who have developed solutions for us. Enter ngrok!

## Testing Locally with Ngrok

![](https://ngrok.com/static/img/overview.png)
<div class="caption">I shamelessly stole this infographic from ngrok's website.</div>

[Ngrok](https://ngrok.com/) is a pay-what-you-want service that allows users to try out a web site they're developing without deploying it to the internet. There is a paid tier, but you don't need to sign up for an account in order to get Page Speed Insights working locally. You can download ngrok with a binary or via npm:

```
npm install -g ngrok
```

Now, depending on what server you're running gulp on, type `ngrok <port>` into your terminal. Since I'm using port 3000, I'll use `ngrok 3000`. Then you should see something like this:

```
Tunnel Status                 online
Version                       1.7/1.6
Forwarding                    http://3087cb.ngrok.com -> 127.0.0.1:3000
Forwarding                    https://3087cb.ngrok.com -> 127.0.0.1:3000
Web Interface                 127.0.0.1:4040
# Conn                        37
Avg Conn Time                 828.38ms

```

That Forwarding URL is what we'll use to get our page speed insights. Try it now. Type `psi <your forwarding url>` and you should see a response!
Pretty cool right?

<aside>Keep in mind that this may take a few moments, and you do need to be on an internet connection</aside>

## Pulling it together with Gulp

### Install Dependancies

In order to set this up in our development environment, we'll be using three modules: ngrok, psi, and run-sequence. You can install them all at once, while saving the dependancies to your package.json in one command:

```
npm install psi ngrok run-sequence --save-dev
```

Alternatively, you can open up your package.json, and under 'devDependancies", add the following lines of code:

```
"ngrok": "^0.1.98",
"psi": "^0.1.6",
"run-sequence": "^1.0.2"
```

And then run `npm install`. Great! Now you have the psi, ngrok, and run-sequence modules installed.

### ngrok

To start, create an ngrok variable

```
var ngrok = require('ngrok');
```

create a task to run ngrok and grab the tunnel url it is creating. Again, I am using port 3000 here.

```
gulp.task('ngrok-url', function(cb) {
 return ngrok.connect(3000, function (err, url) {
  site = url;
  console.log('serving your tunnel from: ' + site);
  cb();
 });
});
```

If you're wondering what `cb` is, it stands for *callback*, and its what allows you to define the end to an asyncronous task. We'll see this again in the psi tasks below in a second.

### Page Speed Insights

Now we need to add a few tasks for page speed insights in the gulp file. We'll be referring to Page speed insights as psi for the purposes of continuity. There are pulling from the [example](https://github.com/addyosmani/psi-gulp-sample/blob/master/gulpfile.js) given by Addy Osmani.

Create a psi variable

```
var psi = require('psi');
```

And psi tasks. Here we're making seperate tasks for both mobile and desktop strategies. For configuration information, check out the [repo](https://github.com/addyosmani/psi).

```
gulp.task('psi-desktop', function (cb) {
    psi({
        nokey: 'true',
        url: site,
        strategy: 'desktop',
    }, cb);
});

gulp.task('psi-mobile', function (cb) {
    psi({
        nokey: 'true',
        url: site,
        strategy: 'mobile',
    }, cb);
});
```

If you're using an API key, be sure to replace the `nokey: 'true'` line with your `key: <your API token here>`.

### Almost there

Now, everything is almost ready. The only problem is that we need to link the tunnel url that ngrok is creating for us to psi. For this, we're using the **[run-sequence](https://www.npmjs.com/package/run-sequence)** module to alow variables to pass between in between asynchronous tasks.

We've only got two more variables to set up.

```
var sequence = require('run-sequence');
var site = '';
```

Now, we can create a sequence to run the ngrok tunnel server, grab its url, and run page speed insights tests for both desktop and mobile.

```
gulp.task('psi-seq', function (cb) {
 return sequence(
  'ngrok-url',
  'psi-desktop',
  'psi-mobile',
  cb
 );
});
```

Finally, I made a task to exit out of the sequence once it was complete:

```
gulp.task('psi', ['psi-seq'], function() {
    console.log('Woohoo! Check out your page speed scores!')
    process.exit();
})
```

So at this point, if you have a server running at port 3000, and run `gulp psi` in another terminal window, it should give you accurate results. But let's improve on that. Let's make a self-contained gulp task that doesn't depend on another.

### Servers, Ports, and Tasks, oh my!

To do that, we need to connect ngrok to our server. Now, I'm not going to dictate how you start your server. Personally, I really like using [Browser Sync](http://www.browsersync.io/) for a variety of reasons. A simple [Gulp Connect](https://www.npmjs.com/package/gulp-connect) task also exists. Whichever way you do it, add the task in which you're starting your server before the `ngrok-url` task in your psi sequence. For example, mine, with brower sync, is:

```
gulp.task('psi-seq', function (cb) {
 return sequence(
    'browser-sync', // name of your server task here
    'ngrok-url',
    'psi-desktop',
    'psi-mobile',
  cb
 );
});

```

BrowserSync is really cool in the sense that if a port is taken (i.e. if port:3000 is busy), it will use the next available one (i.e. port: 3001). This can cause issues if you aren't cognicant of it and may be running multiple development environments at once. Well, what will likely happen is  you'll just get a **false 100** in return for your page score value.

Because we're specifying the port here, we have to make sure that it is available. To improve this a bit, I set up a separate BrowserSync function seperate from my development task, specifically Page Speed Insights. This got rid of some of the excess (watch tasks, etc), and I also gave it some more configs like not opening the page in the browser every time I just want to test performance.

```
// set up a global port variable
var portVal = 3020;

// my browser sync task for psi which only runs the build and
// serve function, as well as uses the set port and prevents
// opening the site in my browser
gulp.task('browser-sync-psi', ['jekyll-build'], function() {
    browserSync({
        port: portVal,
        open: false,
        server: {
            baseDir: '_site',
        }
    });
});
```

## tl;dr

### Step 1
`npm install psi ngrok run-sequence --save-dev`

### Step 2

```
// variables
var ngrok     = require('ngrok');
var psi       = require('psi');
var sequence  = require('run-sequence');
var site      = '';
var portVal   = 3020;

// this is where your server task goes. I'm using browser sync
gulp.task('browser-sync-psi', ['jekyll-build'], function() {
    browserSync({
        port: portVal,
        open: false,
        server: {
            baseDir: '_site',
        }
    });
});

// psi sequence with 'browser-sync-psi' instead
gulp.task('psi-seq', function (cb) {
 return sequence(
    'browser-sync-psi',
    'ngrok-url',
    'psi-desktop',
    'psi-mobile',
    cb
 );
});

// psi task runs and exits
gulp.task('psi', ['psi-seq'], function() {
    console.log('Woohoo! Check out your page speed scores!')
    process.exit();
})
```

### Step 3
`gulp psi`