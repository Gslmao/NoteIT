"use client";
import { useState } from "react";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName:username, passwd:password })
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#3A312C" }}>
        Welcome back
      </h2>

      <Input
        label="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <a href="/auth/signup" style={{ fontSize: "12px" }}>
          Sign Up if you haven't registered
        </a>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </>
  );
}
