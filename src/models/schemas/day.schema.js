module.exports = (db, type) => {
  return db.define("day", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    points: {
        type: type.INTEGER,
        defaultValue: 0,
    }
  });
};
