function validateForm() {
  let email = document.forms["contact-form"]["email"].value;
  let firstName = document.forms["contact-form"]["first-name"].value;
  let lastName = document.forms["contact-form"]["last-name"].value;
  let message = document.forms["contact-form"]["message"].value;
  let title = document.forms['contact-form']['title'].value;

  let atPosition = email.indexOf("@");
  let dotPosition = email.lastIndexOf(".");

  const titleError = document.getElementById("title-error");
  const emailError = document.getElementById("email-error");
  const firstNameError = document.getElementById("firstName-error");
  const lastNameError = document.getElementById("lastName-error");
  const messageError = document.getElementById("message-error");
  const submitted = document.querySelector(".submitted");
  const completeForm = document.querySelector(".contact-form");
  const backButton = document.querySelector(".back-button");

  if (title === "--") {
      titleError.innerHTML = "Please select a title"
      
  } else {
      titleError.innerHTML = "";
  }
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
  }
  if (message.length < 10) {
      messageError.innerHTML = "Message must be at least 10 characters"
    
  } else {
      messageError.innerHTML = ""
  }
  if (title !== "--" && atPosition > 1 &&
    dotPosition > atPosition + 2 &&
    dotPosition + 2 <= email.length && firstName && lastName && message.length > 10) {
      submitted.innerHTML = "Message sent"
  completeForm.innerHTML = "";
  backButton.innerHTML = `<a href="index.html" class="home-page-button">Back to homepage</a>`
    }
}
