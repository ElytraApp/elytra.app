---
layout: post
title: Elytra v2.6 is now available
date: 2022-01-20 11:38:41.000000000 +05:30
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
- '2022'
- feeds
- notes
- public
- reader
- release
- rss
- update
meta:
  _thumbnail_id: '650'
  _edit_last: '1'
  _aioseo_title: ''
  _aioseo_description: "The first release of 2022 is here and brings some incredible
    performance enhancements to Elytra and localisation in 10 languages. \n\n&nbsp;"
  _aioseo_keywords: ''
  _aioseo_og_title: ''
  _aioseo_og_description: ''
  _aioseo_og_article_section: ''
  _aioseo_og_article_tags: ''
  _aioseo_twitter_title: ''
  _aioseo_twitter_description: ''
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2022/01/20/elytra-v2-6-is-now-available/"
excerpt: |-
  The first release of 2022 is here and brings some incredible performance enhancements to Elytra. This is the culmination of all the work I put into the app’s engine in 2021.

  If you feel generous and have a couple of minutes, please leave a review on the App Store. It makes a huge difference for me. Thank you in advance.
---
<p>The first release of 2022 is here and brings some incredible performance enhancements to Elytra. This is the culmination of all the work I put into the app’s engine in 2021.</p>
<p>If you feel generous and have a couple of minutes, please leave a review on the App Store. It makes a huge difference for me. Thank you in advance.</p>
<p>Here’s what’s new and changed in v2.6.0:</p>
<h2 id="new">New</h2>
<ul>
<li>Moved to a new of storage engine (Apple’s own) which is much faster, reliable and will help implement a lot of the upcoming features in Elytra.</li>
<li>New Small widget that shows the latest unread article from a single feed of your choice.</li>
<li>New onboarding flow</li>
<li>The app is now localised for 10 languages. If you spot any mistakes in the text translations, please get in touch.</li>
<li>Reset Account: You can now reset parts of or your entire account without having to create a new account.</li>
<li>Added Source Han Serif font for improved support in CJK articles.</li>
<li>macOS: Added a “Reset App” item under preferences.</li>
</ul>
<h2 id="improved">Improved</h2>
<ul>
<li>Notifications will now include the cover image if the article includes one.</li>
<li>Major improvements to handling and managing subscriptions in the app. See note below if subscriptions data fails to sync.</li>
<li>Widgets now directly load data from the common data store, so they update much faster and sync more reliably.</li>
<li>macOS: Added Internet Access Policy items to give descriptive messages of connections in apps like LittleSnitch and MicroSnitch.</li>
<li>macOS: Fixed spacing for items in Preferences.</li>
<li>macOS: Improved full-screen support for videos in Big Sur. Toggling full-screen on a video will now open it in the OS’s fullscreen, not limited to the app window’s area.</li>
</ul>
<h2 id="fixes">Fixes</h2>
<ul>
<li>Fixed a bug where favicons would sometimes never load for a feed even with a valid URL.</li>
<li>Fixed loading indicator showing when no where articles available (after switching sorting order).</li>
<li>Opening articles from feeds with reader mode enabled now works across all article list types (unread, today, folder…)</li>
<li>Fixed a crash that would occur on opening certain articles with deeply nested content.</li>
<li>Fixed a critical range overflow bug when applying attributes to paragraph content.</li>
<li>Fixed a bug where toolbar article navigation buttons would not update after changing the article.</li>
</ul>
<h3 id="temporaryremovals">Temporary Removals</h3>
<p>Due to some bugs in modern systems, the following have been temporarily disabled:</p>
<ul>
<li>Hide bars on scroll (iOS and iPadOS)</li>
<li>Search on macOS</li>
</ul>
<p>If you notice any translation errors, please feel free to reach out to me on <a href="mailto:support@elytra.app">support@elytra.app</a>. I'm continuously working with wonderful people who are helping with translating the app and introduce new languages to Elytra. If you'd like to help, you can check out the instructions <a href="https://github.com/ElytraApp/Localisations">here</a>.</p>
<h4 id="notes">Notes</h4>
<p>If you see continuous errors when fetching information about subscriptions, purchasing or restoring: please check if you have a custom DNS blocker enabled on your device. Some of these prevent connections to the service Elytra now uses to manage subscriptions. You may have unblock <code>api.revenuecat.com</code> in your DNS blocker settings to get things to work.</p>
