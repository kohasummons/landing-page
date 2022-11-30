import validator from "validator";

const loginValidator = (values) => {
  let errors = {};

  if (values.hasOwnProperty("email") && validator.isEmpty(values.email)) {
    errors.email = "Email cannot be empty";
  } else if (
    values.hasOwnProperty("email") &&
    !validator.isEmail(values.email)
  ) {
    errors.email = "Kindly provide a valid email address";
  }

  if (values.hasOwnProperty("password") && validator.isEmpty(values.password)) {
    errors.password = "Password cannot be empty";
  }

  return errors;
};

const registerValidator = (values) => {
  let errors = {};
  if (values.hasOwnProperty("name") && validator.isEmpty(values.name)) {
    errors.fullname = "Fullname cannot be empty";
  }

  if (values.hasOwnProperty("email") && validator.isEmpty(values.email)) {
    errors.email = "Email cannot be empty";
  } else if (
    values.hasOwnProperty("email") &&
    !validator.isEmail(values.email)
  ) {
    errors.email = "Kindly provide a valid email address";
  }

  if (values.hasOwnProperty("password") && validator.isEmpty(values.password)) {
    errors.password = "Password cannot be empty";
  } else if (values.hasOwnProperty("password") && !validator.isStrongPassword(values.password)) {
    errors.password = "Password is not strong";
  }

  return errors;
};


export { loginValidator, registerValidator };
