const express = require("express");
const router = express.Router();
const data = require("../data");

// GET all categories
router.get("/", (req, res) => {
  res.json(data.categories);
});

// POST create new category
router.post("/", (req, res) => {
  const { name, backgroundColor, iconUrl } = req.body;
  if (!name || !backgroundColor || !iconUrl) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const newCategory = {
    id: data.categories.length + 1,
    name,
    backgroundColor,
    iconUrl,
  };
  data.categories.push(newCategory);
  res.status(201).json(newCategory);
});

module.exports = router;
