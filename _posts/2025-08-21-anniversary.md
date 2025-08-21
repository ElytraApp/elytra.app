---
layout: post
title: A Decade of Elytra
date: 2025-08-21 00:00:00+05:30
type: post
categories:
- iOS
- macOS
- iPadOS
- notes
- public
permalink: "/blog/2025/08/21/a-decade-of-elytra/"
---

In July of 2015, Google Reader had been shut down for two years now. The need for a good reader app and service wasn't filled by most alternatives available then. I'd been thinking of building one myself, but it felt like a massive undertaking. And I was very specific with what I wanted from such an app:
- **Private**: No collection of personally identifiable information. Not even my name or email ID.
- **Custom Font Support**: This was critical for me so I could configure the app and make it easier for me read long-form articles. 
- **Fast**: Should be backed by an API service which fetches articles for me, instead of my devices checking individual feeds. 

Every single offering out there in 2015 only ticked one or two of these three primary criteria. And so, Elytra, code named `Yeti` started to take shape with its first usable build ready in August of 2015. In two months, I had functional prototypes of the API and the iOS app and sent out an alpha build to friends to try out.

### Simple Beginnings

I did not realise what I'd gotten myself into: 10 years of tinkering, tweaking, learning, unlearning, and updates. It did however take me just under three years to really nail the text and image rendering in the app: I decided not to use a web view. Remember the privacy aspect? I didn't want the app to collect any personally identifiable data. I wanted to take this a step further and prevent ad and tracking services from doing so as well. And natively rendering text, and especially images, was the only way to do it, bypassing `script`, `noscript`, and pixel tracking images. 

The API service for Elytra was written in NodeJS, ExpressJS with a MySQL store for data storage. A pretty simple stack. 

And in July 2018, here we go! 

<picture>
  <source media="(max-width: 600px)" srcset="/assets/2025/08/21/PublicBeta-400w.jpg 1x, /assets/2025/08/21/PublicBeta-800w.jpg 2x, /assets/2025/08/21/PublicBeta-1600w.jpg 3x">
  <source media="(min-width: 601px)" srcset="/assets/images/home/hero-800w.jpg 1x, /assets/2025/08/21/PublicBeta-1600w.jpg 2x, /assets/2025/08/21/PublicBeta@3x.jpg 3x">
  <img src="/assets/2025/08/21/PublicBeta.jpg" srcset="/assets/2025/08/21/PublicBeta@2x.jpg 2x, /assets/2025/08/21/PublicBeta@3x.jpg 3x" width="1024" height="1504" alt="Public beta invitation website for Elytra, July 2018.">
</picture>
<br />
Soon after in August 2018, the app was live in on the App Store. Apple initially did not like the idea of an RSS feed reader app offering auto-renewing subscriptions. So they made me use non-renewable subscriptions in the app which was a slight hindrance to users, but they understood, and people started using it. 

<picture>
  <source media="(max-width: 600px)" srcset="/assets/2025/08/21/Heading-400w.png 1x, /assets/2025/08/21/Heading-800w.png 2x, /assets/2025/08/21/Heading-1600w.png 3x">
  <source media="(min-width: 601px)" srcset="/assets/images/home/hero-800w.png 1x, /assets/2025/08/21/Heading-1600w.png 2x, /assets/2025/08/21/Heading@3x.png 3x">
  <img src="/assets/2025/08/21/Heading.png" srcset="/assets/2025/08/21/Heading@2x.png 2x, /assets/2025/08/21/Heading@3x.png 3x" width="1024" height="1504" alt="Elytra v1.0 for iOS, August 2018">
</picture>
<br />

Slowly over the next few years, the app was refined, bringing improved accessibility support and features and eventually the Mac app was released, first using MacCatalyst, then finally with AppKit with the release of macOS 11.0.

![Top: Elytra for macOS 10.15 built using MacCatalyst, Bottom: Elytra for macOS 11 built using AppKit](https://elytra.app/assets/2020/11/Artboard-scaled.jpg)

This also brought the use of TextKit2 for rendering text in articles, which brought its own advantages and headaches over time:

![Single article window from Elytra](https://elytra.app/assets/2020/11/Screenshot-2020-11-14-at-6.25.22-PM.png)

### The Pandemic Years 

During the pandemic years, third party services Elytra relied on started to shut down one by one. The most critical one was **Mercury**: A full-text extraction service for the web. This was bad news for me, as I had no idea how to build one myself, quickly enough to reduce and negate downtime for users of Elytra.

Unfortunately, this took me a while, and five months later, Neptune was released. I had a lot of angry customers demanding refunds during this period, and while most understood the situation once I explained it to them, some went as far as to threaten me and my family. I didn't ever understand how those threats were viable, so I continued to focus on the app and its users who still cared for it. 

### And then…

I wanted to champion Elytra into a app in a class of its own: Private, Accessible, Simple. And people noticed, the right kind of people noticed. People who cared for a well crafted app began to migrate over from other apps and services. I soon started getting invites from the fruit company to attend sessions on improving my app, and even talking about it on several occasions, especially on the accessibility support the app brings forth for its users. 

It's climbed the ranks of the App Store and Mac App Store on several occasions, including features by itself and in collections. It's been everything I could ask for, and then some more, and I'm truly grateful for everything I've learned through the app over these **10 years**. 

---

These ten years of Elytra have been dominated by "flat design" first seen with iOS 7. And the next 10 years, probably, are going to witness the adoption of the "Liquid Glass" paradigm. I'm truly excited for this shift: I've never been good with flatness in design, it never truly echoed with me in the way interaction with digital materials do. Being a gamer, I've always found digital textures fascinating, with developers going to great lengths to bring forth an interaction mimicking the real world in some way, has always reminded of the first TRON movie. 

Elytra's backed has also been completely transformed: It now mostly uses Swift, Vapor, and the same ol' MySQL store. But it's now more than one thing: It's a bunch of services running simultaneously, in perfect concert with each other, being invisible to users. From Objective-C and JavaScript in 2015, to Swift 6.2 in 2025, Elytra has metamorphosed staying true to its name and app icon. 

<picture>
  <source media="(max-width: 600px)" srcset="/assets/2025/08/21/ElytraAppIcons-400w.png 1x, /assets/2025/08/21/ElytraAppIcons-800w.png 2x, /assets/2025/08/21/ElytraAppIcons-1600w.png 3x">
  <source media="(min-width: 601px)" srcset="/assets/images/home/hero-800w.png 1x, /assets/2025/08/21/ElytraAppIcons-1600w.png 2x, /assets/2025/08/21/ElytraAppIcons@3x.png 3x">
  <img src="/assets/2025/08/21/ElytraAppIcons.png" srcset="/assets/2025/08/21/ElytraAppIcons@2x.png 2x, /assets/2025/08/21/ElytraAppIcons@3x.png 3x" width="1024" height="1504" alt="Evolution of Elytra's App icon from 2015 to 2025.">
</picture>

Here's to the next decade of Elytra, and to all the new engineering challenges it will bring me. To end this post, I'll leave you with a sneak peek of the upcoming release of Elytra v2025.9, scheduled for simultaneous release with iOS 26, iPadOS 26, and macOS 26.

<img src="/assets/2025/08/21/1.png" srcset="/assets/2025/08/21/1@2x.png 2x" width="313" height="640" alt="Elytra v2025.9 for iOS 26" />
<img src="/assets/2025/08/21/2.png" srcset="/assets/2025/08/21/2@2x.png 2x" width="835" height="640" alt="Elytra v2025.9 for iPadOS 26" />
