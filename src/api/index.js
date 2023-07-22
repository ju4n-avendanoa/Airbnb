import app from "./app.js";
import "dotenv/config";
import dbConnection from "./connection/dbConnection.js";

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
  dbConnection();
});
