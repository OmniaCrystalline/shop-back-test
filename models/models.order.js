/** @format */
const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title name is required"],
    unique: false,
  },
  seller: {
    type: String,
    required: [true, "Seller is required"],
    unique: false,
  },
  img: {
    type: String,
    required: [true, "Image required"],
    unique: false,
  },
  price: {
    type: Number,
    required: [true, "Price required"],
    unique: false,
  },
  weigth: {
    type: Number,
    required: [true, "Weight required"],
    unique: false,
  },
  recipe: {
    type: String,
    required: [true, "Recipe required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity of product in order required"],
  },
});

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Date is required"],
    unique: false,

  },
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: false,
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
    unique: false,
  },
  email: {
    type: String,
    requred: [true, "Email is required"],
    unique: false,
  },
  adress: {
    type: String,
    required: [true, "Adress is required"],
    unique: false,
  },
  order: {
    type: [orderItemSchema],
    required: [true, "Order required"],
    unique: false,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  Order,
  orderSchema,
};
