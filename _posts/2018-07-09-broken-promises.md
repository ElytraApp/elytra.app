---
layout: post
title: Broken Promises
date: 2018-07-09 18:49:01.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- webservice
tags:
- beta
- nodeJS
- notifications
- public
- push
- webservice
- websub
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/07/09/broken-promises/"
---
<p>Sometime last week (or perhaps the week before that), I made some minor changes to how RSS feeds are polled. This made the “engine” more efficient by running in period bursts so as to not block your requests from taking priority. </p>
<p>I did however change something: The older variant used a callback system while the newer variant used Promises. I did not have an integration test to check how this change worked with the WebSub mechanism. </p>
<p>Earlier today when I published the Public Beta 3 notes, I was wondering why I did not receive a push notification. Almost 6 hours later I hit my, “ah ha!” moment. </p>
<p>I have patched the issue and now have an integration test for this incase I break it in the future. </p>
<p>If you are subscribed to Push Notifications for the Elytra blog, you should have received one. If you didn’t, you should totally subscribe. </p>
