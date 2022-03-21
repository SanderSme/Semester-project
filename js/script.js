function validateForm() {
  let email = document.forms["contact-form"]["email"].value;
  let firstName = document.forms["contact-form"]["first-name"].value;
  let lastName = document.forms["contact-form"]["last-name"].value;
  let message = document.forms["contact-form"]["message"].value;

  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");

  const emailError = document.getElementById("email-error");
  const firstNameError = document.getElementById("firstName-error");
  const lastNameError = document.getElementById("lastName-error");
  const messageError = document.getElementById("message-error");
  const submitted = document.querySelector(".submitted");

  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    emailError.innerHTML = "Please enter correct E-Mail ID";
    return false;
  } else {
    emailError.innerHTML = "";
  }
  if (firstName == "") {
    firstNameError.innerHTML = "Please fill in your first name";
    return false;
  } else {
    firstNameError.innerHTML = "";
  }
  if (lastName == "") {
    lastNameError.innerHTML = "Please fill in your last name";
    return false;
  } else {
    lastNameError.innerHTML = "";
  }
  if (message.length < 10) {
      messageError.innerHTML = "Message must be atleast 10 characters"
      return false
  } else {
      messageError.innerHTML = ""
  }
  submitted.innerHTML = "Message sent"
  return true;
}
