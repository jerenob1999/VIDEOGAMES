const { getGenres } = require("../controllers/genresController");
const { Genre } = require("../db");

const getGenresHandler = async (req, res) => {
  const genresCheck = await Genre.findAll()

  
  const genres = genresCheck.length ? genresCheck
                                    : await getGenres()
  try {
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenresHandler;
