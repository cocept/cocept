window.cocept = {}

// add class1 to element if 1 and 2 are both not applied
// otherwise toggle between class 1 and 2
window.cocept.toggleReplaceClass = function(element, class1, class2){
	if(element.hasClass(class1)){
		element.removeClass(class1);
		element.addClass(class2);
	}
	else if(element.hasClass(class2)){
		element.removeClass(class2);
		element.addClass(class1);
	}
	else {
		element.addClass(class1)
	}
}

$(document).ready(function() {

	console.log('Document ready');
	$("body").removeClass("preventAnimationsUntilLoad");

	// sticky nav
	window.cocept.scrollTrigger = $('nav[role="navigation"]').offset().top;

	$(document).scroll(function() {
		if (window.pageYOffset > window.cocept.scrollTrigger){
			$('nav').addClass('scrolled');
			$('#nav_ghost').addClass('scrolled');
			$('#content').addClass('scrolled');
			$('#nav_ghost').removeClass('hidden');
		}
		else {
			$('nav').removeClass('scrolled');
			$('#nav_ghost').removeClass('scrolled');
			$('#content').removeClass('scrolled');
			$('#nav_ghost').addClass('hidden');
		}
	})

	// hamgburger icon
	$('#hamburger').click(function(){
		$(this).toggleClass("active");
		window.cocept.toggleReplaceClass($(   'div#push-menu'
											+ ', body > .container'
											+ ', header .container'
											+ ', body > section'
											+ ', footer'
											+ ', .scroll_padding'
										), "pushed", "pulled");
	});

	// go to top button
	$('#to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	// gif controls
	$.each($('*[data-gif-src]'), function(index, img){
		// set starting data for image
		img = $(img);
		img.attr('data-state', 'paused');
		img.attr('data-still-src', img.attr('src'));

		// append gif player controls
		var controls = '\
		<div class="gif-player">\
			<a class="glyphicon glyphicon-play"></a>\
		</div>\
		';
		var inserted = img.after(controls).next();

		// set controls on click
		inserted.find('a').click(function(){
			if(img.attr('data-state') == 'paused'){
				// swap image and state
				img.attr('src', img.attr('data-gif-src'));
				img.attr('data-state', 'playing');

				// toggle play / pause
				window.cocept.toggleReplaceClass($(this), 'glyphicon-play', 'glyphicon-stop');
			}
			else {
				// swap image and state
				img.attr('src', img.attr('data-still-src'));
				img.attr('data-state', 'paused');

				// toggle play / pause
				window.cocept.toggleReplaceClass($(this), 'glyphicon-play', 'glyphicon-stop');
			}
		})
	});

});
