import { uploadPhoto, uploadPhotoByLink } from "../services/photosService.js";

export async function uploadPlaceHandlerByLink(req, res) {
  const { link } = req.body;
  const name = await uploadPhotoByLink(link);
  res.json(name);
}

export function uploadPlaceHandler(req, res) {
  const files = req.files;
  const uploadedFiles = uploadPhoto(files);
  res.json(uploadedFiles);
}
