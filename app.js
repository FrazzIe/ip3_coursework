app.listen(process.env.PORT || 3000, () => { //make app listen for port
	console.log("Coursework scheduler listening on port " + (process.env.PORT || 3000));
})