---
title: Fingerprint Not Appended to Assets When Deploying in Production
redirect_from:
  - /posts/37-fingerprint-not-appended-to-assets-when-deploying-in-production/
---

When deploying your rails 4 app, you might experience a problem where the** fingerprint is not appended** to the **assets name** on your HTML when you deploy into **production**. To solve this issue:

<script src="https://gist.github.com/maxmumford/7790163.js"></script>

Each time your assets **change** you should **clean** and re-**pre-compile** them like this:

<script src="https://gist.github.com/maxmumford/7790203.js"></script>

Hint: You can also add the following to ~/.**bashrc **and you won&#39;t have to keep specifying that you&#39;re in** production mode**:

<script src="https://gist.github.com/maxmumford/7790170.js"></script>
