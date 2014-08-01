---
title: Flask File Upload Connection Reset 
redirect_from:
  - /posts/41-flask-file-upload-connection-reset
---

<p>While following the Flask file upload tutorial <a href="http://flask.pocoo.org/docs/patterns/fileuploads/">here</a>, you might get a &quot;<strong>This webpage is not available</strong>&quot; message due to the connection being interrupted (<strong>ERR_CONNECTION_RESET</strong>). This is due to a problem with how modern browsers interact with the <strong>Werkzeug </strong><a href="http://en.wikipedia.org/wiki/Web_Server_Gateway_Interface">WGSI</a>.</p>

<p>To fix this we need to make a small adjustment to Werkzeug&#39;s behaviour. Add the below snippet to your application, where <strong>app is the flask application</strong>:</p>

<p><script src="https://gist.github.com/anonymous/10536614.js"></script></p>

<p>Thanks to&nbsp;Armin Ronacher&#39;s snippet found here:&nbsp;<a href="http://flask.pocoo.org/snippets/47/">http://flask.pocoo.org/snippets/47/</a></p>
