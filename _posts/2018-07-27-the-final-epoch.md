---
layout: post
title: The Final Epoch
date: 2018-07-27 16:43:42.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- notes
- public
- webservice
tags: []
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/07/27/the-final-epoch/"
---
<p>I’ve received numerous emails and messages over the last two weeks requesting new features and reporting bugs. This build is a culmination of all of that including bug reports and feature lists we’ve compiled internally. </p>
<h2>What’s new</h2>
<ul>
<li>You can now share the Feed’s URL (and website’s URL when available) from the swipe menu. The same is accessible when dragging cells on iPads supporting drag and drop. </li>
<li>State Restoration has now been implemented in tandem with Background Fetch. </li>
<li>With the background fetch change, the refresh activity indicator will now also show the last refresh time if one is available.</li>
<li> </li>
</ul>
<h2>Improvements</h2>
<ul>
<li>Images are no longer affected by Smart Invert. Strict Invert will still invert the colours in images. </li>
<li>Improved image caching</li>
<li>Improved memory usage when loading and displaying images (especially on iPhones)</li>
<li>Improved multi-tasking behaviour on iPads (Slide Over was majorly broken in previous builds)</li>
</ul>
<h2>Fixes</h2>
<ul>
<li>Removed the trailing line-break from Lists</li>
<li>Fixed long tapping on the Account ID during setup to crash the app. (This gesture has been removed and replaced with a single tap gesture)</li>
<li>Aligns the section header’s title with the labels of the cell. </li>
<li>Correctly manage unread and bookmarked states when article states change via the toolbar in the Article interface. </li>
<li>Fixed a crash when linked header identifiers contained non-URL safe characters.</li>
<li>Fixes the blank window on app launch (including bringing the app to the foreground) which occurred in unusual circumstances only on iPads.</li>
</ul>
<h2>Web Service</h2>
<ul>
<li>Improved the performance of fetching unread items (on the server) by a huge margin. This could previously take over 30s and now shouldn’t take more than a second.  </li>
</ul>
<p>This probably brings us to the end of the Beta runs for Elytra. I’ll be resuming work on the launch of the app now and if there are any bug reports that come during this period, I’ll work on those. But the feature list is now frozen and everything deferred to the 1.x versions.</p>
<p>A big thank you to everyone who has been testing the app and sending me feedback. I still have a lot of people to invite to the beta testers list and I’ll resume on that shortly. </p>
<h3>Notes</h3>
<ul>
<li>Version: 1.0.0</li>
<li>Build 119</li>
<li>Pipe: PBeta-04</li>
</ul>
