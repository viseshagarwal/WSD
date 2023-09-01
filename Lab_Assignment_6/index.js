let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let dob = document.getElementById("dob");

function onsubmit() {}

/*

    function validateEmail() {
        var emailInput = document.getElementById("email").value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var emailField = document.getElementById("email");

        if (emailPattern.test(emailInput)) {
            emailField.classList.remove("is-invalid");
            emailField.classList.add("is-valid");
        } else {
            emailField.classList.remove("is-valid");
            emailField.classList.add("is-invalid");
        }
    }

    function validateName() {
        var nameInput = document.getElementById("firstname").value;
        var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var nameField = document.getElementById("firstname");

        if (namePattern.test(nameInput)) {
            nameField.classList.remove("is-invalid");
            nameField.classList.add("is-valid");
        } else {
            nameField.classList.remove("is-valid");
            nameField.classList.add("is-invalid");
        }
    }

    function validateLastName() {
        var nameInput = document.getElementById("lastname").value;
        var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var nameField = document.getElementById("lastname");

        if (namePattern.test(nameInput)) {
            nameField.classList.remove("is-invalid");
            nameField.classList.add("is-valid");
        } else {
            nameField.classList.remove("is-valid");
            nameField.classList.add("is-invalid");
        }
    }

    function validatePassword() {
        var passwordInput = document.getElementById("password").value;
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        var passwordField = document.getElementById("password");

        if (passwordPattern.test(passwordInput)) {
            passwordField.classList.remove("is-invalid");
            passwordField.classList.add("is-valid");
        } else {
            passwordField.classList.remove("is-valid");
            passwordField.classList.add("is-invalid");
        }
    }

    function validateDateOfBirth() {
        var dobInput = document.getElementById("dob").value;
        var dobPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
        var today = new Date();
        var dobDate = new Date(dobInput);
        var dobField = document.getElementById("dob");

        if (
            dobPattern.test(dobInput) &&
            dobDate <= today &&
            today.getFullYear() - dobDate.getFullYear() >= 18
        ) {
            dobField.classList.remove("is-invalid");
            dobField.classList.add("is-valid");
        } else {
            dobField.classList.remove("is-valid");
            dobField.classList.add("is-invalid");
        }
    }

    function validateForm() {
  var passwordInput = document.getElementById("password").value;
  var confirmInput = document.getElementById("confirm_password").value;
  
  var passwordField = document.getElementById("password");
  var confirmField = document.getElementById("confirm_password");
  
  if (passwordInput !== confirmInput) {
    // If the passwords don't match, show an error message and mark both fields as invalid
    passwordField.classList.remove("is-valid");
    passwordField.classList.add("is-invalid");
    confirmField.classList.remove("is-valid");
    confirmField.classList.add("is-invalid");
    return false;
  }

  // If the passwords match, mark both fields as valid
  passwordField.classList.remove("is-invalid");
  passwordField.classList.add("is-valid");
  confirmField.classList.remove("is-invalid");
  confirmField.classList.add("is-valid");

  // If the passwords match, the form will be submitted
  return true;
}

    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("firstname").addEventListener("input", validateName);
    document.getElementById("lastname").addEventListener("input", validateLastName);
    document.getElementById("password").addEventListener("input", validatePassword);
    document.getElementById("confirm_password").addEventListener("input", validateForm);
    document.getElementById("dob").addEventListener("input", validateDateOfBirth);
    </script>

*/
