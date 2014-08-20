---
title: Fingerprint Not Appended to Assets When Deploying in Production
redirect_from:
  - /posts/37-fingerprint-not-appended-to-assets-when-deploying-in-production/
---

<p>When deploying your rails 4 app, you might experience a problem where the<strong> fingerprint is not appended</strong> to the <strong>assets name</strong> on your HTML when you deploy into <strong>production</strong>. To solve this issue:</p>
<script src="https://gist.github.com/maxmumford/7790163.js"></script>

<p>Each time your assets <strong>change</strong> you should <strong>clean</strong> and re-<strong>pre-compile</strong> them like this:</p>
<script src="https://gist.github.com/maxmumford/7790203.js"></script>

<p>Hint: You can also add the following to ~/.<strong>bashrc </strong>and you won&#39;t have to keep specifying that you&#39;re in<strong> production mode</strong>:</p>
<script src="https://gist.github.com/maxmumford/7790170.js"></script>
