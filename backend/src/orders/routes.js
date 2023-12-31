const express = require("express");
const router = express.Router();

const { add_new_order } = require("./controller");

router.post("/place_order", add_new_order);
module.exports = router;
