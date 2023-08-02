import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import "../styles/index.css";

function Indexpage() {
  const [places, setPlaces] = useState([]);

  const { user } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 my-6">
      {places.length > 0 &&
        places.map((place) => (
          <div className="my-3 mx-6 p-4 rounded-2xl">
            <div className="flex flex-col items-center">
              <img
                src={
                  `http://localhost:5000/upload/${user.id}/` + place.photos[0]
                }
                alt="photo"
                className="w-32 h-32 rounded-2xl"
              />
              <div className="mx-4">
                <h1 className="font-bold mb-2">{place.title}</h1>
                <p className="text-justify">{place.address}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Indexpage;
