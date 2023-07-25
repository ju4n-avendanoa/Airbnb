import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await axios.post("/register", {
        name,
        email,
        password,
      });
      console.log(user);
      alert("Successful");
    } catch (error) {
      alert("problem");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Sign up</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            id="name"
            onChange={handleChange(setName)}
            placeholder="your name"
            className="forms"
            required
          />
          <input
            type="email"
            id="email"
            onChange={handleChange(setEmail)}
            placeholder="your@email.com"
            className="forms"
            required
          />
          <input
            type="password"
            id="password"
            onChange={handleChange(setPassword)}
            placeholder="password"
            className="forms"
            required
          />
          <button>Sign up</button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-400 ml-2">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
