import { Link } from "react-router-dom";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import "../styles/index.css";
import UserNavbar from "../components/UserNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/uploads").then(setPlaces(data));
  });
  return (
    <div>
      <UserNavbar />

      <div className="max-w-[20vw] mx-auto mt-6">
        <p className="w-full">show new places</p>
        <Link to={"/account/places/new"}>
          <button className="flex items-center justify-center gap-1 ">
            <PlusSmallIcon className="h-5 w-auto" />
            Add new place
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PlacesPage;
