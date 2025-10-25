const express = require("express");
const { connectToMongoDb } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("Connected to MongoDB")
);

// Middleware - it helps to parse the json data from the request body
app.use(express.json());

// Server-side rendering -> Where render the HTML on the server and send it to the client
app.get("/", (req, res) => {
  res.end("<h1>Welcome to URL Shortener Service</h1>");
});

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamps: new Date(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});
app.listen(PORT, () => {
  console.log(`Sever Started At Port ${PORT}`);
});
