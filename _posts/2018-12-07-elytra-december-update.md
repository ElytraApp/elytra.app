---
layout: post
title: Elytra December Update
date: 2018-12-07 18:47:53.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- webservice
tags:
- API
- notes
- rpc
- webservice
meta:
  _wpas_done_all: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/12/07/elytra-december-update/"
---
<p>In this post, I wanted to quickly write down a couple of notes for you to read at your leisure. </p>
<ul>
<li>There is no release scheduled for this month however I am working on a fix release scheduled for next week to fix a couple of bugs reported by one of the newest users of Elytra. Thank you, Tim! </li>
<li>The next big release is scheduled for after 15th of January 2019.</li>
<li>I am continuing to improve the API for Elytra which powers the sync services, automated account creation, OPML imports as well a lot of the real time logic which brings push notifications from certain blogs. </li>
</ul>
<h3>Real Time Updates</h3>
<p>The last point from the above list has kept me wondering, how can I improve the situation where publishers can ping Elytra’s API to notify it about new posts. </p>
<p>After looking in to how Wordpress operates, the answer was obvious: RPC Pings. Starting today, if your blog runs on Wordpress, you can add the following URL: <a href="https://api.elytra.app/rpc-ping">https://api.elytra.app/rpc-ping</a> under &gt; Wordpress Blog’s Settings &gt; Writing &gt; Update Services. </p>
<p>That’s all you have to do. This won’t immediately enable your readers to receive real-time push notifications for your blog, but it’ll enable the sync service to immediately fetch new posts. I’ll be working on bringing push notifications to your readers in the coming week. Once that is enabled, the API will no longer periodically poll your Blog’s RSS feed and will solely rely on this mechanism. If you can configure the above setting, I highly recommend that you do. </p>
<h3>Recommendations</h3>
<p>I have been tweaking how recommendations are selected, over the last week and I am pretty happy with the results now. Currently, the recommendations are purely based on anonymous statistics which detail which articles were read the most eventually surfacing the Feeds they belong to. In the coming few weeks, this will change to using a combination of anonymous statistics to further randomise and give better recommendations. </p>
<p>The new system will also remove feeds you are subscribed to so that the recommendations become true recommendations for you instead of a generic “Whats Hot!” list.</p>
<h3>Data &amp; Statistics</h3>
<p>The core of the Recommendations section has been this anonymous data collected directly on the server based on the articles you read. Since this data is in no way tied to any user account and it reveals a lot of information which publishers may find useful. Early next year, I plan to release a dashboard for Publishers to view this data. Just like the iOS app, the dashboard website will have a private and then a public beta. The final release will be available at nominal fee of $1/month for subscribing publishers. </p>
<p>Your personal data is never collected by Elytra and as such no information about you can be included in the above stats. If you’re a publisher and would like to be included in the Private Beta, give me a shoutout on <a href="https://twitter.com/dezinezync">Twitter</a> or DM me. </p>
<h3>Closing Notes</h3>
<p>I have nothing more to write, so I’ll leave you with my best wishes for the Holidays. Cheers. </p>
