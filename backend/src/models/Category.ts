import { Schema, model, Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  backgroundColor: string;
  iconUrl: string;
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  backgroundColor: { type: String, required: true },
  iconUrl: { type: String, required: true },
});

export default model<ICategory>("Category", CategorySchema);
