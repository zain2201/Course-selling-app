import React, { useState } from "react";
import "../css/login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleLoginup() {
    try {
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          ContentType: "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      }).then((response) => {
        response.json().then((data) => console.log(data));
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form-container">
      <div className="form">
        <h2>Login</h2>
        <br />
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleLoginup}>Login</button>
      </div>
    </div>
  );
};

export default Login;
