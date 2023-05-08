const { apiUrl } = require("../utils/variables");
const axios = require("axios");
const { API_KEY } = process.env;
const { genresFilter } = require("../utils/filters");
const { Genre } = require("../db");

const addGenres = async (filteredGenres) => {
  const genrePromises = filteredGenres.map((genre) => {
    return Genre.create({ name: genre.name, id: genre.id });
  });
  return Promise.all(genrePromises);
};

const getGenres = async () => {
  const genres = (
    await axios.get(
      `https://api.rawg.io/api/genres?key=e75ddc248c6c4dd59f9b985b644520f8`
    )
  ).data.results;
  const generos = await genresFilter(genres);
  return addGenres(generos);
};

module.exports = { getGenres };
