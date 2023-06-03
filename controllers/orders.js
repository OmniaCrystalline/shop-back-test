/** @format */
const { Order } = require("../models/models.order");
async function addOrder(req, res, next) {
  try {
    console.log("req.body", req.body);
    const data = await Order.create(req.body);
    console.log("data", data);
    return res.json({ message: `added: ${data}` });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function getOrders(req, res, next) {
  const { email, phone } = req.body;
  try {
    const byEmail = await Order.find({ email });
    const byPhone = await Order.find({ phone });
    const data = byEmail.push(byPhone);
    if (data.length === 0) return res.json({ message: "no orders" });
    else {
      return res.json({ data });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addOrder,
  getOrders,
};
