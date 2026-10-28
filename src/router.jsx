import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import About from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import "./styles/Header.css";
import LoginPage from "./pages/LoginPage";
function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <ul>
            <Link id="nav-links" to="/">
              LOGO
            </Link>{" "}
          </ul>
          <ul>
            <Link id="nav-links" to="/about">
              About Us
            </Link>{" "}
          </ul>
          <ul>
            <Link id="nav-links" to="/contact">
              Contact Us
            </Link>
          </ul>
          <ul>
            <Link id="nav-links" to="login">
              Login/Logout
            </Link>{" "}
          </ul>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
