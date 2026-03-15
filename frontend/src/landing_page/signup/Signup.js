import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    console.log(name, email, password);
    console.log("Signup button clicked");
    const res = await fetch("http://localhost:3002/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/login";
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create your account</h2>
        <p className="subtitle">Start your trading journey</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Create Account</button>

        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
