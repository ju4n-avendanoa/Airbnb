import pkg from "lodash";
const { omit } = pkg;
import userModel from "../model/userModel.js";
import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function createUser({ name, email, password }) {
  try {
    const newUser = await userModel.create({
      name,
      email,
      password,
    });
    return omit(newUser.toJSON(), "password");
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUsers() {
  try {
    const users = await userModel.find();
    return users.map((obj) => omit(obj.toJSON(), "password"));
  } catch (error) {
    console.log(error);
  }
}

export async function logUser({ email, password }) {
  try {
    const user = await userModel.findOne({ email });
    if (!user) return false;
    const passIsOk = await bcrypt.compare(password, user.password);
    if (!passIsOk) return false;
    const token = await jwt.sign(
      { email: user.email, id: user._id, name: user.name },
      process.env.JWT_SECRET
    );
    return { token, user: omit(user.toJSON(), "password") };
  } catch (error) {
    console.log(error);
  }
}
