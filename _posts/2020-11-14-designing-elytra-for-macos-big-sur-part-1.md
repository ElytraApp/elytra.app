---
layout: post
title: Designing Elytra for macOS Big Sur - Part 1
date: 2020-11-14 21:38:19.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- macOS
- notes
tags:
- big sur
- design
- macOS
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
permalink: "/blog/2020/11/14/designing-elytra-for-macos-big-sur-part-1/"
---
<p>Big Sur has been the biggest change to macOS since I started using it back during the OS X 10.6 (Snow Leopard) days. We’ve gone from the “<strong>hyper aqua</strong>” to the subdued and flatter aqua look and finally into the iOS-esque Big Sur design language.</p>
<p>In part 1, we’ll go through the app’s interface from top to bottom, left to right. So as is the case, let’s begin with the toolbar.</p>
<h2 id="toolbars">Toolbars</h2>
<p>In Big Sur, Apple has completely changed the toolbar, not only in terms of its visual design, but also how it behaves, its sizing, allowing content to flow under it (just like iOS' Navigation Bars), monochrome icons and sticky sections.</p>
<p><img src="{{ site.baseurl }}/assets/2020/11/experience_screen_apps__gartmv6yn3u6_large_2x-scaled.jpg" alt="macOS Big Sur - Photos.app in the foregroup, Mail.app in the background" width="1482" height="928" /></p>
<p>The new toolbars in some contexts are even invisible. They are part of the content as seen in Photos.app.</p>
<p>Here’s a quick comparison between Elytra for macOS Catalina and macOS Big Sur.</p>
<p><img src="{{ site.baseurl }}/assets/2020/11/Artboard-scaled.jpg" alt="Top: Elytra running on macOS Catalina. Bottom: Elytra running on macOS Big Sur" width="1600" height="2200" /></p>
<p>I’ve included fullscreen screenshots on purpose, because Big Sur really enables deferring all UI real-estate to the content if you so desire. In Elytra’s case, an app for reading written content, this was a default choice.</p>
<p>Big Sur also enables pinned or sticky sections for the toolbar, so each vertical column of the app has its own set of actions. While v2.1.3 (first version, odd, I know!) shipped with the toolbar items as you can see, they are definitely set to change in an upcoming release to bring more powerful features to the app.</p>
<p>With macOS taking care of so many things for me, Mac Catalyst became the obvious choice for Elytra right from the get go.</p>
<h2 id="thesidebar">The Sidebar</h2>
<p>Full height column, translucent materials, collapsible sections,searchbars, automatic light and dark states; I could keep going on. The new frameworks supplied by Apple to compose such sidebars have been the best thing since their <strong>Compositional Layouts</strong> framework. <em>And</em> the new sidebars rely on this <em>Compositional Layouts</em> framework to enable a lot of these things automatically.</p>
<p>They are however not without their faults. They do lack some features which native AppKit apps have but I’m sure they’ll all arrive in due time as Apple Engineers continue to reduce the gap between macOS and iOS, or I switch to using SwiftUI and everything renders natively per host OS.</p>
<h2 id="articleslist">Articles List</h2>
<p>This was a tricky one to get right. Up until late October, this is how the Articles List looked<br />
<img src="{{ site.baseurl }}/assets/2020/11/Screenshot-2020-10-15-at-11.02.37-AM.png" alt="Elytra's original interface with incorrect styling for the Article's list" width="1449" height="918" /></p>
<p>There are a few reasons why this is completely wrong on macOS.</p>
<ol>
<li>The list item completely ignores the new insets which native apps on Big Sur use.</li>
<li>The list ignores the additional padding required by such lists.</li>
<li>The list also ignores the inter-cell padding.</li>
</ol>
<p>All of this is noted by Apple in the <a href="https://developer.apple.com/design/human-interface-guidelines/macos/overview/whats-new-in-macos/#table-views">“What’s new in macOS” HIG document</a>.</p>
<p>By using Apple’s supplied values, we get a list which is much more comfortable to read and glance at.</p>
<p><img src="{{ site.baseurl }}/assets/2020/11/Screenshot-2020-11-14-at-6.11.20-PM.png" alt="Elytra's UI with corrected styling for the Article's list" width="1260" height="762" /></p>
<p><small>So even if you're using Mac Catalyst to bring your iPadOS App to macOS, I urge you spend some time studying the HIG (and not just read it) so you're familiar with what your users are going to expect from your app.</small></p>
<h2 id="thearticlereader">The Article Reader</h2>
<p>This is what you’re here for. This is why I built Elytra. The article reader in Elytra renders all text using Apple’s TextKit framework, all images directly supplied to <code>UIImageView</code> subclasses, <em>most</em> videos directly supplied to the <code>AVPlayerView</code>, and all code rendered just like text.</p>
<p>Groups of consecutively appearing images are converted into horizontally scrolling galleries with page counters.</p>
<p>Customisation of the reader view by setting up your preferences for font-size, line-spacing, separate header and paragraph fonts.</p>
<p>It’s all there, it all works just as you have come to expect coming from the iOS and iPadOS apps. But it wasn’t as simple as enabling the magical “Optimise for Mac” option in Xcode.</p>
<p>To make sure things work correctly on both iOS and macOS, I had to redo a few bits of the rendering engine to make sure text renders sharp on modern Macs and renders exactly as one would expect it to.</p>
<p>Here’s how the <em>Scale Interface to match iPad</em> variant looked:</p>
<p><img src="{{ site.baseurl }}/assets/2020/11/Screenshot-2020-09-02-at-12.43.49-PM.png" alt="Elytra's UI with the Scale interface option enabled" width="1305" height="880" /> <img src="{{ site.baseurl }}/assets/2020/11/Screenshot-2020-09-02-at-12.44.18-PM.png" alt="Elytra's UI with the Scale interface option enabled" width="1305" height="880" /></p>
<p>Everything was tiny. Everything looked off. Nothing looked like it it <strong>deserved</strong> to be on macOS. When working on the macOS Catalina build, I used a small hack to scale all type by 1.3x and even that didn’t look all that great.</p>
<p>So to make sure everything is up to the mark and deserving of the <em>Mac-assed Mac App</em> title, I reworked a good chunk of the rendering engine which also ended up benefiting the iOS and iPadOS apps by improving the rendering performance.</p>
<p><img src="{{ site.baseurl }}/assets/2020/11/Screenshot-2020-11-14-at-6.25.22-PM.png" alt="My iPhone 12 first impressions article in Elytra on macOS Big Sur" width="716" height="981" /></p>
<p>I also took the opportunity to enable better rendering for CJK and Indic languages.</p>
<hr />
<p>In part 1, we looked at the app from a distance, assessed it from left-to-right, went over each column and briefly discussed each section. In part 2, I hope to dig into some technical details of bringing an iPadOS App to macOS via Catalyst.</p>
