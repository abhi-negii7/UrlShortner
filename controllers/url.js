const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  // To create a short ID, we can use nanoid library to generate a unique ID of length 8
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  const allurls = await URL.find({});

  return res.render("home", {
    id: shortID,
    urls: allurls,
  });
  // return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function handleDeleteURL(req, res) {
   try {
     const { shortId } = req.params;
     await URL.deleteOne({ shortId });
     res.redirect("/"); // after deleting, go back to homepage
   } catch (err) {
     console.error(err);
     res.status(500).send("Error deleting URL");
   }
}

module.exports = { handleGenerateNewShortURL, handleGetAnalytics, handleDeleteURL };
