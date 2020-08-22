const authForm = document.getElementById("auth-form"); //get auth-form element

authForm.addEventListener("submit", (event) => { //add a listener for when the form is submitted
	event.preventDefault(); //prevent default form behaviour

	let action = event.submitter.id.replace("auth-", ""); //get the action type from the button pressed

	if (action != "login" && action != "register")
		return; //cancel if action type is invalid

	axios.post("/" + action, { //make a request to the server
		username: document.getElementById("auth-username").value,
		password: document.getElementById("auth-password").value,
	}).then((resp) => {
		if (resp.data) {
			if (resp.data != "ok") {
				$("#errorModalTitle").text("An error occurred");
				$("#errorModalText").text(resp.data);
				$("#errorModal").modal("show"); //display warning
			} else {
				if (action == "login") {
					window.location.href = "/"; //reload page on response
				} else {
					$("#errorModalTitle").text("Account created");
					$("#errorModalText").text("You can now login!");
					$("#errorModal").modal("show");
				}
			}
		}
	}).catch((error) => {
		console.log(error);
	});
});