---
layout: empty
title: Image Coordinates
excerpt: Plot coordinates on an image using this handy tool. We used it for creating our canvas animation, definitely not for creating copious amounts of dot to dot exercises to do on a lazy Sunday...
banner: /images/showcase/image-coordinates/banner.png
---

<style type="text/css">

	#image_container {
		width: 645px;
		height: 400px;
		position: relative;
		margin: 50px auto 0px auto;
		border: solid #e3e3e3 5px;
	}

	.cross {
		position: absolute;
		z-index: 2;
	}

	.hidden {
		display: none;
	}

	#results {
		height: 300px;
	}
</style>

<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.1.min.js"></script>

<script type="text/javascript">

// image onclick event handler
function on_click(event){
	// get mouse click position
	click_position_x = event.offsetX;
	click_position_y = event.offsetY;

	if(isNaN(click_position_x) || isNaN(click_position_y))
		debugger;

	// place cross
	var cross = $('.cross').first().clone();
	cross.css('left', click_position_x - 10);
	cross.css('top', click_position_y - 8);
	cross.removeClass('hidden');
	$('.cross').first().after(cross);

	// record last values
	$('#last_x_coordinate').val(click_position_x);
	$('#last_y_coordinate').val(click_position_y);

	// append to list of all values
	var new_line = '\n';
	if($('textarea').val().length == 0)
		new_line = '';

	var new_textarea_value = $('textarea').val() + new_line + 
								$('#format').val()
									.replace('{% raw %}{{x}}{% endraw %}', click_position_x)
									.replace('{% raw %}{{y}}{% endraw %}', click_position_y);
	$('textarea').val(new_textarea_value);
}

// set image container dimensions
function setImageDimensions(width, height){
	$('#image_container').css('width', width)
						 .css('height', height);
}

// bind file input to load image into <img> element
$(document).ready(function(){

	// bind file input
	$('#image').on('change', function (e) {
	    // check FileReader support
	    if(!FileReader)
	    	alert('Sorry, this feature requires a modern browser that supports the File API. Try again using Google Chrome...');

	    // get files
	    var event_target = e.target || window.event.srcElement,
        files = event_target.files;

        // check file has been chosen
	    if (files && files.length) {
	        var fr = new FileReader();

		    // set image_container dimensions
		    var img = new Image;
		    img.onload = function() {
		        setImageDimensions(img.width, img.height);
		    };

		    // set image_container background image and show it
	        fr.onload = function () {
		    	img.src = fr.result;
	        	$('#image_container').removeClass('hidden');
	            $('#image_container').css('background-image', 'url(' + fr.result + ')');
	        }
	        fr.readAsDataURL(files[0]);
	    }
	    else { // no file chosen to reset image_container
        	$('#image_container').addClass('hidden');
            $('#image_container').css('background-image', '');
	    }
	});
});
</script>


<div class="container narrow page">

	<div class="row">

		<div class="col-md-12">

			<div class="post">

			  	<article class="post-content">

					<h1>Image Coordinate Generator</h1>

					<p>You can use this tool to get coordinates each time you click an image. I built it because I needed an easy way to get a long list of coordinates to create a "dot to dot" type animation (as seen <a href="/showcase/animated-dot-to-dot-canvas">here</a>).</p>

					<p>Feel free to take the source code of this page and modify it yourself - the more useful it can be to the community the better!</p>

					<h2>Usage</h2>

					<ol>
						<li>Use the form below to upload the image you want to get coordinates for</li>
						<li>Set the "Output Format" value to have the coordinates outputted in a useful format, for example json array keys. Use the placeholders {% raw %}{{x}} and {{y}}{% endraw %} to insert the X and Y coordinates of your click</li>
						<li>Copy and paste the output of the Coordinates textarea to whereever they need to be used!</li>
					</ol>

					<h2>Get Started...</h2>

			  </article>

			</div>

		</div>

	</div>

</div>

<div id="image_container" onclick="on_click(event)" class="hidden">
	<img src="/images/showcase/image-coordinates/crosshairs.png" class="cross hidden">
</div>

<div class="container narrow page">

	<div class="row">

		<div class="col-md-12">

			<div class="post">

			  	<article class="post-content">

					<form>
						<!-- file input -->
						<div class="form-group">
							<label for="image">Choose your image</label>
							<input type="file" id="image" class="form-control" />
						</div>

						<div class="form-group">
							<label for="format">Output Format</label>
							<input type="text" id="format" value='{% raw %}{"x": {{x}}, "y": {{y}}},{% endraw %}' class="form-control" />
						</div>

						<div class="form-group">
							<label for="results">Coordinates</label>
							<textarea id="results" class="form-control"></textarea>
						</div>

						<div class="form-group">
							<label for="image">Last X Coordinate</label>
							<input type="text" id="last_x_coordinate" size="4" class="form-control" />
						</div>

						<div class="form-group">
							<label for="image">Last Y Coordinate</label>
							<input type="text" id="last_y_coordinate" size="4" class="form-control" />
						</div>
					</form>

			  </article>

			</div>

		</div>

	</div>

</div>
