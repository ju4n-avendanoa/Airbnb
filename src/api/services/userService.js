import pkg from "lodash";
const { omit } = pkg;
import userModel from "../model/userModel.js";

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
