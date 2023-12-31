const { if_item_exist, create_item,create_table } = require("./database");
const { res_model } = require("../../model/res.model");

const add_new_item = (req, res) => {
  const { name } = req.body;
  create_table()
  .then(_ => {
    if_item_exist(name).then((is_exist) => {
      if (is_exist) {
        res.status(200).send(new res_model(true, null, `${name} already exist`));
      } else {
        create_item(name)
          .then((_) => {
            res
              .status(200)
              .send(new res_model(true, null, "Item added successfully"));
          })
          .catch((err) => {
            res.status(500).send(new res_model(true, err, `Error adding item ${name}`));
          });
      }
    });
  });
};

module.exports = {
  add_new_item,
};
