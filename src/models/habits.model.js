const { Habit, Day, HabitDays } = require("./index");

const {
  throwErr,
  validateHabit,
  validateDay,
} = require("../utils/habits.helper");

exports.createHabit = async (data) => {
  try {
    const habit = await Habit.create(data);
    if (data.day === "allDays") {
      const days = await Day.findAll();
      await habit.addDays(days);
    } else {
      validateDay(data.day);
      const dayInstance = await Day.findOne({ where: { name: data.day } });
      await habit.addDay(dayInstance);
    }
    return { message: "Habit created successfully", habit };
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

exports.getHabitsByDay = async (dayName) => {
  try {
    validateDay(dayName);
    const day = await Day.findOne({ where: { name: dayName }, include: Habit });
    const habits = day ? day.habits : [];
    return { habits };
  } catch (error) {
    throwErr(error);
  }
};

exports.updateHabit = async (id, data) => {
  try {
    const [update] = await Habit.update(data, { where: { id } });
    if (update) {
      validateDay(data.day);
      if (data.implemented) {
        const day = await Day.findOne({ where: { name: data.day } });
        await HabitDays.update(
          { implemented: true },
          { where: { habit_id: id, day_id: day.id } }
        );
        day.points += 1;
        await day.save();
      }
      return { message: "Habit updated successfully" };
    }
    throw { message: "Habit not found", status: 404 };
  } catch (error) {
    throwErr(error);
  }
};

exports.deleteHabitByDay = async (habit_id, day_id) => {
  try {
    const habit = Habit.findOne({ where: { id: habit_id } });
    const day = Day.findOne({ where: { id: day_id } });

    if (!habit) throw { message: "Habit not found", status: 404 };
    if (!day) throw { message: "Day not found", status: 404 };

    await HabitDays.destroy({ where: { habit_id, day_id } });
    const countHabitDays = await HabitDays.count({ where: { habit_id } });

    if (countHabitDays === 0) {
      await Habit.destroy({ where: { id: habit_id } });
    }

    return { message: "Habit deleted successfully" };
  } catch (error) {
    throwErr(error);
  }
};
