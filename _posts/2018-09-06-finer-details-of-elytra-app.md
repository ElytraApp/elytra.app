---
layout: post
title: Finer Details of Elytra.app
date: 2018-09-06 13:02:48.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
tags:
- autoplay
- design
- DNT
- doNotTrack
- videos
- website
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/09/06/finer-details-of-elytra-app/"
---
<p>There are some very interesting details on Elytra’s website which you most likely have not noticed. This is by design. These are invisible details that are engineered to make your experience on the website more private and be good to your devices. </p>
<h2>Respecting your Privacy</h2>
<p>Like most landing pages for apps, products and services, Elytra’s website too loads the Google Analytics script. But the script itself does not respect the <code>DNT</code> Header your browser may be sending. To work around this, I added a simple check before calling the code that begins tracking page views. </p>
<pre><code>if ((‘doNotTrack’ in navigator) &amp;&amp; navigator.doNotTrack == “1”) {<br />    console.info(“Do not track is enabled. Exiting”);<br />}<br />else {
    // Regular GA code
}</code></pre>
<p>This simple piece of code will respect your privacy settings and only if you allow will begin page views tracking via Google Analytics. Considering the critical role Privacy plays in Elytra’s core, this seemed obvious. </p>
<h2>Respecting your Devices</h2>
<p>Elytra’s landing page also includes 3 videos. These are kind of big. Total to about 35MB but varies depending on what codecs your browser supports. It is obvious that it does not make sense to load videos on all devices. It is also obvious that loading these videos on metered or cellular connections like 2G and 3G would be wasteful as the page would never complete loading. Most people would close the tab and move on. </p>
<p>Elytra’s website uses the new <code>navigator.connection</code> object to determine if videos should be shown. If it determines that videos should be discarded, it simply replaces them with cover images that fit the context. </p>
<p>Safari on iOS and macOS does not support it yet, so the viewport size is used to determine this. As soon as Safari supports it, directly or by using the webkit prefix, it’ll kick into action. </p>
<p>This not only correctly conserves data bandwidth, but also power and is respectful towards batteries of your untethered devices. </p>
<h2>Respecting Accessibility Requirements</h2>
<p>Just like the iOS App, the website tries its best to be accessible. When designing the <a href="https://elytra.app/faq">FAQ</a> and <a href="https://elytra.app/press">Press</a> pages, I decided to use the <code>details</code> and <code>summary</code> tags instead of hacking something on my own for creating collapsible sections. There is a lot of sample code, some which is even accessible, out there which creates collapsible sections, but nothing seemed to work as effectively as these two tags in tandem. You can read more about them on <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">MDN</a>. </p>
<p>This made the two pages  accessible not only to screen readers, but also for people who use the keyboard more than a pointer device to navigate webpages. If this is new to you, I’d love for you to try it out. Its fun!</p>
<hr />
<p>While on the surface, Elytra’s landing page may look simple or even boring to some, I wanted to focus on getting the information to people who seek it. Aesthetics are important, but making and keeping your website Accessible, Private and Fast was paramount. </p>
<p>Something I want to explore when updating the website next is to localise it. So if you have any tips for me, do let me know. </p>
