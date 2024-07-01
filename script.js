function validatePasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return false; // Prevent form submission
    } else {
        message.textContent = "";
        return true; // Allow form submission
    }
}
