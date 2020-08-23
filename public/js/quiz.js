const finishBtn = document.getElementById("finish-btn");

function setFirstAnswerChecked() {
	let elements = document.querySelectorAll("input[id^='quiz-answer-']");
	let dupeList = {};
	elements.forEach(function(element) { 
		if (!dupeList[element.name]) {
			dupeList[element.name] = true;
			element.checked = true
		}
	});
}

function getCheckedAnswers() {
	let answers = [];
	let elements = document.querySelectorAll("input[id^='quiz-answer-']");
	elements.forEach(function(element) { 
		if (element.checked) {
			if (element.dataset && element.dataset.id) {
				answers.push(element.dataset.id);
			}
		}
	});

	return answers;
}

finishBtn.addEventListener("click", function(event) {
	let quizElement = document.getElementById("quiz-id");

	if (!quizElement.dataset || !quizElement.dataset.id || !quizElement.dataset.count) {
		location.reload();
		return;
	}

	let answers = getCheckedAnswers();

	if (answers.length == quizElement.dataset.count) { //this shouldn't happen
		axios.post("/quiz/finish/" + quizElement.dataset.id, { //make a request to the server
			answers: answers,
		}).then((resp) => {
			if (resp.data) {
				if (typeof resp.data != "string") {
					location.reload();
				} else {
					if (resp.data.startsWith("/")) {
						location.href = resp.data;
					} else {
						$("#errorModalTitle").text("An error occurred");
						$("#errorModalText").text(resp.data);
						$("#errorModal").modal("show"); //display warning
					}
				}
			}
		}).catch((error) => {
			console.log(error);
		});
	} else {
		$("#errorModalTitle").text("An error occurred");
		$("#errorModalText").text("You must answer all questions!");
		$("#errorModal").modal("show"); //display warning
	}
});

setFirstAnswerChecked();