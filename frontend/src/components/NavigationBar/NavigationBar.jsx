import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>Services</button>
          <button className={styles.navButton}>About You</button>
        </div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.loginButton}>Login/Register</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
