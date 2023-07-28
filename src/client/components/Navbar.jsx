import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
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
          <MagnifyingGlassCircleIcon className="w-6 h-6 fill-blue-400 " />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
