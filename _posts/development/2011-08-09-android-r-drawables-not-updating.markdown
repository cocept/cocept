---
title: Android R.drawables not updating in Eclipse
redirect_from:
  - /how-to/android-r-drawables-not-updating-in-eclipse
  - /posts/14-android-rdrawables-not-updating-in-eclipse
---

<p>If your R.java class is not being auto updated by eclipse for new files in a &quot;drawables&quot; directory that you created, it is because the drawable folders that existed originally (drawables-hdpi, drawables-ldpi &amp;amp; drawables-mdpi - which stand for drawables high, low and medium DPI) all resolve to the class R.drawables instead of R.drawables-hdpi etc.</p>

<p>Creating a new &quot;drawables&quot; folder causes Eclipse to throw an error because it would technically lead to a duplicate class - hence the little red cross on your &quot;drawables&quot; folder.</p>

<p><strong>You should move all your images into one of these pre-existing folders then delete the drawables folder you created. Then the references will work as expected.</strong></p>
