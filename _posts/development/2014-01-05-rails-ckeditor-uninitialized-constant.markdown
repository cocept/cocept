---
title: Rails 4 CKEditor uninitialized constant Ckeditor::Orm
redirect_from: /posts/38-railes-4-ckeditor-uninitialized-constant-ckeditororm/
---

<p>With <strong>Rails 4</strong> you may get the following traceback when trying to use the <strong>CKEditor</strong> gem:</p>
<script src="https://gist.github.com/maxmumford/8283384.js"></script>

<p>The solution is to add the below code to the&nbsp;<strong>app/models/ckeditor/asset.rb</strong> file:</p>
<script src="https://gist.github.com/maxmumford/8283421.js"></script>
