import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/login", {
        email,
        password,
      });
      alert("Successful");
    } catch (error) {
      alert("There was a problem");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            id="email"
            onChange={handleChange(setEmail)}
            placeholder="your@email.com"
            required
          />
          <input
            type="password"
            id="password"
            onChange={handleChange(setPassword)}
            placeholder="password"
            required
          />
          <button>Login</button>
        </form>
        <p className="text-center">
          Don't have an account yet?{" "}
          <a href="/register" className="text-blue-400 ml-2">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
