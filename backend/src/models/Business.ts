import { Schema, model, Document } from "mongoose";

interface IBusiness extends Document {
  name: string;
  description: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  photos: string[];
}

const BusinessSchema = new Schema<IBusiness>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  photos: { type: [String], required: true },
});

export default model<IBusiness>("Business", BusinessSchema);
