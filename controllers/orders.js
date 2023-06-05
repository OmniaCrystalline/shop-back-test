/** @format */
const { Order } = require("../models/models.order");

async function addOrder(req, res, next) {
  try {
    const data = await Order.create(req.body);
    return res.json({ message: `added: ${data}` });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function getOrders(req, res, next) {
  const { email, phone } = req.body.data;
  try {
    const info = email
      ? await Order.find({ email })
      : await Order.find({ phone });
    return res.json({ info });
  } catch (error) {
    return res.status(503).json({ info: error.message });
  }
}

module.exports = {
  addOrder,
  getOrders,
};
