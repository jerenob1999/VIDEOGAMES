const { Router } = require("express");
const videogamesRoutes = Router();
const {
  postVideogameHandler,
  getVideogameHandler,
  getVideogamesHandler,
} = require("../handlers/videogamesHandler");
const {createVideogameValidator, getIdValidator} = require("../utils/validators")

videogamesRoutes.get("/", getVideogamesHandler);
videogamesRoutes.get("/:idVideogame", getIdValidator, getVideogameHandler);
videogamesRoutes.post("/", createVideogameValidator , postVideogameHandler);
module.exports = videogamesRoutes;
