import PlacesModel from "../model/placesModel.js";
import verifyToken from "../utils/verifyToken.js";

export async function uploadPlace(
  {
    title,
    addres,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuets,
  },
  token
) {
  const user = verifyToken(token);
  const newPlace = await PlacesModel.create({
    owner: user.id,
    title,
    addres,
    photos: addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuets,
  });
  return newPlace;
}

export async function getAllPlaces(token) {
  const user = verifyToken(token);

  const places = await PlacesModel.find({ owner: user.id });
  return places;
}
