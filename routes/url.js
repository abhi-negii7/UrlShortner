const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleDeleteURL,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

// ✅ New route to delete a URL by shortId
router.get("/delete/:shortId", handleDeleteURL);

module.exports = router;
