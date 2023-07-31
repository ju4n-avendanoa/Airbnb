import jwt from "jsonwebtoken";
import "dotenv/config";

function verifyToken(token) {
  const user = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) throw new Error();
    return user;
  });
  return user;
}

export default verifyToken;
