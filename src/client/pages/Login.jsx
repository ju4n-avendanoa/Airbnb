import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
      navigate("/");
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
          <button>Login</button>
        </form>
        <p className="text-center">
          Don&apos;t have an account yet?{" "}
          <Link to={"/register"} className="text-blue-400 ml-2">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
