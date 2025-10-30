const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleDeleteURL,
} = require("../controllers/url");

const router = express.Router();

// Route to generate a new short URL when we submit the form
router.post("/", handleGenerateNewShortURL);

// Route to delete a URL by shortId
router.get("/analytics/:shortId", handleGetAnalytics);

// Route to delete a URL by shortId
router.get("/delete/:shortId", handleDeleteURL);

module.exports = router;
