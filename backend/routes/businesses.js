const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

// GET all businesses
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET businesses by category
router.get("/category/:category", async (req, res) => {
  try {
    const businesses = await Business.find({ category: req.params.category });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a specific business by ID
router.get("/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).send("Business not found");
    }
    res.json(business);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new business
router.post("/", async (req, res) => {
  const { name, description, address, category, contactPerson, email, photos } =
    req.body;
  if (
    !name ||
    !description ||
    !address ||
    !category ||
    !contactPerson ||
    !email ||
    !photos
  ) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const newBusiness = new Business({
      name,
      description,
      address,
      category,
      contactPerson,
      email,
      photos,
    });
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update business by ID
router.put("/:id", async (req, res) => {
  const { name, description, address, category, contactPerson, email, photos } =
    req.body;
  if (
    !name ||
    !description ||
    !address ||
    !category ||
    !contactPerson ||
    !email ||
    !photos
  ) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const updatedBusiness = await Business.findByIdAndUpdate(
      req.params.id,
      { name, description, address, category, contactPerson, email, photos },
      { new: true }
    );
    if (!updatedBusiness) {
      return res.status(404).send("Business not found");
    }
    res.json(updatedBusiness);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all bookings for a business on a specific date
router.get("/:businessId/bookings/date/:date", async (req, res) => {
  try {
    const bookings = await Booking.find({
      businessId: req.params.businessId,
      date: req.params.date,
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
