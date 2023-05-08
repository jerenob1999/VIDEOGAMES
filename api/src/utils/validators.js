const { ERROR } = require("../utils/variables");

const createVideogameValidator = (req, res, next) => {
  const { name, description, platforms } = req.body;
  if (!name || !description || !platforms)
    return res.status(422).json(ERROR.POST);
  next();
};

const getIdValidator = (req, res, next) => {
  const { idVideogame } = req.params;
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89aAbB][0-9a-f]{3}-[0-9a-f]{12}$/;
  if (isNaN(idVideogame) || !uuidRegex.test(idVideogame))
    return res.status(400).json(ERROR.GET_ID);
  next();
};

const queryValidator = (videogames) => {
  if (!videogames.length) return ERROR.QUERY;
  return videogames;
};
module.exports = { createVideogameValidator, getIdValidator, queryValidator };
