import Header from "./components/Header";
import "./styles/App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Indexpage from "./pages/Indexpage";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import UserAccount from "./pages/UserAccount";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function Layout() {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage?" element={<UserAccount />} />
          <Route path="/account/:subpage/:action" element={<UserAccount />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
