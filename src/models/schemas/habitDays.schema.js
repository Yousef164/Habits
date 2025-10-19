module.exports = (db, type) => {
  return db.define("HabitDays", {
    implemented: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
