---
title: Umbraco HTTP Error 500.19
redirect_from:
  - /how-to/http-error-500-19
  - /posts/10-umbraco-http-error-50019-the-requested-page-cannot-be-accessed
---

<p>When setting up Umbraco with IIS on Windows you may encounter the following error page: &nbsp;</p>

<p><img alt="" src="/images/development/umbraco-http-500-19-stack-trace.png" /></p>

<p>This is because the asp.net code interpreter for IIS has not been properly installed, so when trying to read the web.config file there are parts IIS does not understand. To rectify this, complete the following steps:</p>

<ul>
	<li>Click Start</li>
	<li>Type &quot;Windows Features&quot; and click the option called &quot;Turn windows features on or off&quot;</li>
	<li>Scroll down to expand &quot;Internet Information Services&quot; then &quot;World Wide Web Services&quot;</li>
	<li>Make your settings under this option look like the screen shot below:</li>
</ul>

<p><img alt="" src="/images/development/umbraco-http-500-19-add-remove-components.png" /></p>

<p>&nbsp;And that should do it! Good luck and have fun with Umbraco.</p>
