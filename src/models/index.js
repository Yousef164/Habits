const { DataTypes } = require("sequelize");

const db = require("../config/db");
const habit = require("./schemas/habits.schema");

const Habit = habit(db, DataTypes);

db.sync({ force: true }).then(() => console.log("Database synced (force: true)!"));

module.exports = {
  Habit,
};
