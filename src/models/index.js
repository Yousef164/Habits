const { DataTypes } = require("sequelize");

const db = require("../config/db");
const day = require("./schemas/day.schema");
const habit = require("./schemas/habits.schema");
const habitDays = require("./schemas/habitDays.schema");

const HabitDays = habitDays(db, DataTypes);
const Day = day(db, DataTypes);
const Habit = habit(db, DataTypes);

Habit.belongsToMany(Day, { through: HabitDays });
Day.belongsToMany(Habit, { through: HabitDays });

db.sync({ force: true }).then(() => console.log("Database synced (force: true)!"));

module.exports = {
  Habit,
  Day,
  HabitDays,
};
