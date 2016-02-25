---
title:  Fix for Wordpress Media Upload Http Error on Nginx
---

## The Error

I ran into an issue when **uploading large files to Wordpress** using the new drag and drop media uploader. The file would upload to 100% then immediatly show an enigmatic error message: **"Http error"**. It looked like this:

![Wordpress media upload http error screenshot](/images/development/wordpress-media-upload-http-error.png)

Switching to Wordpress' alternative uploader (http://mywordpresssite.com/wp-admin/media-new.php?browser-uploader) revealed a bit more information about the issue and led to it's diagnosis:

![Nginx error message screenshot](/images/development/wordpress-media-upload-http-error-nginx-error-message.png)

## The Fix

The solution was to increase the maximum size of file uploads in Nginx. **Find your nginx config file** and add the following line to it:

<script src="https://gist.github.com/maxmumford/ffa01471c0498a2d3ff2.js"></script>

20M means the file uploads can be up to 20 megabytes. After setting it, restart your nginx service and you should be good to go!

## Didn't work for you?

This error message is a bit notorious among Wordpress developers as being difficult to diagnose. Wordpress' Otto42 published a post with a bunch of possible fixes which you can find [here](https://wordpress.org/support/topic/25-imagemedia-uploader-problems?replies=1), probably a good place to start. Good luck!
