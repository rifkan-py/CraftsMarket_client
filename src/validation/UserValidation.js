import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("last Name is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email must be required"),
  password: yup
    .string()
    .min(8, "password should be minimum 8 characters long")
    .max(20, "password cannot be more than 20 characters")
    .required("password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
