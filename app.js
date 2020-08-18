const config = require("./config");
const express = require("express");

var app = express(); //init express app

app.listen(config.app.port, () => { //make app listen for port
	console.log("Coursework scheduler listening on port " + config.app.port);
})