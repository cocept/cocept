---
category: development
title: Jekyll is adding .html file extension despite permalink
redirect_from:
 - /development/2016/jekyll-adding-html-file-extension-despite-permalink/
---

If you want to remove the .html file extension from your jekyll permalinks, you must **include a trailing slash**:

### Incorrect

<script src="https://gist.github.com/maxmumford/4c8136f10f6f426848e8.js"></script>

### Correct

<script src="https://gist.github.com/maxmumford/3e5fbe621f59b58e797a.js"></script>
