import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function UserThumbnail() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center border border-black rounded-full py-2 px-4 gap-2 shadow-lg">
      <a href="">
        <Bars3Icon className="w-6 h-6" />
      </a>
      <Link to={user ? "/account/profile" : "/login"} className="flex gap-2">
        <UserCircleIcon className="w-6 h-6  fill-[#60A5FA]" />
        {!!user && <span>{user.name}</span>}
      </Link>
    </div>
  );
}

export default UserThumbnail;
