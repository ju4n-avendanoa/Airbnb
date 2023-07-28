import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="font-bold font-mono">
      <Link to={"/"} className="flex items-center">
        <GlobeAmericasIcon className="md:w-10 md:h-10 w-6 h-6 mr-1" />
        <span>air</span>
        <span className="text-blue-400">bnb</span>
      </Link>
    </div>
  );
}

export default Logo;
