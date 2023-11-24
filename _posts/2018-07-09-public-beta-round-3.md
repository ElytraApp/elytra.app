---
layout: post
title: Public Beta - Round 3
date: 2018-07-09 11:31:09.000000000 +05:30
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
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/07/09/public-beta-round-3/"
---
<p>Elytra Build 104 is now available on Testflight and I’ve added another batch 100 testers to the list. If you still haven’t received your invite, this could be the week.</p>
<p>I spent a small part of the weekend fine tuning things on the server side so it can accommodate more feeds and serve more people without needing to be upgraded to a bigger size. </p>
<p>This update includes a lot of visual fixes and some underlying fixes to how Elytra functions.</p>
<h2>Improvements</h2>
<ul>
<li>Haptic feedback has been enabled now that I have had a chance to fine tune things. This was previously available in the private beta but disabled during public beta release.</li>
<li>Opening and closing folders no longer causes the weird jumpy animation. </li>
<li>Micro-blog posts are now handled in a graceful manner with content snippets shown instead of only the Blog’s title and author.</li>
<li>Added a <strong>Reset App</strong> option under the <em>Settings.app</em> if you need to externally reset the app. If you do this, your account information will be erased from the device. You can still reload the same account by setting up as usual and then swapping the account ID. Please note your account ID if you plan to do this. </li>
<li>Improved the text that is shared when you long tap a linked header to bring up the Share modal.  </li>
<li>Handles <code>.ico</code> favicons correctly. </li>
</ul>
<h2>Fixes</h2>
<ul>
<li>The Recommendations Interface in the previous build (103) stopped showing any feeds. This was a regression and has since been fixed. </li>
<li>Fixed a crash where some images came with empty urls and the app tried to load them. </li>
<li>Various minor improvements to the Onboarding flow. </li>
<li>Fixed a dead-lock situation when you try to add a feed (which provides multiple feed options) that you already have in your list. </li>
</ul>
<h2>Known Issues</h2>
<p>There is a known bug when you open the Import/Export OPML interface and later dismiss it. The overlay persists and causes the screen to be dimmed. A restart fixes this issue. I haven’t been able to trace it or reliably reproduce the issue. </p>
<h3>Notes</h3>
<ul>
<li>Version: 1.0.0</li>
<li>Build 104.</li>
<li>Pipe: PBeta-03</li>
</ul>
