import mongoose, { Document, Schema } from "mongoose";

interface IBooking extends Document {
  businessId: mongoose.Schema.Types.ObjectId;
  date: string;
  time: string;
  userEmail: string;
  userName: string;
  status: string;
}

const BookingSchema: Schema = new Schema({
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

const Booking = mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
