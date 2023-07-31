import { uploadPhoto, uploadPhotoByLink } from "../services/photosService.js";
import { uploadPlace } from "../services/placesService.js";

export async function uploadPhotoByLinkHandler(req, res) {
  const { link } = req.body;
  const name = await uploadPhotoByLink(link);
  res.json(name);
}

export function uploadPhotoHandler(req, res) {
  const files = req.files;
  const uploadedFiles = uploadPhoto(files);
  res.json(uploadedFiles);
}

export async function uploadPlaceHandler(req, res) {
  const { token } = req.cookies;
  const placeProperties = req.body;
  const newPlace = await uploadPlace(placeProperties, token);
  console.log(newPlace);
  res.json(newPlace);
}

// export async function getAllPlacesHandler(req, res) {
//   const { token } = req.cookies;
//   const places = await getAllPlaces(token);
// }
