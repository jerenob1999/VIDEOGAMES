const {getGenres} = require("../controllers/genresController")


const getGenresHandler = async (req, res) => {
  const genres = await getGenres()
  try {
    res.status(200).json(genres)
  } catch (error) {
    
  }
};

module.exports = getGenresHandler;
