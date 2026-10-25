import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import About from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import Login from "./pages/LoginPage";
import "./styles/Header.css";
function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <ul>
            <Link to="/">LOGO</Link>{" "}
          </ul>
          <ul>
            <Link to="/about">About Us</Link>{" "}
          </ul>
          <ul>
            <Link to="/contact">Contact Us</Link>{" "}
          </ul>
          <ul>
            <Link to="login">Login/Logout</Link>{" "}
          </ul>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<ContactUs />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
