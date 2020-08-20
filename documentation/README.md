# Background
Online quiz sessions are very popular at the moment. This work requires you to create a prototype for a web-based quiz. It will allow sets of questions to be created by an administrator and then quiz sessions to be run by participants, based upon selecting from these sets of
questions. The specification has a set of requirements. You are both Designer and Developer and must implement and test against that specification. You should not use a predefined quiz framework, but build this yourself. Apart from that, you are free to use any code libraries, frameworks or services in order to create the web-application.

# Requirements

1. Authentication
    - 1.1. Users must authenticate themselves (username & password) in order to use the application
    - 1.2. Users can be of two types: ‘Admin’ or ‘User’.
        - 1.2.1. Admin creates questions.
        - 1.2.2. Users participate in quiz sessions.
    - 1.3. Simplification: you can use pre-defined users within your application, if you do not wish to use registration of users.
    - 1.4. You must have one Admin and at least three Users.

2. Core Admin Features
    An Admin can do the following:
    - 2.1. Login
    - 2.2. Logout
    -  2.3. Create new sets of quiz questions/answers. Each set should have an identifying label.
        - 2.3.1. Each set has five quiz questions and their answers.
        - 2.3.2. Quiz sets can be stored locally.
        - 2.3.3. Admin creates sets of questions and answers via a web-interface.
            - 2.3.3.1. Note: For testing purposes, you might first create these sets in some other way (in some local storage), in order to be able to test the system with Users.
        - 2.3.4. There must be at least ten sets of questions provided in the application, for demonstration purposes.
    - 2.4. Delete any set of questions/answers.
    - 2.5. List the Q/A contents of the sets, showing the set labels.

3. Core User Features
    A user can do the following:
    - 3.1. Login
    - 3.2. Logout
    - 3.3. Select any set of questions to be answered in a Q/A session.
        - 3.3.1. When the Q/A session with one set is complete, then another set can be selected.
    - 3.4. Enter an answer to each question in the set.
    - 3.5. Be given an outcome from the Q/A session, with a score.
        - 3.5.1. The outcome shows which questions were answered correctly or incorrectly.
        - 3.5.2. The score for each set of Q/A session should be stored for that particular user.
    The system must provide the following features to support the user:
    - 3.6. Store the outcome of each Q/A session.
    - 3.7. Retain the outcomes so that when a specific user logs-out and then logs-in again, the outcomes of the Q/A sessions are maintained.
    - 3.8. View all scores.
4. Additional Features
    - 4.1. When delivered, the quiz should be populated with sets.
    - 4.2. For ease of testing, the user-names and passwords should be available on one page of the application.