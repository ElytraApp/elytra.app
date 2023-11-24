---
layout: post
title: Why Elytra is Fast
date: 2020-05-20 19:41:26.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- public
tags:
- notes
- public
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/05/20/why-elytra-is-fast/"
---
<p>Brent Simmons writing on his blog, <a href="https://inessential.com/2020/05/18/why_netnewswire_is_fast">Why NetNewsWire Is Fast</a>, I realised how similar a lot of stuff is between the two, albeit, Elytra offloads a lot of the feeds syncing to its API. The similarities still do exist. </p>
<blockquote>
<p>NetNewsWire is fast because performance is one of our core values. Being fast is part of the very definition of the app.<br />...<br />The best general advice I can give is just this: make sure performance is part of the foundation of your app. Make sure it‘s part of every decision every day.</p>
</blockquote>
<p>Every app, irrespective of the platform, technologies and, toolchains should aim for that. And that’s not technical, it’s behavioural, on our part. </p>
<blockquote>
<p>The most painful way to parse XML is with a SAX parser — but it’s also how you’ll get the best performance and use the least memory.</p>
</blockquote>
<p>Yes. It’s a pain in the *** to deal with, but the only proper way to handle thousands of feeds. Elytra’s Polling Server (yes, 1, a t2.nano EC2 instance) chugs through 1K+ Active Feeds <a id="fn-202005201" href="#fn-ref-202005201"><sup>1</sup></a>,not including RSS Feeds which support WebSub, in under 3 minutes.</p>
<blockquote>
<p>The parsers are fast — but we also do our best to skip parsing entirely when we can. There are two ways we do that.</p>
<p>We use conditional GET, which gives the server the chance to respond with a 304 Not Modified, and no content, when a feed hasn’t changed since the last time we asked for it. We skip parsing in this case, obviously.</p>
</blockquote>
<p>Always respect cache headers for RSS Feeds. Some Feeds when publish a frequency property which you can respect, Elytra does not do that. Elytra uses the <code>Last-Modified</code> and <code>Etag</code> headers specifically. </p>
<blockquote>
<p>Now say you’re marking all articles in the current timeline as read. You could call article.read = true for each article — and, for each article, trigger a whole bunch of work. This can be very, very slow.</p>
</blockquote>
<p>Elytra v1.0 did this silly thing, a notification for every change and no coalescing. I fixed that in v1.1 once the number of feeds started growing and I had more and more articles I marked read in bulk. </p>
<blockquote>
<p>So, instead, we coalesce these — we make it so that recalculating unread counts happens not more often than once every 0.25 seconds (for instance). This can make a huge difference.</p>
</blockquote>
<p>This is a fantastic idea. I’m going to use this to Elytra in v1.8. </p>
<blockquote>
<p>What I suspect is less common is use of sets. The set is our default collection type — we never want to check to see if an array contains something, and we never want to deal with duplicate objects. These can be performance-killers.</p>
</blockquote>
<p>I believe Brent and I ran in to the same issues with fetching Articles from the database such that Sets was the obvious choice over Arrays. I use <code>NSMutableOrderedSet</code> to be specific. </p>
<p>I finally come to the point I currently disagree with Brent on: </p>
<blockquote>
<p>My experience with stack views tells me that they’re excruciatingly slow. They’re just not allowed.</p>
<p>...</p>
<p>No Auto Layout in Table Cell Views</p>
</blockquote>
<p>Brent has his own reasons here which he describes in his post. I really like Stack Views and it becomes easy for me to think about layouts for the iOS App and the Web app as its very similar to the flex layout model on the web. I have so far not come across performance issues with using Stack Views in Elytra. </p>
<p>No Auto-Layout in Table View Cells is a deal-breaker for me. Apple’s recent work on self-sizing cells, diffable datasources and composable collection view layouts has really simplified writing code for interfaces. The best part is: with every major OS release, these things become slightly faster, slightly better, and sometimes much faster and better. </p>
<p>I do miss writing up interfaces in code, but I often found myself fighting the OS when Apple releases new device sizes, requirements (like split-view on the iPad in the past), or new technologies. </p>
<hr />
<p>I was happy to read that most of what I am doing in Elytra is very similar to Brent’s approach for NetNewsWire. I first heard about him when Vesper came out and have since followed his work and blog. I have much to learn from him and I hope he never stops writing such posts. </p>
<hr />
<p id="fn-ref-202005201"><a href="#fn-202005201">1.</a> An Active Feed is any RSS Feed which is at-least subscribed by one user. All other feeds are polled once per day.</p>
