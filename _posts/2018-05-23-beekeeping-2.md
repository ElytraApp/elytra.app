---
layout: post
title: 'Beekeeping #2'
date: 2018-05-23 23:28:32.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- notes
tags:
- battery
- beta
- consumption
- notes
- power
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/05/23/beekeeping-2/"
---
<p>Over the past few weeks, I’ve been carefully developing test suites for Yeti which simulate a few scenarios like: casual users, power users, long-form readers and the like. Over all the test suites, one thing stood out: The obscene amount of power wasted in downloading content which was never read in these simulated situations. </p>
<h2>CPU</h2>
<p>Every time you launch the app, three things happen:</p>
<ul>
<li>Your feeds are loaded including Folders information</li>
<li>If any unread articles are available, those are loaded as well (upto a maximum of 25 in this cycle)</li>
<li>Your bookmarks are synced. Any new bookmarks are downloaded. </li>
</ul>
<p>Permitted that there is a network connection available, there’s a lot of data transmitted over the wire. Your phone’s modem is responsible for loading this data consuming considerable amount of power. When this reaches the CPU, it converts the data to Elytra’s internal model structures and is cached in the RAM. </p>
<p>However, in all of the simulated tests, not all articles were read. This lead to a lot of data that was never used. So to reduce this waste, I first decided to make all unread articles load with the content. This was a good first step. To improve this further, I tested again by returning no content on any of the articles.</p>
<p>In both of these cases, the articles were loaded on-demand when the simulated user opened the article. </p>
<p>Here’s how the CPU was impacted.</p>
<p><img title="cpu.png" src="{{ site.baseurl }}/assets/2018/05/cpu.png" alt="CPU consumption across Normal, Stripped Unread and All Stripped datasets. " width="786" height="321" border="0" /></p>
<p>As you can see, stripping the data from the articles and loading it on demand saves a lot on the CPU processing power. Modern iPhone and iPad CPUs like the A10, A10x and A11 are really power efficient, but if the app can avoid any kind of overhead, it’s always worth stripping it off. </p>
<h2>Data </h2>
<p><img title="data.png" src="{{ site.baseurl }}/assets/2018/05/data.png" alt="Data consumption across normal, stripped unread and all stripped datasets. " width="802" height="321" border="0" /></p>
<p>Similar trends can be observed in Wireless data consumption. By stripping off the overhead, a lot of unnecessary data was avoided from being transmitted, and therefore loaded. This not only saves power, but also saves bandwidth on your devices and this is especially critical if you’re on a metered connection. This also saves me some $$ on server bandwidth costs.</p>
<p>A 8 times reduction in data costs is a huge gain. <strong><em>All these data points are aggregate averages across the various test suites</em></strong>. </p>
<h2>Overall Power Consumption</h2>
<p>As you can imagine, reducing CPU and data usage considerably impacts power consumption. This is not only great for your device’s battery, but also an invisible user experience benefit. </p>
<p><img title="power.png" src="{{ site.baseurl }}/assets/2018/05/power.png" alt="Power conspumption over 3G, LTE and Wi-Fi across the Normal, stripped Unread and all stripped datasets. " width="778" height="321" border="0" /></p>
<p>It’s immediately evident that this was a step in the right direction. Not only do we all save money, bandwidth and time, but also should be able to use our iOS devices for a few charge cycles more or at least that’s the vision.</p>
<p>This change is now available in the latest build of Elytra. Apart from this, here are few other things:</p>
<ul>
<li>The dark themes no longer cause jumpy navigation bars. </li>
<li>There is a basic implementation of In-App purchases. You can try it out. This won’t affect anything in the app. Also, you aren’t charged during the Testflight run.</li>
<li>Improves memory management for long form articles.</li>
<li>Implements Cover images for articles that provide this information.</li>
<li>Fixes line height of headings. </li>
</ul>
<h3>Notes</h3>
<p>Version: 1.0.0<br />Build 73.<br />Pipe: Beta-02</p>
