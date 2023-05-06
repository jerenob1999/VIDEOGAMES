const { Router } = require("express");
const genresRoutes = Router();
const getGenresHandler = require("../handlers/genresHandler");

genresRoutes.get("/", getGenresHandler);

module.exports = genresRoutes;
