/*
	Last.fm recent tracks plugin
	https://github.com/wiredimage/Last.fm-recent-tracks
*/
function recentLFM(user,apikey,limit,container) {
	// Defaults
	var html = '';
	var counter = 0;
	var list = '<ul class=\"lfm-recent\"></ul>';
	var divider = " &mdash; ";
	var nullalbum = '';

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user="+user+"&api_key="+apikey+"&limit="+limit+"&format=json&callback=?", function(data) {
//	console.log(data);
        $.each(data.recenttracks.track, function(i, item) {
	        
            var artistlink = item.url.split('_/'); // Split the URL to give just the artist page
            
            if(counter < (limit)) {
	            if(item.image[1]['#text']=='') { // Check if image is null
//					console.log('Null');
					html += '<li class="lfm-track"><span class="lfm-trackname">'+item.name+'</span><i>'+divider+'</i><span class="lfm-artist">' + item.artist['#text'] + '</span></li>';
				} else {
//					console.log('img: '+item.image[1]['#text']);
					html += '<li class="lfm-track"><span class="lfm-trackname">'+item.name+'</span><i>'+divider+'</i><span class="lfm-artist">' + item.artist['#text'] + '</span></li>';
				}	            
				
            } // close the if statement
            counter++ // add 1 to the counter variable each time the each loop runs
        }); // close each loop
        
        $(container).append(html).wrapInner(list);
    }); // close JSON call
}

$(document).ready(function() {

if ( $('.listening-to').length ) {

		$.each($('.listening-to'), function (index, value) {
			var user = $(this).data('lfm-user');
			var apikey = $(this).data('lfm-api');
			var limit = $(this).data('lfm-limit');

// 			console.log(user+' '+apikey+' '+limit);
		  
			recentLFM(user,apikey,limit,this);
		});

}

}); // close document ready function