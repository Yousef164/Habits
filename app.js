const express = require("express");
const cors = require("cors");

const { port } = require("./src/config/env");
const db = require("./src/config/db");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const habitsRoute = require("./src/routes/habits.route");
const errorHandler = require("./src/middlewares/errorHandler");

app.use("/habits", habitsRoute);
app.use(errorHandler);

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.listen(port, () => console.log(`Server running on port ${port}`));
