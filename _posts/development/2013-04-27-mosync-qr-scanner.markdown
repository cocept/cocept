---
title: MoSync QR Code Scanner
redirect_from:
  - /how-to/mosync-javascript-qr-decoder
  - /posts/28-mosync-qr-code-scanner
---

<h2>Introduction</h2>

<p>In this tutorial I will show you how to easily create a cross-device QR code decoder using nothing but <a href="http://www.mosync.com/">MoSync</a>, HTML 5 and a couple of Javascript libraries.</p>

<p>I will assume you already have a blank MoSync project setup that you can work on.</p>

<p>Scroll to the bottom of this tutorial to download an example project.</p>

<h2>Method</h2>

<p>1) <strong>Download</strong> all the <strong>QR Decoder JS </strong>source files from here:&nbsp;<a href="https://github.com/LazarSoft/jsqrcode/tree/master/src">https://github.com/LazarSoft/jsqrcode/tree/master/src</a></p>

<p>2) As per the instructions in the readme, <strong>include all of them in your index file</strong> (Android is <strong>case sensitive </strong>so make sure you check all the file paths carefully!</p>
<script src="https://gist.github.com/maxmumford/7718816.js"></script>

<p>3) Download <strong>jQuery</strong> from here: <a href="http://jquery.com/download/">http://jquery.com/download/</a>&nbsp;and include it into the head of your index.html file</p>
<script src="https://gist.github.com/maxmumford/7718831.js"></script>

<p>4) <strong>Add</strong> the below <strong>javascript</strong> to your <strong>page</strong>. It contains the functions that open the MoSync camera, grab the photo that the user took, hand it to the qr decoder and display the result as an alert:</p>
<script src="https://gist.github.com/maxmumford/7718842.js"></script>

<p>5) Now add the <strong>button</strong> <strong>code</strong> below to call out getImage function:</p>
<script src="https://gist.github.com/maxmumford/7718847.js"></script>

<p>And voila! You should have a fully functioning MoSync QR code decoder using pure javascript :)</p>

<h3><a href="https://github.com/maxmumford/mosync-qr-scanner" title="Download Full Solution Here">The full solution can be found on github by clicking here</a></h3>

<p>If you are facing any difficulties, you can refer to the download at the above link to get all of the code in a package. Remember though, that the download contains files like the mosync debug script, which might now be outdated.</p>

<p>Thanks go to <a href="http://thewebthought.blogspot.com/2012/11/jquery-and-javascript-generate-and-read.html">&quot;The Web Spot&quot;</a> for the original code I then adapted to Mosync, and <a href="https://github.com/LazarSoft/jsqrcode/tree/master/src">LazarSoft</a> for their beautiful javascript QR code debugger plugin - we love you!!!</p>
