"use strict";

const modal = document.querySelector(".modal");
const navbarBtn = document.querySelector(".navbar__btn");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

navbarBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// span
const form = document.querySelector("form");
form.addEventListener("submit", validate);

function validate(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const PassWord = document.getElementById("password");
    const userError = document.getElementById("usererror");
    const emailError = document.getElementById("emailerror");
    const passError = document.getElementById("passerror");

    userError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";

    if (name.value === '') {
        userError.textContent = "enter your name!";
        event.preventDefault();
    }

    if (email.value === '') {
        emailError.textContent = "enter your email!";
        event.preventDefault();
    }

    if (email.value === '') {
        passError.textContent = "enter your password!";
        event.preventDefault();
    }
}
