$( document ).ready(function() {
var clicks = 0;
	$( "[class^='gear']" ).click(function() {
		if(clicks === 0){
			$( "[class^='gear']" ).css( "animation-play-state", "paused" );
			clicks = 1;
		} else {
			$( "[class^='gear']" ).css( "animation-play-state", "running");
			clicks = 0;
		}
	});

	console.log("this works?");
});

