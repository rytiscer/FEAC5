import { useNavigate, Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import logo from "../../assets/logoMain.svg";
import { ROUTES } from "../../router/consts";

// Apibrėžiame vartotojo tipą
interface User {
  name: string;
}

interface NavigationBarProps {
  user?: User; // vartotojas gali būti arba ne (optional)
}

const NavigationBar: React.FC<NavigationBarProps> = ({ user }) => {
  const navigate = useNavigate();

  // Apibrėžiame navigacijos nuorodų tipą
  const links: { href: string; label: string }[] = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.SERVICES,
      label: "Services",
    },
    {
      href: ROUTES.ABOUT_US,
      label: "About Us",
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.navButton}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.rightSection}>
        {user ? (
          <span className={styles.userInitial}>{user.name[0]}</span>
        ) : (
          <button
            className={styles.loginButton}
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Login / Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
