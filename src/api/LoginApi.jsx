import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setEror] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEror("");

    try {
      const res = await fetch("http://localhost:8000/api/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        throw new Error(data.detail || "Login failed");
      }

      localStorage.setItem("token", data.token || data.access);
      localStorage.setItem("user", JSON.stringify(data.user || data));

      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      setEror(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p>LOGIN</p>
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          error && <p>{error}</p>
          <button typeof="submit" disabled={loading}>
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
