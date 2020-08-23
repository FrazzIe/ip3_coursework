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
setFirstAnswerChecked();