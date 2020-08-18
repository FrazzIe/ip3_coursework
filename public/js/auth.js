const authForm = document.getElementById("auth-form"); //get auth-form element

authForm.addEventListener("submit", (event) => { //add a listener for when the form is submitted
	event.preventDefault(); //prevent default form behaviour

	let action = event.submitter.id.replace("auth-").replace("-btn"); //get the action type from the button pressed

	if (action != "login" || action != "register")
		return; //cancel if action type is invalid

	axios.post("/" + action, { //make a request to the server
		username: document.getElementById("auth-username").value,
		password: document.getElementById("auth-password").value,
	}).then((resp) => {
		if (resp.data) {
			window.location.href = "/"; //reload page on response
		}
	}).catch((error) => {
		console.log(error);
	});
});