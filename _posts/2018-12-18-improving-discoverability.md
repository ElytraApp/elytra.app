---
layout: post
title: Improving Discoverability
date: 2018-12-18 12:50:58.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
tags:
- app
- discover
- search
- webservice
meta:
  _edit_last: '1'
  _wpas_done_all: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/12/18/improving-discoverability/"
---
<p>Finding interesting content to read online has always been easy. Run to your nearest Subreddit Stand or Twitter Board and you’ll find yourself bombarded with a lot of information. What you wanted are topics you’re interested in. So you spend time talking to people and finding new sources. And when you do, you add its RSS Feed to your favorite Reader, like Elytra.</p>
<p>There is scope for improvement here. A lot of social networking services use Graphs to determine what you may want to read. That’s cool (it is, I’m completely fascinated by it) but it involves opening up your reading habits, requiring and storing your personal info, syncing your contacts so the service and find your friends and see what they are reading. It all adds to up to being a very invasive technique.</p>
<h2>My Proposal &amp; Implementation</h2>
<p>I queried up the blogs in Elytra (over 9000 of them, wow!) and I was happy to see that the majority of them provide tags/categories information through the RSS Feed <sup><a id="fn1" title="see footnote 1" href="#44875">1</a></sup>. So I decided to use this information to bring these topics of interest to you from blogs you already follow.</p>
<p><img title="Tags.png" src="{{ site.baseurl }}/assets/2018/12/Tags.png" alt="Tags in Unread &amp; Blog Feeds" width="952" height="746" border="0" /></p>
<p>I’m still exploring this direction but I believe this will open up a lot of possibilities for you to discover new blogs, authors and topics of interest. This information is already made available to Elytra by the blogs and as it does not rely on your information, we successfully keep things private as usual.</p>
<p>I’d love to hear your thoughts on this so head over to the Reddit discussion <a href="https://www.reddit.com/r/elytraios/comments/a78vc0/improving_discoverability/">here</a>.</p>
<p id="44875">1. If you run a blog which does not expose this information through its RSS Feed, you should definitely consider adding those. <a href="fn1">↩</a></p>
