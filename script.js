function checkPassword() {
    var password = document.getElementById("password").value;
    updateStrengthIndicator(password);
}

function updateStrengthIndicator(password) {
    var indicator = document.getElementById("strength-indicator");
    var strength = calculatePasswordStrength(password);

    indicator.style.width = strength + "%";

    if (strength < 30) {
        indicator.style.backgroundColor = "red";
    } else if (strength < 60) {
        indicator.style.backgroundColor = "orange";
    } else {
        indicator.style.backgroundColor = "green";
    }
}

function calculatePasswordStrength(password) {
    return Math.min(password.length / 12 * 100, 100);
}
