---
layout: post
title: Getting Shit Done&#58; How Open Sourcing My Personal Goals Made Me Way More Productive
permalink: /personal-goals-guide
date: '2014-11-06'
comments: true
tags:
- productivity
- personal goals
subtitle: Something
header-bg: Header, NOTE TO SELF MAKE BASE FILE FOR PPL TO FORK
---

For the past three weeks, I've been keeping a public, open-sourced version of my [personal goals](https://github.com/una/personal-goals) on Github. Overall, it's been a pretty great experience that has bolstered my productivity.

## The How

If you take a look, you can see that I organized my file with a few sections:

### README.MD
This is where I store a couple of things: my overall goals, things I plan to do that week, month, and a backlog. I also include links to some of my sub-folders and an overall goal for the week (added later to the process). I put the **Overarching Goals** first to remind myself why I am doing this in the first place when I open this document. Then, I have the list of **Weekly Tasks** as checkboxes, and afterward **Monthly Tasks** to remind myself to add those to the weeklies, or for things that take a bit longer, followed by a general **Task Backlog**. I refer to these lists when doing my **Weekly Review** (see later).

### /Content List
This is where I include resources such as books, reference guides, blog posts, slides, and videos that I want to watch, categorized by subject matter.

### /Accomplishments
This is where I go over my week in review. I think it's a pretty important part of the process &mdash; if not the most important. I take a look at what I did, what I didn't get to, additional things I did that I didn't originally plan on, and then write about how the week went in relation to meeting my goals in general. Going back over my goals and accomplishments puts you in the right mindset for setting the next week's goals, and lets you see what is and isn't working. This is where you can review and edit your plan.

<small class="right">You can also include additional folders with more specifics for your goals. For example, one of my goals is to write more blog posts. To help with this, I have a sub-folder for blog post ideas. I keep this public in the spirit of open source.</small>

## The Why

1. It makes you think about your goals
2. Writing down goals helps you track them and keeps you more responsible
3. In moments of downtime, you always have a reference to a list of productive things to do or active goals to strive for
4. You have access to your goals and resources anywhere
5. Other people can contribute to your personal goals

<a class="twitter-share quote right">
  Writing down your goals make you think about them, and publicizing them holds you more accountable.
</a>


Writing down your goals make you think about them, and publicizing them holds you more accountable. It's the same reason why keeping a [food diary](http://www.ncbi.nlm.nih.gov/pubmed/22795495) yields better results for dieters. The simple act of writing down your day's actions makes you more likely to stick to a plan. Reviewing these goals in a positive light at the end of the week definitely made me feel accomplished. A positive light is the key word here. Don't beat yourself up for not accomplishing everything you planned at the beginning of the week &mdash; simply re-evaluate your time allocation for the following week. This is why we do this!

<a class="twitter-share quote left">You always have a reference to a productive and actionable list for reaching your goals.</a>

Another huge advantage is that you always have a reference to a productive and actionable list for reaching your goals. A few days after I began open sourcing my goals, I went to a new gym that opened up by me. It had ellipticals that were internet-connected. Awesome. I was quickly able to pull up the repo and access my content list. So I ended up watching a video on web components &mdash; being productive toward both my health and a dev topic I was interested in learning more about.

Letting other people contribute to your personal goals seems strange at first &mdash; this is *personal* after all, but it's actually pretty cool. I've had two contributors so far; the first was somebody who added a task for me to do, which I had been meaning to but forgot about, and the second reminded me to make time to enjoy my life and relax to prevent burnout.

## Terminal Aliases to Make it Easier

As a part of my workflow (and as a part of accomplishing my personal goals) with this, I wrote some useful terminal aliases to help make this list super easy to access and use from anywhere the command line (thats why I'm using absolute links here). You can implement these by editing your **.bash_profile** or **.zshrc** files (depending on which you use), or by creating a separate shell script file and linking it inside of your **.bash_profile** or **.zshrc** (we'll get to that in a second).

Replace anything inside of the `{}` with your own info. These assume that your repo is hosted on Github and titled 'personal-goals' with a 'content-list' folder.

```
# edit personal goals (only works if you have subl installed)
alias pg-ed="subl {PATH-TO-DEV-FOLDER}/personal-goals"

# check off personal goals (open main README.md in vim)
alias pg-ch="vim {PATH-TO-DEV-FOLDER}/personal-goals/README.md"

# add to content list (opens content list folder in vim)
# i.e. pg-add blog-post or pd-add resource
function pg-add() {
  if [ $# -eq 0 ]; then
      print "Oops. Please enter a content type! (i.e. pg-add video)"
    else
      vim ~/Desktop/Dev/personal-goals/content-list/"$@"s.md
  fi
}

# push my changes to my github master branch and open the page
# The commit message will always be "push from terminal" since i'll probably just be adding more resources or checking things off when using this
function pg-gh() {
  cd ~{PATH-TO-DEV-FOLDER}/personal-goals;
  git checkout master;
  git add -A;
  git commit -m "push from terminal";
  git push origin master;
  open http://github.com/{GITHUB-USERNAME}/personal-goals
}
```

If you're creating a separate shell script file (i.e. **pg-aliases.sh**) for better organization and to not clutter your **.zshrc** or **.bash-profile**m you would only need one line of code to link it:

```
# Personal Goals terminal aliases
# i.e. source "Users/myusername/.pg-aliases.sh"
source "{PATH-TO-ALIAS-FILE}/"
```

So with either of those methods, the aliases I've provided are as follows:

<!-- |Terminal Command | Functionality | Usage |
|---|---|---|
| pg-add | Opens up content page in Vim for adding resources | pg-add video
| pg-ch | Opens up README.md for quick checking off of weekly goals| pg-ch |
| pg-gh | Pushes to your master branch with a commit message of "push from terminal" and opens the Github page online | pg-gh |
| pg-ed | If you have subl set up, open your personal goals folder in Sublime | pg-ed |

 -->

<table>
  <tr>
    <th>Command</th>
    <th>Functionality</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>pg-add</td>
    <td>Opens up content page in Vim for adding resources</td>
    <td>pg-add video</td>
  </tr>
  <tr>
    <td>pg-ch</td>
    <td>Opens up README.md for quick checking off of weekly goals</td>
    <td>pg-ch</td>
  </tr>
  <tr>
    <td>pg-gh</td>
    <td>Pushes to your master branch with a commit message of "push from terminal" and opens the Github page online</td>
    <td>pg-gh</td>
  </tr>
  <tr>
    <td>pg-ed</td>
    <td>If you have subl set up, open your personal goals folder in Sublime</td>
    <td>pg-ed</td>
  </tr>
</table>


<small>Feel free to edit and configure this workflow to what works best for you. Again, these are <em>personal</em> goals :)</small>

## Advice

As a budding developer, I often struggle with the fact that there is so much out there to learn, and **the more I learn, the more I realize I don't know.** With this system, I was continuously enumerating all of the things I didn't know. No matter how well-intentioned this was, it quickly became overwhelming and somewhat discouraging. Often, especially at first, my goals would be all over the place, constantly adding things to my weekly to-do list as I learned about them, which in turn created an ever-growing cycle of to-dos and an ever-growing list of things I don't know.

<a class="quote twitter-share left">Open sourcing my personal goals has by far been one of the best things I've done for my productivity.</a>

Don't get me wrong, open sourcing my personal goals has by far been one of the best things I've done for my productivity. I highly recommend it. But here is some advice that will help you keep your sanity from the start:
<br>

### Choose One Goal for the Week
I added this later to the process (even after the first draft of this blog was written). I found that my goals were sort-of scattered, and I like continuing a pursuit from the day before. For this reason, I began creating an overall goal for the week before defining specific tasks. It helped greatly to streamline my tasks for the week.

### Once Set, Don't Add More Goals for the Week
Once you've set your weekly goals, resist the temptation to add more! Instead, if you do extra, or your plans change, write a bout it in your weekly review. I.e. the list of "Additional Things I Did This Week" or get a head start on planning "Things I Plan To Do Next Week". You'll feel like you did more than you planned this way, instead of feel bogged down by an ever-growing list of things you'll never get to accomplish in a week.

### Don't Just Focus on Code
When you have a reference list of things to do in your spare time, it's great for being productive &mdash; but don't let that list take over your life. Admitedly, I'm a little bad at this, filling my list with mostly code and work-related items. Chris Eppstein had to remind me of this point via a pull request telling me to "enjoy the sun before it's winter". He was absolutely right. Remember to make time to make yourself and the people around you happy. After all, <a href="" class="twitter-share">happiness should be one of your overall goals.</a>

### Take the Time to Reflect Positively
I mentioned this at the beginning of the post, where I talk about the structure for **/accomplishments** <-- named this to get you in the positive mindset :). It's really important to focus on what you've achieved and not what you didn't get to. Reflect on what you did, what you didn't do, and what you'll do in the future.

<blockquote> To get started with your own system, fork <a href="https://github.com/una/personal-goals-starter">this repo</a> and fill it up! Also, feel free to reference and contribute to <a href="https://github.com/una/personal-goals">my own repo</a> :)</blockquote>
