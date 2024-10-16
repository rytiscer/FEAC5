const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET all bookings by user email
router.get("/user/:email", async (req, res) => {
  try {
    const bookings = await Booking.find({ userEmail: req.params.email });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new booking
router.post("/", async (req, res) => {
  const { businessId, date, time, userEmail, userName, status } = req.body;
  if (!businessId || !date || !time || !userEmail || !userName || !status) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const newBooking = new Booking({
      businessId,
      date,
      time,
      userEmail,
      userName,
      status,
    });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE booking by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).send("Booking not found");
    }
    res.send("Booking deleted");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
