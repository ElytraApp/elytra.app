---
layout: post
title: Elytra Winter Update Delayed
date: 2019-11-04 17:01:04.000000000 +05:30
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
meta:
  _wpas_done_all: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2019/11/04/elytra-winter-update-delayed/"
---
<p>I had Elytra’s v1.5 build scheduled up pretty tight and ready to go. I submitted it to the App Store for Review and woke up today morning to learn that the binary was rejected because it was crashing. That’s fair. None of us involved want this to happen. </p>
<p>I checked the crash log provided by the review team and it did not look good. However, a quick run on my devices and reading about this issue (yes! It has already been <a href="https://stackoverflow.com/a/58660634/1387258">documented</a>), I have to unfortunately conclude that I’m going to have to delay v1.5 until Apple fixes this issue. </p>
<p>As soon as an update to Xcode is available, I’ll test things and dispatch a new build. The iOS 13.2 SDK fixes a bunch of issues I’ve been facing since the iOS 13.0 SDK so I hope it is worth waiting. </p>
