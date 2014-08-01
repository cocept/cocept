---
title: Amazon Elastic Beanstalk PIL JPEG Support
redirect_from:
  - /posts/42-amazon-elastic-beanstalk-pil-jpeg-support
---

<p>The error message &quot;<strong>decoder jpeg not available</strong>&quot; in your Amazon Elastic Beanstalk instance means you are trying to use PIL with a jpg image but don&#39;t have the required software installed on the server to perform the decoding. To have the required software installed when your EB server is created, edit your EB extension file (usually located at&nbsp;<strong>.ebextensions/python.config</strong>) to add the following lines:</p>
<script src="https://gist.github.com/anonymous/10584479.js"></script>

<p>This will install the libjpeg binaries when deploying your application, providing PIL with jpg decoding support.</p>

<p>Click <a href="http://maxmakedesign.co.uk/posts/43-install-pil-on-amazon-beanstalk">here</a>&nbsp;for instructions on how to install PIL on an AWS EB instance.</p>
