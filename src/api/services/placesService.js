import PlacesModel from "../model/placesModel.js";
import verifyToken from "../utils/verifyToken.js";

//UPLOAD

export async function uploadPlace(
  {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  },
  token
) {
  const user = verifyToken(token);
  const newPlace = await PlacesModel.create({
    owner: user.id,
    title,
    address,
    photos: addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  });
  return newPlace;
}

//GET

export async function getAllUSerPlaces(token) {
  const user = verifyToken(token);
  const places = await PlacesModel.find({ owner: user.id });
  return places;
}

export async function getUserPlaceById(id) {
  const place = await PlacesModel.findById(id);
  return place;
}

export async function getAllPlaces() {
  const places = await PlacesModel.find();
  return places;
}

//UPDATE

export async function updatePlaceById(
  id,
  token,
  {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  }
) {
  const user = verifyToken(token);
  const place = await PlacesModel.findByIdAndUpdate(id, {
    owner: user.id,
    title,
    address,
    photos: addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  });
  return place;
}
