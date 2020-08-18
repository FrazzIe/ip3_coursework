const config = require("./config");

app.listen(config.app.port, () => { //make app listen for port
	console.log("Coursework scheduler listening on port " + config.app.port);
})