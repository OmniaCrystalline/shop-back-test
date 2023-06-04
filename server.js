/** @format */

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { HOST_DB } = process.env;
const PORT = 3000;
const router = express.Router();
const logger = require("morgan");
const cors = require("cors");
const { Types } = require("mongoose");

const controllerGoods = require("./controllers/goods");
const controllerOrders = require("./controllers/orders");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

async function main() {
  try {
    if (!HOST_DB) {
      throw new Error("HOST_DB not set!");
    }
    await mongoose.connect(HOST_DB);
    console.log("Database connection successful");
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}
main();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);
app.use((req, res) => {
  return res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  console.log("500", err);
  if (!Types.ObjectId.isValid(req.params.id))
    res.status(404).json({ message: "Not found" });
  return res.status(500).json({ message: err.message });
});

router.get("/allgoods", controllerGoods.getAll);
router.get("/onetype/:query", controllerGoods.getOneType);
router.post("/", controllerOrders.addOrder);
router.get("/ordersOfUser", controllerOrders.getOrders);
