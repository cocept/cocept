window.cocept = {}

// add class1 to element if 1 and 2 are both not applied
// otherwise toggle between class 1 and 2
$.fn.toggleReplaceClass = function(class1, class2){
  if( !class1 || !class2 )
    return this;

  return this.each(function(){
    var $elm = $(this);

    if( $elm.hasClass(class1) || $elm.hasClass(class2) )
      $elm.toggleClass(class1 +' '+ class2);

    else
      $elm.addClass(class1);
  });
};

window.cocept.openMenu = function(){
	window.cocept.togglingMenu = true;

	// unhide and add open class
	$('nav.push-menu').removeClass('outRight')
					  .addClass('open');

	// animate each menu item into view
	var totalDelay = 0;
  	$('nav.push-menu li').each(function(i) {
	    var $li = $(this);
	    var delay = i*100;

	    setTimeout(function() {
	    	$li.addClass('slideInRight').removeClass('slideOutRight');
	    	$li.removeClass('hidden');
	    }, delay); // delay 100 ms for each element

	    totalDelay = totalDelay + delay;
	});

	setTimeout(function(){
		window.cocept.togglingMenu = undefined;
	}, totalDelay);
}

window.cocept.closeMenu = function(){
	window.cocept.togglingMenu = true;

	// unhide and add open class
	$('nav.push-menu').removeClass('open');

	// animate each menu item out of view
	var totalDelay = 0;
  	$('nav.push-menu li').each(function(i) {
	    var $li = $(this);
	    var delay = i*100;

	    setTimeout(function() {
	    	$li.removeClass('slideInRight').addClass('slideOutRight');
	    }, delay); // delay 100 ms for each element

	    totalDelay = totalDelay + delay;
	});

	setTimeout(function(){
		$('nav.push-menu').addClass('outRight');
		window.cocept.togglingMenu = undefined;
	}, totalDelay);
}

// toggle the main menu
window.cocept.toggleMenu = function(){
	// don't do anything if already toggling
	if( window.cocept.togglingMenu == undefined ){
		if( window.cocept.isMenuOpen() )
			window.cocept.closeMenu();
		else 
			window.cocept.openMenu();
		$('#menu-button-hamburger').toggleClass('is-active');
	}
}

window.cocept.isMenuOpen = function(){
	return $('nav.push-menu').hasClass('open');
}

window.cocept.scrollTo = function(targetSelector, marginTopSelector, paddingTop){
	paddingTop = paddingTop || 0;
	var offsetY = $(targetSelector).offset().top - paddingTop;
	if(marginTopSelector)
		offsetY = offsetY - $(marginTopSelector).height()
	$('html, body').animate({
        scrollTop: offsetY
    }, 500);
}

$(document).ready(function() {

	// menu button
	$('#menu-button-hamburger, #menu-button-text').click(function(){
		window.cocept.toggleMenu();
		return false;
	});

	// close menu on ESC press
	$(document).keyup(function(e) {
  		if ( e.keyCode === 27 && window.cocept.isMenuOpen() ) // esc
  			window.cocept.toggleMenu();	
	});

	// open menu on M press
	$(document).keyup(function(e) {
		var tag = e.target.tagName.toLowerCase();
  		if ( e.keyCode === 77 && tag != 'input' && tag != 'textarea' ) // M
  			window.cocept.toggleMenu();	
	});

 	// toggle nav.grey when scrolling past hero 
	$hero = $('.hero');
 	if($hero.length > 0){
	 	var inview = new Waypoint.Inview({
		    element: $hero[0],
		    enter: function(direction) {
			  	$('nav').removeClass('grey');
		  	},
			exited: function(direction) {
		    	$('nav').addClass('grey');
			}
		});
	}

	// go to top button
	$('.to-top').click(function(){
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
				$(this).toggleReplaceClass('glyphicon-play', 'glyphicon-stop');
			}
			else {
				// swap image and state
				img.attr('src', img.attr('data-still-src'));
				img.attr('data-state', 'paused');

				// toggle play / pause
				$(this).toggleReplaceClass('glyphicon-play', 'glyphicon-stop');
			}
		})
	});

	// comments overlay
	$('.comments__overlay').click(function(){
		// trigger disqus
		(function() {
			var d = document, s = d.createElement('script');
			s.src = '//maxmakedesign.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();

		// show comments
		$(this).closest('.comments').removeClass('closed');
	});

	// article scroll bar
	$(document).on('scroll', function(){
		// return if no article found
		var article = $('article.post');
		if(article.length == 0)
			return;

		// calculate scroll percentage
		var scrollPercent = 100 * ($(window).scrollTop() + $('nav.main').height() - article.offset().top) / article.height();

		// update and hide/show the progress bar
		if(scrollPercent < 0){
			$('nav.main .sub .progress-bar').hide();
		}
		else {
			if(scrollPercent > 100)
				scrollPercent = 100;
			
			$progressBar = $('nav.main .sub .progress-bar');
			$progressBar.find('> span').css('width', scrollPercent + '%');
			$progressBar.show();
		}
	});

	// sub menu fixed position
	if($('#nav-sub-container').length > 0){
		var subMenuWaypoint = new Waypoint({
		    element: $('#nav-sub-container'),
		  	handler: function(direction) {
		    	if(direction == "down"){
	    			// move submenu into nav.main and insert ghost
	    			var $sub = this.element.find('.sub');
		    		$sub.appendTo('nav.main');
		    		var $ghost = $('<div id="nav-sub-ghost"></div>').css('height', $sub.height());
		    		$ghost.appendTo( this.element );
		    	}
		    	else {
		    		// create ghost element
					$('nav.main nav.sub').appendTo('#nav-sub-container');
		    		$('#nav-sub-ghost').remove();
		    	}
		  	},
		  	offset: $('nav.main').height() 
		});
	}

});

$(window).load(function(){

	// take the breaks off CSS animations
	$("body").removeClass("preventAnimationsUntilLoad");

	$('body').scrollspy({ target: 'nav.main .sub', offset: $('nav.main').height() + 50 })

});
