---
layout: post
title: Strings, search and sanity.
date: 2018-03-14 22:29:54.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- notes
tags:
- dev
- Levenshtein
- notes
- search
- strings
meta: {}
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2018/03/14/strings-search-and-sanity/"
---
<p>Searching for content and matching it in lists in most such apps is trivially done by checking if your search input matches the title of an article or similar. This is great. <strong>It has worked</strong> for many years. However, the method naively skips out on a lot of information already available to the app. For example</p>
<ul>
<li>Author’s name (when there are multiple people authoring on a website)</li>
<li>Date of publication (and matches to words like “Today”, “Yesterday” and the like)</li>
<li>Summaries</li>
</ul>
<p>All of the above may contain information you could be searching for. Being stuck with trying to remember the name of the article you read last Sunday and finding it now is a b****. I’ve been in this position many times myself. Yes, bookmarking can save your bacon. But that method has a big single point of failure: what if you forgot to bookmark it? </p>
<p>An well produced app should save you from this situation. It should save me from this situation. Depending on your current device, you may or not be able to see the tags on this post. I’ve included <span style="text-decoration: underline;">Levenshtein</span> in there. If you’ve ever heard of Levenshtein distance, you’ll be familiar with how it works. If you haven’t, it’s simply a <strong>“score” </strong>of how similar or dissimilar two pieces of text are. </p>
<p>Levenshtein distance is also calculated and matched against the title and summary to provide a loosely typed searching experience. So you simply need to know the “general” direction of where you’re going, and not the precise location. </p>
<p>You may think this is a lot for a simple text-based search operation. It isn’t. I wonder why many haven’t already done something like this. </p>
