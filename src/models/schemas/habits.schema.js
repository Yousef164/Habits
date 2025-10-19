module.exports = (db, type) => {
  return db.define("habit", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameHabit: {
      type: type.STRING,
      allowNull: false,
    },
    alert: {
      type: type.STRING,
      allowNull: true,
    },
    mode: {
      type: type.ENUM("normal", "disciplined"),
      allowNull: false,
    },
    note: {
      type: type.STRING,
      allowNull: true,
    },
  });
};
