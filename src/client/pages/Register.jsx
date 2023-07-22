import React from "react";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Sign up</h1>
        <form action="" className="max-w-md mx-auto">
          <input
            type="text"
            id="name"
            onChange={handleChange(setName)}
            value={name}
            placeholder="your name"
          />
          <input
            type="email"
            id="email"
            onChange={handleChange(setEmail)}
            value={email}
            placeholder="your@email.com"
          />
          <input
            type="password"
            id="password"
            onChange={handleChange(setPassword)}
            value={password}
            placeholder="password"
          />
          <button>Sign up</button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 ml-2">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
