---
category: development
title: Create an OpenERP Webkit Report from Scratch
redirect_from:
  - /how-to/create-openerp-webkit-report-from-scratch/
  - /posts/36-create-an-openerp-webkit-report-from-scratch/
  - /development/2013/openerp-webkit-report-creation/
  - /development/2013/openerp-webkit
  - /development/2013/openerp
---

<p>This guide will help you prepare your OpenERP instance to use the Webkit reporting engine - a reporting engine rendered by webkit and powered by HTML and Python mako templates.</p>

<p>It assumes you are using OpenERP version 6.1, but the steps won&#39;t be too different for newer versions. If you are successful with other versions please let me know with a comment so I can update these notes for future users :)</p>

<h1>Installation</h1>

<ul>
	<li><strong>Install</strong> the <strong>report_webkit module</strong> and optional report_webkit_sample module (recommended for first time use)</li>
	<li>Download the&nbsp;<strong>wkhtmltopdf</strong> package from&nbsp;<a href="http://wkhtmltopdf.org/downloads.html">here</a>. To choose the correct file:
	<ul>
		<li>Make sure the filename column says wkhtmltopdf</li>
		<li>Make sure the Summary + Labels column has your operating system in it</li>
	</ul>
	</li>
	<li><strong>Extract</strong> the file to a safe place on your computer
	<ul>
		<li>For Windows, something like c:\program files\openerp\wkhtmltopdf</li>
		<li>For linux, something like /usr/share/openerp/wkhtmltopdf</li>
	</ul>
	</li>
	<li>Tell <strong>OpenERP</strong> <strong>where</strong> to find <strong>wkhtmltopdf</strong>:
	<ul>
		<li>Go to Settings &gt;&nbsp;Configuration &gt;&nbsp;Parameters &gt;&nbsp;System Parameters</li>
		<li>Create a record with name &lsquo;<strong>webkit_path</strong>&rsquo; and set the value to the absolute path to the binary you downloaded earlier</li>
	</ul>
	</li>
</ul>

<h3><em>Tips for Ubuntu users:</em></h3>

<ul>
	<li>Make sure the wkhtmltopdf deb package is uninstalled
	<ul>
		<li><code>sudo apt-get remove wkhtmltopdf</code></li>
	</ul>
	</li>
	<li>Install the pre-requisites:
	<ul>
		<li><code>sudo apt-get build-dep libqt4-gui libqt4-network libqt4-webkit </code></li>
		<li><code>sudo apt-get install openssl build-essential xorg git-core git-doc libssl-dev</code></li>
	</ul>
	</li>
</ul>

<h1>&nbsp;Create a Report</h1>

<ul>
	<li>First, <strong>create a report</strong>&nbsp;record similar to the one in the screen shot below, by going to:

	<ul>
		<li><strong>v6.0 / 6.1</strong> Settings &gt; Customization &gt; Low Level Objects &gt; Actions &gt; Reports</li>
		<li><strong>v7</strong> Settings &gt; Technical &gt; Actions &gt; reports</li>
	</ul>
	</li>
</ul>

<p><img alt="" src="/images/development/openerp-webkit-report-creation-action.png" /></p>

<p>(Notice the Webkit tab only appears once you have set the Report Type to webkit)</p>

<ul>
	<li>Once you have saved your report record, <strong>make a note of it&#39;s ID</strong> from the URL. It will look something like this:&nbsp;#id=987</li>
</ul>

<p><img alt="" src="/images/development/openerp-webkit-report-creation-url.png" /></p>

<ul>
	<li>Now <strong>create an Action Binding</strong>&nbsp;similar to the one in the screenshot below by going to:

	<ul>
		<li><strong>v6.0 / 6.1:</strong> Settings &gt; Customization &gt; Low Level Objects &gt; Actions &gt; Action Bindings</li>
		<li><strong>v7</strong> Settings &gt; Technical &gt; Actions &gt; Action Bindings</li>
	</ul>
	</li>
</ul>

<p><img alt="" src="/images/development/openerp-webkit-report-creation-binding.png" /></p>

<ul>
	<li>Navigate back to your <strong>Report record</strong> and in the <strong>WebKit tab</strong>, paste the code from the file you can <strong>download</strong> below:</li>
</ul>

<h3>Download Example Mako:&nbsp;<a href="https://drive.google.com/file/d/0B9fGr6w-dfLWSF9ic3NFeTM5dDQ/edit?usp=sharing">webkit_demo.mako</a></h3>

<hr />
<p>All done. You should now be able to browse to the object that you created your report for and generate the report!</p>

<p>Also, check out the&nbsp;<a href="http://docs.makotemplates.org/en/latest/syntax.html">mako syntax</a>&nbsp;and the webkit reports included inside the&nbsp;report_webkit_samples&nbsp;for some help writing your own Mako</p>

<p>Note: To change headers, footers and logos, you must setup your WebKit Headers/Footers and WebKit Images by going to Settings &gt; Companies &gt; WebKit.&nbsp;To then make a report use these headers and footers, make sure you <strong>untick</strong>&nbsp;&ldquo;Add RML header&rdquo; and <strong>create / choose a webkit header / footer&nbsp;</strong>on the webkit tab</p>
