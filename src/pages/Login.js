import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "../assets/styles/login.css";
import Foot from "../components/FooterComponent/footer";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  passwords: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .required("Password is required"),
});

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      passwords: "",
    },
    validateOnMount: true,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log(JSON.stringify(values, null, 2));
      axios
        .post("http://localhost/Eshop/Api/login.php", JSON.stringify(values))
        .then(function (response) {
          console.log(response.data);
          console.warn(response.status);
          setIsSubmitting(response.data);

          if (response.data) {
            //   localStorage.setItem('token', response.data.jwt);
            localStorage.setItem("customerId", response.data.customerId);
            localStorage.setItem("customerName", response.data.customerName);
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("token", response.data.jwt);
            navigate(`/home`);
          } else {
            alert("Invalid Credentials Please try again");
            setIsSubmitting(false);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div className="menu">
        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <br />
            <br />
            <TextField
              fullWidth
              name="passwords"
              label="Password"
              type="password"
              value={formik.values.passwords}
              onChange={formik.handleChange}
              error={
                formik.touched.passwords && Boolean(formik.errors.passwords)
              }
              helperText={formik.touched.passwords && formik.errors.passwords}
            />
            <br />
            <br />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={!formik.isValid || isSubmitting}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
