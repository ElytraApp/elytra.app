---
layout: post
title: More Alpha
date: 2018-03-30 14:43:02.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- alpha
- notes
tags:
- alpha
- dev
- notes
- release
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/03/30/more-alpha/"
---
<p>Another Friday, another alpha release. This is a House-keeping build required for the upcoming single feeds: <strong>Unread</strong> and <strong>Bookmarks</strong>.</p>
<h2>What’s new</h2>
<ul>
<li>Image settings now take effect. If the source does not provide alternate image sizes, the default url is used (which could be a big image).</li>
<li>Removing feeds</li>
<li>Searching for an article has been optimised to run smoothly on older devices. </li>
<li>When feeds are loaded on app launch, it'll load the full batch, and then onwards, only load new changes. This largely improves caching and networking performance. </li>
<li>The API has also been updated to not return responses if the local cache matches the server response.</li>
<li>Tweet rendering (only works if Tweets were embedded and not quoted)</li>
<li>Feed listings now update when you move to the next or previous article using the accessibility view. This also enables endless scroll on iPads (maybe even on iPhones, but I haven't tested it)</li>
<li>Image views and Gallery views have been reimplemented to be faster for rendering, more performant and use less memory. </li>
<li>Improved text rendering for the article title &amp; author in the article view. It should now scale gracefully with dynamic type. </li>
<li>The above change has also been made in the Feed view for individual cells.</li>
</ul>
<h2>Bug Fixes</h2>
<ul>
<li>All layout rendering issues in the Article renderer have been resolved. This includes stupid Xcode warnings and the like. <br />A) Quotes sometimes render with extra height. This is a known issue.<br />B) Formatted code blocks don't scroll horizontally in the same line. This is a known issue.</li>
<li>Opening links externally is now partially implemented. This may still crash in some situations. </li>
<li>Sharing an article now adds a "space" between the title and URL. This will be in place until Apple resolves the bug and restores the correct behaviour.</li>
</ul>
<p>I hope you enjoy reading over the weekend. Have a good one. ✌🏼</p>
