const express = require("express");
const productControllers = require("../controllers/ProductController");
const userControllers = require("../controllers/UserController");
const multer = require("multer");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage});

router.post("/new", userControllers.isAuthenticated, upload.single("image"), productControllers.addProduct);

router.get("/", userControllers.isAuthenticated, productControllers.getAll);

module.exports = router;