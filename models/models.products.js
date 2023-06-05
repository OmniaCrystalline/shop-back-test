/** @format */

const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title name is required"],
  },
  seller: {
    type: String,
    required: [true, "Seller is required"],
  },
  img: {
    type: String,
    required: [true, "Image required"],
  },
  price: {
    type: Number,
    required: [true, "Price required"],
  },
  weight: {
    type: Number,
    required: [true, "Weight required"],
  },
  recipe: {
    type: String,
    required: [true, "Recipe required"],
  },
});
const Product = model("Product", ProductSchema);

module.exports = Product;
