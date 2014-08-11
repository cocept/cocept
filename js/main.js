$(document).ready(function() {
    $('#to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
