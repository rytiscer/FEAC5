const express = require("express");
const router = express.Router();
const data = require("../data");

// GET all bookings by user email
router.get("/user/:email", (req, res) => {
  const userBookings = data.bookings.filter(
    (b) => b.userEmail === req.params.email
  );
  res.json(userBookings);
});

// POST create new booking
router.post("/", (req, res) => {
  const { businessId, date, time, userEmail, userName, status } = req.body;
  if (!businessId || !date || !time || !userEmail || !userName || !status) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const newBooking = {
    id: data.bookings.length + 1,
    businessId,
    date,
    time,
    userEmail,
    userName,
    status,
  };
  data.bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// DELETE booking by ID
router.delete("/:id", (req, res) => {
  const index = data.bookings.findIndex((b) => b.id == req.params.id);
  if (index !== -1) {
    data.bookings.splice(index, 1);
    res.send("Booking deleted");
  } else {
    res.status(404).send("Booking not found");
  }
});

module.exports = router;
