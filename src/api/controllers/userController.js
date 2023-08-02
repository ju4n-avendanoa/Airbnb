import userModel from "../model/userModel.js";
import { createUser, getUsers, logUser } from "../services/userService.js";
import "dotenv/config";
import verifyToken from "../utils/verifyToken.js";

export async function getUsersHandler(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ mesagge: error.mesagge });
  }
}

export async function createUserHandler(req, res) {
  const { name, email, password } = req.body;
  const newUser = await createUser({ name, email, password });
  res.json(newUser);
}

export async function logUserHandler(req, res) {
  const { email, password } = req.body;
  const { token, user } = await logUser({ email, password });
  if (!token) {
    res.status(404).json({ mesagge: "No User Found" });
  } else {
    res
      .cookie("token", token, {
        maxAge: 600000000,
        httpOnly: true,
      })
      .json(user);
  }
}

export async function deleteUsersHandler(req, res) {
  try {
    await userModel.deleteMany();
    res.json("Users deleted");
  } catch (error) {
    res.status(400).json("Error");
  }
}

export function profileHandler(req, res) {
  const { token } = req.cookies;
  if (token) {
    const user = verifyToken(token);
    res.json(user);
  } else {
    res.json(null);
  }
}

export async function logoutHandler(req, res) {
  res.cookie("token", "").json(true);
}
