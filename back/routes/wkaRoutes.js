const express = require("express");
const router = express.Router();
const wkaController = require("../controllers/wkaController");

router
  .route("/")
  .get(wkaController.getAllWka);

module.exports = router;
