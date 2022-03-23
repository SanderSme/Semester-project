function validateCheckout() {
  let email = document.forms["contact-form"]["email"].value;
  let firstName = document.forms["contact-form"]["first-name"].value;
  let lastName = document.forms["contact-form"]["last-name"].value;

  let atPosition = email.indexOf("@");
  let dotPosition = email.lastIndexOf(".");

  const emailError = document.getElementById("email-error");
  const firstNameError = document.getElementById("firstName-error");
  const lastNameError = document.getElementById("lastName-error");
  const submitted = document.querySelector(".submitted");
  const submittedText = document.querySelector(".submitted-text");
  const completeForm = document.querySelector(".contact-form");

  if (
    atPosition < 1 ||
    dotPosition < atPosition + 2 ||
    dotPosition + 2 >= email.length
  ) {
    emailError.innerHTML = "Please enter correct E-Mail ID";
  } else {
    emailError.innerHTML = "";
  }
  if (firstName === "") {
    firstNameError.innerHTML = "Please fill in your first name";
  } else {
    firstNameError.innerHTML = "";
  }
  if (lastName === "") {
    lastNameError.innerHTML = "Please fill in your last name";
  } else {
    lastNameError.innerHTML = "";
    if (
      atPosition > 1 &&
      dotPosition > atPosition + 2 &&
      dotPosition + 2 <= email.length &&
      firstName &&
      lastName
    ) {
      submitted.innerHTML = "Thank you for your booking!";
      submittedText.innerHTML = "Your booking information will be sent to your E-Mail shortly";
      completeForm.innerHTML = "";
    }
  }
}