const { Videogame } = require("../db");
const { apiUrl, SOURCE } = require("../utils/variables");
const axios = require("axios");
const { API_KEY } = process.env;
const {videogamesFilter} = require("../utils/filters")

const createNewVideogame = async (
  name,
  description,
  platforms,
  image,
  releaseDate,
  rating
) => {
  const newVideogame = await Videogame.create({
    name,
    description,
    platforms,
    image,
    releaseDate,
    rating,
  });
  return newVideogame;
};

const getVideogameById = async (id, source) => {
  const videogame =
    source === SOURCE.API
      ? (await axios.get(`${apiUrl.apiGames}/${id}?key=${API_KEY}`)).data
      : await Videogame.findByPk(id);

  return videogamesFilter(videogame);
};

const getAllVideogames = async (query) => {
    const videogames = !query ? (await axios.get(`${apiUrl.apiGames}?key=${API_KEY}`)).data
                              : (await axios.get(`${apiUrl.apiGames}?search=${query}&key=${API_KEY}`)).data
    return videogamesFilter(videogames.results)  
}

module.exports = { createNewVideogame, getVideogameById, getAllVideogames };
