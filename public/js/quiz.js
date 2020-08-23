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

setFirstAnswerChecked();