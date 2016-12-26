---
layout: post
title: "Simplicity in Design: Insights from an Industrial Engineer"
permalink: /simplicity-in-eng/
date: '2016-12-26'
comments: true
tags:
- design
- development
- engineering
- insights
header-bg: ../images/posts/id.jpg
subtitle: "My father, an industrial engineer with over 20 years od experience talks about interface design and the important of simplicity in programming."
audio: simplicityindesign
duration: "09:01"
audio-size: 12994657
---

Over the holidays I went home and chatted with someone who I admire very much&mdash;my father. My dad is an industrial engineer with over 20 years of experience, building control systems for large factories that make anything from deodorants to flash-dried strawberries. My dad and I have a lot in common&mdash;we both travel a lot for work and he's definitely been a huge source of support in my life.

<blockquote class="left">In my dad's world, codebases live for at least 20 years. There are no UX Designers to look out for the user’s needs. No A/B testing, no coding bootcamps to get someone up to speed. <b>His users are the operators, his products: massive machines.</b>
</blockquote>

I never thought about web development in terms of industrial systems before, but there are definite parallels, so I recorded bits of our conversation to share. So on the ride home from the airport, my dad and I discussed his personal engineering mantra: **keeping it simple**, in both interface design and industrial code production.

Listen to a 5-minute snippet here:

<audio controls src="../audio/papainterview.mp3" type="audio/mp3"></audio>

# Simplicity in Design

<blockquote class="right">"The main point which is beneficial between the operator and the machine is simplicity, intuitivity, and a self-navigating approach"
<br><br>&mdash; Val Kravets
</blockquote>

Intuitive, self-navigable interfaces are something we always strive for. Hearing this in terms of a control panel as well makes total sense. Instead of putting something 5 levels deep, my dad said he would try to keep it on the first level, and if he had to (due to space constraints or otherwise) move it deeper into the interface.

This is one way to make interface decisions. Keep it on the same plane by default (dashboards work really well for industrial monitoring products), and as the user action grows more complex or specific, move them inward. Moving actions "inward" also helps to isolate said action, removing confusion and cruft of other data floating around. But, **the fewer clicks the better** my dad and I both agreed.

Interfaces should explain themselves. That's the ideal approach, and what makes them "intuitive". Combining actions that we're accustomed to (like common gestures on your mobile device) with anticipated placement of information (menus and search bars) help the user to navigate your product without frustration or confusion.

## Making Decisions

Sometimes, you just have to make decisions for the user. And that's that.

My dad gave a hilariously blunt example about car manufacturing. The manufacturer decides where the steering wheel goes (left or right depending on the country), its not something you can choose yourself. He also says, "sometimes you go to the dealer and they only offer the seats in [the color] black. Maybe you're upset, but it is what it is and you just have to deal with it. It gives everyone *less headache* with the [lower] number of options and makes the model *less expensive* than it would be with a greater number of options"

Making decisions prevents analysis paralysis for your users and can be more beneficial than limiting. Also, engineering time does decrease when you move forward with a single solution and then iterate. [Casper](http://https://casper.com/) matteresses are a great example of this approach. They only provide one option, and an array of sizes for that one option. Simple, easy, if you want a casper&mdash;the decision is made (and it allows for a more focused, better developed product, too).

# Simplicity in Code

<blockquote class="left">I always think about that poor technician who is going to do the job after me"
<br><br>&mdash; Val Kravets
</blockquote>

While we often aren't faced with memory limits as much as people who work with hardware, my father's approach to writing code mimicks the general web community appraoch as well: keep it as simple as possible. He says: "if memory allows, I always err on the side of simplicity... *I don't need to show off how advanced a programmer I am. I always think about that poor technician who is going to do the job after me*."

That could very well be the mark of a more seasoned engineer. You no longer reach for the new, shiny way to write elegant code (that nobody else may understand), but make it a team-based approach.

He mentions that this next maintainer, since you can't factor for their background and experience, could end up just refactoring and getting rid of all of that "elegant" code you spent so much time perfecting in the first place if they can't work with it, which is a waste of time and effort for everyone. **Keep it simple, readable, and make sure to include documentation and code comments**.

<blockquote>No matter what kind of engineer or designer you are, <a class="twitter-share">the principle of simplicity should be at the core of all of our work.</a></blockquote>