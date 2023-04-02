/*
Title: team-manager.js
Author: Tiffany Baker
Date: 3/31/2023
Discription: This is the main .js file for the team application. It contains the body of javascript for the app
*/

"use strict";
//pulls in the teams module file
var team = require("./team.js");

//created the information that is used in the array and assigns it to a variable
let teams = [
    new team ("Chicago Bears","Staley", "55"),
	new team ("Iowa Hawkeyes","Herky","53"),
	new team ("Minnesota Vikings", "Nordy", "47"),
	new team ("Seattle Seahawks","Blitz","50"),
	new team ("Detroit Lions", "Roary", "52"),

	]

// creates a function that returns the teams array
module.exports.getTeams = function (){
		return teams;
		
		
}
console.log("went thru \n check 1");


//returns a single team based on the team name
module.exports.getTeam = function(name){

			for (let team of teams) {
					if (team.name === name) {
						return team;
						
						}
					}
				}		

console.log("went thru \n check 2");




//creates a function that returns the information of a team based on the team name

module.exports.displayTeam = function (team){
	return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: "+ team.playerCount + "\n";
	
}
console.log("went thru 3 total everythings correct");