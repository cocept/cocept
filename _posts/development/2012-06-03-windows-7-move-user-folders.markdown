---
title: Move All User Folders to Another Hard Drive - Windows 7
redirect_from:
  - /how-to/move-all-user-folders-to-another-hard-drive-windows-7/
  - /posts/26-move-all-user-folders-to-another-hard-drive-windows-7/
---

<p>Sometimes, especially if you have a nice new shiny solid state drive (like me), you will want to put all the user files and folders (Documents, Videos, AppData etc) onto a hard drive different to where your operating system is stored.&nbsp;</p>

<p>This simple tutorial will<strong> move all you your existing users files and folders to your second hard drive </strong>and<strong> create a &quot;symlink&quot; </strong>which will tell anybody wanting to use the original file location (C:\Users) to use D:\Users instead.</p>

<p>This means you don&#39;t have to mess around with the registry or any other fiddly windows settings.</p>

<p>Thanks to <a href="http://lifehacker.com/comment/19221871">&quot;Roobs&quot; on LifeHacker</a> for detailing this method. Obviously, follow these instructions at your own risk. Some level of knowledge is assumed. I used this method for my home computer and I know it works :)</p>

<h1>Instructions</h1>

<p>We will refer to the drive that currently contains your user files as the <strong>C drive</strong> and the destination drive for your user files as the <strong>D drive</strong>.</p>

<p>You will need your <strong>Windows installation disk</strong>. If you do not have it, you can download an ISO of windows and burn it to a CD to make one.</p>

<p>Step 1) Put the <strong>Windows Installation disk</strong> into your disk drive and <strong>boot from it</strong></p>

<p>Step 2) Proceed through the installation setup and instead of clicking &quot;Install&quot;, click &quot;<strong>Repair Your Computer</strong>&quot;</p>

<p>Step 3) Click your windows 7 installation and click &quot;Next&quot;</p>

<p>Step 4) Click &quot;<strong>Command Prompt</strong>&quot;</p>

<p>Step 5) Type &quot;<strong>robocopy /copyall&nbsp;/mir /xj C:\Users D:\Users</strong>&quot; (<em>Replacing the drive letters for your own</em>) and hit &quot;Enter&quot;</p>

<p>This will copy all of your files from the original drive to the second drive.</p>

<p>Step 6) Next, type &quot;<strong>rmdir /s /q C:\Users</strong>&quot; (<em>Again, replacing drive letters</em>)</p>

<p>This will delete the Users folder on the first drive</p>

<p>Step 7) Next, type &quot;<strong>mklink /j C:\Users D:\Users</strong>&quot; (<em>Replacing drive letters</em>)</p>

<p>This will create the link between the two locations.</p>

<p>Now restart your computer, look in the C drive and you will see a short cut to the new location on your D drive. Any time Windows wants to use the Users folder in C it will get redirected to D.</p>

<p>This works for all new and existing users! Nice and simple.</p>

<p><span class="highlight"><strong>Note</strong></span><strong> -</strong>&nbsp;If you cannot login after doing this with the error message &quot;The User Profile Service failed the logon&quot;, boot into safe mode, open regedit and navigate to&nbsp;HKLM &gt;&nbsp;Software &gt; Microsoft &gt;&nbsp;Windows NT &gt;&nbsp;CurrentVersion &gt;&nbsp;ProfileList. There you should find some duplicated subkeys with long names suffixed by .bak. Keep the subkeys with the suffix .bak, and delete their originals (same name but without .bak). Then remove the .bak suffix on the keys that were kept. Now you should be able to login successfully.&nbsp;</p>

<p><strong><span class="highlight">Note</span> </strong>- Another cause for the above error is a bad symlink. To test the symlink is working properly, boot into safe mode and try to open it. If you get an error message saying the file is not accessible, try recreating the symlink from command prompt in safe mode (Yes, even while logged into the temporary safe mode account - it will work)</p>

<p><em><span class="highlight"><strong>Warning </strong></span>- If you do a <strong>system restore</strong> after implementing this, your c:\users\my_user\<strong>NTUSER.DAT</strong> file will be deleted by windows and you won&#39;t be able to login anymore (all your files will still be there though). To avoid this, before doing a system restore, make a <strong>backup</strong> of this file on a USB stick. When you try to login, windows will log you into a &quot;Temporary&quot; user account. At this point, restore your backup of this file and you should be able to login again. Did this method work (or not) for you? Please post your feedback as a comment on this post!&nbsp;</em></p>

<p><em><strong><span class="highlight">Disclaimer</span></strong> - if these instructions cause a UFO attack, tornado or any other similar catastrophe, it&#39;s not my fault! You are best off doing this with a fresh install of Windows - that way you won&#39;t lose anything and it is less likely to suffer any wierd situations...</em></p>
