---
layout: post
title: February 2022 Update
date: 2022-03-02 08:50:19.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- macOS
- notes
- public
- release
- webservice
tags:
- appstore
- feed
- ios
- ipados
- macOS
- reader
- rss
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2022/03/02/february-2022-update/"
---
<p>Elytra got multiple releases in February. This post outlines the changes across all those releases and acts as a monthly summary of things happening here.</p>
<h3 id="versionnumbers">Version Numbers</h3>
<p>Starting with the recent releases, the versioning scheme for the apps has changed. The previous version numbers wouldn't make much sense to either of us, except for identifying a particular release.</p>
<p>That&#8217;s not helpful if I have tens of builds for the same version and the macOS and iOS apps are running two separate builds for the same version.</p>
<p>Now, the versions are numbered as year.month.release, the latest release being <code>2022.02.4</code>. That makes it easy for the both of us to identify when this build was released. For people browsing the App Store, it's a clear indication of a regularly updated app as well.</p>
<h3 id="changesimprovementsandfixes">Changes, Improvements and Fixes</h3>
<h4 id="improvements">Improvements</h4>
<ul>
<li>
<p>Added new keyboard shortcut to load Full-Text when an article is open.</p>
</li>
<li>
<p>Updated Japanese translations</p>
</li>
<li>
<p>Improvements to bulk marking read and improvements around on-device logging for the same.</p>
</li>
<li>
<p>Hint for externally opening articles</p>
</li>
</ul>
<h4 id="fixes">Fixes</h4>
<ul>
<li>
<p>Some fixes around images from specific hosts failing to load.</p>
</li>
<li>
<p>Fixed some issues around fetching full-text.</p>
</li>
<li>
<p>Fixed a bug causing full-text cover images not being drawn in the article view.</p>
</li>
<li>
<p>Fixed an issue with some attachments not appearing in articles.</p>
</li>
<li>
<p>[iOS] Added Logs viewer and export under settings.</p>
</li>
<li>
<p>Fixed swipe action on article not correctly marking an article as unread.</p>
</li>
<li>
<p>Clear local data correctly when resyncing.</p>
</li>
<li>
<p>Fixed shadows of the categories in the New Feed section.</p>
</li>
<li>
<p>Fixed a crash when processing block quotes in some articles.</p>
</li>
<li>
<p>Fixed a crash occurring after a successful OPML import.</p>
</li>
<li>
<p>Fixed crashes around importing feeds from OPML files.</p>
</li>
<li>
<p>Fixed feeds not mapping to folders when importing structured OPML files.</p>
</li>
<li>
<p>Fixed a bug with first time account setup causing multiple not-found errors in some cases.</p>
</li>
<li>
<p>Fixed a crash when syncing new articles which only contain a cover image.</p>
</li>
<li>
<p>Fixed adding a new feed directly to a folder.</p>
</li>
<li>
<p>Fixed feeds resync discarding feed settings.</p>
</li>
<li>
<p>Fixed feeds resync not remembering custom feed names.</p>
</li>
<li>
<p>Fixed shadows of the categories in the New Feed section.</p>
</li>
</ul>
<p>I&#8217;m going to make this a habit: post a monthly summary at the beginning of each month so changes to app can be clearly tracked and if we missed out anything, we can go back and look at these logs to figure things out.</p>
<p>There are a few new repos I&#8217;d like to mention here:</p>
<ul>
<li>
<p><a href="https://github.com/ElytraApp/Localisations">Localisations</a> All the translation files used by Elytra. If you find a mistake in a translation, please feel free to submit a correction there. You can also add a new language that you're comfortable translating to. The contents of that repo use a permissive license, so other developers can also use translations that fit their apps from there.</p>
</li>
<li>
<p><a href="https://github.com/ElytraApp/IssueTracker">IssueTracker</a> The Issue Tracker is a public repo for tracking bugs and feature requests. If you have one, please open an issue there with the correct type so other users with similar requests can also chime in.</p>
</li>
</ul>
<p>Thank you for reading, have a safe and cheerful day.</p>
