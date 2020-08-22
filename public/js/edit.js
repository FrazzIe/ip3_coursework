/* 
<div class="form-group">
	<div class="row">
		<div class="col-6">
			<label for="create-answer-1">Answer 1</label>
		</div>
		<div class="col-6">
			<div class="form-check form-check-inline float-right">
				<input class="form-check-input" type="checkbox" id="create-answer-checkbox-1">
				<label class="form-check-label" for="create-answer-checkbox-1">Correct answer</label>
			</div>
		</div>
	</div>
	<div class="input-group">														
		<input type="text" class="form-control" id="create-answer-1">
		<div class="input-group-append">
			<button class="btn btn-danger" type="button"><span aria-hidden="true">&times;</span></button>
		</div>
	</div>
</div>
*/

const createForm = document.getElementById("create-form");
const editBtn = document.getElementById("edit-btn");

function removeAnswerFromList(element) {
	element.remove();
}

function addAnswerToList() {
	let answerList = document.getElementById("create-answers-list");
	let num = 0;

	if (answerList.lastElementChild != null) {
		 num = parseInt(answerList.lastElementChild.getAttribute("data-id")) + 1;
	}

	let textId = "create-answer-" + num;
	let checkboxId = "create-answer-checkbox-" + num;
	let answerNode = document.createElement("div");

	answerNode.classList.add("form-group", "mr-2");
	answerNode.setAttribute("data-id", num);
	answerNode.appendChild(document.createElement("div"));
	answerNode.childNodes[0].classList.add("row");
	answerNode.childNodes[0].appendChild(document.createElement("div"));
	answerNode.childNodes[0].childNodes[0].classList.add("col-6");
	answerNode.childNodes[0].childNodes[0].appendChild(document.createElement("label"));
	answerNode.childNodes[0].childNodes[0].childNodes[0].setAttribute("for", textId);
	answerNode.childNodes[0].childNodes[0].childNodes[0].textContent = "Answer";    
	answerNode.childNodes[0].appendChild(document.createElement("div"));
	answerNode.childNodes[0].childNodes[1].classList.add("col-6");
	answerNode.childNodes[0].childNodes[1].appendChild(document.createElement("div"));
	answerNode.childNodes[0].childNodes[1].childNodes[0].classList.add("form-check", "form-check-inline", "float-right");
	answerNode.childNodes[0].childNodes[1].childNodes[0].appendChild(document.createElement("input"));
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].classList.add("form-check-input");
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].setAttribute("id", checkboxId);
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].setAttribute("type", "checkbox");
	answerNode.childNodes[0].childNodes[1].childNodes[0].appendChild(document.createElement("label"));    
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[1].classList.add("form-check-label");
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[1].setAttribute("for", checkboxId);
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent = "Correct answer";
	answerNode.appendChild(document.createElement("div"));
	answerNode.childNodes[1].classList.add("input-group");
	answerNode.childNodes[1].appendChild(document.createElement("input"));
	answerNode.childNodes[1].childNodes[0].classList.add("form-control");
	answerNode.childNodes[1].childNodes[0].setAttribute("id", textId);
	answerNode.childNodes[1].childNodes[0].setAttribute("type", "text");
	answerNode.childNodes[1].appendChild(document.createElement("div"));
	answerNode.childNodes[1].childNodes[1].classList.add("input-group-append");
	answerNode.childNodes[1].childNodes[1].appendChild(document.createElement("button"));
	answerNode.childNodes[1].childNodes[1].childNodes[0].classList.add("btn", "btn-danger");
	answerNode.childNodes[1].childNodes[1].childNodes[0].setAttribute("type", "button");
	answerNode.childNodes[1].childNodes[1].childNodes[0].onclick = function () { removeAnswerFromList(answerNode) };
	answerNode.childNodes[1].childNodes[1].childNodes[0].appendChild(document.createElement("span"));
	answerNode.childNodes[1].childNodes[1].childNodes[0].childNodes[0].setAttribute("aria-hidden", "true");
	answerNode.childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML = "&times;";

	answerList.appendChild(answerNode);
}

function getAnswers() {
	let answers = [];
	let answerList = document.getElementById("create-answers-list");    

	if (answerList.hasChildNodes()) {
		let children = answerList.childNodes;

		for (let i = 0; i < children.length; i++) {
			if (children[i].dataset) {
				if (children[i].dataset.id) {
					answers.push({
						label: document.getElementById("create-answer-" + children[i].dataset.id).value,
						correct: document.getElementById("create-answer-checkbox-" + children[i].dataset.id).checked,
					});
				}
			}
		}
	}

	return answers;
}

createForm.addEventListener("submit", function(event) { //add a listener for when the form is submitted
	event.preventDefault(); //prevent default form behaviour

	let quizElement = document.getElementById("quiz-id");

	if (!quizElement.dataset || !quizElement.dataset.id) {
		location.reload();
		return;
	}

	axios.post("/quiz/edit/" + quizElement.dataset.id + "/create", { //make a request to the server
		label: document.getElementById("create-label").value,
		answers: getAnswers(),
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

editBtn.addEventListener("click", function() {
	let quizElement = document.getElementById("quiz-id");

	if (!editBtn.dataset || !editBtn.dataset.id || !quizElement.dataset || !quizElement.dataset.id) {
		location.reload();
		return;
	}

	axois.get("/quiz/edit/" + quizElement.dataset.id + "/fetch/" + editBtn.dataset.id).then((resp) => {
		if (resp.data) {

		}
	}).catch((error) => {
		console.log(error);
	});
})