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
		element.textContent = (element.dataset.score / element.dataset.count * 100) + "%";
	});
}

setQuizEstimations();
setQuizPercentages();