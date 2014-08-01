---
title: Odoo (Formerly OpenERP) Functional Binary Field
redirect_from:
  - /posts/39-openerp-functional-binary-field
---

<p>In order to have more flexible file serving functionality within Odoo, you can swap out binary fields for a functional field that returns the contents of your file. Below is a sample class that <strong>loads a file&#39;s contents</strong> from a <strong>file system path</strong> and serves it to the user using a <strong>functional field</strong>. It was originally built for version 6.0 but should work on newer versions too:</p>
<script src="https://gist.github.com/maxmumford/9371147.js"></script>