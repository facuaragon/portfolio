"use client";
import { useEffect, useState } from "react";
import styles from "./contact.module.css";
import { validations } from "./validateForm";
export default function Contact() {
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
    console.log(e.target.name);
    const property = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(form);
    console.log(errors);
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
        <button>Submit</button>
      </form>
    </>
  );
}
