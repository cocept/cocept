---
title: Lithium Could not write compiled template - Ubuntu
redirect_from:
  - /how-to/lithium-could-not-write-compiled-template-ubuntu
  - /posts/33-lithium-could-not-write-compiled-template-ubuntu
---

<p>When setting up the Lithium PHP Web Framework it is necessary to allocate the correct <strong>permissions</strong> to the<strong> app/resources</strong> folder, otherwise you will get a message like the one below, when Lithium tries to write the view cache files:</p>
<script src="https://gist.github.com/maxmumford/7719059.js"></script>

<p>The solution is simple, but not very well documented:</p>

<ul>
	<li><strong><span style="line-height: 16px;">sudo chmod 777 path_to_app/resources -R</span></strong></li>
</ul>

<p>And voila! Your permissions are setup and you should now have a working Lithium instance.</p>

<p>Alternatively, you can use <a href="https://gist.github.com/mehlah/1009460">this script</a> to have any missing directories and file permissions setup by Lithium when it encounters this error.</p>
