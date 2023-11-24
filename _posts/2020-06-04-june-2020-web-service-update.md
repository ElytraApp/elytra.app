---
layout: post
title: June 2020 Web Service Update
date: 2020-06-04 13:19:08.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- public
- release
- webapp
- webservice
tags:
- notes
- public
- release
- webapp
- webservice
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/06/04/june-2020-web-service-update/"
---
<p>I’m starting a new series of posts detailing changes I release to the Web Service. The Web Service is responsible for syncing your account across your devices and browsers. It also caches new articles so you only fetch information from sources that have changed since the last sync. </p>
<ul>
<li>I keep getting error reports from the Web Service in a unified private channel on Elytra’s Slack group. I use these reports to patch bugs as soon and as quickly as I can. </li>
<li>Yesterday, I received some errors regarding adding feeds using the ftr.freshangle.net service. This is the first I had heard about so I quickly investigated and found some issues in Elytra’s code that prevented these feeds from being processed. The <a href="http://ftr.freshangle.net">ftr.freshangle.net</a> service now has first class support in Elytra for both the XML and JSON feed endpoints. </li>
<li>There was a major sync bug in Elytra’s code both on the Web Service and iOS App. I released v1.7.4 on iOS to patch this issue and patched the Web Service as well. By morning of 4th June, these errors dropped down to just 12% compared to the day before it. As soon as all users update to the latest version of the iOS App, this should drop down to 0%. If you still haven’t updated, check the App Store for updates. </li>
<li>On 2nd June, we faced an interruptions and eventually an outage from our service provider which caused Elytra’s first ever downtime this year. Things eventually began recovering by 03:30AM IST on the 3rd of June. Everything is now stable. This outage resulted in some angry customers and I completely understand that. If you ever face any issues with the App or Service, always feel free to contact me at <a href="mailto:support@elytra.app">support@elytra.app</a></li>
</ul>
<p>On a separate note, a White Hat Hacker recently got in touch with me regarding a critical issue with the API Service. I have since patched the issue. No data was affected as the core issue had to do with DNS setup for emails sent from Elytra’s domain. </p>
<p>That’s it for this update. Happy Reading! </p>
