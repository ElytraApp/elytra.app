---
layout: post
title: A lot of Unread Articles
date: 2020-05-22 13:00:02.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- public
- release
- webservice
tags:
- notes
- public
- release
- webservice
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/05/22/a-lot-of-unread-articles/"
---
<p>If you launch the app or open the web app (if you have access) and notice a sudden surge of unread articles waiting for you, I can explain.</p>
<p>Traditionally, to check if an article is unique and new, I checked its GUID which the feed provides and checked if it already exists in Elytra’s database. This works fine if there is only one source for an RSS feed. It breaks when there are multiple sources for a single website. This happens when say I subscribe to a Website’s XML Feed and someone else subscribes to its JSON Feed. Both sources are valid, but both bring in articles with the same content and GUID. So the articles would map only to the first feed. The second feed would never get new articles. </p>
<p>To solve this problem, I just updated my unique constraint to also use the Feed’s unique ID. The new unique pair constraint of GUID-FeedID works for all feeds from a single website, irrespective of which source the user subscribes too. </p>
<p>This caused a huge surge in unread articles for all users. I do apologise for having overlooked this issue, but on the bright side: We all have a bunch of articles to read over the weekend which we missed out on, no thanks to me. </p>
