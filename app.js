$(function() {			

	$('#btn-add-item').click( function() {
	
		// we're collecting the input value (.val) from  
		// the user and putting it in the (now) variable: bla
		bla = $('#txt_name').val(); 

		$.getJSON(
			'http://autocomplete.wunderground.com/aq?query=' + bla + '&cb=?',
			function(data) {
				console.log(data); 

					// results is an array (a collection of cities)
				var cities = data['RESULTS']; 
				console.log(cities);
					//var cities = cities[]; 

				for (var i=0; i< cities.length; i++) {
					var city = cities[i]; 
					console.log(city);

					var cityLi = '<li data-detail-url="' + city["l"] + '.json">' + city['name'] + '</li>';
					$(cityLi).attr('data-detail-url'); 
					console.log(cityLi);

					$('#list').append(cityLi); 

    		}
			}
		);
	});

		$('#list').on('click', 'li', function() {
			var base = "http://api.wunderground.com/api/aee2e00c79507de6/forecast";
			var data_detail_url = $(this).attr('data-detail-url');
			console.log(base + data_detail_url); 

			$.ajax({
				url: base.concat(data_detail_url),
				dataType: "jsonp",
				success: function(json) {
					console.log(json);
				}
			});

			// $.getJSON( base + data_detail_url, 
			// 	function(response) {
			// 		console.log(response); 
			// 	}
			// );

		});
}); 
	
		//below is Khurram's jsfiddle from class 
// 	$.getJSON('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=kdtj8y8bhmde6nb7s68ta325&callback=?',
//           function(data) {
//               $.each(data.movies, function (i, movie) {
//                   var li = $('<li>' + movie.title + '</li>');
//                   li.attr('data-rotten-id', movie.id);
//                   $('#movies').append(li);
//                   console.log(movie);
//               });
//           }
// )   $(this).data("id")

// $('ul#movies').on('click', 'li', function() {
//    //var id = $(this).data('rotten-id');
//    var id = $(this).attr('data-rotten-id');
//    console.log(id);
// });

				


					// door.open
	 				//object.action (on the object)
	 						//action = function or method


					// var movies = data["movies"]; 
					//             var movie = movies[0];
					//             for(var i=0; i< movies.length; i++) {
					//                 var movie = movies[i]; 
					//                 console.log(movie); 
					//                 var li = $('<li></li>'); 


					// var cities = type[1]; 
						// for(var i=0; i< type.length; i++) {
						// 	var type = type[i]; 
						// 	console.log(type); 
						// 	var li = $('<li></li>'); 


		

		

