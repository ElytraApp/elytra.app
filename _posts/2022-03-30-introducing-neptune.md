---
layout: post
title: Introducing Neptune
date: 2022-03-30 10:15:54.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- neptune
- notes
- public
- release
- webservice
tags:
- neptune
- public
- release
meta:
  _edit_last: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2022/03/30/introducing-neptune/"
---
<h3 id="prelude">Prelude</h3>
<p>RSS Feeds are amazing! Many of us have built entire apps, services and businesses around it. The specifications for it have existed for a long time. Newer specifications like <a href="https://www.jsonfeed.org">JSONFeed</a> are powering new workflows around it.</p>
<p>Earlier in the previous decade, websites began injecting ads, trackers into their RSS feeds. Those were easy to get around for Elytra.</p>
<p>However, soon after the rise of Ad Blockers and similar technologies, more and more websites wanted people to open their web pages through their RSS feeds. This leads to websites providing only truncated excerpts in their feeds.</p>
<hr />
<p>This become a legitimate problem soon after <strong>S</strong>ocial <strong>M</strong>edia <strong>G</strong>iants began fiddling with users feeds by converting a timeline to a suggestions list like the coupons section from a local newspaper ¯\_(ツ)_/¯.</p>
<p>To solve this problem, a lot of genius services like <a href="https://mercury.postlight.com">Postlight’s Mercury</a> popped up. They provided a huge boost to feed reader apps (and many others). Almost every app I used before Elytra used it. Elytra used it up till version 2022.2.4.</p>
<p>However, Postlight later made Mercury an open-source project which didn’t receive much attention from the original authors and the community since 2019. I tried to add my own patches to it however, it became tedious to maintain in its current form without doing a complete rewrite against the latest tooling and NodeJS versions.</p>
<p>Since I was considering a rewrite anyway, I thought to myself: why not do it with my new favourite programming language as of 2022: Swift. And as I was going to rewrite things, why not do it simpler (if not better!).</p>
<h3 id="introduction">Introduction</h3>
<p>This led me to create <strong>Neptune</strong>, a pure Swift based system to fetch and parse full-text content from webpages for Elytra. It’s fast, very very fast (more details below) and uses a simpler logic compared to mercury to parse and process webpages.</p>
<p>The Swift programming language, by its design, leads to type safe code that brings fewer surprises compared to NodeJS. It also compiles down into a single executable binary, which has its own tradeoffs, but brings three powerful, key features:</p>
<ul>
<li>maintainability</li>
<li>performance</li>
<li>more performance</li>
</ul>
<h3 id="numbers">Numbers</h3>
<p>Oh, and I’m not kidding. On a tiny t3.nano (512MB RAM, 2GB swap, 1vCPU) server, these are some numbers:</p>
<table>
<thead>
<tr>
<th>Process</th>
<th>0.1K Articles</th>
<th>1K Articles</th>
<th>10K Articles</th>
</tr>
</thead>
<thead></thead>
<tbody>
<tr>
<td>Mercury</td>
<td>28s</td>
<td>378s</td>
<td>3500s</td>
</tr>
<tr>
<td>Neptune</td>
<td>12s</td>
<td>135s</td>
<td>1428s</td>
</tr>
<tr>
<td><i>Change</i></td>
<td>+40%</td>
<td>+41.17%</td>
<td>+42.05%</td>
</tr>
</tbody>
</table>
<ul>
<li>These tests were performed with the t3.nano instance having full CPU credits available to it.</li>
<li>These tests did not persist any data to disk by itself.</li>
<li>These tests were performed in partial isolation: only the process being tested was run along with the test script.</li>
</ul>
<p>If you’re asking yourself, what the numbers mean for you: the answer is quite simple: Neptune is very quick at fetching full-text context from your favourite blogs. Additionally, because it’s simpler to maintain and upgrade, adding support for new websites is vastly simpler and requires only a few lines of code of me (sometimes only 6 lines, 4 of which are bootstrap code).</p>
<h3 id="thefuture">The Future</h3>
<p>I’m sure Neptune is not ready for any commercial use, not in its current form anyways. But I will eventually offer Neptune as a <em>standalone service</em> for other apps to use. I’ll document this at a later point in time.</p>
<p>Users of Elytra can take advantage of Neptune starting with the v2022.03 release as the default extractor. No settings to toggle. It’s all set up.</p>
<p>If you spot any issues, or articles from specific websites failing to load, please <a href="https://github.com/ElytraApp/IssueTracker/issues/new?assignees=&amp;labels=&amp;template=neputne_fix.md">submit an issue on Github</a>. It has a standard format making it easy for you to submit reports. I look forward to reading from you about your experience with <strong>Neptune</strong>.</p>
