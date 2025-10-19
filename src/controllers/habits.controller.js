const habitsModel = require("../models/habits.model");

exports.createHabit = async (req, res, next) => {
  try {
    const result = await habitsModel.createHabit(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllHabits = async (req, res, next) => {
  try {
    const habits = await habitsModel.getAllHabits();
    res.status(200).json(habits);
  } catch (error) {
    next(error);
  }
};

exports.getHabitsByDay = async (req, res, next) => {
  try {
    const { day } = req.query;
    const habits = await habitsModel.getHabitsByDay(day);
    res.status(200).json(habits);
  } catch (error) {
    next(error);
  }
};

exports.updateHabit = async (req, res, next) => {
  try {
    const result = await habitsModel.updateHabit(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteHabit = async (req, res, next) => {
  try {
    const result = await habitsModel.deleteHabit(req.params.id, req.body.day_id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
