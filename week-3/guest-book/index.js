const http = require("http"); 
const path = require("path"); 
const express = require("express"); 
const logger = require("morgan"); 
const bodyParser = require("body-parser"); 
const app = express(); 
var Port = process.env.PORT || 3000; 
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 
var entries = []; 
app.locals.entries = entries; 
app.use(logger("dev")); 
app.use(express.urlencoded({extended: false})); 
app.get("/", function(request, response) { 
	response.render("index"); 
   }); 
   app.get("/new-entry", function(request, response) { 
	response.render("new-entry"); 
   }); 
   app.post("/new-entry", function(request, response) { 
	if (!request.body.title || !request.body.body) { 
	response.status(400).send("Entries must have a title and a body."); 
	return; 
	} 
	entries.push({ 
	title: request.body.title, 
	body: request.body.body, 
	published: new Date() 
	}); 
	response.redirect("/"); 
   });
   app.use(function(request, response) { 
	response.status(404).render("404"); 
   }); 
   app.listen(Port, () => { console.log("Guestbook app started on port: " + Port) });