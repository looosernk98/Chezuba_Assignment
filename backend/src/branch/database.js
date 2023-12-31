const pool = require("../../database");

const if_branch_exist = (name) =>
  new Promise((res, rej) => {
    pool
      .query(`SELECT * FROM branch where name='${name}'`)
      .then(({ rows }) => {
        //pool.end();
        res(Boolean(rows.length));
      })
      .catch((err) => {
        rej(err);
        //pool.end();
      });
  });

const add_branch = (name) =>
  new Promise((res, rej) => {
    pool
      .query(`INSERT INTO branch(name) VALUES ('${name}')`)
      .then((_) => {
        //pool.end();
        res(true);
      })
      .catch((err) => {
        //pool.end();
        rej(err);
      });
  });

const create_branch_table = () =>
  new Promise((res, rej) => {
    pool
      .query(
        `CREATE TABLE IF NOT EXISTS branch(id uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL, name VARCHAR NOT NULL)`
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
  create_branch_table,
  if_branch_exist,
  add_branch,
};
