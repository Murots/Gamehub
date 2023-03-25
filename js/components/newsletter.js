const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = document.querySelector("#newsletter-email");
const newsletterError = document.querySelector("#newsletter-error");
const newsletterFeedback = document.querySelector("#newsletter-feedback");

function validateForm(event) {
    event.preventDefault();

    if (validateEmail(newsletterEmail.value) === true) {
        newsletterError.style.display = "none";
        newsletterForm.style.display = "none";
        newsletterFeedback.style.display = "grid";
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

