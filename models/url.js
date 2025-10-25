const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);
// visitHistory is array of object jiske andar timestamp hoga ki link kab visit hua tha

const URL = mongoose.model("URL", urlSchema);
module.exports = URL;