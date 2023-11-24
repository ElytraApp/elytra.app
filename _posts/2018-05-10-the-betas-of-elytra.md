---
layout: post
title: The Betas of Elytra
date: 2018-05-10 13:14:54.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- notes
tags:
- beta
- elytra
- notes
meta:
  _edit_last: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/05/10/the-betas-of-elytra/"
---
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="elytra-beta-announcment.jpg" src="{{ site.baseurl }}/assets/2018/05/elytra-beta-announcment-1.jpg" alt="Elytra's new App icon" width="1024" height="576" border="0" /></p>
<p>Something is off? Something doesn’t sound right? Something doesn’t look right!</p>
<p>That’s it, it’s the new name and App icon. Yes, <strong>Yeti</strong> still remains our internal codename however, since this is the first Beta build, I couldn’t think of a better time to finally reveal the actual product name we’re going with: <strong>Elytra</strong>.</p>
<p>There’s also a new domain name. An <code>.app</code> domain. I’ve been waiting to acquire this domain so I can finally release the Beta.</p>
<p>Well, here’s what’s new in the first Beta;</p>
<h2>What’s new</h2>
<ul>
<li>Dark Theme for iPhones &amp; iPads</li>
<li>Black Theme for iPhone X.</li>
<li>Serif type (Using Georgia at the moment, please email me your font suggestions).</li>
<li>Improved Memory management.</li>
<li>Lowered disk usage (and therefore lower power consumption) when a post has lots and lots of images.</li>
<li>Image galleries are now accessible including controls.</li>
<li>Improved Quotes design.</li>
<li>Improved code blocks rendering.</li>
<li>Improved text rendering performance.</li>
<li>Improved “Add To Elytra” (previously, “Add to Yeti”) share extension.</li>
<li>Moved the Article Helper interface to the right edge on iPads. It moves to the left for RTL idioms.</li>
</ul>
<h2>What’s fixed</h2>
<ul>
<li>Galleries with images with no height information are now rendered correctly.</li>
<li>Galleries with more images than what can be fit horizontally (page control) are now rendered as groups of 5 photos per control.</li>
<li>Fixes unread pull-to-refresh crash.</li>
<li>The Title &amp; author text is now aligned correctly with the rest of the text in the article interface.</li>
<li>Fixed the “Add to Elytra” (previously, “Add to Yeti”) share sheet extension crashes.</li>
</ul>
<h2>Known issues</h2>
<p>When working on some features and fixing some bugs, I ended up running into a lot of UIKit bugs. Following are some of the known issues Elytra will present which we have to depend on Apple to fix:</p>
<ul>
<li>When using a dark theme, the navigation bars will misbehave and present a lot of unexpected states and behaviours.</li>
<li>When searching inside an article, the highlighted area is often mis-positioned to the left or right (this depends if you’re using a LTR or RTL idiom) however, scrolling up or down a little positions this highlight correctly.</li>
</ul>
