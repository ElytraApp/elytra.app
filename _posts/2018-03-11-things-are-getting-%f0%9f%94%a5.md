---
layout: post
title: "Things are getting \U0001F525"
date: 2018-03-11 18:24:10.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
tags:
- alpha
- dev
- notes
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/03/11/things-are-getting-%f0%9f%94%a5/"
---
<p>The title is going to sound very weird, especially considering this is the first post. If you’re aware of what Yeti is, the rest of this post is going to make sense. If not, it’s either going to confuse you or you’re going to figure out what this is about. </p>
<h2>What’s new</h2>
<ul>
<li>Oddly enough, I never thought of async rendering of text. Well, it has been implemented now. It wasn’t too hard. I had to simply move all text rendering to a few concurrent threads and ensure all UI work is still happening on the main thread. This enables the app to render the very top section right away while the rest renders afterwards. This enables the user to get started with the content while the rest renders. This isn’t a big deal on the iPhone X which can render a decent chunk within a millisecond, but this is very useful on something like the iPhone 5C.</li>
<li>Native code rendering. I was against the idea of using a web view for showing pre-formatted code. So, with the help of highlight.js, I got this working pretty well. It isn’t as fast as I’d like it to be, but this is something I can optimise later.</li>
<li>Improved margins. I was pretty a*** about the text lining up with the back button on the screen. This is fixed now and no longer drives my OCD up the wall.</li>
<li>On the server side, I completed work on convertor v3. I know, the product isn’t even v1.0.0 but I already have the convertor at v3. This is critical because convertor v1 was very basic, did not handle a lot of tags and edge cases, v2 handled all supported tags but failed to handle a lot of new edge cases. v3 covers both of those situations. It’s also <strong>30-35%</strong> faster than v2, so that’s another thing in it’s favour.</li>
</ul>
