const validation = (userData) => {
  const errors = {};

  // validacion username
  if (!userData.username) {
    errors.username = "debe ingresar un nombre de usuario";
  }
  if (userData.username.length < 6 || userData.username.length > 10) {
    errors.username = "el nombre de usuario tiene que tener entre 6 y 10 caracteres";
  }

  // validacion email
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "el email ingresado no es válido";
  }
  if (!userData.email) {
    errors.email = "debe ingresar un email";
  }
  if (userData.email.length > 35) {
    errors.email = "el email no debe superar los 35 caracteres";
  }

  // validaciones password
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "la contraseña tiene que tener al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "la contraseña tiene que tener una longitud de entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
