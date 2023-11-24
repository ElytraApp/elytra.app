---
layout: post
title: Elytra Summer 2021 Update
date: 2021-05-18 14:34:05.000000000 +05:30
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
tags:
- macOS
- notes
- public
- release
meta:
  _edit_last: '1'
  _aioseo_title: "#post_title is now available | #site_title&nbsp;"
  _aioseo_description: Elytra’s 2021 Summer Release is here, just in time for&nbsp;WWDC
    2021. It's a feature packed release you should not miss if you like media players
    and fast apps.
  _aioseo_keywords: ''
  _aioseo_og_title: ''
  _aioseo_og_description: ''
  _aioseo_og_article_section: ''
  _aioseo_og_article_tags: ''
  _aioseo_twitter_title: ''
  _aioseo_twitter_description: ''
  _thumbnail_id: '521'
  _wp_old_date: '2021-05-16'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2021/05/18/elytra-summer-2021-update/"
---
<p>Elytra’s 2021 Summer Release is here, just in time for <a href="https://developer.apple.com/wwdc21/">WWDC 2021</a>. It’s been extra challenging to work on v2.3 as this is the first release of Elytra that introduced Swift into various core systems of the app. </p>
<p>If you have read my <a href="https://blog.elytra.app/2021/04/12/elytra-summer-2021-public-beta/">earlier post</a> about the public beta, you'd know this has been in the works for a while, but the work on the new version started all the way back in February of 2020. </p>
<p>This is slightly bigger release (even I am not used to this) so this is going to need a TLDR.</p>
<h2 id="tldr">TLDR;</h2>
<ul>
<li><strong>New system for adding feeds</strong>: You can explore topics by prefixing your keyword with the <code>#</code> symbol. Or directly search for a website with its base URL.</li>
<li><strong>Sync is now faster</strong>: more reliable and uses a delta updates approach to conserve power and network bandwidth.</li>
<li><strong>Two new Widgets</strong>: Folders (configurable) and Bloccs.</li>
<li><strong>Improved App Performance</strong>: Thanks to a new core, the app’s performance has seen a big boost and crashes less.</li>
<li><strong>Filters on macOS</strong>: You can now add and remove filters directly from the macOS App.</li>
<li><strong>Mini Audio player</strong>: Elytra now ships with a mini-audio player to quickly browse through audio-clips and podcast episodes.</li>
<li><strong>Media Playback</strong>: Elytra now comes with improved support for Youtube and Apple Trailers feeds.</li>
<li><strong>Search</strong>: Searching for feeds and articles is now simpler than ever and on macOS, it’s always available.</li>
<li><strong>Reader Bar</strong>: You can now customise the reader bar size and choose from three sizes: Small, Regular and Large.</li>
<li><strong>Finally</strong>: As always, an assortment of improvements and fixes.</li>
</ul>
<h2 id="new">New</h2>
<h3 id="addingfeeds">Adding Feeds</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-1.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-1@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-1-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-1-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-1-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-1-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/new-feeds-1.png" alt="Elytra's new Add Feed interface shown on the M1 iPad Pro and iPhone 12." width="1057" height="749" /> </picture></p>
<p>Elytra v2.3 introduces a new system for finding and adding feeds to your lists. You can explore some pre-defined topics or search for topics of your interest by prefixing the keyword with a <code>#</code> key.</p>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-2.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-2@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-2-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-2-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-2-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/new-feeds-2-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/new-feeds-2.png" alt="Elytra's new Add Feed UI on iPhone 12 showing feed suggestions." width="656" height="638" /> </picture></p>
<p>To directly explore feeds linked by a website, simply type in the website’s URL. If you have a feed URL, then you can directly use that.</p>
<p>Something that been asked for a long time is to directly add a feed to a folder when creating it. It’s now possible to do so and all your folders will be listed out. By default, <code>None</code> will be selected.</p>
<h3 id="coresync">Core Sync</h3>
<p>Syncing across all apps is now faster, more reliable and also automatically syncs in the background to keep all your devices in sync and ready to go. This lays a critical foundation for future releases.</p>
<p>The new sync system is written in Swift (version 5.4 for those who care) and is much more resilient, fault-tolerant and heavily tested compared to its previous iteration.</p>
<p>It also now uses a delta updates system so your devices only download the data they don’t already have. Multiple sync triggers can happen simultaneously on a single device of yours (say you added a feed, then marked all the items inside that feed as read which will trigger two events). This ensures your devices consume less power and consume less network bandwidth.</p>
<h3 id="twonewwidgettypes">Two New Widget Types</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/widgets.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/widgets@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/widgets-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/widgets-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/widgets-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/widgets-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/widgets.png" alt="Elytra's new Folders and Bloccs widgets running on ithe iPhone 12." width="656" height="638" /></picture></p>
<p>v2.3 brings two new Widgets: Folders and Bloccs. The Bloccs widget brings up to 6 of the latest unread articles from your feeds to your device's homescreen, decorated by the articles' cover images. The Folders' widget enables to you select a folder of your choice and showcase up to 4 articles from that folder. I can't wait to see how you have these setup on your devices.</p>
<h3 id="performance">Performance</h3>
<p>I’ve spent all of March working through various modules in the app to optimise the performance. The Article Reader was the only component in the app that was optimised down to the last bit (to my best knowledge and technical capabilities). Everything else was just mish-mash. You should now notice improved performance in the app for just about any activity you’d perform in it.</p>
<h3 id="filtersonmacos">Filters on macOS</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/filters-macOS.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/filters-macOS@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/filters-macOS-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/filters-macOS-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/filters-macOS-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/filters-macOS-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/filters-macOS.png" alt="The new filters UI in Elytra on macOS." width="606" height="519" /> </picture></p>
<p>Filters have been available in Elytra since v1.0 so it was always weird that there was no UI for it on macOS. Now there is, it's mac-assed and works exactly as you'd expect it to.</p>
<p>### New Subscriptions UI</p>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/Subscriptions.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/Subscriptions@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/Subscriptions-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/Subscriptions-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/Subscriptions-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/Subscriptions-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/Subscriptions.png" alt="Elytra's new subscriptions UI. The prices in the screenshot are placeholders." width="316" height="638" /> </picture></p>
<p>I also took this opportunity to redesign the subscriptions interface. The new design is an indicator towards the next iteration of the design system for Elytra, it better and more clearly explains the advantages of each subscription type and enables you to quickly switch between the two offerings.</p>
<h3 id="miniaudioplayer">Mini Audio Player</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/MiniPlayer.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/MiniPlayer@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/MiniPlayer-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/MiniPlayer-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/MiniPlayer-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/MiniPlayer-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/MiniPlayer.png" alt="The new mini audio player playing the Core Intution podcast's Episode 462" width="316" height="638" /> </picture></p>
<p>For a long time, I’ve used Elytra to notify me when new episodes are available for the podcasts I follow. In v2.3, I’ve built a mini-audio player into the app. It detects Podcast episodes and automatically updates its rendering state. This is in no way a replacement to a full-fledged Podcast app, but just a little something to get you a sneak-peak into that episode if you so desire.</p>
<h3 id="richmedia">Rich Media</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/MediaPlayback.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/MediaPlayback@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/MediaPlayback-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/MediaPlayback-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/MediaPlayback-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/MediaPlayback-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/MediaPlayback.png" alt="Elytra now supports playing audio clips within the app." width="315" height="638" /> </picture></p>
<p>I’ve made several improvements to the API and the apps to improve media playback. This fixes some Youtube videos not loading correctly. But most importantly, the apps now load, and enable playback of Movie trailers from the <a href="https://trailers.apple.com">trailers.apple.com</a> RSS Feeds.</p>
<h3 id="search">Search</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/search-iOS.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/search-iOS@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/search-iOS-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/search-iOS-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/search-iOS-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/search-iOS-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/search-iOS.png" alt="Search results in Elytra now also match Article titles and author names." width="316" height="638" /> </picture></p>
<p>The apps now feature global search enabling you to search for Feeds and Articles. You can also match for author names. In a future release, tokens will also be introduced to tokenise your search for a more precise <em>hunt</em>.</p>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/search-macOS.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/search-macOS@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/search-macOS-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/search-macOS-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/search-macOS-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/search-macOS-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/search-macOS.png" alt="Search results in Elytra on macOS now also match Article titles and author names." width="1248" height="829" /> </picture></p>
<p>If you’re looking up an article and there are no feed suggestions for the app to provide, the app will suggest feeds from the articles it has found. So you can jump to the feed or the article.</p>
<h3 id="readerbarsizes">Reader Bar Sizes</h3>
<p>
<picture><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/reader-bar-sizing.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/reader-bar-sizing@2x.png 2x" media="(min-width: 769px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/reader-bar-sizing-768w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/reader-bar-sizing-768w@2x.png 2x" media="(min-width: 481px) and (max-width: 768px)" /><source srcset="https://blog.elytra.app/wp-content/uploads/2021/05/reader-bar-sizing-480w.png 1x, https://blog.elytra.app/wp-content/uploads/2021/05/reader-bar-sizing-480w@2x.png 2x" media="(max-width: 480px)" /><img src="{{ site.baseurl }}/assets/2021/05/reader-bar-sizing.png" alt="The two new reader bar sizes: The small size on the left and the large size on the right. " width="656" height="638" /> </picture></p>
<p>To ensure the app is accessible by everyone, Elytra has always supported Dynamic Type, Voice Over and the various navigation accessibility features that macOS and iOS provides. In March, a customer got in touch with a complaint about the reader bar and a potential solution. We worked on that solution and I am now happy to let you know that the reader bar now comes in three sizes: Small, Regular (default) and Large. You can toggle the size from Settings &gt; Misc.</p>
<p>PS: This setting has no effect if you’re using the toolbar.</p>
<h2 id="improvements">Improvements</h2>
<ul>
<li>
<p>Drastically improved performance and accuracy of batch marking articles as read. (In my testing, marking a batch of 2000 articles as read previously took over 8s, and now only takes 2s).</p>
</li>
<li>
<p>Counting unread articles is now <em>literally</em> 6 times faster. The app can now spend less time keeping these counters up to date and more time rendering articles.</p>
</li>
<li>
<p>Improved handling and logic for rotation on iPadOS. This also fixes the blank slate launch state of the app on iPads in portrait mode.</p>
</li>
<li>
<p>Sharing articles on macOS will now use the recommended approach instead of the workaround I was previously using. This will ensure a smoother experience across various macOS versions.</p>
</li>
<li>
<p>The macOS app will now correctly sync after waking up your mac from sleep.</p>
</li>
</ul>
<h2 id="fixes">Fixes</h2>
<ul>
<li>
<p>Fixed a critical and long standing issue where articles marked as read on one of your devices would not sync to your other devices.</p>
</li>
<li>
<p>Fixed a critical bug where the “Start Trial” button would have no effect or start the process and keep the button disabled preventing retries.</p>
</li>
<li>
<p>Fixed an issue where opening a Feed or a Folder and then opening the Unread list would reset the sorting preference to Unread - Latest First.</p>
</li>
<li>
<p>Fixed an issue with sync not working correctly upon a fresh signup.</p>
</li>
<li>
<p>Fixed an issue where the wrong state for the article reader would be setup: incorrectly showing next and previous articles to be available when only a single article was available in that list.</p>
</li>
<li>
<p>Fixed an crashing bug on iPadOS where the app would crash after backgrounding the app.</p>
</li>
<li>
<p>Fixed a bug in which HTML would show in the summary field.</p>
</li>
<li>
<p>Fixed a bug with Substack newsletters where the images in the posts would be really small (Substack converts the original URLs into their image proxy URLs for the Feeds which caused this issue, Elytra strips out this information and then loads the images).</p>
</li>
<li>
<p>Fixed a bug where custom feed names would not correctly sync across to your other devices.</p>
</li>
<li>
<p>The macOS app will no longer open duplicate windows. If it finds an existing window for the same activity, it’ll bring that window to the foreground.</p>
</li>
<li>
<p>Externally connected displays on iPads will now mirror the the iPad screen. This would previously display the app’s UI at native resolution with no scaling. A future release will correctly address this issue.</p>
</li>
</ul>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
