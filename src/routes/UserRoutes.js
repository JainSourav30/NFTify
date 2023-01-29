const express = require("express");
const userControllers = require("../controllers/UserController");

const router = express.Router();

router.post("/joinus", userControllers.joinUs);

router.post("/approve", userControllers.isAdmin, userControllers.confirmCompany);

router.post("/login", userControllers.authenticate);

router.get("/pending", userControllers.isAdmin, userControllers.getPending);

router.delete("/del", userControllers.isAdmin, userControllers.reject);

module.exports = router;