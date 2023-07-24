import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setUser(data);
      setRedirect(true);
    } catch (error) {
      alert("There was a problem");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

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
          Don&apos;t have an account yet?{" "}
          <a href="/register" className="text-blue-400 ml-2">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
