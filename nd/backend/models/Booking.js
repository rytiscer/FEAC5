const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Booking", BookingSchema);
