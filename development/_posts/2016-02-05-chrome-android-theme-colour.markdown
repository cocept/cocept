---
title: Changing the Colour of the Toolbar in Chrome on Android
---

You might have noticed a dash of colour injected into Chrome for Android lately, particularly if you visited the mobile version of this site:

![Coloured toolbar in chrome for android](/images/development/chrome-android-toolbar-colour.png)

This [nifty new feature](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android?hl=en) was released by Google late last year in version 39. Implementation is very simple, just add the following META tag to the <head> section of your page, swapping the hex colour for any valid css colour value:

{% highlight html %}
<meta name="theme-color" content="#ff4081">
{% endhighlight %}

Enjoy!

