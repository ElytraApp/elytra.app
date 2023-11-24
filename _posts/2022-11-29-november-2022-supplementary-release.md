---
layout: post
title: November 2022 Supplementary Release
date: 2022-11-29 11:44:00.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- public
- release
tags:
- notes
- public
- release
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2022/11/29/november-2022-supplementary-release/"
---
<p>I’ve just released a supplementary update for the November 2022 release.</p>
<p>The iOS update has been approved, the Mac update is pending review and should become available shortly. It includes some critical fixes so updating is highly recommended. </p>
<p>You can download the <a href="https://github.com/ElytraApp/Elytra/releases/tag/v2022.11.2">latest Mac release</a> from Github as well. </p>
<h2 id="releasenotes">Release Notes</h2>
<h3 id="new">New</h3>
<ul>
<li>Added support for following Mastodon accounts through their RSS feeds. Start by adding the user’s ID (eg. @nikhil@social.dezinezync.com) in the new feed web address field.</li>
</ul>
<h3 id="fixes">Fixes</h3>
<ul>
<li>
<p>Fixed some issues when loading images using the image proxy</p>
</li>
<li>
<p>Fixed a bug with Smart Folders auto-grouping</p>
</li>
<li>
<p>Fixed exporting log archive</p>
</li>
<li>
<p>Fixed articles list sometimes not loading immediately after sync</p>
</li>
<li>
<p>Fixed crash when opening an article with an embedded audio file which had a negative start offset (basically a file with bad metadata)</p>
</li>
<li>
<p>Fixed a bug where “Mark All Read” would still show some articles are unread in the list</p>
</li>
<li>
<p>Fixed a critical bug where internal DB connection wiring was all messy. It’s a lot cleaner now and put inside a neat little white-box imported from a Scandinavian country</p>
</li>
</ul>
