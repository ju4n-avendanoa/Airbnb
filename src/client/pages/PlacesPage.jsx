import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  PlusSmallIcon,
  WifiIcon,
  HandThumbUpIcon,
  TruckIcon,
  TvIcon,
  ArrowLeftCircleIcon,
  BoltIcon,
  CakeIcon,
} from "@heroicons/react/24/solid";
import "../styles/index.css";
import axios from "axios";

function PlacesPage() {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [photoLink, setPhotoLink] = useState();
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("/account/places/new");
  }

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  const handleRemoveFile = (indexToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((item, index) => index !== indexToRemove)
    );
  };

  function addPhotoByLink() {}

  return (
    <div>
      {action !== "new" && (
        <div className="max-w-[20vw] mx-auto mt-6">
          <Link to={"/account/places/new"}>
            <button className="flex items-center justify-center gap-1 ">
              <PlusSmallIcon className="h-5 w-auto" />
              Add new place
            </button>
          </Link>
        </div>
      )}
      {action === "new" && (
        <div className="flex justify-center p-10">
          <form className="lg:w-[50vw] w-[70vw]" onSubmit={handleSubmit}>
            <div className="my-2">
              <h2 className="font-bold">Title</h2>
              <p className="text-gray-500">title for your place</p>
              <input
                type="text"
                className="forms"
                onChange={handleChange(setTitle)}
              />
            </div>
            <div className="my-2">
              <h2 className="font-bold">Address</h2>
              <p className="text-gray-500">address to this place</p>
              <input
                type="text"
                className="forms"
                onChange={handleChange(setAddress)}
              />
            </div>
            <div className="my-2">
              <h2 className="font-bold">Photos</h2>
              <p className="text-gray-500">the more the merrier</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="forms"
                  onChange={handleChange(setPhotoLink)}
                />
                <button className="w-[10vw]">add</button>
              </div>
            </div>
            {selectedFiles.length > 0 && (
              <div>
                <h3>Archivos seleccionados:</h3>
                <ul className="grid grid-cols-6">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>
                      <img
                        onClick={() => handleRemoveFile(index)}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          margin: "5px",
                        }}
                      />
                      {URL.createObjectURL(file)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="my-2">
              <h2 className="font-bold">Description</h2>
              <p className="text-gray-500">description of the place</p>
              <textarea
                className="description border"
                rows="10"
                onChange={handleChange(setDescription)}
              ></textarea>
            </div>
            <div className="my-2">
              <h2 className="font-bold">Perks</h2>
              <p className="text-gray-500">
                select all the perks of your place
              </p>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 py-2 h-auto">
                <label htmlFor="wi-fi" className="perks">
                  <input type="checkbox" id="wi-fi" />
                  <WifiIcon className="h-6" />
                  Wi-fi
                </label>
                <label htmlFor="Pet" className="perks">
                  <input type="checkbox" id="Pet" className="check" />
                  <HandThumbUpIcon className="h-6" />
                  Pet&nbsp;friendly
                </label>
                <label htmlFor="parking" className="perks">
                  <input type="checkbox" id="parking" className="check" />
                  <TruckIcon className="h-6" />
                  Free&nbsp;parking&nbsp;spot
                </label>
                <label htmlFor="tv" className="perks">
                  <input type="checkbox" id="tv" className="check" />
                  <TvIcon className="h-6" />
                  TV
                </label>
                <label htmlFor="entrance" className="perks">
                  <input type="checkbox" id="entrance" className="check" />
                  <ArrowLeftCircleIcon className="h-6" />
                  Private&nbsp;entrance
                </label>
                <label htmlFor="Kitchen" className="perks">
                  <input type="checkbox" id="Kitchen" className="check" />
                  <CakeIcon className="h-6" />
                  Kitchen
                </label>
                <label htmlFor="Washer" className="perks">
                  <input type="checkbox" id="Washer" className="check" />
                  <BoltIcon className="h-6" />
                  Washer
                </label>
              </div>
            </div>
            <div className="my-2">
              <h2 className="font-bold">Extra Info</h2>
              <p className="text-gray-500">House rules, etc</p>
              <textarea
                className="description border"
                rows="10"
                onChange={handleChange(setExtraInfo)}
              ></textarea>
            </div>
            <div className="my-2">
              <h2 className="font-bold">Check in&out times</h2>
              <p className="text-gray-500">
                add check in and out times as well as the maximum number of
                guests
              </p>
              <div className="grid grid-cols-3 gap-2 font-bold">
                <label htmlFor="">
                  Check in
                  <input
                    type="text"
                    className="forms font-normal"
                    onChange={handleChange(setCheckIn)}
                  />
                </label>
                <label htmlFor="">
                  Check out
                  <input
                    type="text"
                    className="forms font-normal"
                    onChange={handleChange(setCheckOut)}
                  />
                </label>
                <label htmlFor="">
                  Max guests number
                  <input
                    type="text"
                    className="forms font-normal"
                    onChange={handleChange(setMaxGuests)}
                  />
                </label>
              </div>
            </div>
            <button>Save</button>
          </form>
        </div>
      )}
      juan@gmail.com
    </div>
  );
}

export default PlacesPage;
