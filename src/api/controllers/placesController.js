import { uploadPhoto, uploadPhotoByLink } from "../services/photosService.js";
import {
  getAllPlaces,
  getPlaceById,
  updatePlaceById,
  uploadPlace,
} from "../services/placesService.js";

export async function uploadPhotoByLinkHandler(req, res) {
  const { token } = req.cookies;
  const { link } = req.body;
  const name = await uploadPhotoByLink(link, token);
  res.json(name);
}

export function uploadPhotoHandler(req, res) {
  const { token } = req.cookies;
  const files = req.files;
  const uploadedFiles = uploadPhoto(files, token);
  res.json(uploadedFiles);
}

export async function uploadPlaceHandler(req, res) {
  const { token } = req.cookies;
  const placeProperties = req.body;
  const newPlace = await uploadPlace(placeProperties, token);
  res.json(newPlace);
}

export async function getAllPlacesHandler(req, res) {
  const { token } = req.cookies;
  const places = await getAllPlaces(token);
  res.json(places);
}

export async function getPlaceByIdHandler(req, res) {
  const { id } = req.params;
  const place = await getPlaceById(id);
  res.json(place);
}

export async function updatePlaceByIdHandler(req, res) {
  const { id } = req.params;
  const { token } = req.cookies;
  const placeProperties = req.body;
  const place = await updatePlaceById(id, token, placeProperties);
  res.json(place);
}
