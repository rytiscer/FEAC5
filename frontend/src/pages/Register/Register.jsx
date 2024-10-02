import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Register.module.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const errorMessages = {
  required: "This field is required",
  invalidEmail: "Invalid email address",
  passwordMinLength: "Password must be at least 6 characters long",
  passwordsDontMatch: "Passwords do not match",
};

const Register = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(errorMessages.invalidEmail)
      .required(errorMessages.required),
    password: Yup.string()
      .min(6, errorMessages.passwordMinLength)
      .required(errorMessages.required),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], errorMessages.passwordsDontMatch)
      .required(errorMessages.required),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.heading}>Register</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={styles.error}>{formik.errors.email}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={styles.error}>{formik.errors.password}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className={styles.error}>{formik.errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>

      <div className={styles.socialLogin}>
        <button className={styles.socialButton}>
          <FaGoogle className={styles.icon} /> Register with Gmail
        </button>
        <button className={styles.socialButton}>
          <FaFacebook className={styles.icon} /> Register with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
