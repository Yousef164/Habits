const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port:     process.env.PORT || 3000,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect:  process.env.DIALECT,
  host:     process.env.HOST,
};
