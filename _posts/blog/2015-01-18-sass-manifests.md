---
layout: post
title: Sass Director and Manifest Files
permalink: /sass-manifests
date: '2015-01-18'
comments: true
tags:
- sass
- manifest
- \@import
- tools
- open source
header-bg: ../images/posts/crossing-delaware.jpg
audio: sassdirector
duration: "0:02:18"
subtitle: I created a tool that lets you architect your Sass project in a single location (your manifest file), and it will build all of the directories and partials for you! This blog explains what a Sass manifest file is, what it does, and why you should use one.
---

## What is a Manifest File?

When writing Sass, a great way to maintain your code and keep it modular is to split it up into <strong>partials</strong>. Partials are simply Sass files prepended with an underscore, such as `_theme.scss`. They contain a specified portion of your Sass code, and can be @imported without the underscore.

A Sass manifest file, also known as a <strong>main file</strong>, is where a developer pulls together all of those partials, keeping them easy to manage and maintain. It is usually called `main.scss`, but can be named anything, such as `project-name.scss`. This is what will compile into your final CSS file, allowing you to make changes to any of the imported files, with only one cumulative file being output. Hugo Giraudel wrote more about it in his [Sass Guidelines](http://sass-guidelin.es/#main-file), and we'll use his reference file in our example.

## Sass Director

<img style="max-width:250px; transform: rotate(-5deg); margin-left: 0;" src="../images/posts/sass-director.svg" alt="" class="left">

What [Sass Director](http://sassdirector.com) does is enable a developer to architect an entire project structure within a single manifest file. During the initial setup, instead of manually creating all of the directories and files within them, the outputted shell commands will do the job quickly.

You have a few <strong>options:</strong> to use the .sass or .scss syntax for file endings (.scss is the default), and an option to prepend an underscore to your Sass files to denote them as partials (the default).

<br>

When you input your <strong>main.scss</strong> manifest file:

```
@import "utils/variables";
@import "utils/functions";
@import "utils/mixins";
@import "utils/placeholders";

@import "base/reset";
@import "base/typography";

@import "layout/navigation";
@import "layout/grid";
@import "layout/header";
@import "layout/footer";
@import "layout/sidebar";
@import "layout/forms";

@import "components/buttons";
@import "components/carousel";
@import "components/cover";
@import "components/dropdown";

@import "pages/home";
@import "pages/contact";

@import "themes/theme";
@import "themes/admin";
```
<br>

The output is a <strong>shell script</strong>:

```
mkdir utils;cd utils;touch _variables.scss;touch _functions.scss;touch _mixins.scss;touch _placeholders.scss;cd ../;mkdir base;cd base;touch _reset.scss;touch _typography.scss;cd ../;mkdir layout;cd layout;touch _navigation.scss;touch _grid.scss;touch _header.scss;touch _footer.scss;touch _sidebar.scss;touch _forms.scss;cd ../;mkdir components;cd components;touch _buttons.scss;touch _carousel.scss;touch _cover.scss;touch _dropdown.scss;cd ../;mkdir pages;cd pages;touch _home.scss;touch _contact.scss;cd ../;mkdir themes;cd themes;touch _theme.scss;touch _admin.scss;cd ../;cd ../;
```
<br>

And when you paste that into your <strong>terminal</strong>, it looks a little bit like this:

![Sass Director Demo](../images/posts/sassdirector-demo.gif)

<small>Pretend there's a main.scss in there too!</small>
<br>
<br>
<blockquote>tldr; try out <a href="http://sassdirector.com">Sass Director</a> :)</blockquote>
<br>