---
title: Dependency issues after downgrading PHP 5.4 to 5.3 on Ubuntu
redirect_from:
  - /how-to/dependency-issues-after-downgrading-php-5-4-to-5-3-on-ubuntu/
  - /posts/30-dependency-issues-after-downgrading-php-54-to-53-on-ubuntu/
---

<p>After using the <strong>php version downgrade script</strong> to downgrade your PHP version from 5.4 to 5.3, you might experience an issue where <strong>installing php plugins</strong> leads to the below&nbsp;<strong>dependency errors</strong>. In my case, I was installing a list of packages as advised on <a href="http://www.howtoforge.com/installing-apache2-with-php5-and-mysql-support-on-ubuntu-11.04-lamp">this guide</a>.</p>
<script src="https://gist.github.com/maxmumford/7718983.js"></script>

<p><strong><span class="highlight">Update</span></strong>: A new, simpler solution can be found here:&nbsp;</p>

<p><strong><a href="http://iblog.ikarius.net/index.php/2013/05/01/unmet-dependencies-after-downgrading-php-5-4-to-5-3/" target="_blank">http://iblog.ikarius.net/index.php/2013/05/01/unmet-dependencies-after-downgrading-php-5-4-to-5-3/</a></strong></p>

<p>To fix this, you have to unintall PHP 5.3, reinstall PHP 5.4, install your packages, and re-downgrade:</p>

<ul>
	<li><span style="line-height: 13px;">sudo apt-get remove php5-common</span></li>
	<li>mv&nbsp;/etc/apt/preferences.d/php5_3 ~/ # move file that tells apt to install version 5.3</li>
	<li>sudo apt-get install php5-common</li>
</ul>

<p>You can then <strong>install</strong> your <strong>plugins</strong> and re-run the <strong>downgrade</strong> script and everything should work :)</p>

<p><em>Thanks to <a href="http://iblog.ikarius.net/index.php/2013/05/01/unmet-dependencies-after-downgrading-php-5-4-to-5-3/">ikarius.net</a> for pointing me in the right direction</em></p>
