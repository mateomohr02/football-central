const validation = (userData) => {
  const errors = {};

  if (!userData.email) {
    errors.email = "Debe ingresar un email";
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email ingresado no es válido";
  } else if (userData.email.length > 35) {
    errors.email = "El email no debe superar los 35 caracteres";
  }

  // Validaciones de contraseña
  if (!userData.password) {
    errors.password = "Debe ingresar una contraseña";
  } else if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "La contraseña debe tener una longitud de entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
