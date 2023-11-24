---
layout: post
title: WWDC20 and Elytra
date: 2020-06-25 12:08:53.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
- public
tags:
- notes
- public
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/06/25/wwdc20-and-elytra/"
---
<p>WWDC20 week is currently going and Apple has released all new SKDs for their upcoming OSes for the iPhone, iPad and Macs. There is so much cool new stuff packed into these releases, it was extremely hard for me to evaluate how to proceed with development for Elytra.</p>
<p>During the two weeks leading up to WWDC20, I was working on the Mac Catalyst App for Elytra, trying to figure out if it would be a good fit. Turns out, yes, but with some undesired effects. </p>
<p>During the same time, I’ve been working on v1.8 of the app for the Fall release to coincide with the releases of the new OSes. </p>
<p>Unfortunately, all the new amazing APIs Apple is releasing this year for developers to use are tricky to backport to iOS/iPadOS 13 and macOS Catalina. So to make things easier for users of Elytra, you: I’ve decided on the following roadmap:</p>
<ol>
<li>v1.8 will be released as planned for iOS 13 and macOS Catalina. I’ll simply bring this release forward by two weeks, so everyone who plans to stay on iOS 13 and macOS Catalina for a bit longer can continue to use Elytra with the new features I am implementing in v1.8. This also gives me enough time to submit bug fix builds if they are required. </li>
<li>v1.9 will be released simultaneously with the new OS releases and will be a one-to-one identical release of v1.8 targeting only the new OSes. This will be the new branch that’ll continue onward to future releases of the app across all 3 platforms. </li>
</ol>
<p>However, so much will be changing in the app, the v1.9 tag doesn’t make much sense. So I’ll be bumping things to v2.0 for the iOS/iPadOS 14 and MacOS Big Sur release. So this fall, you can expect v1.8 and v2.0 of Elytra. </p>
<p>I have some really exciting things planned for these releases. I’ll also be merging the release of Elytra of Web with the 2.0 release of the apps. </p>
<p>With some careful planning on my part, I hope to have all existing and new users of Elytra up to the latest features with a solid foundation for future releases. </p>
<p>In the meantime, here’s a look at the new App Icon coming with v1.8 and v2.0 of the apps. </p>
<p><img src="{{ site.baseurl }}/assets/2020/06/newAppIcon.png" srcset="https://blog.elytra.app/wp-content/uploads/2020/06/newAppIcon.png 1x, https://blog.elytra.app/wp-content/uploads/2020/06/newAppIcon@2x.png 2x" alt="New App Icon for Elytra" width="800" height="600" /></p>
