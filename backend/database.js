const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "0.0.0.0",
  database: "star_bakery",
  password: "postgres",
  port: 5432,
});
module.exports = pool;