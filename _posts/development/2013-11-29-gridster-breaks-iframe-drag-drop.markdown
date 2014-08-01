---
title: Gridster iFrame breaks Drag and Drop
---

<p><a href="http://gridster.net">Gridster</a>&nbsp;is an open source javascript<strong> dashboard plugin</strong>. It provides a nice simple way to make an auto reshuffling dashboard with very flexible contents.&nbsp;</p>

<p>However if you decide to include an <strong>iframe</strong> inside a dashboard widget, you will get some strange behaviour when you<strong> mouse over</strong> your <strong>iframe</strong> <strong>mid-drag</strong>. This will <strong>cause</strong> the<strong> drag to stop</strong>, and only resume once your mouse leaves the iframe.</p>

<p>This is a common problem with drag and drop, and can be fixed relatively easily by covering your iframe with a transparent element that is hidden by default. When the drag starts, the element is shown. When the drag stops, the element is hidden.</p>

<ul>
	<li><strong>Add </strong>the following<strong> HTML</strong> to each<strong> &lt;li&gt; </strong>widget:</li>
</ul>
<script src="https://gist.github.com/maxmumford/7709581.js"></script>

<ul>
	<li><strong>Add </strong>the following <strong>CSS</strong> to the &lt;head&gt; element of your page</li>
</ul>
<script src="https://gist.github.com/maxmumford/7709589.js"></script>

<ul>
	<li><strong>Change </strong>your <strong>Gridster instantiation</strong> javascript to specify the overlay_fix_start and overlay_fix_stop functions for the <strong>draggable.start</strong> and <strong>draggable.stop</strong> events:</li>
</ul>
<script src="https://gist.github.com/maxmumford/7709594.js"></script>

<p>Now when you start dragging an element, the entire &lt;li&gt; is covered with a full size transparent &lt;div&gt; that covers the mouse over event of the iframe and your drag should never stop, even if you mouse over the location of the iframe.</p>
