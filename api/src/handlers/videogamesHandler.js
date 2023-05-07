const { createNewVideogame, getVideogameById } = require("../controllers/videogamesController");
const { SOURCE } = require("../utils/variables");

const getVideogameHandler = async (req, res) => {
  const {idVideogame} = req.params;
  const source = isNaN(idVideogame) ? SOURCE.BDD : SOURCE.API
  const videogame = await getVideogameById(idVideogame,source)
  res.status(200).json(videogame);
};

const getVideogamesHandler = (req, res) => {
  res.status(200).json("estoy en la ruta videogames");
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
