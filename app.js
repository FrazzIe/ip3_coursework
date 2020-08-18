const config = require("./config");
const mysql = require("./models/mysql");
const express = require("express");
const mustache = require("mustache-express");

var app = express(); //init express app

app.use(express.static(__dirname + "/public")); //serve static files
app.engine("mustache", mustache(__dirname + "/public/views/partials"));
app.set("view engine", "mustache");
app.set("views", __dirname + "/public/views"); //setup mustache

app.listen(config.app.port, () => { //make app listen for port
	console.log("quiz_manager listening on port " + config.app.port);
});