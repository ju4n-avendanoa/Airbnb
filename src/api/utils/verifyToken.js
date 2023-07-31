import jwt from "jsonwebtoken";
import "dotenv/config";

function verifyToken(token) {
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) throw new Error();
    return user;
  });
}

export default verifyToken;
