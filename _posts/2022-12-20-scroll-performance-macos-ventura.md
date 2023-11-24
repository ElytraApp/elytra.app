---
layout: post
title: Scroll Performance & macOS Ventura
date: 2022-12-20 08:43:43.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- macOS
- notes
tags:
- engineering
- macOS
- performance
- rendering
- scrolling
- text
- textkit2
meta:
  _edit_last: '1'
  _aioseo_title: ''
  _aioseo_description: ''
  _aioseo_keywords: ''
  _aioseo_og_title: ''
  _aioseo_og_description: ''
  _aioseo_og_article_section: ''
  _aioseo_og_article_tags: ''
  _aioseo_twitter_title: ''
  _aioseo_twitter_description: ''
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2022/12/20/scroll-performance-macos-ventura/"
---
<p>I recently switched to using macOS Ventura on my MacBook M1 Pro as the primary working device.</p>
<p>This required a change in my workflow and given how these machines work, Elytra would always be up to date and ready with new articles when I opened the lid the morning.</p>
<p>I quickly began noticing abysmal scorlling performance in the article view of the app. On a second passs, I noticed everything about the article view was slow: rendering, scrolling, and resizing.</p>
<p>I ran the AppStore build on my macOS 12 system and did not observe the same, but this Mac had 64GB of memory, a dedicated desktop-class GPU and a 14-core workstation chip, all liquid cooled. So I began to wonder if the M1 Pro chip was being “lazy”.</p>
<p>I still wondered if I am to blame for this, I turned to instruments to analyze the rendering performance and behold: TextKit2 bites me again.</p>
<p><img src="{{ site.baseurl }}/assets/2022/12/Screenshot-2022-12-20-at-7.43.00-AM.png" alt="Intruments showing rendering callstacks for Elytra's article reader view" title="Screenshot 2022-12-20 at 7.43.00 AM.png" border="0" width="1396" height="965" /></p>
<p>Now that I know what’s causing the issue, I turned to the internet: Apple’s Dev Forums, StackOverflow, various macOS engineering blogs and even mailing lists (those are still very very cool).</p>
<p>It turns out, I’m not the only one to be bit by TextKit 2’s erractic behaviour, incomplete APIs and a lack sensible documentation apart from a few WWDC videos. To make matters worse, unlike TextKit 1, this was no “drop-in” replacement like Apple claimed it to be and is an automatic opt-in when compiling with the latest SDKs.</p>
<p>In a sample project, TextKit2 rendering was atleast 70% slower than TextKit1. Worse, when resizing a window.</p>
<p>Luckily for me, I found <a href="https://indiestack.com/2022/11/opting-out-of-textkit2-in-nstextview/">this post</a> by Daniel Jalkut</p>
<blockquote><p>The simple workaround, for the time being anyway, is to force your text view to use TextKit 1. As explained in the WWDC excerpt above, this is as simple as asking it once for its layout manager, which will cause it to rebuild its entire text architecture to suit the TextKit 1 way of functioning</p></blockquote>
<p>and the oneliner: <code>let _ = myTextView.layoutManager</code></p>
<p>Because of how Elytra is archictected, this patch totaled in as a +1 -0 commit. Sweet. All text-rendering is mostly handled by a single View: <code>Paragraph</code> which other views like <code>Heading</code>, <code>List</code>, <code>Blockquote</code>, etc. are subclasses of.</p>
<p>With that fix in place, the article view was back to rendering, scrolling, and resizing at full 120Hz (sweet sweet ProMotion goodness).</p>
<p>This will become available as a fix in the upcoming builds v2022.11.3 (485) which are currently waiting for review.</p>
<p>If you’re using the notarized releases, the latest build is immediately available for download:</p>
<ul>
<li>Check for Updates from the app menu</li>
<li><a href="https://github.com/ElytraApp/Elytra/releases/latest">Download it from Github</a></li>
</ul>
<hr />
<p>If you’re also building and shipping a Catalyst app, and wondering if you’re app also may be affected by this issue: unless you are intentionally poking at the layout managers, containers of the text views, you shouldn’t have to worry. But if you are and notice similar issues, try forcing the text view to use TextKit 1 instead and see how that works out.</p>
