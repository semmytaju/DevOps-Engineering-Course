// document ready
$(document).ready(function(){
	// variables
	var boxHeight = $(".box").height();
	var boxWidth = $(".box").width();
	
	// handle mouse enter
	$(".box").mouseenter(function(){
		$(this).animate({height: '300px', opacity: '0.4'}, "slow");
		$(this).animate({width: '600px', opacity: '0.8'}, "slow");
	});
	
	// handle mouse leave
	$(".box").mouseleave(function(){
		$(this).animate({height: boxHeight});
		$(this).animate({width: boxWidth});
	});
});