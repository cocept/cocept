---
category: development
title: Android - Add views in a loop
redirect_from:
  - /how-to/android-add-views-in-a-loop/
  - /posts/16-android-add-views-in-a-loop/
  - /development/2011/android-add-views-in-a-loop/
---

<p>Sometimes you need to <strong>dynamically create</strong> an <strong>unknown number </strong>of<strong> views</strong> - for example rows of data in a table. Because you cannot add the same view more than once without recreating it in a new variable, this is not as straight forward as one would think.</p>

<p>Take a look at the example below which <strong>loops through </strong>an<strong> array of information</strong>, then for each element, <strong>creates a view</strong>, <strong>adds that view to a list of views</strong> then <strong>loops</strong> through the <strong>list</strong> of views and <strong>appends</strong> each one to a LinearLayout element..</p>
<script src="https://gist.github.com/maxmumford/7695646.js"></script>
