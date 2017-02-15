"use strict";

// Sets path to firebase in node_modules
// fb - makes specific js file's functions available
// fbData - stores data from fbGetter.js & initializes it to use in dot notation
let firebase = require("firebase/app"),
	fb = require("./dbGetter.js"),
	// fbData = fb(),
	movieAPI = require("./dbGetter");
	// moviedata = movieAPI();

// Need these to manipulate firebase
require("firebase/auth");
require("firebase/database");

// Takes info from fbData ( fb() ) and
// stores it into new config object
var config = {
	apiKey: fb.apiKey,
	authDomain: fb.authDomain,
	databaseURL: fb.databaseURL
};

// Allows us to interact with firebase
firebase.initializeApp(config);

// Re-export firebase because we added initializeApp method 
module.exports = firebase;