---
layout: page
title: Animated Dot to Dot Canvas
excerpt: A simple tech demo for HTML 5 canvas animations
banner: /images/showcase/animated-dot-to-dot-canvas/banner.png
redirect_from:
 - /showcase/animated-dot-to-dot-canvas
---

## HTML 5 Animated Dot To Dot Canvas

> An animated dot to dot image triggered by the mouse's distance from an element, all using HTML 5's canvas feature.

This showcase is part tutorial part tech demo. HTML 5 introduced an awesome new feature called the canvas. It can be used to do low level drawing and animations with its JavaScript API, and gives you much more power than using JavaScript alone.

Check out the end product below - an animated dot to dot that changes when you mouse over an element on screen:

<div class="visible-xs">
	<img src="/images/showcase/animated-dot-to-dot-canvas/animated-canvas.png" data-gif-src="/images/showcase/animated-dot-to-dot-canvas/animated-canvas.gif" alt="Animated dot to dot canvas preview" />
</div>
<div class="visible-sm visible-md visible-lg">
	<canvas></canvas>
	<div class="text-center">
		<a href="#" id="canvasTrigger" class="btn btn-primary" onclick="return false;">
			<span class="glyphicon glyphicon-flash"></span>
			Mouse Over Me
		</a>
	</div>
    <link rel="stylesheet" href="/css/showcase/animated-dot-to-dot-canvas/canvas.css"/>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/json-minify/0.1/minify.json.min.js"></script>
    <script type="text/javascript" src="/js/showcase/animated-dot-to-dot-canvas/canvas.js"></script>
    <script type="text/javascript" src="/js/showcase/animated-dot-to-dot-canvas/animated-dot-to-dot-canvas.js"></script>
</div>


## The Code

The full code sample can be found below. It's licensed under the [MIT license](https://opensource.org/licenses/MIT) so feel free to grab it, change it, republish it, whatever!

<script src="https://gist.github.com/maxmumford/9ccf8f3132651857424abc02c1e7d170.js"></script>

## ... Wut?

Phew! That was long... Most of it is fairly well documented but here's a quick rundown of what the script actually does:

 - Defines the Coordinate object that represents coordinates on the canvas itself
 - Defines the Circle object which defines a point plotted on the canvas that will be linked together with lines to create the actual image
 - Define a Canvas object and various helper methods that gets the data for the image, draws on the canvas, and updates everything each frame

When the page has finished loading the script does the following:

 - Sets all the configuration options for the canvas animation
 - Creates a Canvas object
 - Starts the whole animation by calling the init function
 - The Canvas then gets the following JSON via an Ajax request:

<script src="https://gist.github.com/maxmumford/a1d59bb182f98c3279afecb907c220c7.js"></script>

This JSON data represents the coordinates for each part of the image we want to draw. They were generated using our [Image Coordinate Tool](/showcase/image-coordinates/). 

Bare in mind that while comments in JSON are not strictly allowed, the script uses a jQuery extension called [JSON.minify](https://github.com/getify/JSON.minify) to strip them. Without the comments the JSON file would be impossible to understand.

The init function then calls the draw function at intervals defined by the framerate in the configuration options.

The draw function checks how far away the mouse is from the "trigger element" and changes the Circles coordinates accordingly, then redraws them all.

## Customising the Script

The script wasn't designed to be customised but it shouldn't be too difficult to get it working on your installation. Changing the image however is super easy, just use our [Image Coordinate Tool](/showcase/image-coordinates/) to trace a new image and save the output into a file, then set the path in the script accordingly. 

Enjoy!
