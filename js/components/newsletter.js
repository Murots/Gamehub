const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = document.querySelector("#newsletter-email");
const newsletterError = document.querySelector("#newsletter-error");

function validateForm(event) {
    event.preventDefault();

    if (validateEmail(newsletterEmail.value) === true) {
        newsletterError.style.display = "none";
    } else {
        newsletterError.style.display = "block";
    }
}

newsletterForm.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

