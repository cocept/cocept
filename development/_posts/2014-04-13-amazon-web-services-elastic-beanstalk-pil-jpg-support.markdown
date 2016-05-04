---
title: Amazon Elastic Beanstalk PIL JPEG Support
redirect_from:
  - /posts/42-amazon-elastic-beanstalk-pil-jpeg-support/
---

The error message "**decoder jpeg not available**" in your Amazon Elastic Beanstalk instance means you are trying to use PIL with a jpg image but don't have the required software installed on the server to perform the decoding. To have the required software installed when your EB server is created, edit your EB extension file (usually located at **.ebextensions/python.config**) to add the following lines:

<script src="https://gist.github.com/anonymous/10584479.js"></script>

This will install the libjpeg binaries when deploying your application, providing PIL with jpg decoding support.

Click [here](/posts/43-install-pil-on-amazon-beanstalk) for instructions on how to install PIL on an AWS EB instance.
