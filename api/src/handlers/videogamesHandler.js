const {
  createNewVideogame,
  getVideogameById,
  getAllVideogames,
} = require("../controllers/videogamesController");
const { SOURCE } = require("../utils/variables");
const { Genre } = require("../db")


const getVideogameHandler = async (req, res) => {
  try {
    const { idVideogame } = req.params;
    const source = isNaN(idVideogame) ? SOURCE.BDD : SOURCE.API;
    const videogame = await getVideogameById(idVideogame, source);
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const videogames = await getAllVideogames(name);
    if (!videogames.length) return {}
    res.status(200).json(videogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postVideogameHandler = async (req, res) => {
  try {
    const { name, description, platforms, image, releaseDate, rating, genre } =
      req.body;
    const newVideogame = await createNewVideogame(
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating
    );
    await newVideogame.addGenre(genre)
    res.status(200).json(newVideogame);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postVideogameHandler,
  getVideogameHandler,
  getVideogamesHandler,
};
