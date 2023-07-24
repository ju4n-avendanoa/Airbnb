import { useContext } from "react";
import {
  GlobeAmericasIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { UserContext } from "../UserContext";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="flex items-center justify-around">
        <div className="font-bold font-mono">
          <a href="/" className="flex items-center">
            <GlobeAmericasIcon className="md:w-10 md:h-10 w-6 h-6 mr-1" />
            <span>air</span>
            <span className="text-blue-400">bnb</span>
          </a>
        </div>
        <div>
          <nav>
            <ul className="hidden md:flex gap-4 border border-black rounded-full p-2  shadow-lg">
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
        <div className="flex border border-black rounded-full p-2 gap-2 shadow-lg">
          <a href="">
            <Bars3Icon className="w-6 h-6" />
          </a>
          <a href="/login">
            <UserCircleIcon className="w-6 h-6  fill-[#60A5FA]" />
          </a>
          {!!user && <span>{user.name}</span>}
        </div>
      </div>
    </header>
  );
}

export default Header;
