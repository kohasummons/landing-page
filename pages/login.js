import { useDispatch } from "react-redux";
import Link from "next/link";
import styles from "../styles/Auth.module.css";
import { FaGoogle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { loginUser } from "../redux/auth/authAction";
import { notificationError, notificationSuccess } from "../utils/helpers";
import { useForm } from "../utils/hooks";
import { loginValidator } from "../utils/formValidation";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const callback = () => {
    loginUser(dispatch, values).then((res) => {
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
    loginValidator
  ); 

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
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
            />
            <small className={styles.error}>{errors.email}</small>
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
