const config = require("./config");
const mysql = require("./models/mysql");
const express = require("express");
const mustache = require("mustache-express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require('body-parser');

var app = express(); //init express app

app.use(express.static(__dirname + "/public")); //serve static files
app.engine("mustache", mustache(__dirname + "/public/views/partials"));
app.set("view engine", "mustache");
app.set("views", __dirname + "/public/views"); //setup mustache
app.use(session({
	secret: config.session.secret,
	resave: false,
	saveUninitialized: false
})); //setup session
app.use(passport.initialize());
app.use(passport.session()); //setup passport session
app.use(bodyParser.json()); //parse json requests

app.listen(config.app.port, () => { //make app listen for port
	console.log("quiz_manager listening on port " + config.app.port);
});

app.get("/", function(req, res) {
	res.status(200);
	
	if (req.isAuthenticated()) {
	} else {
		res.render("auth", {
			title: "Authentication",
		})
	}
});