import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignup() {
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        ContentType: "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }).then((response) => {
      response.json().then((data) => console.log(data));
    });
  }
  return (
    <div className="form-container">
      <div className="form">
        <h2>SignUp</h2>
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
        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  );
};

export default Signup;
