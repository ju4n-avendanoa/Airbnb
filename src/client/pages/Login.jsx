import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-6">Login</h1>
        <form action="" className="max-w-md mx-auto">
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
