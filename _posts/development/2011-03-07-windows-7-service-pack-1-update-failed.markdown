---
title: Windows 7 Service Pack 1 Update Failed
redirect_from:
  - /how-to/windows-7-service-pack-1-0x800f0a12-error-message-update-failed/
  - /posts/8-windows-7-service-pack-1-0x800f0a12-update-failed/
---

<p>I recently tried installing the Service Pack 1 update for Windows 7 and got the following error: <strong>0x800f0a12</strong> Some research told me that the update failed because it didnt have access to the system partition (A hard drive partition that stores backups of system files) which needed to be modified. To rectify this, do the following:</p>

<ul>
	<li>Hold the Windows key and press E</li>
	<li>Make a note of the drive letter that represents your &quot;System Reserved&quot; partition (usually E)</li>
	<li>Click Start</li>
	<li>Type &quot;cmd&quot;</li>
	<li>Hold CTRL and SHIFT and press Enter</li>
	<li>Click &quot;Yes&quot; on the user account control message box</li>
	<li>Type &quot;mountvol /E&quot; and press Enter (replace E with the drive letter you made a note of earlier)</li>
	<li>Retry the update.</li>
</ul>

<p>If the update still failed, please leave a comment on this post. Good luck :)</p>
