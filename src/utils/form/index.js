const formatName = /^[a-zA-Z\s]*$/;
const formatDNI = /^\d{1,9}$/;
const formatEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const minPasswordLength = 7;

export const UPDATED_FORM = "UPDATED_FORM";

const validateInput = ({ name, value }) => {
  let hasError = false;
  let error = "";
  const formatValue = value.trim();

  switch (name) {
    case "nombre":
      if (formatValue === "") {
        hasError = true;
        error = "El nombre es requerido";
      } else if (!formatName.test(formatValue)) {
        hasError = true;
        error = "El nombre es inválido";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "apellido":
      if (formatValue === "") {
        hasError = true;
        error = "El apellido es requerido";
      } else if (!formatName.test(formatValue)) {
        hasError = true;
        error = "El apellido es inválido";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "dni":
      if (formatValue === "") {
        hasError = true;
        error = "El DNI es requerido";
      } else if (!formatDNI.test(formatValue)) {
        hasError = true;
        error = "El DNI es inválido";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "email":
      if (formatValue === "") {
        hasError = true;
        error = "El email es requerido";
      } else if (!formatEmail.test(formatValue)) {
        hasError = true;
        error = "El email es inválido";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (formatValue === "") {
        hasError = true;
        error = "La contraseña es requerida";
      } else if (formatValue.length < minPasswordLength) {
        hasError = true;
        error = `Debe tener al menos ${minPasswordLength} caracteres`;
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = ({ name, value, dispatch, formState }) => {
  const { hasError, error } = validateInput({ name, value });
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key != name && hasError) {
      isFormValid = false;
      break;
    } else if (key != name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
