---
title: What is PHP-GTD? How do you install it?
redirect_from:
  - /how-to/what-is-php-gtd-how-do-you-install-it
  - /posts/6-what-is-phpgtd-how-do-you-install-it
---

<h1>Introduction</h1>

<p>From time to time we all get a bit <strong>overwhelmed</strong> trying to keep track of everything that&rsquo;s on our mental to-do list, and when we&rsquo;re feeling like this it&rsquo;s hard to stay <strong>focussed</strong> and just <strong>get things done </strong>&ndash; it&rsquo;s a catch 22. Well, GTD stands for &ldquo;Getting Things Done&rdquo;, an acronym coined by a man called David Allen. He wrote a book about getting things done, which describes how you need to first empty your mind of all the clutter before taking on specific tasks. This process allows you to become much more focused and, well, get things done.</p>

<p>From the theory of GTD comes PHP-GTD &ndash; a bundle of PHP scripts which help you get all of your projects, next actions, to do lists, ideas and prospective future actions into a physical form and out of your head. Essentially a GTD tailored itinerary. The software is free and does actually work, I use it myself. It takes a bit of getting used to but I will describe how to use it later in this tutorial.</p>

<h1>Installation</h1>

<p>Follow the steps in the bullet list below:</p>

<ul>
	<li>First, download a copy of the PHP-GTD source code from the link below:
	<ul>
		<li><a href="http://www.gtd-php.com/Main/Download" target="_blank" title="Download PHP-GTD">http://www.gtd-php.com/Main/Download</a></li>
	</ul>
	</li>
	<li>Open your download and unzip everything from the &ldquo;trunk&rdquo; subfolder to a directory on your website &ndash; I keep mine in a directory called GTD. Note:
	<ul>
		<li>It should be quickly and easily accessible</li>
		<li>Double check all the files were actually copied across &ndash; it seems trivial but for some reason, twice, 44 out of 65 files were properly copied and the rest were not so I had to manually copy them over.</li>
	</ul>
	</li>
	<li>Find the file called &ldquo;config.sample.php&rdquo; and rename it &ldquo;config.php&rdquo;</li>
	<li>Open the &ldquo;config.php&rdquo; file and enter your database details in the &ldquo;$config&rdquo; array
	<ul>
		<li>A prefix is not required but generally good practice when using one database for more than one purpose</li>
	</ul>
	</li>
</ul>
<script src="https://gist.github.com/maxmumford/7695115.js"></script>

<ul>
	<li>Next, upload the entire directory to your website</li>
	<li>Now in your web browser, navigate to the install.php file in your GTD directory (e.g. example.com/gtd/install.php) and you will be taken to the configuration page.</li>
	<li>Select &ldquo;New install with sample data&rdquo; and click install</li>
	<li>Next you will see a confirmation screen saying &ldquo;Installation complete&rdquo;. Click the link saying &ldquo;Let&rsquo;s begin&rdquo;</li>
</ul>

<p>And you&rsquo;re done!&nbsp;See below for common errors when installing PHP-GTD and a quick guide on how to use it.</p>

<h1>Using PHP-GTD</h1>

<p>PHP-GTD is set out into three main categories &ndash; Capture, process and review.</p>

<h3>Capture</h3>

<p>Use this to quickly note down what&rsquo;s in your head &ndash; a project, next action, waiting-on etc.</p>

<h3>Process</h3>

<p>This section allows you to properly set up the items you captured throughout the week and sort them into categories, projects etc.</p>

<h3>Review</h3>

<p>At the end of each week or throughout the week you should review all your items, keep them organised and ontop of them. The PHP-GTD main page gives details of deadlines that are coming up and lists all your projects for easy access.</p>

<h3>Common error messages</h3>

<ul>
	<li>Forbidden &ndash; You don&rsquo;t have permission to access /temp/GTD/ on this server.
	<ul>
		<li>This error happens if you have not correctly followed the steps about the config and install files.</li>
	</ul>
	</li>
</ul>
