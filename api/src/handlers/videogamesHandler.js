const {
  createNewVideogame,
  getVideogameById,
  getAllVideogames,
} = require("../controllers/videogamesController");
const { SOURCE } = require("../utils/variables");


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
  console.log(name);
  try {
    const videogames = await getAllVideogames(name);
    res.status(200).json(videogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postVideogameHandler = async (req, res) => {
  try {
    const { name, description, platforms, image, releaseDate, rating } =
      req.body;
    const newVideogame = await createNewVideogame(
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating
    );
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
