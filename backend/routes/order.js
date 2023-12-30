const express = require("express");
const router = express.Router();

const {
  getOrderList,
  getOrderById,
  updateOrderById,
  deleteOrderById,
  createOrder
} = require('../controller/order')


// handle incoming GET request to /orders
router.get("/", getOrderList)

router.post("/", createOrder)

 router.get('/:productId', getOrderById)

 router.patch('/:productId', updateOrderById)
 router.delete('/:productId', deleteOrderById)

 module.exports = router