import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext";

function UploadPhotos({
  photoLink,
  setPhotoLink,
  addedPhotos,
  setAddedPhotos,
  handleChange,
}) {
  const { user } = useContext(UserContext);

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

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => [...prev, filename]);
    setPhotoLink("");
  }

  function removePhoto(key) {
    setAddedPhotos(addedPhotos.filter((_, index) => index !== key));
  }

  function setMainPhoto(key) {
    const array = addedPhotos.filter((_, index) => index !== key);
    const newMainPhoto = [addedPhotos[key], ...array];
    setAddedPhotos(newMainPhoto);
  }

  return (
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
              <li key={index} className="relative">
                <img
                  src={`http://localhost:5000/upload/${user.id}/` + filename}
                  alt="filename"
                  className="rounded-2xl w-full h-full"
                />
                <div>
                  <TrashIcon
                    fill="white"
                    onClick={() => removePhoto(index)}
                    className="absolute cursor-pointer bg-red-500 p-1 rounded-full bottom-2 right-2 w-6 h-6"
                  />
                  <CheckIcon
                    onClick={() => setMainPhoto(index)}
                    className="absolute cursor-pointer opacity-60 hover:opacity-100 text-white bg-blue-500 p-1 rounded-full bottom-2 right-9 w-6 h-6"
                  />
                  {filename === addedPhotos[0] && (
                    <CheckIcon className="absolute cursor-pointer text-white bg-blue-500 p-1 rounded-full bottom-2 right-9 w-6 h-6" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 my-2 text-2xl text-gray-600">
        <input type="file" className="hidden" onChange={uploadPhoto} multiple />
        <CloudArrowUpIcon className="w-10 h-10" />
        upload
      </label>
    </div>
  );
}

export default UploadPhotos;
