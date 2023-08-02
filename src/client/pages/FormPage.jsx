import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Perks from "../components/Perks";
import UploadPhotos from "../components/UploadPhotos";
import "../styles/index.css";
import UserNavbar from "../components/UserNavbar";

function FormPage() {
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
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    axios.get("/user-places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setDescription(data.description);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPerks(data.perks);
      setAddedPhotos(data.photos);
    });
  }, [id]);

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
    if (id) {
      await axios.patch("places/" + id, placeData);
      navigate("/account/places");
    } else {
      await axios.post("/places", placeData);
      navigate("/account/places");
    }
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
      <UserNavbar />
      <div className="flex justify-center p-10">
        <form className="lg:w-[50vw] w-[70vw]" onSubmit={handleSubmit}>
          <div className="my-2">
            {preInput("Title", "title for your place")}
            <input
              type="text"
              className="forms"
              onChange={handleChange(setTitle)}
              value={title}
            />
          </div>
          <div className="my-2">
            {preInput("Address", "address to this place")}
            <input
              type="text"
              className="forms"
              value={address}
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
              value={description}
              onChange={handleChange(setDescription)}
            ></textarea>
          </div>
          <Perks selected={perks} setPerks={setPerks} />
          <div className="my-2">
            {preInput("Extra Info", "House rules, etc")}
            <textarea
              className="description border"
              rows="10"
              value={extraInfo}
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
                  type="number"
                  className="forms font-normal"
                  onChange={handleChange(setCheckIn)}
                  value={checkIn}
                />
              </label>
              <label htmlFor="">
                Check out
                <input
                  type="number"
                  className="forms font-normal"
                  onChange={handleChange(setCheckOut)}
                  value={checkOut}
                />
              </label>
              <label htmlFor="">
                Max guests number
                <input
                  type="number"
                  className="forms font-normal"
                  onChange={handleChange(setMaxGuests)}
                  value={maxGuests}
                />
              </label>
            </div>
          </div>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
