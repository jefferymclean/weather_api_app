$(function() {

	$.getJSON(
			'http://autocomplete.wunderground.com/aq?query=vanc&cb=?',


		function(data) {
			console.log(data);

			var cities = data['RESULTS']; 
			console.log(cities);
			//var cities = cities[]; 
			for (var i=0; i< cities.length; i++); {
				//	var type = type[i]; 
				//	console.log(cities); 
				//	var li = $('<li></li>'); 




				$('#btn-add-item').click( function() {
		
					// we're collecting the input value (.val) from  
					// the user and putting it in the bla
					bla = $('#txt_name').val();
					$("#list").append("<li>" + bla + "</li>");
					//setting the user input (#txt_name) to empty string
    				$("#txt_name").val("");
				});
				
			}
	 	}			
	)

});		

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


		

		

