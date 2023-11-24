---
layout: post
title: Elytra Fall 2020 Update
date: 2020-09-17 21:25:02.000000000 +05:30
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
  _edit_last: '1'
  _aioseop_keywords: ''
  _aioseop_description: ''
  _aioseop_title: ''
  _aioseop_custom_link: ''
  _aioseop_sitemap_exclude: ''
  _aioseop_disable: ''
  _aioseop_disable_analytics: ''
  _aioseop_noindex: ''
  _aioseop_nofollow: ''
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/09/17/elytra-fall-2020-update/"
---
<p>Elytra’s Fall 2020 update is finally here alongside the release of iOS 14. This is v2.0 and will be the first build to only support iOS 14. If you’re still on iOS 13 and for whatever reason you won’t be updating to iOS 14 soon, rest assured, v1.8 will continue to function as long as you use it.</p>
<p>You can download the update from the <a href="https://apps.apple.com/us/app/id1433266971">App Store</a>. </p>
<h2 id="upcomingdevices">Upcoming Devices</h2>
<p>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/09/iPad-Air-G4.png 1x, https://blog.elytra.app/wp-content/uploads/2020/09/iPad-Air-G4@2x.png 2x" /> <img src="{{ site.baseurl }}/assets/2020/09/iPad-Air-G4.png" alt="Elytra running on 4th Generation iPad Air" width="866" height="922" /> </picture></p>
<p>Apple will be releasing new hardware later in October starting with the recently announced new iPad Air 4th Generation devices. Elytra will be ready on day-1 when these devices reach you with no new updates required.</p>
<h2 id="ios14ui">iOS 14 UI</h2>
<p>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/09/toolbar-5.png 1x, https://blog.elytra.app/wp-content/uploads/2020/09/toolbar-5@2x.png 2x" /> <img src="{{ site.baseurl }}/assets/2020/09/toolbar-5.png" alt="Elytra running on the iPad Pro and on the iPhone 11 Pro showing new User Interface elements from iOS 14" width="800" height="603" /> </picture></p>
<p>Throughout the app, I’ve made changes to the app’s interface to closely follow new updates Apple has released this year, including <em>menus from buttons</em> (for the sorting option), new <em>Sidebar Layout</em> style on the iPad, <em>Triple Column Layout</em> on the iPad and new List styles.</p>
<h2 id="newcodetheme">New Code Theme</h2>
<p>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/09/Toolbar-3.png 1x, https://blog.elytra.app/wp-content/uploads/2020/09/Toolbar-3@2x.png 2x" /> <img src="{{ site.baseurl }}/assets/2020/09/Toolbar-3.png" alt="The new code theme in Elytra 2.0" width="493" height="772" /> </picture></p>
<p>Also in this release, I’ve included a new Code theme which uses the semantic colours from iOS, auto-updates for dark mode without reloading the entire stack and, may I say so myself, looks beautiful. You can read more about in <a href="https://blog.elytra.app/2020/09/10/new-code-theme/">this blog post</a> I wrote earlier.</p>
<h2 id="widgets">Widgets</h2>
<p>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/09/Toolbar-2-4.png 1x, https://blog.elytra.app/wp-content/uploads/2020/09/Toolbar-2@2x-4.png 2x" /> <img src="{{ site.baseurl }}/assets/2020/09/Toolbar-2-4.png" alt="" width="493" height="772" /> </picture></p>
<p>How could an iOS 14 release build be complete without new Widgets! I’ve personally been looking forward to using Widgets and making them was fun too! Elytra 2.0 ships with 2 different widgets:</p>
<ul>
<li>
<p><em>Counters Widget</em>: Shows the latest counts of articles from Unread, Today and Bookmarks sections of the app. This widget is only available in the small size.</p>
</li>
<li>
<p><em>Unread</em>: Shows the latest articles from the unread section. The medium size widget shows 2 articles and the large size widget will show 4 articles. This widget will prioritize articles with cover images.</p>
</li>
</ul>
<h1 id="fullchangelog">Full Change Log</h1>
<h2 id="whatsnew">What’s New</h2>
<ul>
<li>
<p>All new triple column support using Apple’s own UI Framework.</p>
</li>
<li>
<p>An all new Sidebar Interface. This uses Apple’s latest UI Framework for displaying your folders and feeds.</p>
</li>
<li>
<p>iOS 14 Widgets support. Contains a Counters (Small) Widget and an Unread Articles (medium and large) widget.</p>
</li>
<li>
<p>Implements Trailing Swipe actions on Article List Items.</p>
</li>
<li>
<p>Directional marking as read. Long press on an article in Unread, Today or a Feed to see these options.</p>
</li>
<li>
<p>New Code Theme for pre-formatted code blocks.</p>
</li>
<li>
<p>The Add Feed interface now shows Recommendations for its default state to help improve finding and adding new feeds.</p>
</li>
</ul>
<h2 id="improvements">Improvements</h2>
<ul>
<li>
<p>Unread counts update more reliably as you read through your content.</p>
</li>
<li>
<p>Improved underlying code for managing the initial state of the app.</p>
</li>
<li>
<p>Force touch and tapping on urls now works reliably.</p>
</li>
<li>
<p>Updated Feed Sorting options to use a menu interface instead of an options controller.</p>
</li>
<li>
<p>Improved styling for inline code blocks.</p>
</li>
<li>
<p>New Folder/Edit Folder interface now uses a basic interface which is faster to use IMO.</p>
</li>
</ul>
<h2 id="fixes">Fixes</h2>
<ul>
<li>
<p>Prevents an issue causing the app to sync data twice upon successfully launching.</p>
</li>
<li>
<p>Fixes an issue where marking currently loaded articles as read in the Unread view would prevent new articles from loading.</p>
</li>
<li>
<p>If you have setup a custom title for a Feed, the custom title will now show up correctly for the empty state.</p>
</li>
<li>
<p>Fixed a crash caused when trying to share a Feed’s URL or its website’s URL.</p>
</li>
<li>
<p>Fixed an issue where reading an article from today would not decrement the “Unread Today” counter.</p>
</li>
<li>
<p>Fixes showing cover images inside the Article Reader.</p>
</li>
<li>
<p>Fixed I/O View not appearing when importing / exporting OPML files.</p>
</li>
<li>
<p>Fixed some pre-formatted quotes appearing as single-line code blocks.</p>
</li>
<li>
<p>Fixed code blocks appearing out of order. A year old bug finally fixed!</p>
</li>
</ul>
<p>This update also includes miscellaneous improvements and fixes under the hood to improve the general stability of the app.</p>
<p>As recently put by one of Elytra’s admirers on twitter:</p>
<blockquote>
<p>Read more, distract less. #letsgo</p>
<p>- <a href="https://twitter.com/hardik_parmar_/status/1306184338921451521">Hardik Parmar</a></p>
</blockquote>
