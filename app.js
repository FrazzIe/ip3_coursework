const config = require("./config");
const express = require("express");

var app = express(); //init express app

app.listen(config.app.port, () => { //make app listen for port
	console.log("quiz_manager listening on port " + config.app.port);
})