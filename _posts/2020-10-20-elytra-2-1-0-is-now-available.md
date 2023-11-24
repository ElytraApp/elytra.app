---
layout: post
title: Elytra 2.1.0 is now available
date: 2020-10-20 20:31:00.000000000 +05:30
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
  _wp_old_date: '2020-10-19'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/10/20/elytra-2-1-0-is-now-available/"
---
<div>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/10/Bitmap.png 1x, https://blog.elytra.app/wp-content/uploads/2020/10/Bitmap@2x.png 2x" /> <img src="{{ site.baseurl }}/assets/2020/10/Bitmap.png" alt="Elytra running on the iPhone 12 - Mutliple Screens" width="776" height="723" /> </picture></div>
<p>Version 2.1 brings a lot of stability and Quality of Life improvements to Elytra before the final Winter release of this year. This also brings the iOS App up to parity with its macOS app to be released soon.</p>
<p>This build also brings support the the newly released iPhone 12 lineup as well as the iPad Air 4th Gen.</p>
<p>Link: <strong><em><a href="https://apps.apple.com/us/app/elytra/id1433266971">https://apps.apple.com/us/app/elytra/id1433266971</a></em></strong></p>
<h3>New Font: Atkinson Hyperlegible</h3>
<div>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/10/Atkinson.png 1x, https://blog.elytra.app/wp-content/uploads/2020/10/Atkinson@2x.png 2x" /> <img src="{{ site.baseurl }}/assets/2020/10/Atkinson.png" alt="Atkinson Hyperlegible font displayed on the iPad Pro Gen 4 and iPhone 12" width="886" height="792" /> </picture></div>
<p>Designed by the Braille Institute of America, and offered for free, Atkinson Hyperlegible is a great new font choice for greater visibility and legibility for low vision readers. Paired with an Accessibility focused app like Elytra, I hope this improves the reading experience for you. </p>
<p>You can read more about the <a href="https://www.brailleinstitute.org/freefont">Atkinson Hyperlegible font here</a>. </p>
<h3 id="improvements">Improvements</h3>
<ul>
<li>
<p>If you have a URL copied, the app will automatically detect it when attempting to add a new feed.</p>
</li>
<li> Tapping an article now dismisses the sidebar on iPads in portrait mode.
</li>
<li>
<p>The sidebar items are now correctly highlighted. They no longer use the tint colour when selected.</p>
</li>
<li>
<p>Search in the sidebar now uses Alpha sorting like the rest of the view.</p>
</li>
<li>
<p>Multiple improvements throughout the app for Voice Control (VC) and Voice Over (VO) a11y options.</p>
<ul>
<li>The app now correctly shows titles for icon only buttons when VC is activated.</li>
<li>The app now correctly updates states for icon only buttons when VC is activated.</li>
<li>Simplified Article labels for VC to make it easier to select articles. They will now be presented as “Article 1”, “Article 2” and so on… Previously, the article title’s was used which could be difficult to command with long titles.</li>
<li>VO will now read the article index followed by its title.</li>
</ul>
</li>
<li>
<p>Improves formatting for CJK Text. CJK text should no longer appear as one big blob of text. It may still happen if the source provides it that way.</p>
</li>
<li>
<p>Unreads Widget intents now work as expected. You can now toggle between loading favicons and cover images in the widgets.</p>
</li>
<li>
<p>The article viewer will now draw horizontal rules. (<code>&lt;hr /&gt;</code> element equivalent.)</p>
</li>
<li>
<p>During first launch, if your account already has a subscription, the trial interface is no longer shown. You are directly taken to the Feeds Interface.</p>
</li>
<li>
<p>Added support for dragging and dropping articles into the Unread or Bookmark rows in the Sidebar to perform respective actions.</p>
</li>
<li>
<p>Added support for dragging feeds between folders or outside folders.</p>
</li>
<li>
<p>Added support for dragging feeds to external applications. This action will drag with the RSS Feed URL. (iPadOS only)</p>
</li>
<li>
<p>Updated images for GIF loading and playback controls.</p>
</li>
<li>
<p>Tapping a gallery image now opens it in full view.</p>
</li>
</ul>
<h3 id="fixes">Fixes</h3>
<ul>
<li>
<p>Fixed a rare bug that would prevent the bookmarks counter from updating when adding or removing bookmarks.</p>
</li>
<li>
<p>Fixed an issue where unread counters would not update when you have 0 unread articles.</p>
</li>
<li>Fixed loading of GIF favicons.</li>
<li>
<p>Removing a bookmark while in the bookmarks feed now removes the article after a small delay.</p>
</li>
<li>
<p>Fixed a rare crashing bug that would occur when initiating a Refresh in the Feeds Interface. (Thank you for Lee.)</p>
</li>
<li>
<p>Fixed an issue with the Today Count always reporting as 1.</p>
</li>
<li>
<p>Fixed rotation behaviour on iPads.</p>
</li>
<li>
<p>Fixed an issue where the unread/today counts would change when reading an article from a feed you’re not subscribed to.</p>
</li>
<li>
<p>Fixed an issue where the selected feed would remain selected after opening recommendations.</p>
</li>
<li>
<p>Fixed an issue with the Unreads widget not updating in a timely manner.</p>
</li>
<li>
<p>Fixed a background crash that would occur when syncing and downloading new data.</p>
</li>
<li>
<p>The app now saves restoration data properly so launching the app from a saved state is now faster.</p>
</li>
<li>
<p>Fixed an issue where images in the article viewer would fail to load (network issues, invalid URL or for whatever other reason) and would show a large placeholder image.</p>
</li>
<li>
<p>Twitter apps selection now works again when tapping tweets.</p>
</li>
<li>
<p>Matched the keyboard navigation to the macOS App.</p>
</li>
<li>
<p>Images in Widgets should now load reliably. I’ve discarded the older method of loading images in favour of a more standard approach as recommended by Apple Engineering.</p>
</li>
<li>
<p>Fixed the app using a semi-bold font for headings on iOS 14.0.1 and higher.</p>
</li>
<li>
<p>Image Loading options now correctly apply to favicons inside the Articles List Interface.</p>
</li>
<li>
<p>Title Font preference now correctly applies to headings inside the article as well.</p>
</li>
</ul>
