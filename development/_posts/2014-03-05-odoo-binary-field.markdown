---
title: Odoo (Formerly OpenERP) Functional Binary Field
redirect_from:
  - /posts/39-openerp-functional-binary-field/
---

In order to have more flexible file serving functionality within Odoo, you can swap out binary fields for a functional field that returns the contents of your file. Below is a sample class that **loads a file's contents** from a **file system path** and serves it to the user using a **functional field**. It was originally built for version 6.0 but should work on newer versions too:

<script src="https://gist.github.com/maxmumford/9371147.js"></script>
