﻿
function validateForm() {
    let result = validateFirstName() & validateLastName() & validateEmail() & validatePassword() & validateConfirmPassword();

    if (!result) {
        document.querySelector("#Feedback").innerHTML = "Your form has errors. See above.";
        return false;
    } else {return true;}
}


function validateFirstName() {
    let name = document.querySelector("#FirstName").value;
    let warning = '';

    if (!name || name.length < 3) {
        warning += 'First Name is empty or too short. ';
    } else if (name.length > 30) {
        warning += 'First Name is too long. ';
    }

    if (warning == '') {
        document.querySelector("#FirstNameLabel").classList.remove('red');
        document.querySelector("#FirstNameFeedback").innerHTML = '';
        return true;
    } else {
        document.querySelector("#FirstNameFeedback").innerHTML = warning;
        document.querySelector("#FirstNameLabel").classList.add('red');
        return false;
    }
}


function validateLastName() {
    let name = document.querySelector("#LastName").value;
    let warning = '';

    if (!name || name.length < 3) {
        warning += 'Last Name is empty or too short. ';
    } else if (name.length > 30) {
        warning += 'Last Name is too long. ';
    }

    if (warning == '') {
        document.querySelector("#LastNameLabel").classList.remove('red');
        document.querySelector("#LastNameFeedback").innerHTML = '';
        return true;
    } else {
        document.querySelector("#LastNameFeedback").innerHTML = warning;
        document.querySelector("#LastNameLabel").classList.add('red');
        return false;
    }
}


function validateEmail() {
    let email = document.querySelector("#Email").value;
    let warning = '';

    if (!email || email.length < 5) {
        warning += 'Email is empty or too short. ';
    } else if (email.length > 20) {
        warning += 'Email is too long. ';
    }

    if (warning == '') {
        document.querySelector("#EmailLabel").classList.remove('red');
        document.querySelector("#EmailFeedback").innerHTML = '';
        return true;
    } else {
        document.querySelector("#EmailFeedback").innerHTML = warning;
        document.querySelector("#EmailLabel").classList.add('red');
        return false;
    }
}


function validatePassword() {
    let name = document.querySelector("#Password").value;
    let warning = '';

    if (!name || name.length < 3) {
        warning += 'Password is empty or too short. ';
    } else if (name.length > 30) {
        warning += 'Password is too long. ';
    }

    if (warning == '') {
        document.querySelector("#PasswordLabel").classList.remove('red');
        document.querySelector("#PasswordFeedback").innerHTML = '';
        return true;
    } else {
        document.querySelector("#PasswordFeedback").innerHTML = warning;
        document.querySelector("#PasswordLabel").classList.add('red');
        return false;
    }
}


function validateConfirmPassword() {
    let password = document.querySelector("#Password").value;
    let confirmPassword = document.querySelector("#ConfirmPassword").value;
    let warning = '';

    if (confirmPassword !== password) {
        warning += 'Password does not match. '
    }

    if (warning == '') {
        document.querySelector("#ConfirmPasswordLabel").classList.remove('red');
        document.querySelector("#ConfirmPasswordFeedback").innerHTML = '';
        return true;
    } else {
        document.querySelector("#ConfirmPasswordFeedback").innerHTML = warning;
        document.querySelector("#ConfirmPasswordLabel").classList.add('red');
        return false;
    }
}