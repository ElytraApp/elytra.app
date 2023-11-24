---
layout: post
title: Elytra v2.4 is now available
date: 2021-09-20 22:30:00.000000000 +05:30
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
- app
- autumn
- elytra
- fall
- ios
- ipados
- q3
- release
meta:
  _thumbnail_id: '592'
  _edit_last: '1'
  _aioseo_title: ''
  _aioseo_description: Elytra’s 2021 third quarter release is here and is ready for
    iOS and iPadOS 15. This is the first release with a modern and cutting-edge foundation.
  _aioseo_keywords: ''
  _aioseo_og_title: ''
  _aioseo_og_description: ''
  _aioseo_og_article_section: ''
  _aioseo_og_article_tags: ''
  _aioseo_twitter_title: ''
  _aioseo_twitter_description: ''
  enclosure: |
    https://blog.elytra.app/wp-content/uploads/2021/09/ProminentScene.webm
    14164809
    video/webm
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2021/09/20/elytra-2021-quarter-3-release/"
---
<p>Elytra’s 2021 third quarter release is here and is ready for iOS and iPadOS 15.</p>
<p>This is the first release with a modern and cutting-edge foundation which focuses on reliability, stability and ease of adding new features in future releases.</p>
<p>If you feel generous and have a couple of minutes, please <a href="https://itunes.apple.com/app/id1433266971?action=write-review">review the app</a> on the App Store. It makes a huge difference for me. Thank you in advance.</p>
<h2 id="new">New</h2>
<h3 id="quicknotes">Quick Notes</h3>
<div><video controls="controls" width="980" height="770"><source src="https://blog.elytra.app/wp-content/uploads/2021/09/QuickNotes.m4v" type="video/mp4"><source src="https://blog.elytra.app/wp-content/uploads/2021/09/QuickNotes.webm" type="video/webm" /></source></video></div>
<p>Quick notes has been one of my favourite additions to iPadOS 15. You can quickly reference articles using it in your notes with a simple drag and drop.</p>
<h3 id="prominentscene">Prominent Scene</h3>
<div><video controls="controls" width="980" height="770"><source src="https://blog.elytra.app/wp-content/uploads/2021/09/ProminentScene.m4v" type="video/mp4"><source src="https://blog.elytra.app/wp-content/uploads/2021/09/ProminentScene.webm" type="video/webm" /></source></video></div>
<p>The inclusion of prominent scene is a great addition to the multitasking arsenal on iPadOS. Simply pinch out from an article to open it inside its own prominent scene.</p>
<h3 id="extralargewidgets">Extra Large Widgets</h3>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/09/xlwidgets-1280.png" media="(min-width: 769px) and (max-width: 1280px)"><source srcset="https://blog.elytra.app/wp-content/uploads/2021/09/xlwidgets-1920.png" media="(min-width: 1281px) and (max-width: 1920px)"><source srcset="https://blog.elytra.app/wp-content/uploads/2021/09/xlwidgets-2360.png" media="(min-width:1921px)"><img src="{{ site.baseurl }}/assets/2021/09/xlwidgets-768.png" alt="Elytra's extra large widgets for iPadOS 15" width="768" height="548" /> </source></source></source></picture>
<p>Extra large widgets on the iPadOS 15 makes getting a quick overview of recently fetched articles even easier. All widgets have been updated to support this new size.</p>
<h4 id="othernewadditions">Other New Additions</h4>
<ul>
<li>Added a new sync method to also sync added and deleted feeds on sync.</li>
<li>Added a new Portrait Lock preference under miscellaneous settings.</li>
<li>Added support for tables in articles.</li>
<li>New and improved article list view. It renders twice as fast now and uses less power overall.</li>
<li>Added a “Enable Push Notifications” toggle under Settings &gt; Notifications. You will only see it if Push Notifications are not already enabled on that device. For cross-device sync, it is recommended you turn this on.</li>
<li>Added the old v1 app icon to the list of customisable icons.</li>
<li>New options for Feed Settings:
<ul>
<li>Open Articles in the Browser. This is useful for feeds where full-text extraction fails.</li>
<li>You can now toggle full-text fetching for feeds. When you open an article from that feed, the full-text content will be automatically loaded.</li>
</ul>
</li>
</ul>
<h2 id="improvements">Improvements</h2>
<ul>
<li>Categorised keyboard shortcuts on iPadOS.</li>
<li>Added a small bar underneath the status bar when you have the hides bars preference enabled. This prevents underflow of the content and helps prevent the distracting “text over text” situation.</li>
<li>New Photos Browser</li>
<li>Improved external display/Airplay handling</li>
<li>If you add multiple folder widgets, you can configure each one with a unique folder. The previous limitation of a single folder has been fixed. (back-ported to iOS 14).</li>
<li>Improved error messages across the app. The app will now display error messages directly from the API’s error.</li>
<li>Added delete and info swipe actions to the search results for Feeds.</li>
<li>Notifications under the app settings will now also show Local Notifications if any are enabled.</li>
<li>Improved scrolling performance on iOS 14 and 15 inside the article reader.</li>
<li>New and improved settings UI.</li>
<li>New Appearance customisation UI in the article reader (on iOS 15, it’ll appear as a bottom sheet).</li>
<li>Improved visuals for the folder row if a feed is being dropped onto it.</li>
<li>Improved dragging states for feeds and articles.</li>
<li>The sidebar now maintains the folders expansion state across app launches.</li>
<li>Added the cmd + G (cmd + shift + G for backwards) shortcut for navigating to the next article search result.</li>
<li>Added Keyboard shortcuts to dismiss interfaces like New Feed, Feed Info and other modals.</li>
<li>Improved sync and timeline loading performance for users with several filters.</li>
<li>Added the ability to reuse your existing account ID for signing in to the app. Please contact support on details on how to use this.</li>
</ul>
<h2 id="fixes">Fixes</h2>
<ul>
<li>Fixed an issue where marking some articles as read failed if they were recently synced on to the device.</li>
<li>Fixed an issue across all platforms that could sometimes cause a crash on launch when available system memory is low.</li>
<li>Fixed an issue with the title view in the articles list being hidden after scrolling.</li>
<li>Fixed an issue when swiping back from the article reader when the bars are hidden to cause the layout to get janked.</li>
<li>Fixed an issue with the new sync not updating the feed’s folder structure if one already exists.</li>
<li>Fixed a crash that was caused when changing from light to dark mode and the article reader was open.</li>
<li>Fixed an issue with the Article Reader’s bottom helper view used a black background and black shadow causing it to appear blurry for some users.</li>
<li>Potentially fixed a crash for some users when using the toolbar preference.</li>
<li>Fixed a crash that would sometimes occur when opening an article with Lists containing multiple line-breaks at the beginning of the paragraph.</li>
<li>Fixed a long standing issue on iPadOS where the currently selected article or sidebar item would get deselected when the app was backgrounded and then foregrounded again.</li>
<li>Fixed a bug with importing OPML Files with invalid/incorrect format.</li>
<li>Fixed an issue where the feed settings would not be loaded correctly on app launch.</li>
<li>Fixes an issue which caused Feeds only re-sync to fail which also caused background sync to fail sometimes. This could potentially cause feeds metadata to get wiped.</li>
</ul>
