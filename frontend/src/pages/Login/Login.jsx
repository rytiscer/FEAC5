import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.scss";

const errorMessages = {
  required: "This field is required",
  invalidEmail: "Invalid email address",
  passwordMinLength: "Password must be at least 6 characters long",
};

const Login = () => {
  const { login } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(errorMessages.invalidEmail)
      .required(errorMessages.required),
    password: Yup.string()
      .min(6, errorMessages.passwordMinLength)
      .required(errorMessages.required),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      login({ email: values.email });
      window.location.href = "/";
    },
  });

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={styles.input}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={styles.error}>{formik.errors.email}</p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={styles.input}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={styles.error}>{formik.errors.password}</p>
          )}
        </div>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
