---
layout: post
title: Public Beta
date: 2018-07-01 12:41:30.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- notes
- public
tags:
- beta
- notes
- public
- release
meta:
  _thumbnail_id: '72'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/07/01/public-beta/"
---
<p>A warm welcome to all the new Public Beta Testers. </p>
<p>Now that the cheesy stuff is out of the way, let’s get to the meat of this release.</p>
<h2>What’s new</h2>
<ul>
<li>Added a “Open in browser” button to the Article interface.</li>
<li>Account Deactivation</li>
<li>Implemented <strong>Accent colour</strong>. </li>
<li>Recommendations interface </li>
</ul>
<h2>Improvements</h2>
<ul>
<li>Improves the tinting of the refresh control for dark interfaces or after switching the theme.</li>
<li>Improved the kerning for the System font for the Article’s title.</li>
<li>Vastly improved GIF performance and memory consumption thanks to the FLAnimatedImage library. </li>
<li>Fetching an favicon across all the available images (opengraph, apple-touch-icon and the favicon itself) based on weights. Apple-touch-icon is given a higher preference over the favicon now.</li>
<li>When adding a new feed from the app, typing in http/s is now optional. </li>
<li>When a feed has multiple endpoints, the list now uses head truncation so you don’t accidentally add the comments feed. </li>
</ul>
<h2>Fixes</h2>
<ul>
<li>Fixed adding feeds from the share extension.</li>
<li>Fixed the position of the popover (iPads) for the long tap interaction on feeds and folders.</li>
<li>Added a default handler for the browser scheme when one isn’t selected.</li>
<li>Fixed an issue where all buttons would remain in the disabled state if the cancel button in the Purchase interface was tapped during first run.</li>
<li>Searching within an article should now work as expected. There is a known issue on iPads where the highlight doesn’t align with the characters you’re searching for. <br />Fixed a rare crash that would occur when dismissing the Unread interface while a page was loading.</li>
</ul>
<h3>Notes</h3>
<ul>
<li>Version: 1.0.0</li>
<li>Build 102.</li>
<li>Pipe: PBeta-01</li>
</ul>
