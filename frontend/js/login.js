
"use strict";

// 1. Login Validation Function
function validateLogin() {

    // Get input values
    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    // Get error message elements
    let emailError = document.getElementById("emailError");

    let passwordError = document.getElementById("passwordError");

    let loginMessage = document.getElementById("loginMessage");


    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";


    // Email Regular Expression
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;


    // 2. Email Validation
    if (email === "") {

        emailError.textContent = "Email is required.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";

        isValid = false;

    }


    // 3. Password Validation
    if (password === "") {

        passwordError.textContent = "Password is required.";

        isValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        isValid = false;

    }


    // 4. Final Validation Result
    if (isValid === true) {

        loginMessage.textContent =
            "Form validation successful! Demo login only.";

        loginMessage.style.color = "#4ade80";

    } else {

        loginMessage.textContent =
            "Please correct the errors above.";

        loginMessage.style.color = "#fca5a5";

    }

    return false;

}


// 5. Clear Email Error
function clearEmailError() {

    document.getElementById("emailError").textContent = "";

}


// 6. Clear Password Error
function clearPasswordError() {

    document.getElementById("passwordError").textContent = "";

}

