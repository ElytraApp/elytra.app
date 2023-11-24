---
layout: post
title: Moving to Sign In with Apple
date: 2019-09-25 15:18:22.000000000 +05:30
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- alpha
- notes
- webservice
tags:
- alpha
- ntoes
- webservice
meta:
  _wpas_done_all: '1'
author:
  login: user
  email: user@example.com
  display_name: Nikhil
  first_name: Nikhil
  last_name: Nigade
permalink: "/blog/2019/09/25/moving-to-sign-in-with-apple/"
---
<p>For v1.5, which will be a supplementary update to the <a href="https://blog.elytra.app/2019/09/19/v1-4-fall-2019-update/">v1.4 Fall update</a>, I’m considering moving the authentication system to <strong>Sign In with Apple</strong>. I’ve just finished testing this system and it works as advertised, however it took much much longer than it should have. </p>
<p>It works well on iOS, as well as the web. This is very important for me as all previous mechanisms I had looked into to link the session in your browser to the iOS app had too many steps.</p>
<p><strong>Sign In with Apple</strong> is by far the most efficient system and still ends up giving me a single User ID to work with, no emails, no names, nothing. So it also keeps in line with Elytra’s Privacy Policy.</p>
<p>These changes should become available in the following weeks as I publish the v1.5 Beta Builds to TestFlight  for preliminary testing. All new users will have to use Sign In with Apple ID. All existing users will have to migrate their account to it, which I’m trying to keep simple. </p>
