import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import { createUser, getUsers, logUser } from "../services/userService.js";
import "dotenv/config";

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

export async function profileHandler(req, res) {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) throw new Error();
      res.json(user);
    });
  } else {
    res.json(null);
  }
}
