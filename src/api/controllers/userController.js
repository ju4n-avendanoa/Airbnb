import { createUser, getUsers } from "../services/userService.js";

export async function getUsersHandler(req, res) {
  try {
    const users = await getUsers();
    // console.log(users);
    res.json(users);
  } catch (error) {
    res.status(400).json({ mesagge: error.mesagge });
  }
}

export async function createUserHandler(req, res) {
  const newUser = await createUser(req.body);
  console.log(newUser);
  res.json(newUser);
}
