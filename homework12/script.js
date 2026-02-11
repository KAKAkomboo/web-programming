const emailInput = document.getElementById('email');
const checkBtn = document.getElementById('checkBtn');
const error = document.getElementById('error');
const success = document.getElementById('success');

function showError(mesg) {
    error.textContent = mesg;
    error.style.display = 'block';
    emailInput.classList.add('error');
}

function showSuccess() {
    success.style.display = 'block';
    emailInput.classList.add('success');
}

checkBtn.addEventListener ('click', function() {
    const email = emailInput.value.trim()

    error.style.display = 'none';
    success.style.display = 'none';
    emailInput.classList.remove('error', 'success');

    if (email == ""){
        showError("Поле порожнє");
        return;
    }

    const atPos = email.indexOf('@');
    const dotPos = email.lastIndexOf('.');

    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.lenght) {
        showError("Email введено некоректно")
        return;
    }

    showSuccess();
})