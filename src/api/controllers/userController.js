import { createUser, getUsers, logUser } from "../services/userService.js";

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
  console.log(newUser);
  res.json(newUser);
}

export async function logUserHandler(req, res) {
  const { email, password } = req.body;
  const user = await logUser({ email, password });
  if (!user) {
    res.status(404).json({ mesagge: "No User Found" });
  } else {
    res.json(user);
  }
}
