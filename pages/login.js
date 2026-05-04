import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      return alert("No account found. Please sign up first.");
    }

    const passwordMatch = await bcrypt.compare(
      form.password,
      storedUser.password
    );

    if (storedUser.email === form.email && passwordMatch) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", storedUser.name);

      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: "blue" }}>Login</h2>

      <div className="card">
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>
      </div>

      <p style={{ color: "green" }}>
        Don’t have an account?
      </p>

      <button onClick={() => router.push("/signup")}>
        Create Account
      </button>

      <p style={{ color: "yellow" }}>
        ©2026 AI Task Platform
      </p>
    </div>
  );
}