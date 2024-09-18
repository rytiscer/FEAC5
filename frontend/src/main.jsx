import ReactDOM from "react-dom/client"; // Atkreipkite dėmesį į šį pakeitimą
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Sukurkite šaknies elementą
const root = ReactDOM.createRoot(document.getElementById("root"));

// Naudokite render metodą iš createRoot
root.render(
  <Router>
    <App />
  </Router>
);
