import Header from "./components/Header";
import "./styles/App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Indexpage from "./pages/Indexpage";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import UserAccount from "./pages/UserAccount";
import PlacesPage from "./pages/PlacesPage";
import FormPage from "./pages/FormPage";

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
          <Route path="/account/" element={<UserAccount />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<FormPage />} />
          <Route path="/account/places/:id" element={<FormPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
