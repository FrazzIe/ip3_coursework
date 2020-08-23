# Quiz Manager

A web application to create, complete and manage quizzes

## Features

* Password encryption (argon2)
* Login/Registration
* Create, Delete & Edit Quizzes
* Complete Quizzes
* View Quiz Results
* Lists Quizzes on the homepage
* Responsive, works on all kinds of devices

## Requirements

* A functioning MySQL database (MariaDB - https://mariadb.com/downloads/) or use XAMPP (https://www.apachefriends.org/index.html) for hosting locally

## How to install/setup

1. Clone repository `git clone https://github.com/FrazzIe/ip3_coursework/`
2. `cd ip3_coursework`
3. Install dependecies by typing `npm i` in command prompt
4. Import the `schema.sql` file into your database
5. Configure database credentials etc in the `.env` file
7. Run the application `npm run start` in command prompt

## Configuration

* Sensitive information such as database credentails etc can be found in the `.env` file

```
# Database credentails
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASS=
MYSQL_DB=quiz_manager
# Session secret
SESSION_SECRET=secret
```

## [Live Demo](http://quiz-manager-demo.herokuapp.com/)

* There are 10 quiz sets available in the live demo to mess about with!

### Demo accounts

| Username | Password | Admin |
|----------|----------|-------|
| aa       | aa       | true  |
| bb       | bb       | false |
| cc       | cc       | false |
| dd       | dd       | false |
