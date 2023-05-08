const { Videogame, Genre } = require("../db");
const { apiUrl, SOURCE } = require("../utils/variables");
const axios = require("axios");
const { API_KEY } = process.env;
const { videogamesFilter } = require("../utils/filters");
const { queryValidator } = require("../utils/validators");

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
      : await Videogame.findByPk(id, {
          include: Genre,
        });

  return videogamesFilter(videogame);
};

const getAllVideogames = async (query) => {
  const videogamesBDD = !query
    ? await Videogame.findAll({ include: Genre })
    : await Videogame.findAll({ where: { name: query } }, { include: Genre });

  const videogames = !query
    ? (await axios.get(`${apiUrl.apiGames}?key=${API_KEY}`)).data
    : (await axios.get(`${apiUrl.apiGames}?search=${query}&key=${API_KEY}`))
        .data;
  const filteredVideogames = videogamesFilter(videogames.results).concat(
    videogamesBDD
  );
  return queryValidator(filteredVideogames);
};

module.exports = { createNewVideogame, getVideogameById, getAllVideogames };
