const dotenv = require('dotenv').config(); //load .env file into process.env.*

if (dotenv.error) { //throw an error if the environment vars failed to load
    throw dotenv.error
}

const config = {
    app: {
        port: process.env.PORT || 3000
    }
}

module.exports = config;