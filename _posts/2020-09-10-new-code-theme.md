---
layout: post
title: New Code Theme
date: 2020-09-10 13:53:30.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- beta
- macOS
- notes
- public
- webapp
tags:
- beta
- macOS
- notes
- public
- webapp
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2020/09/10/new-code-theme/"
---
<p>As part of the v2.0 release cycle, I’ve been working on a macOS/UIKit inspired code theme. In this post, I’m sharing what I have come up with so far inviting feedback and suggestions for changes. </p>
<p>The colours are platform specific, so they will be slightly different across iOS/iPadOS, macOS and the Web. Work on the web part is pending but it’ll look mostly similar to the macOS screenshots.</p>
<h2 id="macos">macOS</h2>
<p>On macOS, the colours will respect platform specific accessibility features like enhanced contrast, and light &amp; dark modes.</p>
<p>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/09/codetheme-macOS-dark.png, https://blog.elytra.app/wp-content/uploads/2020/09/codetheme-macOS-dark@2x.png 2x" media="(prefers-color-scheme:dark)" /> <img src="{{ site.baseurl }}/assets/2020/09/codetheme-macOS-light.png" srcset="https://blog.elytra.app/wp-content/uploads/2020/09/codetheme-macOS-light@2x.png 2x" alt="The new Elytra Code theme on macOS" width="1351" height="879" /> </picture></p>
<p>All colours are taken directly from the system provided semantic colours with some alpha tweaks in places where it makes sense.</p>
<h2 id="ios">iOS</h2>
<p>The story is similar on iOS just like macOS. System provided semantic colours are used throughout.</p>
<p>
<picture>
	<source srcset="https://blog.elytra.app/wp-content/uploads/2020/09/codetheme-iOS-dark.png, https://blog.elytra.app/wp-content/uploads/2020/09/codetheme-iOS-dark@2x.png 2x" media="(prefers-color-scheme:dark)" /> <img src="{{ site.baseurl }}/assets/2020/09/codetheme-iOS-light.png" srcset="https://blog.elytra.app/wp-content/uploads/2020/09/codetheme-iOS-light@2x.png 2x" alt="The new Elytra Code theme on macOS" width="562" height="1217" /> </picture></p>
<p>Across the board, I quite like how this is rendering. It’s softer on the eyes too, and if you didn’t notice, the code blocks no longer use the Menlo typeface at a static 16pt. It’ll now scale dynamically to your font-preference, system sizing or custom, using the SF Monospaced typeface from Apple.</p>
<p>In a future update, I’ll look into embedding additional Monospaced fonts suited for viewing code (my current favourite being Fira Code).</p>
<p>I’ll share additional screenshots on <a href="https://twitter.com/dezinezync">Twitter</a> as I go along tweaking and optimising the code.</p>
<h3 id="technical">Technical</h3>
<p>So let’s get into the technical details of this for those of your interested.</p>
<p>Here is an excerpt of what the original css structure looked like.</p>
<pre><code>.hljs {
	color:#333;
	background:#ffffff
}

.hljs-comment,.hljs-quote {
	color:#998;
	font-style:italic
}

.hljs-keyword,.hljs-selector-tag,.hljs-subst {
	color:#333;
	font-weight:bold
}
</code></pre>
<p>This is from the light theme of my CodeParser. This CSS file is imported by the Class, parsed and processed to convert those hex values into their respective <code>UIColor</code> counterparts and then used in Attributed Strings.</p>
<p>So to make this existing system use semantic system colours included making some trivial changes to my code base, starting with the CSS file which now looks like this:</p>
<pre><code>.hljs {
	color:*labelColor;
	background:*systemBackgroundColor
}
.hljs-comment,.hljs-quote {
	color:*systemPinkColor#.75;
	font-style:italic
}
.hljs-keyword,.hljs-selector-tag,.hljs-subst {
	color:*labelColor;
	font-weight:bold
}
</code></pre>
<p>I’m now directly using the semantic colour names, prepending it with an asterisk to denote a semantic color name, and followed by a pound with the alpha component.</p>
<p>As you can imagine, parsing the above is pretty trivial, so is detecting if it should use the semantic name using <code>-[UIColor performSelector]</code> or the method from my HEX to <code>UIColor</code> category.</p>
<p>Once all of this is wired up, the information is assigned to ranges in the Attributed String the same way as it did before with no changes to that part of the code.</p>
<p>With this new system in place, I can use any of the semantic colours exposed by the host OS, of pure hex values or a combination of both in the same file which makes this solution very versatile and light weight.</p>
<p>Here’s a <a href="https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/color/">reference to Apple’s documentation</a> regarding the various semantic colours and their respective RGB values in Dark and Light modes.</p>
<p>I’ll be publishing the iOS Beta including this change shortly to TestFlight. Do try it and send me your feedback. </p>
