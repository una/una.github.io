---
layout: post
title: How Open Sourcing My Personal Goals Made Me Really Productive
permalink: /personal-goals-guide/
date: '2014-11-06'
comments: true
tags:
- productivity
- personal goals
header-bg: http://una.github.io/images/posts/table-things.jpg
subtitle: For the past four weeks, I've been keeping a very public and open version of my personal goals on Github. Its definitely made me a lot more productive, and you should give it a try.
---

For the past four weeks, I've been keeping a public, open-sourced version of my [personal goals](https://github.com/una/personal-goals) on Github. Overall, its been a pretty great experience thats bolstered my productivity tremendously. Since then, I've been working on making this system better and better, with some terminal aliases for ease-of-use, and some advice to help you out with your own personal goals.

## The Structure

If you take a look at [my repo](https://github.com/una/personal-goals), or the [starter template](https://github.com/una/personal-goals-starter), you can see that I organized my file with a few sections:

### README.MD
This is where I store a couple of things: my overall goals, things I plan to do that week, month, and a backlog. I also include links to some of my sub-folders and an overall goal for the week (added later to the process). To break it down by sub-section:

- **Overarching Goals:** What are you trying to accomplish in general? Why are you doing this in the first place? Putting these first reminds you every time you open the list.
- **This Week's Goal:** This is the one thing you'll mostly focus on for the week. I added it later to the process and it's really helped me to keep my goals in line from being too scattered.
- **Things I'll Do This Week:** A checklist of weekly tasks, most should ideally be determined by the *weekly goal*.
- **Things I'll Do This Month:** A list of tasks looking further into the future &mdash; things which may take longer to accomplish
- **Backlog:** I have two backlog sections: one for *side projects* I need to remind myself about and one for *code things I want to do/play with*

### /content-list
This is where I include resources such as books, reference guides, blog posts, slides, and videos that I want to watch, categorized by subject matter.

### /accomplishments
This is where I go over my week in review. I think it's a pretty important part of the process &mdash; if not the most important. I take a look at what I did, what I didn't get to, additional things I did that I didn't originally plan on, and then write about how the week went in relation to meeting my goals in general. This is where you can review and edit your plan.

### /etc
You can also include additional folders with more specifics for your goals. For example, one of my goals is to write more blog posts. To help with this, **I have a sub-folder for blog post ideas.** I keep this public in the spirit of open source.

## Why It Works

1. It makes you think about your goals
2. Versioning helps you track goals
3. Public goal lists keep you more responsible
4. In moments of downtime, you'll always have a reference of productive things to do or active goals to be striving for
5. You have access to your goals and resources anywhere
6. Other people can contribute to your personal goals

<a class="twitter-share quote right">
  Writing down your goals make you think about them, and publicizing them holds you more accountable.
</a>


Writing down your goals make you think about them, and publicizing them holds you more accountable. It's the same reason why keeping a [food diary](http://www.ncbi.nlm.nih.gov/pubmed/22795495) yields better results for dieters. The simple act of writing down your day's actions makes you more likely to stick to a plan.

Reviewing these goals in a positive light at the end of the week definitely made me feel accomplished. **Positive** is the key word here. Don't beat yourself up for not accomplishing everything you planned at the beginning of the week &mdash; simply re-evaluate your time allocation for the following week.

<blockquote class="left">You always have a reference to a productive and actionable list for reaching your goals.</blockquote>

Another huge advantage is that you always have a reference to a productive and actionable list for reaching your goals. A few days after I began open sourcing my goals, I went to a new gym that opened up by me. It had treadmills that were internet-connected. Awesome. I was quickly able to pull up my repo and access my content list. So I ended up watching a video on web components while jogging, allowing me to be super productive in more than one way.

Letting other people contribute to your personal goals seems strange at first &mdash; this is *personal* after all, but it's actually pretty cool. I've had two contributors so far; the first was somebody who added a task for me to do, which I had simply forgotten about, and the second reminded me to make time to enjoy my life and relax to prevent burnout.

## A Few Terminal Aliases to Help

As a part of my workflow (and as a part of working on my own personal goals), I wrote some useful terminal aliases to help make this list super easy to access and use from anywhere the command line (thats why I'm using absolute links here). You can implement these by editing your **.bash_profile** or **.zshrc** files (depending on which you use), or by creating a **separate shell script file** and linking it inside of your .bash_profile or .zshrc (we'll get to that in a second).

Replace anything inside of the `{}` with your own info. These assume that your repo is hosted on Github and has a 'content-list' folder.

```
# check off personal goals (open main README.md in vim)
# i.e. alias pg-ch="vim ~/Dev/personal-goals/README.md"
alias pg-ch="vim ~{PATH-TO-FOLDER}/README.md"

# add to content list (opens content list folder in vim)
# usage example: pg-add blog-post
function pg-add() {
  if [ $# -eq 0 ]; then
      print "Oops. Please enter a content type! (i.e. pg-add video)"
    else
      vim ~{PATH-TO-FOLDER}/content-list/"$@"s.md
  fi
}

# push my changes to my github master branch and open the page
# The commit message will always be "push from terminal" since I'll probably just be adding more resources or checking things off when using this
alias pg-gh="cd ~{PATH-TO-FOLDER} &&
  git checkout master &&
  git add -A &&
  git commit -m ‘push from terminal’ &&
  git push origin master &&
  open http://github.com/{GITHUB-USERNAME}/personal-goals"
```

<br>
If you're creating a separate shell script file (i.e. **pg-aliases.sh**) for better organization and to not clutter your **.zshrc** or **.bash-profile**, you would only need one line of code to link it (replacing `myusername` with your user name on your system):

```
# Personal Goals terminal aliases
# i.e. source "Users/myusername/.pg-aliases.sh"
source "{PATH-TO-ALIAS-FILE}/"
```

<br>
So with either of those methods, the aliases I've provided are as follows:

- `pg-add <content-type>`: Opens up content page in Vim for adding resources. In my setup, options include *blog-post*, *video*, *resource*, *book*, or *slide*
- `pg-ch`: Opens up README.md for quick checking off of weekly goals
- `pg-gh`: Pushes to your master branch with a commit message of "push from terminal" and opens the Github page online


<small>Feel free to edit and configure this workflow to what works best for you. Again, these are <em>personal</em> goals :)</small>

## A Few Words of Advice

As a budding developer, I often struggle with the fact that there is so much out there to learn, and <a href="" class="twitter-share">the more I learn, the more I realize I don't know</a>. With this system, I was **continuously enumerating all of the things I didn't know**. No matter how well-intentioned this was, it quickly became overwhelming and somewhat discouraging. Often, especially at first, my goals would be all over the place, making me constantly add things to my weekly to-do list as I learned about them, which in turn created an ever-growing cycle of to-dos and an ever-growing list of things I didn't know. **Curation is key.**

<a class="quote twitter-share left">Open sourcing my personal goals has by far been one of the best things I've done for my productivity.</a>

Don't get me wrong, open sourcing my personal goals has by far been one of the best things I've done for my productivity. I highly recommend it. But here is some advice that will help you keep your sanity from the start:
<br>

### Choose One Goal for the Week
I added this later to the process (even after the first draft of this blog was written). I found that my goals were sort-of scattered, and I like continuing a pursuit from the day before. For this reason, I began creating an overall goal for the week before defining specific tasks. It really helped to streamline my tasks for the week.

### Once Set, Don't Add More Goals for the Week
Once you've set your weekly goals, resist the temptation to add more! Instead, if you do things that are different than you had planned, write a bout it in your weekly review. I.e. the list of **"Additional Things I Did This Week"** or get a head start on planning **"Things I Plan To Do Next Week"**. You'll feel like you did more than you planned this way, instead of feel bogged down by an ever-growing list of things you'll never get to accomplish in a week.

### Don't Just Focus on Code
When you have a reference list of things to do in your spare time, it's great for being productive &mdash; but don't let that list take over your life. Admittedly, I'm a little bad at this, filling mine with mostly code and work-related items. Chris Eppstein had to remind me of this point via a [pull request](https://github.com/una/personal-goals/pull/3) telling me to "enjoy the sun before it's winter". He was absolutely right. Remember to make time to make yourself and the people around you happy. After all, <a class="twitter-share">happiness should be one of your overall goals.</a>

### Take the Time to Reflect Positively
I mentioned this at the beginning of the post, where I talk about the structure for **/accomplishments**. It's really important to focus on what you've achieved and not what you didn't get to. Think of the things you didn't get to as opportunities for future.

<blockquote> To get started with your own system, fork <a href="https://github.com/una/personal-goals-starter">this repo</a> and fill it up! Also, feel free to reference and contribute to <a href="https://github.com/una/personal-goals">my own repo</a> :)</blockquote>

I'd love to hear about how this goes for y'all!
