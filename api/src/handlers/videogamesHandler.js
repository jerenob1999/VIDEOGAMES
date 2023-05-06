const getVideogameHandler = (req, res) => {
  res.status(200).json("estoy en la ruta ID VIDEOGAMES");
};

const getVideogamesHandler = (req, res) => {
  res.status(200).json("estoy en la ruta videogames");
};

const postVideogameHandler = (req, res) => {
  res.status(200).json("estoy en la ruta POST");
};

module.exports = {
  postVideogameHandler,
  getVideogameHandler,
  getVideogamesHandler,
};
