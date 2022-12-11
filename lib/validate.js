export const loginValidate = (values) => {
  const errors = {};

  //   email validation
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password validation
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  return errors;
};

export const registerValidate = (values) => {
  const errors = {};

//   name validation 
  if (!values.username) {
    errors.username = "Required username";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid username";
  }

  //   email validation
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password validation
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  // confirm password validation
  if (!values.cpassword) {
    errors.cpassword = "Password required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password didn't matched!";
  } else if (values.cpassword.length < 8 || values.cpassword.length > 20) {
    errors.cpassword = "Must be greater than 8 and less than 20 characters";
  }

  return errors;
};
