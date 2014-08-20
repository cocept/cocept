---
title: Android Use Classes From Another Project in Eclipse
redirect_from:
  - /how-to/android-use-classes-from-another-project-in-eclipse/
  - /posts/25-android-use-classes-from-another-project-in-eclipse/
---

<p>A good project architecture&nbsp;separates&nbsp;abstracted code into different projects. This short article shows how to implement this when developing for Android in Eclipse:</p>

<p><strong>Note: </strong>Your code library project must be an &quot;Android Project&quot; for this to work</p>

<p><strong>Step 1) </strong>Right click on your code library project and click &quot;<strong>Properties</strong>&quot;</p>

<p><strong>Step 2) </strong>Click on the &quot;<strong>Android</strong>&quot; tab</p>

<p><strong>Step 3) </strong>Click the &quot;<strong>Is Library</strong>&quot; checkbox then click &quot;OK&quot;:</p>

<p><img alt="" src="/images/development/android-class-other-project-settings.png" /></p>

<p><strong>Step 4)</strong> Right click on the other (<strong>non-library</strong>) Android project and click &quot;<strong>Properties</strong>&quot;</p>

<p><strong>Step 5)</strong> Click on the &quot;<strong>Android</strong>&quot; tab</p>

<p><strong>Step 6)</strong> Click the &quot;<strong>Add</strong>&quot; button in the &quot;Library&quot; section</p>

<p><strong>Step 7)</strong> Select the project that you made into a library earlier and click &quot;<strong>OK</strong>&quot;:</p>

<p><img alt="" src="/images/development/android-class-other-project-build.png" /></p>

<p>Click <strong>OK</strong> again and and you will now be able to import classes from the library project and use them! :)</p>
