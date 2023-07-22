import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import "dotenv/config";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      // unique: true,
    },
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
