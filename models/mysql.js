const mysql = require("mysql");
const config = require("../config"); //import dependencies

var pool = mysql.createPool(config.mysql); //create connection pool
var queries = { //list of mysql queries
	getUser: "SELECT users.id, users.username, users.password, users.admin, UNIX_TIMESTAMP(users.created_at) FROM users WHERE users.username = ?",
	createUser: "INSERT INTO users (`username`, `password`) VALUES (?, ?)",
	getQuizzes: "SELECT quiz.id, quiz.label, (SELECT COUNT(questions.id) FROM questions WHERE questions.quiz_id = quiz.id) AS 'questions', (SELECT COUNT(quiz_answers.id) FROM quiz_answers JOIN answers ON (quiz_answers.answer_id = answers.id) JOIN questions ON (answers.question_id = questions.id) JOIN quiz ON (questions.quiz_id = quiz.id) WHERE answers.is_correct = 1 AND quiz_answers.user_id = ?) AS 'score', (SELECT COUNT(quiz_answers.id) FROM quiz_answers JOIN answers ON (quiz_answers.answer_id = answers.id) JOIN questions ON (answers.question_id = questions.id) JOIN quiz ON (questions.quiz_id = quiz.id) WHERE quiz_answers.user_id = ?) AS 'questions_answered' FROM quiz",
	createQuiz: "INSERT INTO quiz (`user_id`, `label`) VALUES (?, ?)",
	getQuiz: "SELECT quiz.id, quiz.label FROM quiz WHERE quiz.id = ?",
	getQuestions: "SELECT questions.id, questions.quiz_id, questions.label FROM questions WHERE questions.quiz_id = ?",
	getAnswers: "SELECT answers.id, answers.question_id, answers.label, answers.is_correct FROM answers JOIN questions ON (answers.question_id = questions.id) WHERE questions.quiz_id = ?",
}

function execute(sql, params) { //asynchronous sql execute function
	return new Promise((resolve, reject) => { //create a new promise
		pool.query(sql, params, (error, result, fields) => { //query the server
		 if (error) reject(error); //if error then display error
			resolve(result); //return result
		});
	});
};

execute("SELECT VERSION()", {}).then((result) => { //Check if connection was successful
	console.log("Database: connection established!");
}).catch((error) => {
	console.log("Database: " + error.message);
});

module.exports = {
	queries: queries,
	query: execute
};