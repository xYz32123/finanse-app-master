import React, { useState } from "react";
import "./index.css";

// TODO: del after
const predefinedEmail = "user@example.com";
const predefinedPassword = "Password123!";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    // TODO: change it after React Router apllied
    // Validate password format
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one digit and one special character."
      );
      return;
    }

    // Check if the entered credentials match the predefined ones
    if (email === predefinedEmail && password === predefinedPassword) {
      // Set logged in status in localStorage
      localStorage.setItem("loggedIn", "true");

      // After successful login, redirect to BudgetApp.html
      window.location.href = "BudgetApp.html";
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={login}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
