// add class1 to element if 1 and 2 are both not applied
// otherwise toggle between class 1 and 2
function toggleReplaceClass(element, class1, class2){
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
		toggleReplaceClass($('#push-menu'), "pushed", "pulled");
		toggleReplaceClass($('body > .container'), "pushed", "pulled");
		toggleReplaceClass($('header .container'), "pushed", "pulled");
		toggleReplaceClass($('footer'), "pushed", "pulled");
	});

	// go to top button
    $('#to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });


});
