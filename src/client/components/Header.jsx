import { useContext } from "react";
import {
  GlobeAmericasIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="flex items-center justify-around">
        <div className="font-bold font-mono">
          <Link to={"/"} className="flex items-center">
            <GlobeAmericasIcon className="md:w-10 md:h-10 w-6 h-6 mr-1" />
            <span>air</span>
            <span className="text-blue-400">bnb</span>
          </Link>
        </div>
        <div>
          <nav>
            <ul className="hidden md:flex gap-4 border border-black rounded-full py-2 px-4 shadow-lg">
              <li>
                <a href="">Anywhere</a>
              </li>
              <div className="border-l border-black"></div>
              <li>
                <a href="">Any week</a>
              </li>
              <div className="border-l border-black"></div>
              <li>
                <a href="">Add guests</a>
              </li>
              <MagnifyingGlassCircleIcon className="w-6 h-6 fill-[#60A5FA] " />
            </ul>
          </nav>
        </div>
        <div className="flex items-center border border-black rounded-full py-2 px-4 gap-2 shadow-lg">
          <a href="">
            <Bars3Icon className="w-6 h-6" />
          </a>
          <Link to={user ? "/account" : "/login"} className="flex gap-2">
            <UserCircleIcon className="w-6 h-6  fill-[#60A5FA]" />
            {!!user && <span>{user.name}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
