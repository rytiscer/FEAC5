import styles from "./NavigationBar.module.scss";
import logo from "../../assets/logoMain.svg";

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>Services</button>
          <button className={styles.navButton}>About You</button>
        </div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.loginButton}>Login/Sign Up</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
