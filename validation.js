const form = document.querySelector("form");
const inputs = form.querySelectorAll("div input");

form.addEventListener("input", (event) => {
    const error = event.target.closest("div").querySelector("span");
    if(event.target.validity.valid && error.classList.contains("active")) {
        error.classList.remove("active");
    }
})

form.addEventListener("focusout", (event) => {
    const error = event.target.closest("div").querySelector("span");
    if(!event.target.validity.valid) {
        error.classList.add("active");
    }
})

form.addEventListener("submit", (event) => {
    if(!form.checkValidity()) {
        inputs.forEach(showError);
        event.preventDefault();
    }
})

function showError(input) {
    if (!input.validity.valid) {
        const error = input.closest("div").querySelector("span");
        error.classList.add("active");
    }
}