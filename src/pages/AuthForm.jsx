import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
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

    const endpoint = isLogin
      ? "https://reqres.in/api/login"
      : "https://reqres.in/api/register";

    try {
      const response = await fetch(endpoint, {
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
        throw new Error(
          data.error || `${isLogin ? "Login" : "Registration"} failed`
        );
      }

      // Success handling
      const successMessage = isLogin
        ? "Login successful!"
        : "Registration successful!";
      setSuccess(successMessage);
      console.log(successMessage, data);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
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
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
