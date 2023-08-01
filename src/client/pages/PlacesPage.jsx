import { Link } from "react-router-dom";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import "../styles/index.css";
import UserNavbar from "../components/UserNavbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function PlacesPage() {
  const [places, setPlaces] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <UserNavbar />

      <div className="max-w-[20vw] mx-auto mt-6">
        <Link to={"/account/places/new"}>
          <button className="flex items-center justify-center gap-1 ">
            <PlusSmallIcon className="h-5 w-auto" />
            Add new place
          </button>
        </Link>
      </div>
      <div>
        {places.length > 0 &&
          places.map((place, key) => (
            <div className="bg-gray-300 my-8 p-4 rounded-2xl">
              <Link to={"/account/places/" + place._id}>
                <h1>{place.title}</h1>
                <p>{place.description}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlacesPage;
