import React, { useState, useEffect } from "react";
import "../../assets/styles/style.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";
import { message } from "antd";
import { TextField } from "@mui/material";


export default function Demo2() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState(0);
  let navigate = useNavigate();
  const Schema = Yup.object().shape({
    oldPassword: Yup.string("Enter your current password")
    .required("Current Password is required"),
    passwords: Yup.string("Enter your new password")
      .min(6, "Password should be of minimum 6 characters length")
      .max(15, "Password should be of maximum 15 characters length")
      .required("New password is required")

      .matches(/[A-Z].*[A-Z]/, "must contain two uppercase characters")
      .matches(/[a-z].*[a-z]/, "must contain 2 lowercase characters")
      .matches(/(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/, "atmost 2 special characters"),
    //   .test('atMost2SpecialCharacters', 'Atmost 2 special characters are allowed!', 
    //   function (value) {
    //     return new Promise((resolve, reject) => {
    //         const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
    //         const allFoundCharacters = value.match(specialChars);
    //         if (allFoundCharacters.length > 2) {
    //             resolve(false);
    //         } else {
    //             resolve(true);
    //         }
    //     });
    // }),
      

    newPassword: Yup.string("Confirm Password")
      .oneOf([Yup.ref("passwords"), null], "Passwords must match")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      passwords: "",
      newPassword: "",
      customerId: localStorage.getItem("customerId"),
    },
  });
  
  return (
    <>
    <div id="passwordupdate">
    <Formik
                      initialValues={{
                        oldPassword: "",
                        passwords: "",
                        newPassword: "",
                        customerId: localStorage.getItem("customerId"),
                      }}
                      validationSchema={Schema}
                      onSubmit={(values) => {
                        console.log("checking");
                        setIsSubmitting(true);
                        console.log(JSON.stringify(values, null, 2));
                        axios
                          .post(
                            "http://localhost/Eshop/Api/password.php",
                            JSON.stringify(values, null, 2)
                          )
                          .then((response) => {
                            console.log(response.data.message);
                            if (response.data.message === "Password updated.") {
                              message.success(response.data.message);

                              setIsSubmitting(false);
                            } else {
                              message.error(response.data.message);

                              setIsSubmitting(false);
                            }
                          })
                          .catch((error) => {
                            message.error("Try again later");
                            //formik.resetForm()
                            setIsSubmitting(false);
                          });
                      }}
                    >
                      {({
                        values,
                        errors,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        resetForm,
                        isValid,
                      }) => {
                        return (
                          <div id="formid">
      <form onSubmit={handleSubmit} className="form-val">
                            <br />
                            <div className="input-containers">
                              <label>Current Password</label>
                              <br />
                              <input
                               id="iputpass-word"
                                type="password"
                                name="oldPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.oldPassword}
                                error={
                                  formik.touched.oldPassword &&
                                  Boolean(formik.errors.oldPassword)
                                }
                              />
                              <br />
                              <span className="error" style={{ color: "red" }}>
                                {errors.oldPassword}
                              </span>
                            </div>

                            <br />
                            <div className="input-containers">
                              <label>New Password</label>
                              <br />
                              <input
                               id="iputpass-word"
                                type="password"
                                name="passwords"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.passwords}
                                error={
                                  formik.touched.passwords &&
                                  Boolean(formik.errors.passwords)
                                }
                              />
                              <br />
                              <span className="error" style={{ color: "red" }}>
                                {errors.passwords}
                              </span>
                            </div>
                            <br />
                            <div className="input-containers">
                              <label>Confirm Password</label>
                              <br />
                              <input
                               id="iputpass-word"
                                type="password"
                                name="newPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.newPassword}
                                error={
                                  formik.touched.newPassword &&
                                  Boolean(formik.errors.newPassword)
                                }
                              />
                              <br />
                              <span className="error" style={{ color: "red" }}>
                                {errors.newPassword}
                              </span>
                            </div>
                            <div className="button-container">
                              <button  id="iputpass-word"
                                type="submit"
                                color="primary"
                                disabled={!isValid || isSubmitting}
                              >
                                Submit
                              </button>
                              <button  id="iputpass-word" type="reset" onClick={(e) => resetForm()}>
                                {" "}
                                Reset
                              </button>
                            </div>
                            
                          </form>
                          </div>
                        );
                      }}
                    </Formik>
                    </div>
    </>
  );
}
