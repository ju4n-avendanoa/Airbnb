import mongoose from "mongoose";

const placesSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    title: { type: String },
    addres: { type, String },
    photos: { type: [String] },
    description: { type: String },
    perks: { type: [String] },
    extraInfo: { type: String },
    checkIn: { type: Number },
    checkOut: { type: Number },
    maxGuets: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const PlacesModel = mongoose.model("places", placesSchema);

export default PlacesModel;
