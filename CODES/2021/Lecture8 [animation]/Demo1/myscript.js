// document ready
$(document).ready(function(){
	$("button").click(function(){
		// variables
		var div = $(".box");
		var max = 10;
		
		// loop
		for (let i = 0; i < max; i++) {
			// jQuery Animations 
			div.animate({height: '400px', opacity: '0.4'}, "slow");
			div.animate({width: '400px', opacity: '0.8'}, "slow");
			div.animate({height: '200px', opacity: '0.4'}, "slow");
			div.animate({width: '200px', opacity: '0.8'}, "slow");
		}
  });
});