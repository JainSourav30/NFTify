const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./src/routes/UserRoutes");
require("dotenv").config();
const cors = require("cors");

const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

const port = process.env.PORT;

async function connection() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connection()
  .then(() => console.log("MongoDB connection successful."))
  .catch(console.log);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/users/", UserRoute);

app.listen(port, () => {
  console.log(`🚀 Server running on port: ${port}`);
});