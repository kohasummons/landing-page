import { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Auth.module.css";
import google from "../components/Google";
import { CiLogin } from "react-icons/ci";

const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();

  const fullnameHandler = () => {
    setFullname(nameRef.current.target);
  };
  const emailHandler = () => {
    setEmail(emailRef.current.value);
  };
  const phoneNumberHandler = () => {
    setPhoneNumber(phoneNumberRef.current.value);
  };
  const passwordHandler = () => {
    setPassword(passwordRef.current.value);
  };
  const countryHandler = () => {
    setCountry(countryRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const placeholderText =
    country === "nigeria"
      ? "+234"
      : country === "usa"
      ? "+1"
      : country === "uk"
      ? "+44"
      : "+234";

  return (
    <main className={styles.auth}>
      <div className="container">
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <h1>Create an account</h1>
          <button type="button" className={styles.google}>
            <span>{google}</span> Continue with Google
          </button>
          <p>OR</p>
          <div className={styles.inputGroup}>
            <label htmlFor="fullname">Fullname *</label>
            <input
              type="text"
              value={fullname}
              ref={nameRef}
              onChange={fullnameHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              value={email}
              ref={emailRef}
              onChange={emailHandler}
            />
          </div>
          <div className={styles.phoneInputGroup}>
            <label htmlFor="phone-number">
              Phone number <span>(optional)</span> *
            </label>
            <div className={styles.country}>
              <select
                name="country"
                value={country}
                onChange={countryHandler}
                ref={countryRef}
              >
                <option value="nigeria">🇳🇬</option>
                <option value="usa">🇺🇸</option>
                <option value="uk">🇬🇧</option>
              </select>
            </div>
            <div className={styles.pipe}></div>
            <input
              type="text"
              className={styles.phone}
              placeholder={placeholderText}
              value={phoneNumber}
              ref={phoneNumberRef}
              onChange={phoneNumberHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              value={password}
              ref={passwordRef}
              onChange={passwordHandler}
            />
          </div>
          <ul className={styles.requirements}>
            <li>One lowercase character</li>
            <li>One special character</li>
            <li>One uppercase character</li>
            <li>8 characters minimum</li>
            <li>One number</li>
          </ul>

          <button className={styles.createBtn}>
            <span>
              <CiLogin />
            </span>{" "}
            Create an account with email
          </button>

          <small className={styles.loginCta}>
            Already have an account?{" "}
            <span>
              <Link href="/login">Login</Link>
            </span>
          </small>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
