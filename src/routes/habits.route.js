const router = require("express").Router();

const habitsController = require("../controllers/habits.controller");

router
  .post("/",      habitsController.createHabit)
  .get("/",       habitsController.getAllHabits)
  .get("/",       habitsController.getHabitsByDay)
  .put("/:id",    habitsController.updateHabit)
  .delete("/:id", habitsController.deleteHabit);

// هل تريد إضافه عادات اليوم التي تمت الاسبوع القادم ؟
router
  .post("/next-week", habitsController.addNextWeekHabits)
  
module.exports = router;
