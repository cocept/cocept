---
title: Track Outbound Links to New Windows with Google Analytics
redirect_from:
  - /posts/40-track-outbound-links-to-new-windows-with-google-analytics/
---

<p>You can use Google Analytics to track when a user clicks on a link that takes them to an external website using the code snippet in the link below:</p>

<p><a href="https://support.google.com/analytics/answer/1136920?hl=en">https://support.google.com/analytics/answer/1136920?hl=en</a></p>

<p>However this method is <strong>flawed </strong>as it opens all links in the same window, regardless of the &quot;target&quot; attribute on the link. To get&nbsp;<strong>full link target support</strong>, use the code snippet below. In this example it is used in conjunction with a small <strong>jquery </strong>snippet to automatically track all links with the class &quot;track&quot; on a page.</p>

<p><script src="https://gist.github.com/maxmumford/9832776.js"></script></p>

<p><script src="https://gist.github.com/maxmumford/9832796.js"></script></p>
