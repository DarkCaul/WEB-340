/*
Title: index.js
Author: Tiffany Baker
Date: 4/01/2023
Discription: This is the index.js file for the team application. It contains the routes for the app
*/

"use strict";
//pulls in modules and creates a array fron the team-manager file
const teamInfo= require("./team-manager.js");

let teams = teamInfo.getTeams();


//displays the teams array

console.log("---Displaying Teams--- \n");
for (let team of teams){
    console.log(teamInfo.displayTeam(team));
}

//calls the team name chosen and plays its info.
const chicago = teamInfo.getTeam("Chicago Bears");

const iowa = teamInfo.getTeam("Iowa Hawkeyes");

console.log("---Playing Team Info--- \n");
console.log(teamInfo.displayTeam(chicago));

//calls the team name chosen and plays its info.

console.log("---Playing Team Info--- \n");
console.log(teamInfo.displayTeam(iowa));
