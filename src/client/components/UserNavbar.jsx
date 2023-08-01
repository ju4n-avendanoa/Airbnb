import { UserIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function UserNavbar() {
  return (
    <nav className="flex w-full justify-center mt-10 gap-6">
      <NavLink
        to={"/account/"}
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
  );
}

export default UserNavbar;
