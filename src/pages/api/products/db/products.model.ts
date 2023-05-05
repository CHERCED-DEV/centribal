import { Schema, models, model } from "mongoose";


const productSchema = new Schema(
  {
    reference: {
      type: String,
      require: [true, "Reference is required"],
      unique: false,
      trim: true,
      maxlength: [60, "Reference must be less than 60 characters"],
    },
    name: {
      type: String,
      require: [true, "Name is required"],
      unique: false,
      trim: true,
      maxlength: [60, "Name must be less than 60 characters"],
    },
    description: {
      type: String,
      require: [true, "description is required"],
      unique: false,
      trim: true,
      maxlength: [400, "description must be less than 400 characters"],
    },
    price: {
      type: Number,
      require: [true, "price is required"],
      unique: false,
      trim: true,
      maxlength: [20, "price must be less than 20 characters"],
    },
    taxes: {
      type: Number,
      require: [true, "taxes is required"],
      unique: false,
      trim: true,
      maxlength: [20, "taxes must be less than 20 characters"],
    },
  },
  { timestamps: true, versionKey: false }
);

export default models.Product || model("Product", productSchema);
