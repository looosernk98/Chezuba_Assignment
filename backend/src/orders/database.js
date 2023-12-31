const pool = require("../../database");

const add_order = (user_id, orders, order_id, state) =>
  new Promise((res, rej) => {
    create_orders_table().then((_) => {
      const date = new Date().toISOString();
      let value_to_insert = "";
      for (let i = 0; i < orders?.length; ++i) {
        const { branch_id, item_id, item_count } = orders[i];
        if (i) value_to_insert += ",";
        value_to_insert += `('${user_id}', '${branch_id}', '${order_id}', '${item_count}', '${item_id}', '${
          state ?? "CREATED"
        }','${date}', '${date}', '${user_id}')`;
      }
      pool
        .query(
          `INSERT INTO orders(user_id, branch_id, id, item_count, item_id, state, created_at, updated_at,updated_by) VALUES${value_to_insert};`
        )
        .then((_) => {
          //pool.end();
          res(true);
        })
        .catch((err) => {
          //pool.end();
          rej(err);
        });
    });
  });

const create_orders_table = () =>
  new Promise((res, rej) => {
    pool
      .query(
        `CREATE TABLE IF NOT EXISTS orders(
          id uuid NOT NULL,
          user_id uuid NOT NULL,
          branch_id uuid NOT NULL,
          item_count BIGINT NOT NULL,
          item_id uuid NOT NULL,
          state VARCHAR NOT NULL,
          created_at timestamp NOT NULL,
          updated_at timestamp  NOT NULL,
          updated_by uuid NOT NULL
        )`
      )
      .then((_) => {
        //pool.end();
        res(true);
      })
      .catch((err) => {
        //pool.end();
        rej(err);
      });
  });

module.exports = {
  add_order,
};
