import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "../styles/Auth.module.css";
import google from "../components/Google";
import { CiLogin } from "react-icons/ci";
import { registerUser } from "../redux/auth/authAction";
import { useForm } from "../utils/hooks";
import { registerValidator } from "../utils/formValidation";
import { notificationError, notificationSuccess } from "../utils/helpers";

const RegisterPage = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    country: "",
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const callback = () => {
    registerUser(dispatch, values).then((res) => {
      if (res.status === "success") {
        notificationSuccess(res.message);
        router.push("/");
      } else if (res.status === "error") {
        notificationError(res.title);
      }
    });
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    callback,
    initialValues,
    registerValidator
  );

  const placeholderText =
    values.country === "nigeria"
      ? "+234"
      : values.country === "usa"
      ? "+1"
      : values.country === "uk"
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
            <label htmlFor="name">Fullname *</label>
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
            <small className={styles.error}>{errors.fullname}</small>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
            />
            <small className={styles.error}>{errors.email}</small>
          </div>
          <div className={styles.phoneInputGroup}>
            <label htmlFor="phone">
              Phone number <span>(optional)</span> *
            </label>
            <div className={styles.country}>
              <select
                name="country"
                value={values.country}
                onChange={handleChange}
              >
                <option value="nigeria">🇳🇬</option>
                <option value="usa">🇺🇸</option>
                <option value="uk">🇬🇧</option>
              </select>
            </div>
            <div className={styles.pipe}></div>
            <input
              name="phone"
              type="text"
              className={styles.phone}
              placeholder={placeholderText}
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password *</label>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <small className={styles.error}>{errors.password}</small>
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
