import { useContext } from "react";
import { UserContext } from "../UserContext";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import "../styles/UserAccount.css";
import ProfilePage from "./ProfilePage";
import PlacesPage from "./PlacesPage";
import { UserIcon } from "@heroicons/react/24/outline";

function UserAccount() {
  const { user, ready } = useContext(UserContext);
  const { subpage } = useParams();
  const navigate = useNavigate();

  if (!ready) return "Loading....";

  if (ready && !user) {
    return navigate("/login");
  }

  return (
    <div>
      <nav className="flex w-full justify-center mt-10 gap-6">
        <NavLink
          to={"/account/profile"}
          className={({ isActive }) =>
            isActive
              ? "active"
              : "flex items-center gap-2 py-2 px-4 border border-black rounded-full hover:bg-zinc-200"
          }
        >
          <UserIcon className="h-5 w-auto" />
          My&nbsp;profile
        </NavLink>
        <NavLink
          to={"/account/bookings"}
          className={({ isActive }) =>
            isActive
              ? "active"
              : "py-2 px-4 border border-black rounded-full hover:bg-zinc-200"
          }
        >
          My&nbsp;bookings
        </NavLink>
        <NavLink
          to={"/account/places"}
          className={({ isActive }) =>
            isActive
              ? "active"
              : "py-2 px-4 border border-black rounded-full hover:bg-zinc-200"
          }
        >
          My&nbsp;Accommodations
        </NavLink>
      </nav>
      {subpage === "profile" && <ProfilePage />}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}

export default UserAccount;
