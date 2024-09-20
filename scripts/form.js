document.getElementById('passwordConfirm').addEventListener('input', function () {
    var password = document.getElementById('password').value;
    var confirmPassword = this.value;
    if (password !== confirmPassword) {
        this.setCustomValidity('Passwords must match.');
    } else {
        this.setCustomValidity('');
    }
});

function updateRating(value) {
    document.getElementById('ratingValue').textContent = value;
}