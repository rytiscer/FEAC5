const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  backgroundColor: { type: String, required: true },
  iconUrl: { type: String, required: true },
});

module.exports = mongoose.model("Category", CategorySchema);
