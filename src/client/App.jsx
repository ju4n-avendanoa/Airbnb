import { useState } from "react";
import Header from "./components/Header";
import "./styles/App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Indexpage from "./pages/Indexpage";

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
    <>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
