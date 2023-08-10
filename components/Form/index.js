"use client";
import { useEffect, useState } from "react";
import styles from "./form.module.css";
import localFont from "next/font/local";
import {
  close,
  sending,
  enviando,
  success,
  exitoso,
  error,
  errorEs,
} from "@/redux/features/snackbar-slice";
import { useDispatch, useSelector } from "react-redux";
import { form as formNames } from "@/utils/data";
import { formErrors } from "@/utils/data";

export default function Form() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageReducer.value.language);
  const message = useSelector((state) => state.snackbarReducer.value.message);
  const color = useSelector((state) => state.snackbarReducer.value.color);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {}, [errors]);

  const validations = (form) => {
    const errors = {};
    if (!form.name) {
      errors.name = formErrors.name[language];
    } else {
      errors.name = "";
    }
    if (!form.email) {
      errors.email = formErrors.email.required[language];
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        form.email
      )
    ) {
      errors.email = formErrors.email.format[language];
    } else {
      errors.email = "";
    }
    if (!form.phone) {
      errors.phone = formErrors.phone.required[language];
    } else if (!/^[0-9]*$/.test(form.phone)) {
      errors.phone = formErrors.phone.format[language];
    } else {
      errors.phone = "";
    }
    if (!form.message) {
      errors.message = formErrors.message[language];
    } else {
      errors.message = "";
    }
    return errors;
  };
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };
  const onSending = () => {
    language === "en" ? dispatch(sending()) : dispatch(enviando());
  };
  const onSuccess = () => {
    language === "en" ? dispatch(success()) : dispatch(exitoso());
  };
  const onError = () => {
    language === "en" ? dispatch(error()) : dispatch(errorEs());
  };

  const closeMessage = () => {
    dispatch(close());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validations(form);
    setErrors(error);
    if (
      error.name === "" &&
      error.email === "" &&
      error.phone === "" &&
      error.message === ""
    ) {
      try {
        onSending();
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
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };
  return (
    <>
      <form className={styles.form}>
        <div className={styles.tag}>{formNames.title[language]}</div>
        <div className={styles.subGroup}>
          <label>
            {formNames.name[language]}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input name="name" value={form.name} onChange={handleChange} />
          <div className={styles.error}>{errors.name}</div>
        </div>
        <div className={styles.subGroup}>
          <label id="email">
            {formNames.email[language]}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input name="email" value={form.email} onChange={handleChange} />
          <div className={styles.error}>{errors.email}</div>
        </div>
        <div className={styles.subGroup}>
          <label id="phone">
            {formNames.phone[language]}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          <div className={styles.error}>{errors.phone}</div>
        </div>

        <div className={styles.subGroup}>
          <label id="message">
            {formNames.message[language]}{" "}
            <span className={styles.required}>*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <div className={styles.error}>{errors.message}</div>
        </div>

        <p style={{ color: color }}>{message ? message : "\u00A0"}</p>

        <div className={styles.button} onClick={handleSubmit}>
          {formNames.button[language]}
        </div>
      </form>
    </>
  );
}
