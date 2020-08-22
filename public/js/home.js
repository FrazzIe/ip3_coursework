const createForm = document.getElementById("create-form");

function getQuizEstimation(count, num) {
	if (count == 0)
		return "minute or so";
	
	if (num > 60)
		num = 60;

	let estimate = count * num;

	return estimate + " minute" + (estimate == 1 ? "" : "s");
}

function setQuizEstimations() {
	let elements = document.querySelectorAll("span[id^='estimation-']");
	elements.forEach(function(element) {
		element.textContent = getQuizEstimation(element.dataset.count, 2);
	});
}

function setQuizPercentages() {
	let elements = document.querySelectorAll("span[id^='percentage-']");
	elements.forEach(function(element) {
		element.textContent = Math.floor(element.dataset.score / element.dataset.count * 100) + "%";
	});
}

setQuizEstimations();
setQuizPercentages();

createForm.addEventListener("submit", function(event) { //add a listener for when the form is submitted
	event.preventDefault(); //prevent default form behaviour

	axios.post("/quiz/create", { //make a request to the server
		label: document.getElementById("create-label").value,
	}).then((resp) => {
		if (resp.data) {
			if (typeof resp.data != "string") {
				window.location.href = "/quiz/edit/" + resp.data;
			} else {
				$("#create-modal").modal("hide");
				$("#errorModalTitle").text("An error occurred");
				$("#errorModalText").text(resp.data);
				$("#errorModal").modal("show"); //display warning
			}
		}
	}).catch((error) => {
		console.log(error);
	});
});