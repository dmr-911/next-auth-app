export const loginValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password validation
  if(!values.password){
    errors.password = "Password required"
  } else if (values.password.length <8 || values.password.length > 20 ){
    errors.password = "Must be greater than 8 and less than 20 characters"
  } else if(values.password.includes(" ")){
   errors.password = "Invalid password" 
  }

  return errors;
};
