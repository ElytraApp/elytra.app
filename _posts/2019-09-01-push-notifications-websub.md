---
layout: post
title: Push Notifications & WebSub
date: 2019-09-01 11:40:59.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- public
- webservice
tags:
- notes
- public
- webservice
meta:
  _wpas_done_all: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2019/09/01/push-notifications-websub/"
---
<p>Since version 1.0, Elytra has supported the WebSub protocol, and as a natural consequence of it: Push Notifications. </p>
<p>The <a href="https://www.w3.org/TR/websub/">WebSub</a> protocol enables Elytra to receive real-time notifications from websites and update the internal cache of latest articles from these websites. </p>
<p>I recently noticed some abnormalities in the WebSub log that runs every weekend. Quite a few websites:</p>
<ul>
<li>Use an old (outdated) version of the protocol via a plugin (Wordpress’ PuSHPress plugin) or similar</li>
<li>Use a custom implementation that does not follow the protocol outlined by the W3C Doc. </li>
</ul>
<p>This caused several websites to advertise their <a href="https://www.w3.org/TR/websub/#hub">WebSub Hubs</a> but not respond correctly to the subscription requests. A notable exception was Medium.com. While the RSS Feed URL for these were correct, Medium used to respond with a “incorrect topic url” error which was easy to fix because they also responded back with the correct URL to use for that feed. </p>
<p>I have since automated the above process, so no further actions are required by publishers relying on such hubs. However, if you are using any other implementation and WebSub doesn’t seem to be working on your blog:</p>
<ul>
<li>Try a different plugin (if you’re using a plugin)</li>
<li>Try a different hub (some plugins allow you to define the hubs you would like to use)</li>
<li>If you have written a custom implementation, ensure it uses the latest standards defined in the WebSub protocol linked above. </li>
</ul>
<p>If you still run in to any issues, please feel free to get in touch with me at <a href="mailto:support@elytra.app">support@elytra.app.</a></p>
<h2>Duplicate Blogs</h2>
<p>Another issue I noticed is duplicate blogs. A lot of people import their OPML files into Elytra and detecting duplicates is often tricky. The reason is simple, a single blog sometimes has multiple URLs pointing to the same feed. Now the obvious solution would be to check the title, but that doesn’t work either because larger websites have separate feeds based on topics. </p>
<p>So detecting duplicates is tricky.</p>
<h2>Solving the Problem</h2>
<p>Both of these issues can be solved in the upcoming dashboard I am working on for Publishers. I hope to create a hub for Publishers to use for a nominal cost as well as enable publishers to group Duplicate blogs and RSS feeds and point to the single source of truth by claiming ownership of these RSS Feeds. </p>
<p>I’ll be publishing a consultation draft as to which features should be paid and which should be free, but I know one thing for sure: duplicate feeds consolidation will definitely be free for everyone. It is good for Elytra, you and your readers and this shouldn’t be an expense for anyone involved. </p>
