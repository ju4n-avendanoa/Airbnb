import PlacesModel from "../model/placesModel.js";
import jwt from "jsonwebtoken";

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
  const newPlace = jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err, user) => {
      if (err) throw new Error();
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
  );
  return newPlace;
}
