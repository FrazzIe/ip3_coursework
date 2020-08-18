var mysql = require("mysql");
var config = require("../config"); //import dependencies

var pool = mysql.createPool(config.mysql); //create connection pool

var queries = { //list of mysql queries

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