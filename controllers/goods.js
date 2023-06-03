/** @format */
require("dotenv").config();
const  Product = require("../models/models.products");

async function getAll(req, res, next) {
  try {
    const data = await Product.find({});
    return res.json({ data });
  } catch (error) {
    return res.json(error.message);
  }
}

async function getOneType(req, res, next) {
  const { query } = req.params;
  console.log("query", query);
  try {
    const data = await Product.find({ seller: query });
    return res.json({ data });
  } catch (error) {
    return res.json(error.message);
  }
}

module.exports = {
  getAll,
  getOneType,
};
