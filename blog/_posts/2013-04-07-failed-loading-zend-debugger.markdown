---
category: development
title: Failed loading ZendDebugger cannot open shared object file
redirect_from:
  - /how-to/failed-loading-zenddebugger-so-libssl-so-0-9-8-cannot-open-shared-object-file-no-such-file-or-directory/
  - /posts/27-failed-loading-zenddebuggerso-libsslso098-cannot-open-shared-object-file-no-such-file-or-directory/
  - /development/2013/failed-loading-zend-debugger/
---

<p>If you get the following error while trying to install ZendDebugger with Xampp 32 bit on a 64 bit machine but <strong>already have libssl installed</strong>, you might need to install libssl 32 bit! Try:</p>
<script src="https://gist.github.com/maxmumford/7718774.js"></script>

<p>Good luck</p>
