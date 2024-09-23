const express = require("express");
const router = express.Router();
const data = require("../data");

// GET all businesses
router.get("/", (req, res) => {
  res.json(data.businesses);
});

// GET businesses by category
router.get("/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredBusinesses = data.businesses.filter(
    (b) => b.category.toLowerCase() === category
  );
  res.json(filteredBusinesses);
});

// GET a specific business by ID
router.get("/:id", (req, res) => {
  const business = data.businesses.find((b) => b.id == req.params.id);
  if (business) {
    res.json(business);
  } else {
    res.status(404).send("Business not found");
  }
});

// POST create new business
router.post("/", (req, res) => {
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

  const newBusiness = {
    id: data.businesses.length + 1,
    name,
    description,
    address,
    category,
    contactPerson,
    email,
    photos,
  };
  data.businesses.push(newBusiness);
  res.status(201).json(newBusiness);
});

// PUT update business by ID
router.put("/:id", (req, res) => {
  const business = data.businesses.find((b) => b.id == req.params.id);
  if (!business) {
    return res.status(404).send("Business not found");
  }

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

  business.name = name;
  business.description = description;
  business.address = address;
  business.category = category;
  business.contactPerson = contactPerson;
  business.email = email;
  business.photos = photos;

  res.json(business);
});

// GET all bookings for a business on a specific date
router.get("/:businessId/bookings/date/:date", (req, res) => {
  const { businessId, date } = req.params;
  const slots = data.bookings.filter(
    (b) => b.businessId == businessId && b.date === date
  );
  res.json(slots);
});

module.exports = router;
