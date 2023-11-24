---
layout: post
title: Elytra November Update
date: 2018-11-05 16:59:23.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- release
tags:
- appstore
- notes
- release
- update
meta:
  _wpas_done_all: '1'
  _edit_last: '1'
  _wp_old_date: '2018-10-30'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/11/05/elytra-november-update/"
---
<p>Happy Holidays! October has been a great month for Elytra on multiple fronts:</p>
<ol>
<li>The app’s first few subscriptions kicked in after the 14-day free trial periods. Many of you'll sent me emails regarding the pricing, some left App Store Reviews (being able to respond to them is a great feature) raising their concerns. I have been able to take action on this. I’ll talk more about this in a bit.</li>
<li>October brought in a bunch of bug fix releases for the app, while I continued to work on new features and improving the general stability of the app.</li>
<li>I managed to acquire some new Beta Testers who have been really good with giving me feedback on new features. I’d like to work out a way wherein with their explicit permission — include their names in the credits section.</li>
<li>There is a now a <a href="https://reddit.com/r/elytraios">subreddit for Elytra</a> if you want to discuss, propose new features or just have a public discussion related to the app.</li>
</ol>
<h2>What’s New</h2>
<p>Let’s begin with all the new features and improvements in <strong>v1.1.0</strong>:</p>
<h3>Folder Feeds</h3>
<p><img title="Folder Feeds@2x.png" src="{{ site.baseurl }}/assets/2018/11/Folder-Feeds@2x.png" alt="Folder Feeds in Elytra v.1.1. " width="952" height="746" border="0" /></p>
<p>I probably have 14–15 emails in my inbox requesting Folder Feeds. Honestly, I had never considered this. I worked with a couple of them to get the correct implementation of it. I’m very happy with how it turned out. This makes a minor change to how folders work in the Feeds’ Interface:</p>
<ol>
<li>The previous interaction of tapping on the Folder row now opens the Folder’s Feed.</li>
<li>To expand or collapse the Folder: tap on the folder icon.</li>
</ol>
<h3>Sorting Options</h3>
<p><img title="New Sorting Options@2x.png" src="{{ site.baseurl }}/assets/2018/11/New-Sorting-Options@2x.png" alt="New Sorting Options in Elytra v.1.1" width="952" height="746" border="0" /></p>
<p>The second most requested feature was being able to sort the feeds in ascending order: oldest articles first. While it sounds relatively simple (and it is, if all the data was locally available on the device), this turned out to be a slightly complicated transaction on the sync server. A single user requesting this information was fine but when I simulated it with at least 100 simultaneous such requests, things quickly broke down. By changing how a few things work on the sync server, I was able to heavily optimize this and also include the ability to only fetch Unread articles for that feed in any sorting order. This is great when you’re going through a large feed and only wish to read unread articles.</p>
<h3>Type Improvements</h3>
<p><img title="Improved Type@2x.png" src="{{ site.baseurl }}/assets/2018/11/Improved-Type@2x.png" alt="Type Improvements for larger accessiblity sizes in Elytra v1.1" width="952" height="746" border="0" /></p>
<p>I’ve always invested a lot of time optimising and tuning the Type rendering in the app. I recently found some sections I accidentally ignored with the Accessibility Type settings. The app now respects these settings correctly and ensures you get the optimal reading experience. This is also the precursor to the improved layout engine which is scheduled for the next release.</p>
<p><img title="Bold Text@2x.png" src="{{ site.baseurl }}/assets/2018/11/Bold-Text@2x.png" alt="Corrected Bold Text implementation in Elytra v.1.1" width="952" height="746" border="0" /></p>
<p>I’ve also taken this opportunity to improve support for the <strong>Bold Text</strong> setting. The app now respects this setting correctly throughout the app with a sole exception: In the Article reader, when using the Georgia or Merriweather font — these fonts do not offer the correct font-weight used to render text with this setting. The app falls back to using the bold font-weight. If this is not desired, I will recommend using an alternate font.</p>
<h3>Image Loading</h3>
<p><img title="Image Proxy@2x.png" src="{{ site.baseurl }}/assets/2018/11/Image-Proxy@2x.png" alt="New Image Proxy options under the Image Loading Preferences in Elytra v.1.1" width="952" height="746" border="0" /></p>
<p>This version brings a big improvement to how images are loaded. Thanks to <a href="images.weserv.nl">images.weserv.nl</a>, an Image Proxy is now available for loading images over a CDN. This is optional and is disabled by default. Some problems we face when loading images:</p>
<ol>
<li>Most blogs do not provide multiple image options depending on the size of the device.</li>
<li>Some blogs embed massive images which aren’t an issue for Desktop class browsers, but heavily strain memory, battery and RAM on mobile devices.</li>
<li>Some blogs, due to various constraints, cant serve images over a CDN or a fast network which degrades performance for us. By using an Image Proxy, Elytra can work around these problems by:</li>
<li>Based on your Bandwidth and Sizing preferences: load an image of the optimal quality.</li>
<li>Based on your current device’s size: load an image of the optimal width or height.</li>
<li>Utilize the CDN being used by the proxy to download the images from the nearest node. <strong>Technical Note</strong>: The quality parameter is affected by your image sizing preference, the current device, if you’re using an iPad — the size of the app if being used in multi-tasking mode and the current network type. A combined score is generated whenever any of these parameters change and the new score is used to determine the quality parameter. In my non-scientific testing, I observed significant bandwidth savings, improvements to the energy consumption graphs for the app as well as memory savings since the app now loads significantly smaller images while offering the same visual quality you’re expecting. This also saves some CPU cycles by preventing your device from having to downscale images. Without WeServ’s Free Image Proxy, this would not be possible.</li>
</ol>
<h3>Extended Layout</h3>
<p><img title="Extended Layout@3x.png" src="{{ site.baseurl }}/assets/2018/11/Extended-Layout@3x.png" alt="Extended Layout on iPad Pro utilising the real estate on the device more efficiently. " width="1536" height="1122" border="0" /></p>
<p>After realising that I am not optimally utilising all the available real estate on iPads, I worked on the <strong>Extended Layout</strong> for iPads (this is also available on iPhones but is disabled by default). This brings two critical improvements to the iPad app:</p>
<ol>
<li>All Feed Interfaces (Unread, Bookmarks, Feeds and Folder Feeds) now get a two column layout for article lists provided enough width is available. This interface can also now be extended to use the full screen which seamlessly transitions into the Article Reader interface.</li>
<li>This brings preliminary support for changing the active theme for the app while reading an article, although it is still more taps away than necessary. I plan to improve this in the next release. This was deferred for this release as it heavily relies on the Layout Engine improvements I am working on right now.</li>
</ol>
<p>Apart from the above new features I have also fixed a bunch of bugs, improved VoiceOver support where ever it was broken, and continue to work towards beginning to localize the app. You can find the finer details in the Release Notes on the App Store.</p>
<h2>Subscriptions</h2>
<p>I mentioned earlier about a lot of users voicing their concerns over the Subscriptions’ pricing and the lack of a One-Time purchase. With the thought of reducing the pricing lingering in my mind, I was unable to justify it with my current infrastructure costs. I recently ran into <a href="https://aws.amazon.com/about-aws/whats-new/2018/08/introducing-amazon-ec2-t3-instances/">this</a> announcement from AWS (I probably missed it because I was preparing for Elytra’s launch at the time). After exploring my options, I determined that it is a definitive upgrade for me while lowering my server costs, the benefits of which I am able to pass on to you. With immediate effect:</p>
<ol>
<li>All subscription prices have been dropped by 1 Tier. This is effectively a 1/3rd reduction in the cost of the subscriptions.</li>
<li>Anyone who has purchased a subscription prior to the release of v.1.1 will be automatically provided with extra days (or months if you purchased the annual subscription) on their current subscription. No extra action should be necessary from you. If this isn’t immediately reflected, restoring your purchases will update this.</li>
<li>All new subscriptions will be available at the new reduced pricing.</li>
<li>An additional Life-Time purchase is also available. This will include all future updates, improvements, dedicated support and a round of your favorite beverage on me when you’re in my town or I am in yours!</li>
</ol>
<p>My goal with Elytra was to make reading on iOS devices accessible to as many people as I can reach. With your constant feedback, criticism and kind words, I have been able to continuously improve the app. I will be taking a short break from all development work and spending time with my friends and family over the Holidays. I will try my best to reply to your emails in a timely manner and frequent the new Elytra subreddit as often as I can. Cheers!</p>
<p>You can find the discussion around this post on <a href="https://www.reddit.com/r/elytraios/comments/9ucqht/november_update/">here</a>.</p>
