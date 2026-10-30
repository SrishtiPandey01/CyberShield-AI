
"use strict";

// 1. Register Validation Function
function validateRegister() {

    // Get input values
    let name = document.getElementById("fullName").value.trim();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    let confirmPassword =
        document.getElementById("confirmPassword").value.trim();


    // Get error elements
    let nameError = document.getElementById("nameError");

    let emailError = document.getElementById("emailError");

    let passwordError = document.getElementById("passwordError");

    let confirmError = document.getElementById("confirmError");

    let termsError = document.getElementById("termsError");

    let registerMessage = document.getElementById("registerMessage");


    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    termsError.textContent = "";
    registerMessage.textContent = "";


    // Email pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;


    // 2. Name Validation
    if (name === "") {

        nameError.textContent = "Full name is required.";

        isValid = false;
    }


    // 3. Email Validation
    if (email === "") {

        emailError.textContent = "Email is required.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Enter a valid email address.";

        isValid = false;
    }


    // 4. Password Validation
    if (password === "") {

        passwordError.textContent = "Password is required.";

        isValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        isValid = false;
    }


    // 5. Confirm Password Validation
    if (confirmPassword === "") {

        confirmError.textContent = "Please confirm your password.";

        isValid = false;

    } else if (password !== confirmPassword) {

        confirmError.textContent = "Passwords do not match.";

        isValid = false;
    }


    // 6. Terms and Conditions
    let terms = document.getElementById("terms");

    if (terms.checked === false) {

        termsError.textContent =
            "Please accept Terms and Conditions.";

        isValid = false;
    }


    // 7. Final Result
    if (isValid === true) {

        registerMessage.textContent =
            "Registration validation successful! Demo only.";

        registerMessage.style.color = "#4ade80";

    } else {

        registerMessage.textContent =
            "Please correct the errors above.";

        registerMessage.style.color = "#fca5a5";
    }

    return false;

}


// 8. Show and Hide Password
function togglePassword() {

    let password = document.getElementById("password");

    let confirmPassword =
        document.getElementById("confirmPassword");

    let showPassword = document.getElementById("showPassword");

    if (showPassword.checked === true) {

        password.type = "text";

        confirmPassword.type = "text";

    } else {

        password.type = "password";

        confirmPassword.type = "password";
    }

}


// 9. Clear Name Error
function clearNameError() {

    document.getElementById("nameError").textContent = "";

}


// 10. Clear Email Error
function clearEmailError() {

    document.getElementById("emailError").textContent = "";

}


// 11. Clear Password Error
function clearPasswordError() {

    document.getElementById("passwordError").textContent = "";

}


// 12. Clear Confirm Password Error
function clearConfirmError() {

    document.getElementById("confirmError").textContent = "";

}
