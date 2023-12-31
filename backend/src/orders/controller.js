const { add_order } = require("./database");
const { res_model } = require("../../model/res.model");
const { v4: uuidv4 } = require('uuid');


const add_new_order = (req, res) => {
  const { user_id, orders, state } = req.body;
  const order_id = uuidv4();;
  add_order(user_id, orders, order_id, state)
    .then((_) => {
      res
        .status(200)
        .send(new res_model(true, { order_id }, "Order placed successfully"));
    })
    .catch((err) => {
      res.status(500).send(new res_model(true, err, "Error placing order"));
    });
};

module.exports = {
  add_new_order,
};