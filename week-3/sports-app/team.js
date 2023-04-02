/*
Title: team.js
Author: Tiffany Baker
Date: 3/30/2023
Discription: This is the team module file for the team application. It contains the class for the app
*/

//creates a class called Team
class team {
	constructor(name,mascot,playerCount){
		this.name = name;
		this.mascot = mascot;
		this.playerCount = playerCount;
	}
}

//exports the team class
module.exports = team;