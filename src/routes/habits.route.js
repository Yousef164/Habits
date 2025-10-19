const router = require("express").Router();

const habitsController = require("../controllers/habits.controller");

router
  .post("/",      habitsController.createHabit)
  .get("/",       habitsController.getAllHabits)
  .get("/",       habitsController.getHabitsByDay)
  .put("/:id",    habitsController.updateHabit)
  .delete("/:id", habitsController.deleteHabit);

  
module.exports = router;
