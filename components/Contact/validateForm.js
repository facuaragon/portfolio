export const validations = (form) => {
  const errors = {};
  if (!form.firstName) {
    errors.firstName = "Required";
  } else {
    errors.firstName = "";
  }
  if (!form.lastName) {
    errors.lastName = "Required";
  } else {
    errors.lastName = "";
  }
  if (!form.email) {
    errors.email = "Required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      form.email
    )
  ) {
    errors.email = "Format not valid";
  } else {
    errors.email = "";
  }
  if (!form.phone) {
    errors.phone = "Required";
  } else if (!/^[0-9]*$/.test(form.phone)) {
    errors.phone = "Numbers only";
  } else {
    errors.phone = "";
  }
  if (!form.message) {
    errors.message = "Required";
  } else {
    errors.message = "";
  }
  return errors;
};
