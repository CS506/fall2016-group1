## Detailed Requirements (revised version)
1. The web service shall display a home page for the user when the user accesses the service.
    1. If the user is not logged in, the web service shall display an Intro page allowing the user to (1) login and (2) register. 
    1. If the user is logged in, the web service shall display a home page with the following greeting message: "Welcome!"
1. The Intro page shall present an account creation form allowing the user to register.
    1. The account creation form shall contain the following form fields in the order given:
        1. Name
        1. Email
        1. Username
        1. Password
    1. These form fields shall be subject to the data requirements in ***Section 4.i***.
    1. The account creation form shall include a "Sign Up" button below the form fields.
    1. When the user clicks the "Register" button, the service shall validate the form field values.
        1. The service shall determine whether the form field values are consistent with the data requirements in ***Section 4.i***.
        1. If any form field value is inconsistent with the data requirements, the service shall display a warning message to the user and prevent the user from creating an account.
    1. If validation is successful, the service shall create an account for the user.
        1. The service shall convert the case-insensitive form field values as specified in ***Section 4.i*** to lowercase.
        1. The service shall insert the form field values in the database as a new `user` document.
    1. The service shall prevent duplicate accounts.
        1. The service shall determine if another account exists which has the same username as the username value supplied by the user.
            1. If there is a match, the service shall display a warning and prevent the user from creating an account.
        1. The service shall determine if another account exists which has the same email as the email value supplied by the user.
            1. If there is a match, the service shall display a warning and prevent the user from creating an account.
1. The Intro page shall present a login form allowing the user to login to the service.
    1. The login form shall contain the following form fields in the order given:
        1. Username
        1. Password
    1. The user shall display a button labelled "Login" below the form fields.
        1. When the user clicks the "Login" button, the service shall convert the username value that the user supplied to lowercase.
        1. The service shall then determine whether there exists an account with the lowercase username and password that the user has supplied.
        1. If there does not exist an account, the service shall display an "Invalid credentials" warning to the user and prevent the user from logging in.
        1. If there exists an account, the service shall display the user's account home page (see ***Section 1.2***).
1. **Data Requirements.**
    1. The service shall enforce the following form field requirements.
        1. Name
            1. The name value shall be between 1 character and 30 characters in length, inclusive.
            1. The name value shall be case-sensitive.
        1. Email
            1. The email value shall be unique (see ***Section 4.ii.c***).
            1. The email value shall be case-insensitive.
            1. The email value shall adhere to the email address requirements as specified by the client-side JavaScript framework.
        1. Username
            1. The username value shall be unique (see ***Section 4.ii.c***).
            1. The username value shall be case-insensitive.
            1. The username value shall be between 3 characters and 15 characters in length, inclusive.
        1. Password
            1. The password value shall be between 6 characters and 12 characters in length, inclusive.
            1. The password value shall contain only alphanumeric characters. *Alphanumeric characters* shall include uppercase and lowercase letters and digits.
    1. The service shall store its data in a MongoDB database.
        1. The database shall have a `users` collection to store user data.
        1. The `user` collection shall have fields for storing the respective form field values in ***Section 2.i***.
        1. The database shall have a unique index on each form field specified as unique in ***Section 4.i***.
