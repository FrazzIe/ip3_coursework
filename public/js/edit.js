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

function removeAnswerFromList(answerNode) {
	answerNode.remove();
}

function changeAnswerInList(answerNode) {
	let bool = answerNode.getAttribute("data-delete") == "true" ? false : true;

	answerNode.setAttribute("data-delete", bool);

	if (bool) {
		answerNode.childNodes[1].childNodes[1].childNodes[0].classList.remove("btn-danger");
		answerNode.childNodes[1].childNodes[1].childNodes[0].classList.add("btn-success");
		answerNode.childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML = "undo";
	} else {
		answerNode.childNodes[1].childNodes[1].childNodes[0].classList.remove("btn-success");
		answerNode.childNodes[1].childNodes[1].childNodes[0].classList.add("btn-danger");
		answerNode.childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML = "&times;";
	}
}

function addAnswerToList(elemPrefix, answerData) {
	let answerList = document.getElementById(elemPrefix + "-answers-list");
	let num = 0;

	if (answerList.lastElementChild != null) {
		 num = parseInt(answerList.lastElementChild.getAttribute("data-id")) + 1;
	}

	let textId = elemPrefix + "-answer-" + num;
	let checkboxId = elemPrefix + "-answer-checkbox-" + num;
	let answerNode = document.createElement("div");
	let answerCheckbox = false;
	let answerLabel = "";

	if (answerData) {
		answerNode.setAttribute("data-answer-id", answerData.id);
		answerNode.setAttribute("data-delete", false);
		answerLabel =  answerData.label;
		answerCheckbox = answerData.is_correct == 1;
	}

	//answers.id, answers.question_id, answers.label, answers.is_correct
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
	answerNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].checked = answerCheckbox;
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
	answerNode.childNodes[1].childNodes[0].setAttribute("value", answerLabel);
	answerNode.childNodes[1].appendChild(document.createElement("div"));
	answerNode.childNodes[1].childNodes[1].classList.add("input-group-append");
	answerNode.childNodes[1].childNodes[1].appendChild(document.createElement("button"));
	answerNode.childNodes[1].childNodes[1].childNodes[0].classList.add("btn", "btn-danger");
	answerNode.childNodes[1].childNodes[1].childNodes[0].setAttribute("type", "button");
	if (answerData) {
		answerNode.childNodes[1].childNodes[1].childNodes[0].onclick = function () { changeAnswerInList(answerNode) };
	} else {
		answerNode.childNodes[1].childNodes[1].childNodes[0].onclick = function () { removeAnswerFromList(answerNode) };
	}
	answerNode.childNodes[1].childNodes[1].childNodes[0].appendChild(document.createElement("span"));
	answerNode.childNodes[1].childNodes[1].childNodes[0].childNodes[0].setAttribute("aria-hidden", "true");
	answerNode.childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML = "&times;";

	answerList.appendChild(answerNode);
}

function getAnswers(elemPrefix) {
	let newAnswers = [];
	let deletedAnswers = [];
	let changedAnswers = [];
	
	let answerList = document.getElementById(elemPrefix + "-answers-list");    

	if (answerList.hasChildNodes()) {
		let children = answerList.childNodes;

		for (let i = 0; i < children.length; i++) {
			if (children[i].dataset) {
				if (children[i].dataset.id) {
					if (children[i].dataset["answer-id"]) {
						if (children[i].dataset.delete == "true") {
							deletedAnswers.push(children[i].dataset["answer-id"]);
						} else {
							changedAnswers.push({
								id: children[i].dataset["answer-id"],
								label: document.getElementById(elemPrefix + "-answer-" + children[i].dataset.id).value,
								correct: document.getElementById(elemPrefix + "-answer-checkbox-" + children[i].dataset.id).checked,
							})
						}
					} else {
						newAnswers.push({
							label: document.getElementById(elemPrefix + "-answer-" + children[i].dataset.id).value,
							correct: document.getElementById(elemPrefix + "-answer-checkbox-" + children[i].dataset.id).checked,
						});
					}
				}
			}
		}
	}

	return [newAnswers, deleteAnswers, changedAnswers];
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

function editQuestion(id) {
	let quizElement = document.getElementById("quiz-id");

	if (!quizElement.dataset || !quizElement.dataset.id) {
		location.reload();
		return;
	}

	let requestHandler = function(event) {
		axios.get("/quiz/edit/" + quizElement.dataset.id + "/fetch/" + id).then((resp) => {
			console.log(resp.data);
			if (resp.data) {
				if (typeof resp.data != "object") {
					window.location.href = resp.data;
				} else {
					$("#loaderModal").modal("hide");
					document.getElementById("edit-label").value = resp.data.question.label;
					document.getElementById("edit-label").dataset.id = resp.data.question.id;
					for (let answer = 0; answer < resp.data.answers.length; answer++) {
						addAnswerToList("edit", resp.data.answers[answer]);
					}

					$("#edit-modal").modal("show");
				}
			}
		}).catch((error) => {
			console.log(error);
		});
	};

	$("#loaderModal").on("shown.bs.modal", requestHandler);
	$("#loaderModal").on("hide.bs.modal", function(event) {
		$("#loaderModal").off("shown.bs.modal", requestHandler);
	});
	
	$("#loaderModal").modal("show");
}