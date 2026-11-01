import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    usename: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register/", form);
      alert("Registered! Now Login");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.usename || "Error registering");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
