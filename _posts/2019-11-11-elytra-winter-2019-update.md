---
layout: post
title: Elytra Winter 2019 Update
date: 2019-11-11 10:30:58.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- notes
- public
- release
- webservice
tags:
- beta
- notes
- public
- release
- webservice
meta:
  _thumbnail_id: '226'
  _edit_last: '1'
  _wpas_done_all: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2019/11/11/elytra-winter-2019-update/"
---
<p>Winter is coming... soon. The Elytra Winter 2019 update is already here though. If you feel generous and have a couple of minutes, please leave a review on the App Store. It makes a huge difference for me. Thank you in advance. Here's the change log:</p>
<h1>iOS App</h1>
<h2 id="toc_0">What's New</h2>
<p><img title="1_5-1.png" src="{{ site.baseurl }}/assets/2019/11/1_5-1-1.png" alt="Elytra's Updated Sign In Interface" width="1098" height="828" border="0" /></p>
<p><img title="1_5-2.png" src="{{ site.baseurl }}/assets/2019/11/1_5-2-1.png" alt="New Push Notifications Interface" width="1098" height="828" border="0" /></p>
<p><img title="1_5-3.png" src="{{ site.baseurl }}/assets/2019/11/1_5-3-1.png" alt="New Image Viewer Interface" width="1098" height="828" border="0" /></p>
<ul>
<li>Added a new Bookmarks Manager. This is much more efficient system compared to the previous system and is much more scalable. This is a non-UI update so you'll see a lot of performance benefits from this.</li>
<li>Sign in With Apple. If you're new to Elytra, you don't need to take any additional steps. If you've been using Elytra and are updating to the latest version, please head over to Settings &gt; Account and link your account from there.</li>
<li>Image Viewer: Tap on an image in an article to open it in a full screen image viewer. All images from the article are gathered in single place for easier viewing.</li>
<li>Push Settings: View a list of publishers you've subscribed to receive push notifications from.</li>
<li>Added Settings Sync to work in tandem with the web app. More on this soon.</li>
</ul>
<h2 id="toc_1">Improvements</h2>
<ul>
<li>Adding a new feed from the search interface now increments the unread count.</li>
<li>Removing a feed now decrements the unread count.</li>
<li>Recommendations interface now correctly shows the custom Feed name if one is set.</li>
<li>Improves how the app handles &amp; reacts to memory pressure warnings from the OS.</li>
<li>The Author Interface now shows the author's name prominently and defers the blog's name to the subtitle.</li>
<li>Drastically improved managing of unread counts in the app.</li>
<li>Improved behaviour of the app when marking backdated articles as read.</li>
</ul>
<h2 id="toc_2">Fixes</h2>
<ul>
<li>Fixes push notifications opening the wrong feed.</li>
<li>Fixes push notifications not opening the article on iOS 13.</li>
<li>Fixed a bug where the app would re-sync all bookmarks even if they existed locally.</li>
<li>Fixed the Settings icon for the Push Notifications row not showing up on some devices.</li>
<li>Fixed the activity indicator persisting on screen when only one or no page exists for unread items.</li>
<li>Fixed a potential crash when opening new feed interface.</li>
<li>Fixes loading of unsupported image formats. Loading an SVG image would cause the app to crash.</li>
<li>Fixed last updated date not matching the actual refresh date when manually refreshing through the User Interface. This only updated when fetching via background refresh.</li>
<li>Fixed an issue that would cause a corrupted navigation bar in iOS 13.</li>
<li>Fixes a crash which could occur when the Trial Interface was presented.</li>
<li>Fixed linked images which would not render if they were contained inside an anchor blog with multiple other elements. These other elements were usually line-breaks preventing the entire block from rendering properly. Affected blog: Saturday Morning Breakfast Cereal..</li>
<li>Removed webp support.</li>
<li>Images are loaded using the same extension from the proxy as the source image.</li>
<li>Fixed a small bug with the unread count when marking read automatically from the article reader.</li>
<li>Fixed an issue with image loading preferences. "Never Load Images" now works properly in the Articles List &amp; Article Viewer.</li>
<li>Fixed some really nasty memory leaks.</li>
<li>Fixed a crash that would occur when launching the app. This was a regression introduced in Build 275 of Elytra and OS 13.1.2.</li>
<li>Micro.blog posts with images now show the image as a thumbnail in the articles list when settings are enabled for it.</li>
<li>Fixed the colour of the summary label (iOS 13 only, correct on iOS 12).</li>
</ul>
<h1>API</h1>
<p>I have been discussing with a few developers across platforms to open Elytra’s API to them so they can also build apps on top of it. I hope this takes off because that’ll mean more and more apps will be using a more private and secure way to read their favourite RSS Feeds.&nbsp;</p>
<p>Other than that, I have made some significant changes to the API and RSS Feed Poller in this update. Here’s a quick change log of things which affects us as Elytra’s Users:</p>
<ul>
<li>The RSS Feed Poller now fetches more frequently and now fully complies with all HTTP caching mechanisms. Previously I only used ETags to know if a feed document was fresh or stale. But this sometimes resulted in unnecessary requests. If a Feed now tells that the content is to be considered fresh for a day, that will be respected.&nbsp;</li>
<li>Improved the WebSub protocol support. If you write on your own blog, I urge that you check if whatever engine runs your blog supports WebSub. If you’re using Wordpress, there are plugins with enable this feature. It’s simple to setup and you get free real-time notifications for your readers. &nbsp;</li>
</ul>
<p>Thank you for your continued support and feedback and criticism. I will continue to work on the iOS and Web apps through November. I’ll be unavailable on email in December but please feel free to get in touch, I’ll try to reply to you during that time whenever possible. Happy holidays.&nbsp;</p>
