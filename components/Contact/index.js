"use client";
import { useEffect, useState } from "react";
import styles from "./contact.module.css";
import { validations } from "./validateForm";
import localFont from "next/font/local";
// import createMail from "@/utils/nodemailer";

import { close, success, error } from "@/redux/features/snackbar-slice";
import { useDispatch, useSelector } from "react-redux";

const simplon = localFont({
  src: [
    {
      path: "../Fonts/SimplonMono-Bold.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../Fonts/SimplonMono-Medium.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../Fonts/SimplonNorm-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function Contact() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.snackbarReducer.value.message);
  const color = useSelector((state) => state.snackbarReducer.value.color);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {}, [errors]);

  const validateForm = () => {
    const errors = validations(form);
    setErrors(errors);
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  const onSuccess = () => {
    dispatch(success());
  };
  const onError = () => {
    dispatch(error());
  };

  const closeMessage = () => {
    dispatch(close());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validations(form);
    setErrors(error);
    if (
      error.lastName === "" &&
      error.firstName === "" &&
      error.email === "" &&
      error.phone === "" &&
      error.message === ""
    ) {
      // setForm({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phone: "",
      //   message: "",
      // });

      try {
        const res = await fetch("api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        console.log("Mail --- enviado");
        onSuccess();
        setTimeout(() => {
          closeMessage();
        }, 3000);
      } catch (error) {
        console.log(error.message);
        onError();
        setTimeout(() => {
          closeMessage();
        }, 3000);
      }
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>Contact Me</div>
        <div className={styles.group}>
          <div className={styles.subGroup}>
            <label>
              First Name <span className={styles.required}>*</span>
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.firstName}</div>
          </div>
          <div className={styles.subGroup}>
            <label>
              Last Name <span className={styles.required}>*</span>
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.lastName}</div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.subGroup}>
            <label id="email">
              E-mail <span className={styles.required}>*</span>
            </label>
            <input name="email" value={form.email} onChange={handleChange} />
            <div className={styles.error}>{errors.email}</div>
          </div>
          <div className={styles.subGroup}>
            <label id="phone">
              Phone <span className={styles.required}>*</span>
            </label>
            <input name="phone" value={form.phone} onChange={handleChange} />
            <div className={styles.error}>{errors.phone}</div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.subGroup}>
            <label id="message">
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <div className={styles.error}>{errors.message}</div>
          </div>
        </div>
        <p style={{ color: color }}>{message ? message : "\u00A0"}</p>
        {/* {message ? <p style={{ color: color }}>{message}</p> : <p>&nbsp;</p>} */}
        <button>Submit</button>
      </form>
    </>
  );
}
