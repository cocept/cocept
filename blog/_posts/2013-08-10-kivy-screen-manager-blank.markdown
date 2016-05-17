---
category: development
title: Kivy Screen Manager Blank
redirect_from:
  - /how-to/kivy-screen-manager-blank/
  - /posts/31-kivy-screen-manager-blank/
  - /development/2013/kivy-screen-manager-blank/
---

<p>Following the <a href="http://kivy.org/">Kivy</a> <a href="http://kivy.org/docs/api-kivy.uix.screenmanager.html">Screen Manager</a> tutorial <a href="http://kivy.org/docs/api-kivy.uix.screenmanager.html">here</a> might prompt you to define your Screen Manager outside of your app class so you have access to it everywhere. Like this however, you will find that your <strong>screens are blank</strong> and <strong>ignore your KV layout file</strong>!&nbsp;The fix to this is simple:</p>

<ul>
	<li><strong>Add it to build method in your app</strong> class:</li>
</ul>
<script src="https://gist.github.com/maxmumford/7719012.js"></script>