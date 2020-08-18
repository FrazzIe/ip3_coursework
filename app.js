const config = require("./config");
const mysql = require("./models/mysql");
const express = require("express");
const mustache = require("mustache-express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const argon2 = require("argon2");
const auth = require("./models/auth")(mysql, passport, argon2);

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

app.post("/login", (req, res, next) => {   //When /login is requested by a user
	passport.authenticate("local", (err, user, info) => { // models/auth.js -> use strategy to validate user login credentials
		if (err) { //if there is an error then
			return next(err);
		}

		if (!user) { //if the profile does not exist then
			return res.send(info.message); //refuse login
		}

		req.login(user, function(err) { //login user
			if (err) { 
				return next(err);
			}

			return res.send("ok");
		});
	})(req, res, next);
});
});