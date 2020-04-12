$(function(){
	$('.repeat').click(function(){
    	var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'textANI');
        var indicator = $(this);
        setTimeout(function(){ 
        	$(indicator).parent().addClass(classes);
        }, 20);
    });
});