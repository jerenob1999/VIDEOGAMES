const {Videogame} = require("../db");
const apiUrl = require("../utils/variables");
const axios = require("axios")
const { API_KEY } = process.env;


const createNewVideogame = async(name,description,platforms,image,releaseDate,rating) => {
    const newVideogame = await Videogame.create({name,description,platforms,image,releaseDate,rating})
    return newVideogame
};

const getVideogameById = async (id) => {
    const videogame = (await axios.get(`${apiUrl.apiGames}${id}?key=${API_KEY}`)).data
    console.log(apiUrl.apiGames,id,API_KEY)
    return videogame
}

module.exports = {createNewVideogame, getVideogameById}