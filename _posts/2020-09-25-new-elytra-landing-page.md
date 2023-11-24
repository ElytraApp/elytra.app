---
layout: post
title: New Elytra Landing Page
date: 2020-09-25 14:32:47.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- public
- release
- webapp
tags:
- public
- release
- webapp
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/09/25/new-elytra-landing-page/"
---
<p>Elytra&#8217;s first website was made in the fall of 2017. It was extremely basic, gave the requiste information to the reader and a link to sign up for the TestFlight beta ( TestFlight Links were not a thing back then).</p>
<p>With the release of v1.0, I updated to an improved layout, more details and screenshots. I kept updating the screenshots up to the release of v1.4 and then completely forgot about it (this did lead to some confusion).</p>
<h2 id="newwebsite">New Website</h2>
<p>With the release of v2.0, it was time to update it, however, with the rushed release of iOS 14, I didn&#8217;t get enough time to complete it.</p>
<p>Today, I just launched the updated website. <strong><em><a href="https://elytra.app?ref=blog">Check it out here</a></em></strong>.</p>
<p><img src="{{ site.baseurl }}/assets/2020/09/Screenshot-2020-09-25-at-2.07.18-PM.png" alt="Elytra's New Landing Page - Hero" /><br />
<img src="{{ site.baseurl }}/assets/2020/09/Screenshot-2020-09-25-at-2.07.03-PM.png" alt="Elytra's New Landing Page - Design" /></p>
<p>I have simplified the website by much, reduced as many interaction points as possible to ensure the reader can quickly get an idea of the app, and proceed to viewing further details on the <a href="https://itunes.apple.com/us/app/elytra/id1433266971?ls=1&amp;mt=8">App Store</a>.</p>
<p>For the main navigation in the header, I used a simple <code>&lt;details&gt;</code> block with <code>&lt;nav&gt;</code> as its detail block. Accessible, simple, and known interaction.</p>
<p>Almost all images are optimised for retina screens as well as for various breakpoints at varying sizes.</p>
<p>One critical section I thought I must add was about Privacy.</p>
<p><img src="{{ site.baseurl }}/assets/2020/09/Screenshot-2020-09-25-at-2.23.01-PM.png" alt="Elytra's New Landing Page - Privacy" /></p>
<p>With Apple&#8217;s strong focus on Privacy, and a <a href="https://www.apple.com/privacy/">wonderful marketing page</a> to go with it, I thought it would only compliment their message and my committment towards ensuring the same as a 3rd party developer on their platform.</p>
<h3 id="additionalenhancements">Additional Enhancements</h3>
<p>Some additional enhancements I&#8217;d like to make sooner than later:</p>
<ul>
<li>
<p>I would like to make some tweaks to the font sizes of headers based on the device width metric, but I found it not to be a blocker, and release it as is.</p>
</li>
<li>
<p>Add sRGB and P3 specific images to the sources. When viewing the website on my Macbook Pro, the colours are evidently faded. Since I do have source images in the P3 format, I should be able easily do this.</p>
</li>
<li>
<p>Additional hints for a11y.</p>
</li>
</ul>
<h3 id="noticeablymissing">Noticeably Missing</h3>
<p>Dark/Light mode. The previous website support this, however, for this time around I decided to go with a static colour scheme to suite the various bands I am using on the page as decorative backgrounds for the device images.</p>
<p>This darker colour scheme also strongly compliments the beautiful imagery one experiences when using Elytra with various Photography and Art &amp; Design blogs.</p>
<p>If you have any suggestions for improvements or noticed a bug, do let me know.</p>
<p>As always, happy reading.</p>
