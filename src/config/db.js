const sequelize = require("sequelize");
const { database, username, password, dialect, host } = require("./env");

const db = new sequelize(database, username, password, {
  host,
  dialect,
  logging: false,
});

module.exports = db;