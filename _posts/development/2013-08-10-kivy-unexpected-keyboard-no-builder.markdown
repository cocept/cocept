---
title: Kivy unexpected keyword argument '__no_builder'
redirect_from:
  - /how-to/kivy-unexpected-keyword-argument-__no_builder
  - /posts/32-kivy-unexpected-keyword-argument-nobuilder
---

<p>This error comes from&nbsp;<strong>subclassing a widget&nbsp;</strong>and&nbsp;<strong>overriding __init__ without **kwargs</strong>.</p>

<ul>
	<li>This:</li>
</ul>
<script src="https://gist.github.com/maxmumford/7719028.js"></script>

<ul>
	<li>Should be this:</li>
</ul>
<script src="https://gist.github.com/maxmumford/7719033.js"></script>
