$(function() {

	$('#btn-add-item').click( function() {
	
		// we're collecting the input value (.val) from  
		// the user and putting it in the bla
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

					var cityName =  '<li>' + city['name'] + '</li>'; 
					console.log(cityName);

					$('#list').append(cityName); 




						
    			}
			}
		);
	});
}); 

			// var movies = data["movies"]; 
	  //           var movie = movies[0];
	  //           for(var i=0; i< movies.length; i++) {
	  //               var movie = movies[i]; 
	  //               console.log(movie); 
	  //               var li = $('<li></li>'); 
	  //               // alternative: var imageSrc = movie.posters.profile
	                
	  //                   var imageSrc = movie['posters']['profile'];                               
	  //                   var img= $('<img />').attr(
	  //                       'src', imageSrc
	  //                   );
	  //                   li.append(img); 
	  //                   li.append('<div>'+movie['title']+'</div>');
	  //                  $('#movies').append(li); 
         //   }    
   //      }
   
// )

					//$("#txt_name").val(""); 
				


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


		

		

