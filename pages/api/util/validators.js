const regExEmail =
  /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var regExPhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

export function validateRegisterInput(
  firstName,
  lastName,
  cellNumber,
  email,
  password,
  confirmPassword
) {
  const errors = {};

  if (firstName.trim() === "") {
    errors.firstName = "Nome non deve essere vuoto!";
  }

  if (firstName.trim().length > 20) {
    errors.username = "Nome non deve superare i 20 caratteri!";
  }

  if (lastName.trim() === "") {
    errors.lastName = "Cognome non deve essere vuoto!";
  }

  if (lastName.trim().length > 35) {
    errors.username = "Cognome non deve superare i 35 caratteri!";
  }

  if (!cellNumber) {
    errors.cellNumber = "Numero di telefono non deve essere vuoto!";
  } //validate number

  if (email.trim() === "") {
    errors.email = "Email non deve essere vuota!";
  } else {
    if (email.trim().length > 50) {
      errors.email = "Email non deve superare i 50 caratteri!";
    }

    if (!email.match(regExEmail)) {
      errors.email = "Email deve essere valida!";
    }
  }

  if (password.trim() === "") {
    errors.password = "Password non deve essere vuota!";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Le Password devono coincidere!";
  } else if (!password.match(regExPassword)) {
    errors.password =
      "Password deve contenere almeno 8 caratteri tra lettere e numeri!";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

export function validateLoginInput(userEmail, userPassword) {
  const errors = {};

  if (userPassword.trim() === "") {
    errors.userPassword = "Password non deve essere vuota!";
  }

  if (userEmail.trim() === "") {
    errors.userEmail = "Email non deve essere vuota!";
  } else {
    if (userEmail.trim().length > 50) {
      errors.userEmail = "Email non deve superare i 50 caratteri!";
    }

    if (!userEmail.match(regExEmail)) {
      errors.userEmail = "Email deve essere valida!";
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}
