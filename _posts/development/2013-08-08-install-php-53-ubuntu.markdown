---
title: Install PHP 5.3 on Ubuntu
redirect_from:
  - /how-to/install-php-5-3-on-ubuntu
  - /posts/29-install-php-53-on-ubuntu
---

<p>Installing php 5.3 on Ubuntu can be a bit tricky. Luckily, some kind *nix wiz made the following bash script that will<strong> downgrade your existing php 5 installation</strong> to version 5.3.</p>

<ul>
	<li>Simply place the code below in a file called downgrade.sh (Or download it <a href="https://docs.google.com/file/d/0B9fGr6w-dfLWQXZMWU5jNTRldkU/edit?usp=sharing">here</a>)</li>
</ul>
<script src="https://gist.github.com/maxmumford/7718932.js"></script>

<ul>
	<li>Set the permissions with <strong>sudo chmod 755 ./downgrade.sh</strong></li>
	<li>Then run it with <strong>sudo ./downgrade.sh</strong></li>
</ul>

<p>And voila! Your PHP version will be downgraded to 5.3.</p>

<p><em><span class="highlight">Disclaimer</span>:&nbsp;Test out this script on a staging server first - it could cause problems!&nbsp;If it makes your computer explode, shoots down passing aircraft or sends shockwaves through the earth triggering worldwide volcano eruptions (or any other catastrophes)... Me and my keyboard are not responsible.</em></p>
