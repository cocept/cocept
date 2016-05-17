---
category: development
title: Rails 4 CKEditor uninitialized constant Ckeditor::Orm
redirect_from: 
 - /posts/38-railes-4-ckeditor-uninitialized-constant-ckeditororm/
 - /development/2014/rails-ckeditor-uninitialized-constant/
---

With **Rails 4** you may get the following traceback when trying to use the **CKEditor** gem:

<script src="https://gist.github.com/maxmumford/8283384.js"></script>

The solution is to add the below code to the&nbsp;**app/models/ckeditor/asset.rb** file:

<script src="https://gist.github.com/maxmumford/8283421.js"></script>
