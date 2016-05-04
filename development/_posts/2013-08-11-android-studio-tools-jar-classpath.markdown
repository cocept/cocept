---
title: Android Studio Ubuntu Classpath
redirect_from:
  - /how-to/android-studio-ubuntu-tools-jar-is-not-in-the-android-studio-classpath-please-ensure-java_home-points-to-jdk-rather-than-jre/
  - /posts/34-android-studio-ubuntu-toolsjar-is-not-in-the-android-studio-classpath-please-ensure-javahome-points-to-jdk-rather-than-jre/
---

When setting up&nbsp;<strong>Android Studio</strong> on <b>Ubuntu&nbsp;</b>you might get the following error message:

<script src="https://gist.github.com/maxmumford/7719073.js"></script>

This is caused by having&nbsp;<strong>JAVA JRE&nbsp;</strong>installed&nbsp;<strong>as opposed to JAVA JDK.</strong>

The solution is simple:

<ul>
	<li><strong>sudo apt-get install openjdk-7-jdk</strong></li>
</ul>
