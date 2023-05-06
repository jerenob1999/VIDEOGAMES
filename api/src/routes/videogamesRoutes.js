const { Router } = require("express");
const videogamesRoutes = Router();
const {
  postVideogameHandler,
  getVideogameHandler,
  getVideogamesHandler,
} = require("../handlers/videogamesHandler");

videogamesRoutes.get("/", getVideogamesHandler);
videogamesRoutes.get("/:idVideogame", getVideogameHandler);
videogamesRoutes.post("/", postVideogameHandler);
module.exports = videogamesRoutes;
