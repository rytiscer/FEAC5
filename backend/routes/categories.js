const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new category
router.post("/", async (req, res) => {
  const { name, backgroundColor, iconUrl } = req.body;
  if (!name || !backgroundColor || !iconUrl) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const newCategory = new Category({ name, backgroundColor, iconUrl });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
