"use strict";
//the requires needed for this page
let $ = require('jquery'),
	template = require("../templates/cardLayout.hbs");	 

// how we search the movie database and return results based on the user's search input
function searchAPI(searchResult) {
	console.log("searching the api for: ", searchResult);
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?api_key=56696d263700546dd8f63b84a5e3d534&query=${searchResult}`,//this url will grab the user's search result
			type:'GET',
     		data: JSON.parse(searchResult),
      		dataType: 'json'
		}).done(function (searchResult) {
			resolve(searchResult);
		});
	});
}
// how we search the users list of movies
function searchFirebase() {
	//
}

function addToFirebase() {
	//create the movie object here so that you can attach the user uid to the movie
}

function addToUnwatched() {

}

function rateMovie() {

}

module.exports = {
	searchAPI,
};