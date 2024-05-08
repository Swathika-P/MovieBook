const express = require("express");
const {
  createOrderController,
  userOrderControlller
} = require("../controllers/orderController");

const router = express.Router();

router.post("/create-order", createOrderController);

router.get("/user-order/:id", userOrderControlller);

module.exports = router;