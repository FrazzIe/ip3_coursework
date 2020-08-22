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

function sortQuestionAnswers(questions, answers) {
	let data = [];

	for (let question = 0; question < questions.length; question++) {
		let questionIdx = data.push(questions[question]);

		data[questionIdx - 1].answers = [];

		for (let answer = 0; answer < answers.length; answer++) {
			if (data[questionIdx - 1].id == answers[answer].question_id)
				data[questionIdx - 1].answers.push(answers[answer]);
		}
	}

	return data;
} //matches answers with there questions

app.listen(config.app.port, () => { //make app listen for port
	console.log("quiz_manager listening on port " + config.app.port);
});

app.get("/", function(req, res) {
	res.status(200);
	
	if (req.isAuthenticated()) {
		let data = {
			title: "Home",
			username: req.user.username,
			admin: req.user.admin,
			quizzes: [],
		}

		mysql.query(mysql.queries.getQuizzes, [req.user.id, req.user.id]).then((result) => { //fetch quizzes
			data.quizzes = result;
			res.render("home", data);
		}).catch((error) => {
			res.render("home", data);
			console.log(error.message);
		});
	} else {
		res.render("auth", {
			title: "Authentication",
		});
	}
});

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
  
app.post("/register", function(req, res) {
	if (req.body && req.body.username && req.body.password && req.body.username != "" && req.body.password != "") {
		mysql.query(mysql.queries.getUser, [req.body.username]).then((result) => { //finds any rows with the username
			if (typeof result[0] === "undefined") { //checks if a user does not exist
				argon2.hash(req.body.password).then((hashedPassword) => { //scrambles the password using argon2
					mysql.query(mysql.queries.createUser, [req.body.username, hashedPassword]).then((result) => { //creates user account in database
						res.send("ok");
					}).catch((error) => {
						res.status(500).send(error.message);
						console.log(error.message);
					});
				}).catch((error) => {
					res.status(500).send(error.message);
				});
			} else { //prevents registration as user already exists
				res.send("A user already exists with this username");
			}
		}).catch((error) => {
			console.log(error.message);
			res.status(500).send(error.message);
		});
	} else {
		res.send("You must include a username and a password")
	}
});

app.get("/logout", function(req, res) {
	req.logout();
	res.redirect("/");
});

app.post("/create", function(req, res) {
	if (req.isAuthenticated()) { //check if logged in
		if (req.user.admin) { //check if admin
			if (req.body && req.body.label && req.body.label != "") { //check if params exist
				mysql.query(mysql.queries.createQuiz, [req.user.id, req.body.label]).then((result) => { //create quiz		
					res.send(result.insertId);
				}).catch((error) => {
					console.log(error.message);
					res.status(500).send(error.message);
				})
			} else {
				res.send("You must include a title");
			}
		} else {
			res.send("Only admins can create quizzes");
		}
	} else {
		res.redirect("/");
	}
});

app.get("quiz/edit/:id", function(req, res) {
	if (req.isAuthenticated() && req.user.admin) { //check if logged in & is admin
		if (!req.params.id || isNaN(req.params.id)) { //check if params exist
			res.redirect("/");
			return;
		}

		mysql.query(mysql.queries.getQuiz, [req.params.id]).then((quizz) => { //fetch quiz
			if (typeof quizz[0] === "undefined") {
				res.redirect("/");
			} else {
				mysql.query(mysql.queries.getQuestions, [req.params.id]).then((questions) => { //fetch questions
					mysql.query(mysql.queries.getAnswers, [req.params.id]).then((answers) => { //fetch answers
						let data = {
							title:"Edit " + quizz[0].label,
							label: quizz[0].label,
							username: req.user.username,
							admin: req.user.admin,
							items: sortQuestionAnswers(questions, answers),
							index: function() {
								return function(array, render) {
									return data[array].indexOf(this) + 1;
								}
							},
						}
						res.render("edit", data)
					}).catch((error) => {
						console.log(error.message);
						res.redirect("/");
					})
				}).catch((error) => {
					console.log(error.message);
					res.redirect("/");
				})
			}
		}).catch((error) => {
			console.log(error.message);
			res.redirect("/");
		});
	} else {
		res.redirect("/");
	}
});