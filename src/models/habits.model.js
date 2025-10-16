const { Habit } = require("./index");

const { throwErr } = require("../utils/habits.helper");

exports.createHabit = async (data) => {
  try {
    const newHabit = await Habit.create(data);
    return { message: "Habit created successfully", habit: newHabit };
  } catch (error) {
    throwErr(error);
  }
};

exports.getAllHabits = async () => {
  try {
    const Habits = await Habit.findAll();
    return { Habits };
  } catch (error) {
    throwErr(error);
  }
};

exports.getHabitsByDay = async (day) => {
  try {
    const habits = await Habit.findAll({ where: { day } });
    return { habits };
  } catch (error) {
    throwErr(error);
  }
};

exports.updateHabit = async (id, data) => {
  try {
    const [update] = await Habit.update(data, { where: { id } });
    if (update) {
      const updatedHabit = await Habit.findOne({ where: { id } });
      return { message: "Habit updated successfully", habit: updatedHabit };
    }
    throw { message: "Habit not found", status: 404 };
  } catch (error) {
    throwErr(error);
  }
};

exports.deleteHabit = async (id) => {
  try {
    const deleted = await Habit.destroy({ where: { id } });
    if (deleted) {
      return { message: "Habit deleted successfully" };
    }
    throw { message: "Habit not found", status: 404 };
  } catch (error) {
    throwErr(error);
  }
};

exports.addNextWeekHabits = async (wantToAdd, day) => {
  try {
    if (wantToAdd) {
      await Habit.update(
        { implemented: false },
        { where: { implemented: true, day } }
      );
    } else {
      await Habit.distroy({
        where: { implemented: true, day },
      });
    }
  } catch (error) {
    throwErr(error);
  }
};
