import validator from "validator";
import { notifier } from "./helpers";

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
  } else if (
    values.hasOwnProperty("password") &&
    !validator.isStrongPassword(values.password)
  ) {
    errors.password = "Password is not strong";
  }

  return errors;
};



const beneficiaryValidator = (values) => {
  let errors = {};
  if (values.hasOwnProperty("name") && values.name === undefined) {
    errors.name = "Kindly provide beneficiary's name";
    notifier(errors.name);
  }

  if (values.hasOwnProperty("email") && values.email === undefined) {
    errors.email = "Kindly provide beneficiary's email";
    notifier(errors.email);
  } else if (
    values.hasOwnProperty("email") &&
    values.email !== undefined &&
    !validator.isEmail(values.email)
  ) {
    errors.email = "Kindly provide a valid email address";
    notifier(errors.email);
  }

  if (values.hasOwnProperty("phone") && values.phone === undefined) {
    errors.phone = "Kindly provide beneficiary's number";
    notifier(errors.phone);
  }

  return errors;
};

export { loginValidator, registerValidator, beneficiaryValidator };
