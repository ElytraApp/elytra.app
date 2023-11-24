---
layout: post
title: RPC First Class Support
date: 2020-03-29 18:17:51.000000000 +05:30
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
- notifications
- push
- realtime
- release
- rpc
- websub
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/03/29/rpc-first-class-support/"
---
<p>Back in December 2018, I wrote <a href="https://blog.elytra.app/2018/12/07/elytra-december-update/">a post</a> about RPC Pings support in Elytra. I cannot believe it has been that long. Later in 2019, I promised to bring first class support to blogs that implement RPC pings to Elytra. </p>
<p>I have just finished implementation and it is now live. To recap the steps from the earlier blog post, let’s assume you have a Wordpress Blog. </p>
<blockquote>
<p>...if your blog runs on WordPress, you can add the following URL: https://api.elytra.app/rpc-ping under &gt; WordPress Blog’s Settings &gt; Writing &gt; Update Services. </p>
</blockquote>
<p>That’s it. Wordpress handles all the complexities for you. If you use Micro.blog, you can find instructions <a href="https://dezinezync.com/2019/11/07/rpc-pings-for.html">here</a>. You can adapt that shortcut to send RPC pings for any website you host as well as to any other service other than Elytra. </p>
<p>Here’s what happens in the background:</p>
<ol>
<li>Your website/script sends an RPC ping to Elytra.</li>
<li>Elytra immediately processes your website’s RSS Feed. </li>
<li>Any new posts are added for your subscribers to read. </li>
<li>Additionally, users subscribed to your blog’s push notifications from the iOS and iPadOS Apps are sent a push notification.</li>
</ol>
<p>Starting today, 29 Mar, 2020: Once your blog sends at least 5 pings every 14 days, Elytra will no longer poll for changes to your RSS feed. Elytra will then assume that you will send RPC pings every time content on your website is updated. If no RPC pings are posted for 14 days, Elytra will once again begin polling changes at regular intervals until the 5 pings are received and the cycle can repeat. </p>
<p>So you get the benefit of real-time updates, push notifications and no penalties for downtime. This hugely benefits users using a blogging platform like Github Pages, Micro.blog, etc. that don’t inherently support WebSub yet. You can use this for your Wordpress based blog as well if you don’t want to install the WebSub plugin for whatever reason. </p>
<p>Starting with v1.7, users of the iOS and iPadOS apps will also be able to subscribe to feeds for Push Notifications which use RPC pings. </p>
<p>I invite your feedback on this feature if you decide to implement and make use for it. For any questions, please feel free to email me at <a href="mailto:support@elytra.app">support@elytra.app</a>. Enjoy Reading. </p>
