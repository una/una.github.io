---
layout: post
title: Sass Pixel Art
permalink: /sass-pixel-art
date: '2015-05-04'
comments: true
tags:
- drop-shadow
- pixel
- art
- sass
- scss
header-bg: ../images/posts/pixel-art/cross-stitch-icons.png
subtitle: Understanding drop-shadow pixel art.
---

It is 6:37 AM and I am at an airport. This is where to best ideas happen right? I’ve been perusing the internet to find some practical examples of Sass lists using list functions in production (somewhat unsuccessfully) and stumbled upon [this](http://codepen.io/jackarmley/pen/LohqG) really awesome CodePen by [@shadowmint](https://twitter.com/shadowmint) and [@jackarmley](https://twitter.com/jackarmley). Hmm. Just the thing I needed for in-flight entertainment for the duration of the trip. I wanted to get down to nitty gritty and understand what was happening here.

The first time I saw Sass read from a matrix for instruction was in [Roy Tomeij’s](http://twitter.com/roy) SassConf 2013 [workshop](https://github.com/roytomeij/sassconf)
and it went right over my head. No shame in that. I get it now. And I was able to cover this topic in my own [workshop](http://github.com/una/adv-sass-workshop) for PEERS!

## Box Shadow Pixels

So let's get started. What exactly is making those little pixels? If the title didn't give it away, it's the CSS3 multiple box shadow property! Each pixel is it's own, individually placed box shadow. These are strung together via a comma-separated list. You can have as many box-shadows as you want on a div. Pretty cool.

Your box shadow will always be behind your element, so you'll need to start positioning it at ($pixel-size, $pixel-size) rather than (0,0). Here is a visual example:

![](../images/posts/pixel-art/missing-pixel.png)

We lose one of our pixels. We must mitigate this by starting the positioning at ($pixel-size, $pixel-size). As a bonus, we can fix the positioning of this element by making it absolutely positioned within a relatively positioned element and shifting it to the point (-$pixel-size, -$pixel-size):

![](../images/posts/pixel-art/fixed-pos.png)

<div class="caption">You can play with the gist <a href="http://sassmeister.com/gist/0b58be44ea6d6b689c27">here</a></div>

## Sass Data Type Functions

As an Almost-Turing-Complete-Programming-Language, the organizational structures and data types that Sass provides us with are pretty darn powerful. These include *maps*, which you can nest, and *lists*, which you can use within *maps*. Sass also inherently provides us with a really nice set of functions to access and manipulate items from such structures. Let's start by looking at list functions, as sourced from the [SassScript docs](http://sass-lang.com/documentation/Sass/Script/Functions.html):

### List Functions:

- `length($list)` : Returns the length of a list.
- `nth($list, $n)` : Returns a specific item in a list at the nth value.
- `set-nth($list, $n, $value)` : Replaces the nth item in a list.
- `join($list1, $list2)` : Joins together two lists into one.
- `append($list1, $val)` : Appends a value onto the end of a list.
- `zip($lists…)` : Combines lists into a single multidimensional list.
- `index($list, $value)` : Returns the position of a value within a list. *(You can also use this to determine if a value exists within a list)*
- `list-separator(#list)` : Returns the separator of a list.

## Reading a Matrix

Okay, so now that we have a baseline on the types of things we can do with Sass' data types, let's manipulate them. The **matrix** that we will be referring to looks a little bit like this:

<img style="width: 180px; float:left; margin: 0 2em" src="../images/posts/pixel-art/pixel-diamond.png" alt="pixel diamond">

<!-- ```scss -->
<pre style="width: 50%"><code>// this is a diamond:
(o o x o o)
(o x o x o)
(x o o o x)
(o x o x o)
(o o x o o)
</code></pre>
<!-- ``` -->

<div style="clear:both"></div>

It's really just a glorified space-separated list of space-separated lists within parenthesis *(#meta)*. We can loop through this list and check the value of each item in the list to build a *new* list, essentially mapping each pixel value (item in the original list) with an output function (a box shadow will be generated). This sounds confusing, but let me try to break it down:

1. Determine size/color of the pixels
2. Create *empty list* for box shadows to be filled with incoming data
- Itemize each *row* to set a *y-value* (vertical position in the matrix grid)
- Read the *n-value* (horizontal position in the list) to determine it's *x-value*
- Determine the *y-value* of that pixel based on its *row*
- Read the actual letter (*content-value*) to determine the *color* of the pixel
- Append determined values to *box-shadow list*, ending with `,`
- Loop through steps 4-6 for the entire matrix grid

## Building the Pixel Grid

We're setting some defaults here and starting with a binary color value option for our pixels (either on or off. If on, it will be the determined color in the function). Using `hotpink` as our default color and `10px` as our pixel-size, we can write a function to read the matrix:

```scss
@function read-matrix($matrix, $size: 10px, $color: hotpink) {
  $l: length($matrix); // length of the entire
  $shadows: ''; // shadows list section
  $i: $l; // length of the line on a matrix

// read through the all the rows of the list
  @for $i from 1 through $l {
    $row: nth($matrix, $i); // this is a single row

    @for $j from 1 through length($row){
        $item: nth($row, $j); //itemize each element in that row

// if that item is an x, give it a drop shadow square w/background color (this is where we're building the shadows list)
        @if $item == x{
          $shadows:  $shadows + ($j*$size) + ' ' + ($i*$size) + ' ' + $color;
        } @else{
          $shadows:  $shadows + ($j*$size) + ' ' + ($i*$size) + ' ' + transparent;
        }

// when you get to the end of the row, add a comma before the next block of drpo shadows
      @if not ($j == length($row) and $i == $l) {
        $shadows: $shadows + ',';
      }
    }
  }

  // return the entire shadow list here
  @return unquote($shadows);
}
```

Our `$shadows` list ends up looking like this:

```
10px 10px transparent,20px 10px transparent,30px 10px hotpink,40px 10px transparent,50px 10px transparent,10px 20px transparent,20px 20px hotpink,30px 20px transparent,40px 20px hotpink,50px 20px transparent,10px 30px hotpink,20px 30px transparent,30px 30px transparent,40px 30px transparent,50px 30px hotpink,10px 40px transparent,20px 40px hotpink,30px 40px transparent,40px 40px hotpink,50px 40px transparent,10px 50px transparent,20px 50px transparent,30px 50px hotpink,40px 50px transparent,50px 50px transparent
```

If we break down that output, looks like this:

```
// top row
10px 10px transparent,
20px 10px transparent,
30px 10px hotpink,
40px 10px transparent,
50px 10px transparent,

//second row
10px 20px transparent,
20px 20px hotpink,
30px 20px transparent,
40px 20px hotpink,
50px 20px transparent,

// 3rd row
10px 30px hotpink,
20px 30px transparent,
30px 30px transparent,
40px 30px transparent,
50px 30px hotpink,

// 4th row
10px 40px transparent,
20px 40px hotpink,
30px 40px transparent,
40px 40px hotpink,
50px 40px transparent,

//bottom row
10px 50px transparent,
20px 50px transparent,
30px 50px hotpink,
40px 50px transparent,
50px 50px transparent;
```

And these are exactly the values we want to create as our box-shadows. So to access the function, we'd use: `box-shadow: read-matrix($var-name)`. In our case, it would specifically be: `box-shadow: read-matrix($diamond);`.

Since we're building a list and using these box shadows as `:after` content, the full usage may look something like this for placement:

```
// HTML:
//  <ul class="icons">
//    <li class="icons--diamond"></li>
//  </ul>

// icon matrix we're reading through
$diamond: (o o x o o)
          (o x o x o)
          (x o o o x)
          (o x o x o)
          (o o x o o);

// list we're styling
.icons{
  margin: 3em auto;
  padding: 0;
  width: 100%;
  list-style: none;
  text-align: center;

  li {
    margin: 1em;
    display: inline-block;
    position: relative;

  }

  &--diamond {
    &:after {
      content: '';
      position: absolute;
      top: -$icon-size-var;
      left: -$icon-size-var;
      width: $icon-size-var;
      height: $icon-size-var;
      box-shadow: read-matrix($diamond);
    }
  }
}
```

And our result:

![pixel diamond](../images/posts/pixel-art/pixel-diamond.png)

## Colormapping Pixels

We can also use this same technique to get a bit more advanced. Let's make the mushroom from Mario! First step is to figure out the grid:

![](../images/posts/pixel-art/mushroom-dude.png)

Then, we can use these numbers and color values to make some colored pixel art. Let's use *w* for *white*, *r* for *red*, *b* for *black*, and *o* for *transparent* pixels. With that setup, we can turn the mario mushroom into a matrix of pixel values:

```
(o o o o o b b b b b b o o o o o)
(o o o b b r r r r w w b b o o o)
(o o b w w r r r r w w w w b o o)
(o b w w r r r r r r w w w w b o)
(o b w r r w w w w r r w w w b o)
(b r r r w w w w w w r r r r r b)
(b r r r w w w w w w r r w w r b)
(b w r r w w w w w w r w w w w b)
(b w w r r w w w w r r w w w w b)
(b w w r r r r r r r r r w w r b)
(b w r r b b b b b b b b r r r b)
(o b b b w w b w w b w w b b b o)
(o o b w w w b w w b w w w b o o)
(o o b w w w w w w w w w w b o o)
(o o o b w w w w w w w w b o o o)
(o o o o b b b b b b b b o o o o)
```

Now, when we read the lines, we want to adjust for each of these colors:

```scss
@if $item == w{
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + white;
}
@if $item == b {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + black;
}
@if $item == r {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + red;
}
@if $item == o {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + transparent;
}
```

We can make this a little bit more modular by abstracting the pixel color variables into a property map and access that to make sure things remain modular and neatly organized:

```scss
// map of pixel mapping color values to actual color
$pixel-color-map: (
  'r' : #f00,
  'w': #fff,
  'b': #000,
  'o': transparent
);

// using the map in our mixin
@if $item == 'w' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'w');
}
@if $item == 'b' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'b');
}
@if $item == 'r' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'r');
}
@if $item == 'o' {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, 'o');
}
```

But we can surely clean that up to make a bit more DRY, right? Let's check to see if our value exists in our map, and then sync it up with it's matching value:

```scss
@if map-has-key($pixel-color-map, $item) {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, $item);
}
```

We'll also want to add a warning as a safeguard to explain why something may have gone wrong or to remind us to define a color variable mapped to a pixel letter. If we want an invisible pixel, we simply need to add a transparent value to the color map:

```scss
@if map-has-key($pixel-color-map, $item) {
  $sh:  $sh + ($j*$size) + ' ' + ($i*$size) + ' ' + map-get($pixel-color-map, $item);
} @else {
  @warn 'there is no color specified in "$pixel-color-map" for: "#{$item}"';
}
```

## Maps and Mixins

Let's do a few more pixelized arts! We can make this even more fun and DRY via a mixin to run through a map of pixel-mapped art. All list functions also work for maps. Sass treats them as lists of pairs. It also comes with some additional map functions.

### Map Functions:

- `map-get($map, $key)` : Returns the value in a map associated with a given key.
- `map-merge($map1, $map2)` : Merges two maps together into a new map.
- `map-remove($map, $keys…)` : Returns a new map with keys removed.
- `map-keys($map)` : Returns a list of all keys in a map.
- `map-values($map)` : Returns a list of all values in a map.
- `map-has-key($map, $key)` : Returns whether a map has a value associated with a given key.
- `keywords($args)` : Returns the keywords passed to a function that takes variable arguments.

I'm going to make a few more mario pixel art items, so I'm expanding my color pallet and I'm going to put them all in a map. Then I'll just write a mixin to read the map and create the pixel art! Because we're dynamically determining size via length of the `$row`, we can mix and match matrix grid sizes.

You can also use anything to denote colors (letters, numbers, words) but I recommend sticking to single character strings because it helps you see the pixels visually by keeping them all mono-spaced.

** create pixel mapper?

Voila! It's Sass magicery!

**P.S. oh my gosh, please never actually use this in production. It's terrible for performance, but perfect for just playing with code for fun :)**