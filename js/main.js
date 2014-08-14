$(document).ready(function() {

	// sticky nav
	$(document).scroll(function() {
	    var scrollAmount = $(document).scrollTop();
	    if (scrollAmount > 0){
	    	$('nav').addClass('scrolled');
	    	$('#content').addClass('scrolled');
	    }
	    else {
	    	$('nav').removeClass('scrolled');
	    	$('#content').removeClass('scrolled');
	    }
	})

	// hamgburger icon
	$('#hamburger').click(function(){
		$(this).toggleClass("active");
	});

	// go to top button
    $('#to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });


});
