import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar"; // Priklausomai nuo failo struktūros
import { ROUTES } from "../router/consts";

const MockNavigationBar: React.FC<{ user?: { name: string } }> = ({ user }) => (
  <Router>
    <NavigationBar user={user} />
  </Router>
);

describe("NavigationBar", () => {
  test("renders navigation links", () => {
    render(<MockNavigationBar user={undefined} />); // Nurodykite user kaip undefined

    // Patikrinkite, ar visi nuorodų mygtukai yra rodomi
    const homeLink = screen.getByText(/Home/i);
    const servicesLink = screen.getByText(/Services/i);
    const aboutUsLink = screen.getByText(/About Us/i);

    expect(homeLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
  });

  test("displays user initial when user is logged in", () => {
    const user = { name: "John Doe" };
    render(<MockNavigationBar user={user} />);

    // Patikrinkite, ar naudotojo inicialas yra rodomas
    const userInitial = screen.getByText(/J/i); // 'J' yra naudotojo inicialas
    expect(userInitial).toBeInTheDocument();
  });

  test("displays login button when user is not logged in", () => {
    render(<MockNavigationBar user={undefined} />); // Nurodykite user kaip undefined

    // Patikrinkite, ar mygtukas "Login / Sign Up" yra rodomas
    const loginButton = screen.getByRole("button", {
      name: /Login \/ Sign Up/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("navigates to login page when clicking the login button", () => {
    render(<MockNavigationBar user={undefined} />); // Nurodykite user kaip undefined

    const loginButton = screen.getByRole("button", {
      name: /Login \/ Sign Up/i,
    });

    // Simuliuoti mygtuko paspaudimą
    fireEvent.click(loginButton);

    // Patikrinkite, ar buvo nukreipta į LOGIN maršrutą
    // Kadangi jest nemato realios navigacijos, tikrinsime tik funkciją
    expect(window.location.pathname).toBe(ROUTES.LOGIN); // Reikės atnaujinti maršrutą realiame teste
  });
});
