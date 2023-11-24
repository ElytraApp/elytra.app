---
layout: post
title: Elytra - 2021 Q3 Schedule
date: 2021-07-01 08:52:11.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- release
tags:
- '2021'
- notes
- schedule
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2021/07/01/elytra-2021-q3-schedule/"
---
<p>Elytra v2.4 is on track for its release later this year in Q3 along side iOS &amp; iPadOS 15 and macOS Monterey. Apart from the various goodies that’ll be introduced in these versions, Elytra will additionally gain support for:</p>
<ul>
<li>Tables in articles</li>
<li>Improved external display support (via Airplay or connected through a cable)</li>
<li>Inline support for Vimeo videos (similar to Youtube videos)</li>
<li>Instagram Feeds support</li>
<li>Additional per feed settings</li>
</ul>
<p>Elytra will also include options to reset various data points of your account directly from the app without having to contact support. This will ensure that should the data on any of your devices get corrupted, you’ll be able to start fresh immediately.</p>
<h2 id="ios">iOS</h2>
<p>iOS and iPadOS 15 include some interesting improvements especially around sharing your onscreen content via <a href="https://developer.apple.com/shareplay/">SharePlay</a>, new multi-tasking views and wider widgets on iPadOS.</p>
<p>I’m also working on improving the overall reliability of the app by digging through older known bugs and patching them as I go. Some of the bugs have been fixed by Apple directly and Elytra gets that added stability for free.</p>
<p>Back in February, I started the process of migrating a lot of code from Objective-C to Swift, but I left out the Article Reader view since its code was thousands of lines spanning across several files. As of last week, I’ve completed the migration for the Article reader as well and found several bugs thanks to Swift’s strongly-typed nature.</p>
<p>The Article Reader is now more resistant to crashing, locking up and sometimes straight-up bad rendering. I’ve even managed to log improved performance under certain cases, but the average performance is roughly the same (differences in 1/1000th of a second) so you won’t notice any difference.</p>
<h2 id="macos">macOS</h2>
<p>Apple has thankfully introduced some new APIs in macOS Monterey for Mac Catalyst apps which enables me to reduce some workarounds in code. I’ll be fully supporting Big Sur until a later point in time, so I’ll have to maintain some of them, but I’m glad we have direct access to some of macOS' existing features now.</p>
<p>I’m also investing some time in writing new interfaces for existing ones which look and feel at home on macOS and work with the various experiences we’re used to on non-touch input based devices. The filters preference tab was the first view to get such a treatment and others like: New Feed, New Folder, Import and Export OPML, etc. will also be getting the same treatment.</p>
<h2 id="shortcuts">Shortcuts</h2>
<p>Apple is also bringing the Shortcuts app to macOS Monterey. Now that shortcuts is available across iOS and macOS, I’d love to hear from you about automations that Elytra can enable for you. As an RSS Feed Reader app, there isn’t much Elytra can do for you, but whatever little it can, it should. So please reach out to me at <a href="mailto:support@elytra.app?subject=Shortcuts">support@elytra.app</a> with your ideas.</p>
<p>If you have any other ideas, feel free to get in touch with me on the above email.</p>
<h2 id="timelines">Timelines</h2>
<p>Beta builds on TestFlight are now processing once again as of iOS &amp; iPadOS 15 Beta 2. The <a href="https://beta.apple.com/sp/betaprogram/">public beta program</a> for these operating systems has also commenced. If you’re going to be living on the bleeding-edge of things, I’d really appreciate your help in testing Elytra on these versions. These are beta software (both from Apple and I) so proceed with caution as you could end up losing a lot or all of your data.</p>
<p>But if you’re throwing caution to the wind, head over to this <a href="https://testflight.apple.com/join/vYkbFNyB">TestFlight</a> link and get signed up. I’ll start sending out new builds for iOS 15 starting 5th of July, 2021.</p>
<p>For macOS, head over to the <a href="https://github.com/dezinezync/Elytra/releases/latest">Elytra Releases</a> page, download the app and set it up. Then, open preferences and under Misc &gt; Updates, select the Test builds line. The macOS update will also be available on the same day as the iOS build goes up.</p>
<p>I look forward to your feedback, until then: Happy Reading!</p>
