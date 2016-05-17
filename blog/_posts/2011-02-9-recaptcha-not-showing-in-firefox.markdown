---
category: development
title: ReCaptcha Not Showing in Firefox
redirect_from:
  - /how-to/recaptcha-not-showing-in-firefox-–-recaptcha-widget-is-null-–-firefox-recaptcha-error/
  - /posts/5-recaptcha-not-showing-in-firefox-recaptchawidget-is-null-firefox-recaptcha-error/
  - /development/2011/recaptcha-not-showing-in-firefox/
---

<p>After successfully integrating <strong>Recaptcha</strong> in my site and it working on Chrome, Safari, Opera &amp;amp; IE8 (shock!) I saw that <strong>Firefox</strong> was <strong>rendering</strong>&hellip; absolutely <strong>nothing</strong>. A quick Google search didn&rsquo;t really yield any useful results so after a bit of time spent digging I found a solution posted in a Google group that I&rsquo;m going to post here.</p>

<p>The solution works by slightly changing how Recaptcha renders it&rsquo;s HTML &ndash; the HTML it <em>was</em>&nbsp;rendering before this fix was incorrect therefore it failing in Firefox.</p>

<p>One thing to note, however, is that in order for this to work you have to use <strong>XHTML 1:0 Transtitional Doctype</strong> which is by no means good for integration &ndash; I cannot use this because it would mean spending HOURS reformatting my site to work properly with this doctype.</p>

<p>Despite this, some people may find it useful so here it is:</p>

<p><span class="disport">Note:&nbsp;You must&nbsp;include all information in the head&nbsp;tags or it will not work!</span></p>

<p><script src="https://gist.github.com/maxmumford/7694999.js"></script></p>

<p>Obviously swap the &ldquo;xxxxxxxxxx&rdquo;s for their relevant values and voila &ndash; test in Firefox and it should work.</p>

<p>Thanks to goaamb on <a href="http://groups.google.com/group/recaptcha/browse_thread/thread/ba9bc8cf13bd8e3b">Google Groups</a> for this solution.</p>
