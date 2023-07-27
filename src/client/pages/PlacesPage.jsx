import React, { useEffect, useState } from "react";
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
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import "../styles/index.css";
import axios from "axios";

function PlacesPage() {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
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

  const handleChangePerk = ({ target }) => {
    const { checked, name } = target;
    if (checked) {
      setPerks((prev) => [...prev, name]);
    } else {
      setPerks((prev) => prev.filter((item) => item !== name));
    }
  };

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

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => [...prev, filename]);
    setPhotoLink("");
  }

  async function uploadPhoto({ target }) {
    const files = target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }
    const { data: filenames } = await axios.post("/upload", formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    setAddedPhotos((prev) => [...prev, ...filenames]);
  }

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
                  value={photoLink}
                />
                <button className="w-[10vw]" onClick={addPhotoByLink}>
                  add
                </button>
              </div>
              {addedPhotos.length > 0 && (
                <div>
                  <h3>Archivos seleccionados:</h3>
                  <ul className="grid grid-cols-3 gap-2">
                    {addedPhotos.map((filename, index) => (
                      <li key={index}>
                        <img
                          src={"http://localhost:5000/upload/" + filename}
                          alt="filename"
                          className="rounded-2xl w-full h-full"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                <input
                  type="file"
                  className="hidden"
                  onChange={uploadPhoto}
                  multiple
                />
                <CloudArrowUpIcon className="w-10 h-10" />
                upload
              </label>
            </div>
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
                  <input
                    type="checkbox"
                    name="Wi-fi"
                    onChange={handleChangePerk}
                    id="wi-fi"
                  />
                  <WifiIcon className="h-6" />
                  Wi-fi
                </label>
                <label htmlFor="Pet" className="perks">
                  <input
                    type="checkbox"
                    name="Pet friendly"
                    onChange={handleChangePerk}
                    id="Pet"
                    className="check"
                  />
                  <HandThumbUpIcon className="h-6" />
                  Pet&nbsp;friendly
                </label>
                <label htmlFor="parking" className="perks">
                  <input
                    type="checkbox"
                    name="Free parking spot"
                    onChange={handleChangePerk}
                    id="parking"
                    className="check"
                  />
                  <TruckIcon className="h-6" />
                  Free&nbsp;parking&nbsp;spot
                </label>
                <label htmlFor="tv" className="perks">
                  <input
                    type="checkbox"
                    name="TV"
                    onChange={handleChangePerk}
                    id="tv"
                    className="check"
                  />
                  <TvIcon className="h-6" />
                  TV
                </label>
                <label htmlFor="entrance" className="perks">
                  <input
                    type="checkbox"
                    name="Private entrance"
                    onChange={handleChangePerk}
                    id="entrance"
                    className="check"
                  />
                  <ArrowLeftCircleIcon className="h-6" />
                  Private&nbsp;entrance
                </label>
                <label htmlFor="Kitchen" className="perks">
                  <input
                    type="checkbox"
                    name="Kitchen"
                    onChange={handleChangePerk}
                    id="Kitchen"
                    className="check"
                  />
                  <CakeIcon className="h-6" />
                  Kitchen
                </label>
                <label htmlFor="Washer" className="perks">
                  <input
                    type="checkbox"
                    name="Washer"
                    onChange={handleChangePerk}
                    id="Washer"
                    className="check"
                  />
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
