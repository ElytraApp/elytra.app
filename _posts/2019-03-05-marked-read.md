---
layout: post
title: Marked Read
date: 2019-03-05 10:11:03.000000000 +05:30
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
permalink: "/blog/2019/03/05/marked-read/"
---
<p>In the v1.2 release of Elytra, a few users of Elytra started to report unusual behaviour in the app when marking multiple articles as read especially with the backdated articles setting. </p>
<p>This was caused due to an issue with the API of Elytra which behaved unexpectedly due to a misconfiguration in the iOS App. Today’s release corrects this behaviour and now works as expected. </p>
<p>This release also contains a fix which works around a bug in iOS 12.1.x where trying to copying rich text from the Article Interface could crash the app. So at the moment, copying rich text wont work as expected and will default to plain text in most cases. </p>
<p>I’m trying to isolate the issue on my end as far as possible so I can report this to Apple Engineers if necessary. </p>
<p>I have also been keeping a close eye on crashes and issues you may be facing. I’m happy to report that over the last one month, App Store Connect has reported zero crashes with a healthy usage increase. This is a huge milestone for Elytra and has been possible only because of all the wonderful and helpful people who have patiently worked with me to get these fixed. </p>
<p>I’ll detail my summer plans for Elytra in a separate blog post. As of now, Elytra’s v1.3 is shaping up to be a really cool release and I cannot wait to share more details with all of y’all. </p>
