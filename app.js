const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./src/routes/UserRoutes");
const ProductRoute = require("./src/routes/ProductRoutes");
const NFTRoute = require("./src/routes/NFTRoutes");
require("dotenv").config();
const cors = require("cors");

const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

app.use("/api/products/", ProductRoute);

app.use("/api/nft/", NFTRoute);

app.listen(port, () => {
  console.log(`🚀 Server running on port: ${port}`);
});