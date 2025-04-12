import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // For login endpoint
    if (isLogin) {
      try {
        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Login failed");
        }

        // Success handling for login
        setSuccess("Login successful!");
        console.log("Login successful!", data);

        // Store auth token in localStorage (if available in response)
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        localStorage.setItem("isLoggedIn", "true");

        // Wait a short moment before redirecting
        setTimeout(() => {
          onLoginSuccess();
        }, 1000);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    // For registration endpoint
    else {
      try {
        // For Reqres.in, we know only eve.holt@reqres.in will work
        // If using eve.holt@reqres.in, use the real API
        if (email === "eve.holt@reqres.in") {
          const response = await fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Registration failed");
          }

          // Success handling for eve.holt@reqres.in
          setSuccess("Registration successful!");
          console.log("Registration successful!", data);
        }
        // For any other email, simulate a successful registration
        else {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 800));

          // Mock a successful registration
          console.log("Simulated registration for:", email);
          setSuccess("Registration successful!");
        }

        // If registration was successful (real or simulated), switch to login view
        setTimeout(() => {
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setSuccess("Registration successful! Please login.");
        }, 1500);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-toggle">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <h1 className="auth-title">{isLogin ? "Sign In" : "Sign Up"}</h1>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="toggle-link">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={toggleForm} className="text-button">
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>

        <div className="divider"></div>

        <div className="test-info">
          <p>Test Credentials for Reqres.in:</p>
          <p>Email: eve.holt@reqres.in</p>
          <p>Password: pistol (or any password)</p>
          {!isLogin && (
            <p className="note">
              Note: For demo purposes, any registration will simulate success
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
