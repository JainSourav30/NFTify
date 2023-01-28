const express = require("express");
const userControllers = require("../controllers/UserController");

const router = express.Router();

router.post("/joinus", userControllers.joinUs);

router.post("/approve", userControllers.isAdmin, userControllers.confirmCompany);

router.post("/login", userControllers.authenticate);

module.exports = router;