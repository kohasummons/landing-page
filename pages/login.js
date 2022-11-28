import { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Auth.module.css";
import { FaGoogle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const emailHandler = () => {
    setEmail(emailRef.current.value);
  };

  const passwordHandler = () => {
    setPassword(passwordRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className={styles.auth}>
      <div className="container">
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <h1>Login to your account</h1>
          <small>
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/register">Create an account</Link>
            </span>
          </small>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              value={email}
              onChange={emailHandler}
              ref={emailRef}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              value={password}
              onChange={passwordHandler}
              ref={passwordRef}
            />
          </div>
          <p className={styles.forgot}>
            <Link href="/forgot-password">Forgot your password?</Link>
          </p>
          <div className={styles.cta}>
            <button>
              <span>
                <CiLogin />
              </span>{" "}
              Login with Email
            </button>
            <p>OR</p>
            <button type="button">
              <span>
                <FaGoogle />
              </span>{" "}
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
