---
layout: post
title: Spring 2020 Supplementary Update
date: 2020-02-18 22:37:14.000000000 +05:30
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
meta:
  _thumbnail_id: '268'
  _edit_last: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/02/18/spring-2020-supplementary-update/"
---
<p>Youtube is very wide, densely spread content aggregation service which almost every single one of us has used at least once. Youtube has supported RSS Feeds for channels for a while now; for as long as I can remember actually. Although, it makes it very hard to find and subscribe to them. There is no direct option to do so.&nbsp;</p>
<p>Until recently, I traversed a channel’s homepage and realised that Youtube advertises these links, like any good citizen of the WWW should. So now when you enter your favourite channel’s URL in Elytra, the app will automatically fetch the RSS Feed URL for you and add it to your account.&nbsp;</p>
<p>I’ve further programmed Elytra to know the 3 varieties of the URLs Youtube uses for channels and handle all of them gracefully. I’ve personally configured mine to all go inside a Youtube folder so I can tap on the folder to view its custom feed and go through all published videos.&nbsp;</p>
<p>In v1.6, I also updated how Youtube videos are handled in the app. It now uses the HLS stream which automatically configures the player based on your device settings like Low Power Mode, Low Data Mode, and the like. So it’s very energy efficient compared to opening the main stream or embedding in a web view.&nbsp;</p>
<p>Unfortunately, Youtube does not support WebPush/PubSubHubBub on these feeds yet, and I doubt they ever will.&nbsp;</p>
<p>If you need to import all your channels, you can follow Google’s support documentation which can be found <a href="https://support.google.com/youtube/answer/6224202?hl=en">here</a>.&nbsp;</p>
<p>As always, if you like the app, please take a moment and rate it on the App Store. It helps the app and me a lot. Happy Reading.</p>
