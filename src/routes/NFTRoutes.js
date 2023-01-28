const express = require("express");
const NFTControllers = require("../controllers/NFTController");

const router = express.Router();

router.post("/mint", NFTControllers.mint);

module.exports = router;