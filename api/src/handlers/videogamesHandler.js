const { createNewVideogame } = require("../controllers/videogamesController");

const getVideogameHandler = (req, res) => {
  res.status(200).json("estoy en la ruta ID VIDEOGAMES");
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
