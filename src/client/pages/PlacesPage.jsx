import { Link, useNavigate, useParams } from "react-router-dom";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "axios";
import Perks from "../components/Perks";
import UploadPhotos from "../components/UploadPhotos";
import "../styles/index.css";

function PlacesPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  const navigate = useNavigate();
  const { action } = useParams();

  const handleChange =
    (setState) =>
    ({ target }) => {
      setState(target.value);
    };

  async function handleSubmit(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    };
    await axios.post("/places", placeData);
    navigate("/account/places");
  }

  function preInput(title, text) {
    return (
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    );
  }

  return (
    <div>
      {action !== "new" && (
        <div className="max-w-[20vw] mx-auto mt-6">
          <p className="w-full">show new places</p>
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
              {preInput("Title", "title for your place")}
              <input
                type="text"
                className="forms"
                onChange={handleChange(setTitle)}
              />
            </div>
            <div className="my-2">
              {preInput("Address", "address to this place")}
              <input
                type="text"
                className="forms"
                onChange={handleChange(setAddress)}
              />
            </div>
            <UploadPhotos
              photoLink={photoLink}
              setPhotoLink={setPhotoLink}
              addedPhotos={addedPhotos}
              setAddedPhotos={setAddedPhotos}
              handleChange={handleChange}
            />
            <div className="my-2">
              {preInput("Description", "description of the place")}
              <textarea
                className="description border"
                rows="10"
                onChange={handleChange(setDescription)}
              ></textarea>
            </div>
            <Perks setPerks={setPerks} />
            <div className="my-2">
              {preInput("Extra Info", "House rules, etc")}
              <textarea
                className="description border"
                rows="10"
                onChange={handleChange(setExtraInfo)}
              ></textarea>
            </div>
            <div className="my-2">
              {preInput(
                "Check in&out times",
                "add check in and out times as well as the maximum number of guests"
              )}
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
    </div>
  );
}

export default PlacesPage;
