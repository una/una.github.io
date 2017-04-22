---
layout: post
title: "VSCode Custom Workspaces"
permalink: /code-workspaces/
date: '2017-04-24'
comments: true
tags:
- code
- VSCode
- VS
- custom
- workspace
- environment
- text editor
subtitle: "VSCode just released custom workspaces! This means you can customize your text editor layout and style for different projects within a single editor!"
---

[Visual Studio Code](https://code.visualstudio.com/) just [released](https://code.visualstudio.com/updates/v1_11#_workbench) experimental workbench theming. This is such an awesome feature ("to-be"?) because it allows you to customize your text editor's look and feel on a per-project basis! Why is this so exciting? Read on:

## Creating Spaces for Flow

Cal Newport, author of the book [Deep Work](#), [defines](https://80000hours.org/2016/08/is-deep-work-the-most-underappreciated-skill-for-career-success-an-interview-with-cal-newport/) the concept of "deep work" as *"the ability to focus without distraction on a cognitively demanding task"*. "Deep work" as he describes it is also known as *"flow"*, a state of being where a person becomes extremely productive by focusing on a single task and actively avoiding distraction.

I have a theory that our digital workspaces, or text editors, can help get into this state more quickly by providing visual cues that move us from one task to another.

Have you ever noticed that changing your environment might help give you some inspiration or help you focus? Like going to a coffee shop to write a blog post or moving to another corner of the office to work on a difficult problem? I have an (untested) theory that this phenomenon extends to our digital spaces as well.

> Having visual differentiation between project themes may help you more fluidly "swap" into another mindset and keep you there.

Seems plausible at least, and it certainly couldn't hurt to try.

## Implementation

Workbench customization can be implemented in the same way you would theme anything else. You can access it with `cmd + shift + p` on a Mac, or `ctrl + shift + p` on a Windows machine and looking for `Preferences: Open Workspace Settings`.

<img src="../images/posts/vscode-workspace/setup.jpg" alt="Sample setup">

Right now you can update entire themes on your projects using the customization of `workbench.colorTheme` along with various positioning and visibility options. Color customization options are a bit limited and experimental, but include (within `workbench.experimental.colorCustomizations`: `statusBarBackground`, `panelBackground`, `sideBarBackground`, `sideBarTitleForeground`, `activeTabBackground`, `editorForeground`, `editorLineHighlight`, `titleBarActiveBackground`.

And more! The autocomplete for settings is pretty great, and results are instant, too:

<img src="../images/posts/vscode-workspace/instant.jpg" alt="Bright red highlight">
<p class="caption">😬 Well, at least it's working.</p>


## Use Cases

To me, this feature is great for differentiating between work and personal projects, as well as customizing layout to suite certain needs. For blog posts, I'll likely want larger text, increased line height, and really good markdown support, so I use a theme called [Gray Matter](https://marketplace.visualstudio.com/items?itemName=philipbe.theme-gray-matter) which feels a lot like iA writer (the UI of which which I love, but prefer to stay within my own code base and use the commands I'm used to in VS Code).

<div style="overflow:hidden">
  <div class="third"><img src="../images/posts/vscode-workspace/default.jpg" alt=""><p class="center">Default Workspace</p></div>
  <div class="third"><img src="../images/posts/vscode-workspace/do.jpg" alt=""><p class="center">DigitalOcean Workspace</p></div>
  <div class="third"><img src="../images/posts/vscode-workspace/book.jpg" alt=""><p class="center">Writing Workspace</p></div>
</div>

For the other workspaces, I've just customized themes and colors as I've seen above. There are a lot of possibilities here with the large amount of themes on the plug-in market, and now with the ability to further customize those to fit your own needs.

## Drawbacks

This is still an experimental feature that isn't at its final implementation yet. According to Microsoft: 

> "There are still several gaps and we have not finalized the new theme file format. For that reason, there's no documentation and we ask theme authors to not use the new theme format yet."

Also, doing any such customizations will add a `.vscode/` folder to your filesystem to read the configuration. Be sure to add `.vscode/` to your `.gitignore` file to make sure it doesn't get merged in to your code base.

Despite the warnings, we can start to play now! And optimize our experience for the spaces where we spend a lot of our time.